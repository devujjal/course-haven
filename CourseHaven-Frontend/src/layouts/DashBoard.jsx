import AsideBar from '../components/Dashboard/AsideBar/AsideBar';
import DashboardProfile from '../components/Dashboard/DashboardProfile/DashboardProfile';
import './DashBoard.css'

const Layout = () => {
    return (
        <main>
            <DashboardProfile />

            <section className='py-14'>
                <div className='container mx-auto px-3 lg:px-14'>
                    <div className="flex justify-center">

                        <AsideBar />

                        <div className="flex-1 p-6">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-white p-4 rounded shadow">
                                    <div className="text-orange-500 text-3xl text-center"><i className="fas fa-book"></i></div>
                                    <div className="text-center">9 Total Courses</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <div className="text-purple-500 text-3xl text-center"><i className="fas fa-check-double"></i></div>
                                    <div className="text-center">52 Complete lessons</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <div className="text-green-500 text-3xl text-center"><i className="fas fa-certificate"></i></div>
                                    <div className="text-center">8 Achieved Certificates</div>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold mb-4">My Courses List</h1>

                            <div className="bg-white rounded shadow p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <input type="text" placeholder="Search" className="border rounded px-3 py-2 w-1/2" />
                                    <select className="border rounded px-3 py-2">
                                        <option>Sort by</option>
                                    </select>
                                </div>
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="py-2">Course Title</th>
                                            <th className="py-2">Total Lectures</th>
                                            <th className="py-2">Completed Lecture</th>
                                            <th className="py-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="py-2 flex items-center">
                                                <img src="https://via.placeholder.com/40" alt="Course Icon" className="mr-2" />
                                                Building Scalable APIs with GraphQL
                                            </td>
                                            <td className="py-2">56</td>
                                            <td className="py-2">40</td>
                                            <td className="py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Continue</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Layout;
