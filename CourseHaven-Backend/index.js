const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PROT || 5000;


const options = {
    origin: ['http://localhost:5173']
}

app.use(cors())


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
                console.log(req.query)
                
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
                }).toArray();

                res.send(result)

            } catch (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
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