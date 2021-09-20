import React from 'react'
import GeneralLayout from '../layouts/GeneralLayout'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Facebook, Twitter, GitHub } from '@material-ui/icons'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <GeneralLayout>
            <div className="dark:bg-gray-900 div flex flex-col">
                <div className="home md:h-screen h-auto flex flex-col">
                    <div className="bg-blue-50 dark:bg-blue-900 w-11/12 h-5/6 bg-opacity-100 rounded-br-full flex-col flex">
                        <div className=" w-full md:pb-8 pb-40 md:px-16 px-8 md:pt-48 pt-36">
                            <p className="md:text-6xl md:w-1/2 w-full text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-8">
                                Challenge me. Let's create awesome builds together.</p>
                            <p className="mb-4 text-gray-600 dark:text-gray-300 md:w-1/2 w-3/4">Hi, iam Tatenda Bako. I am a fullstack software developer, creating both mobile and web applications </p>
                            <div className="flex">
                                <Link to='/contact' className="z-40 flex flex-row bg-blue-500 text-white p-2 rounded-md items-center">
                                    <p className="font-semibold text-sm mr-4 cursor-pointer">Hire Me</p>
                                    <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex absolute bottom-2 left-3 text-gray-600 dark:text-gray-200 flex-row items-center p-2 md:my-0 my-4">
                        <a href='https://github.com/tatendabakozw' rel="noopener noreferrer" target="_blank" to='/' className="md:mr-8 mr-6">
                            <GitHub />
                        </a>
                        <a href='https://twitter.com/bako_tatenda' rel="noopener noreferrer" target="_blank" className="md:mr-8 mr-6">
                            <Twitter />
                        </a>
                        <a href='https://www.facebook.com/tatenda.bakoh/' target="_blank" rel="noopener noreferrer" className="md:mr-8 mr-6">
                            <Facebook />
                        </a>
                        <div className="md:flex hidden border-b lg:w-1/2 md:1/4 border-gray-300"></div>
                    </div>
                </div>
                <div className="absolute z-0 opacity-25 bg-indigo-600 md:h-60 h-28 md:w-60 w-28 rounded-tl-full bottom-0 right-0"></div>
                <div className="absolute z-0 opacity-25 self-end bg-indigo-600 md:h-60 h-28 md:w-60 w-28 rounded-bl-full md:-bottom-60 -bottom-28 right-0"></div>
                <div className="h-screen"></div>
            </div>
        </GeneralLayout>
    )
}

export default Home
