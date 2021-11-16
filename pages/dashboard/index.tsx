import type { NextPage } from 'next'
import Head from '../components/Head'
import Navbar from '../components/Navbar'

const Dashboard: NextPage = () => {

    return (
        <div>
            <Head />
            <div className="wrapper">
            <Navbar />
            </div>
        </div>
    )
}

export default Dashboard
