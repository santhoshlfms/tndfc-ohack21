import type { NextPage } from 'next'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'

const Dashboard: NextPage = () => {

    return (
        <div>
            <Head />
            <div className="wrapper">
            <Navbar />
            <div className="container mt-2">
               <Widget />
            </div>
            </div>
        </div>
    )
}

export default Dashboard
