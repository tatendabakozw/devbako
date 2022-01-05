import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Facebook, Twitter, GitHub } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import real_estate from '../images/real-estate2.png'
import eccomerce from '../images/ecommerce.png'
import social_media from '../images/socail_media.png'
import ProjectComponent from '../components/project_compoenent/ProjectComponent';

function Home() {
    return (
        <div>
            <Navbar />
            <div className="dark:bg-gray-900 div flex flex-col max-w-7-xl min-h-screen">
                <div className="home md:h-screen h-auto flex flex-col">
                    <div className="bg-blue-50 lg:px-32 md:px-16 px-4 dark:bg-blue-900 w-11/12 h-5/6 bg-opacity-100 rounded-br-full flex-col flex">
                        <div className=" w-full md:pb-8 pb-40 md:px-12 px-4 md:pt-48 pt-36">
                            <p className="md:text-6xl md:w-3/2 w-full text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-8">
                                Tatenda Bako.</p>
                            <p className="mb-4 text-gray-600 dark:text-gray-300 md:w-1/2 w-3/4">Challenge me. Let's create awesome builds together. I am a fullstack software developer, creating both mobile and web applications </p>
                            <div className="flex">
                                <Link to='/contact' className="z-40 flex flex-row bg-blue-500 text-white p-2 rounded-md items-center">
                                    <p className="font-semibold text-sm mr-4 cursor-pointer">Hire Me</p>
                                    <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex lg:px-32 md:px-16 px-4 absolute bottom-2 left-3 text-gray-600 dark:text-gray-200 flex-row items-center p-2 md:my-0 my-4">
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
                <div className="absolute z-0 opacity-25 self-start bg-indigo-600 md:h-60 h-28 md:w-60 w-28 rounded-bl-full md:-bottom-60 -bottom-28 right-0"></div>

            </div>
            <div className="relative min-h-screen lg:px-32 md:px-16 px-4 z-30 pb-16">
                <p className="md:text-3xl text-xl text-gray-700 font-bold text-center my-16">Projects </p>
                <div className="grid md:grid-cols-2 col-span-1 gap-6">
                    <ProjectComponent
                        image={real_estate}
                        title={'Real Estate Platform'}
                    />
                    <ProjectComponent
                        image={social_media}
                        title={'social media platform'}
                    />
                    <ProjectComponent
                        title={'ecommerce platform'}
                        image={eccomerce} />
                    <ProjectComponent image={real_estate} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
