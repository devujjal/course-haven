const express = require('express');
const app = express();
const cors = require('cors');
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PROT || 5000;


const options = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionalSuccessStatus: 200
}

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());


//verify token
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized Access' })
    };

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: 'Unauthorized Access' })
        };

        req.user = decoded;
        next();


    })

}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('courseHaven');
        const courses = database.collection('courses');
        const users = database.collection('users');
        const carts = database.collection('carts');
        const paymentHistories = database.collection('paymentHistories');



        //token generate
        app.post('/jwt', async (req, res) => {
            const email = req.body;
            const token = jwt.sign(email, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 3600 * 1000 // 1 hour in milliseconds
            })
            res.send({ message: true })
        })

        //token remove while the user Logged Out;
        app.post('/api/logout', async (req, res) => {
            res.clearCookie('token', {
                httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
                secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent over HTTPS only in production
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // Cross-site requests for production, strict for development
                path: '/', // Ensure the cookie is cleared for the correct path
                maxAge: 0 // Immediately expires the cookie
            });

            res.send({ success: true });

        })


        //Saved user in DB
        app.post('/user', async (req, res) => {
            try {
                const body = req.body;
                console.log(body)
                const query = { email: body?.email }
                const isExist = await users.findOne(query);
                if (isExist) {
                    return res.send({ message: 'user already exsit', insertedId: null })
                }

                const result = await users.insertOne(body);
                res.send(result);

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        // Get the user role
        app.get('/user/:email', async (req, res) => {
            try {
                const email = req.params?.email;
                const query = { email: email };
                const result = await users.findOne(query);
                res.send(result);

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //Popular Courses
        app.get('/courses/:category', async (req, res) => {
            try {
                const category = req.params.category;
                const query = { category: category };
                const result = await courses.find(
                    query, {
                    projection: {
                        "_id": 1,
                        'title': 1,
                        "image": 1,
                        "level": 1,
                        "courseDescription": 1,
                        "rating": 1,
                        "duration": 1,
                        "lectures": 1

                    }
                }).limit(8).toArray()

                res.send(result)
            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //Trending Courses
        app.get('/trending-courses', async (req, res) => {
            try {
                const result = await courses.aggregate([
                    {
                        $project: {
                            image: 1,
                            title: 1,
                            rating: 1,
                            totalReviewNumber: 1,
                            enrolled: 1,
                            level: 1,
                            price: 1,
                            category: 1,
                            lectures: 1,
                            duration: 1,
                            name: 1,
                            userImg: 1

                        }
                    },
                    {
                        $sort: { totalReviewNumber: -1 }
                    }
                ]).limit(3).toArray();

                res.send(result)

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //All Courses
        app.get('/courses', async (req, res) => {
            try {
                const category = req.query?.category;
                const searchText = req.query?.search;
                const page = parseInt(req.query?.page) || 0;
                const size = parseInt(req.query?.size) || 10;
                // console.log(req.query)

                let query = {};
                if (category) {
                    query = { category: category }
                }

                if (searchText) query.title = { $regex: searchText, $options: 'i' };

                const result = await courses.find(query, {
                    projection: {
                        image: 1,
                        title: 1,
                        level: 1,
                        rating: 1,
                        duration: 1,
                        lectures: 1
                    }
                }).skip(page * size).limit(size).toArray();

                res.send(result)

            } catch (error) {
                console.log(error)
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //All Product length count
        app.get('/products-length', async (req, res) => {
            try {
                // console.log(req.query)
                const category = req.query?.category;
                const search = req.query?.search;

                let query = {}; // we can give the name like filter
                if (category) {
                    query = { category: category }
                }

                if (search) {
                    query.title = { $regex: search, $options: 'i' }
                }

                const result = await courses.countDocuments(query);
                res.send({ result })

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        /* Need Verify Token */
        //Individual Course
        app.get('/course/:id', verifyToken, async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await courses.findOne(query);
                res.send(result)

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //course save in DB as a cart item
        app.post('/cart', async (req, res) => {
            try {
                const course = req.body;

                /* Check is the item already isExist or not */
                const query = { itemId: course?.itemId };
                const isExist = await carts.findOne(query);
                if (isExist) {
                    return res.send({ message: 'Item already exsit', insertedId: null })
                }


                /* Saved the item */
                const result = await carts.insertOne(course);
                res.send(result);
            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //Get the individual items 
        app.get('/carts', async (req, res) => {
            try {
                const email = req.query?.email;

                const query = { email: email };
                const result = await carts.find(query).toArray();
                res.send(result);

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //get individual user carts items list
        app.get('/carts/:email', verifyToken, async (req, res) => {
            try {
                const verifyEmail = req.user?.email;
                const email = req.params?.email;
                if (verifyEmail !== email) {
                    return res.status(403).send({ message: 'Forbidden Access' })
                }

                const query = { email: email };
                const cursor = carts.find(query);
                const result = await cursor.toArray();
                res.send(result)

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })



        //delete a cart item
        app.delete('/cart/:id', async (req, res) => {
            try {
                const id = req.params?.id;
                const query = { _id: new ObjectId(id) };
                const result = await carts.deleteOne(query);
                res.send(result);

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })


        //Payment history
        app.post('/payment', verifyToken, async (req, res) => {
            try {
                const courseInfo = req.body

                if (courseInfo?.cartIds && Array.isArray(courseInfo.cartIds) && courseInfo.cartIds.length > 0) {
                    // Build the query only if cartIds are available
                    const query = {
                        _id: { $in: courseInfo.cartIds.map(cartId => new ObjectId(cartId)) }
                    };

                    // Delete the items in the cart based on the query
                    await carts.deleteMany(query);
                }


                const result = await paymentHistories.insertOne(courseInfo);
                res.send(result)

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        })




        // Create a PaymentIntent with the order amount and currency
        app.post("/create-payment-intent", verifyToken, async (req, res) => {
            const price = req.body.price;
            // console.log(req.body)
            const totalAmount = parseFloat(price) * 100;
            if (!totalAmount || totalAmount < 1) {
                return;
            }

            const paymentIntent = await stripe.paymentIntents.create({
                amount: totalAmount,
                currency: "usd",
                payment_method_types: ['card']
            })

            res.send({ clientSecret: paymentIntent.client_secret })
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', async (req, res) => {
    res.send('Course Haven is Running!😁')

})

app.listen(port, () => {
    console.log(`Server is Running port by ${port}`)
})