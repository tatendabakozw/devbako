import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import {ArrowLeftIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function About() {
    return (
        <GeneralLayout>
            <div className="flex flex-col items-center min-h-screen">
               <div className="flex my-auto flex-col items-center">
                   <p className="font-serif mb-5 md:text-7xl text-4xl font-semibold text-gray-800 dark:text-gray-400">About Me</p>
                   <Link to='/' className="flex flex-row items-center">
                       <ArrowLeftIcon width={24} height={15} className="text-gray-800 dark:text-gray-400" />
                       <p className="text-xl font-serif dark:text-gray-400">Back to home</p>
                   </Link>
               </div>
           </div>
        </GeneralLayout>
    )
}

export default About
