import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function GeneralLayout({children}) {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="dark:bg-gray-900">
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout
