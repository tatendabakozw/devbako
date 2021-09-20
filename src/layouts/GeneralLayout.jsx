import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function GeneralLayout({children}) {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen pt-20">
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout
