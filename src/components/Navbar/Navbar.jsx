import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import { LightBulbIcon, MoonIcon } from '@heroicons/react/solid'
import useDarkMode from "../../useDarkMode";

const nav_options = [
    // {
    //     name: 'Articles',
    //     location: "/articles"
    // },
    {
        name: 'About',
        location: '/about'
    },
    // {
    //     name: 'Projects',
    //     location: '/projects'
    // }
]

export default function Navbar(props) {
    const [colorTheme, setTheme] = useDarkMode();
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "absolute w-full top-0") +
                    " flex flex-wrap items-center justify-between md:px-8 px-0 navbar-expand-lg"
                }
            >
                <div className="container lg:px-32 md:px-16 px-4 py-2 mx-auto flex flex-wrap items-center">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/'
                            className={
                                (props.transparent ? "text-gray-900" : "text-gray-900 dark:text-gray-200") +
                                " text-xl font-bold flex flex-row leading-relaxed items-center mr-4 cursor-pointer py-2 whitespace-no-wrap"
                            }>
                            <img src={logo} className="md:w-12 w-8 mr-2" alt="logo" />
                            Devbako
                        </Link>
                        <div className="flex flex-row items-center">
                            <div
                                className={
                                    (props.transparent
                                        ? "lg:text-gray-900 lg:hover:text-gray-300 text-gray-800"
                                        : "text-gray-800 hover:text-gray-600") +
                                    " py-4 lg:py-2 flex md:hidden items-center text-xs uppercase font-bold"
                                }
                            >
                                <span onClick={() => setTheme(colorTheme)} style={{ transition: "all .15s ease" }}>
                                    {colorTheme === 'light' ? (
                                        <LightBulbIcon width={20} height={20} className="transition duration-150 ease-in-out hover:bg-gray-800 cursor-pointer text-gray-200 hover:text-gray-400 rounded" />
                                    ) : (
                                        <MoonIcon width={20} height={20} className="hover:bg-gray-200 cursor-pointer text-gray-500 rounded" />
                                    )}
                                </span>
                            </div>
                            <button
                                className="cursor-pointer text-xl leading-none pl-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}>
                                <span
                                    className={(props.transparent ? "text-white" : "text-gray-800 dark:text-gray-300")}
                                >
                                    <MenuIcon height={20} width={20} />
                                </span>
                            </button>
                        </div>

                    </div>
                    <div
                        className={"lg:flex md:flex-grow md:ml-1 ml-auto items-center bg-white lg:dark:bg-transparent dark:bg-gray-800 lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")} id="example-navbar-warning">

                        <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
                            {
                                nav_options.map((option, index) => (
                                    <li key={index} className="flex items-center">
                                        <Link to={option.location}
                                            className={
                                                (props.transparent
                                                    ? "lg:text-gray-900 lg:hover:text-gray-700 text-gray-800"
                                                    : "text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600") +
                                                " px-5 py-4 lg:py-2 flex w-full items-center text-xs uppercase font-bold"
                                            }>

                                            {option.name}
                                        </Link>
                                    </li>
                                ))
                            }




                            <li className="flex items-center">
                                <Link to='/contact'
                                    className={
                                        (props.transparent
                                            ? "bg-blue-700 text-white active:bg-gray-100"
                                            : "bg-blue-500 text-white active:bg-pink-600") +
                                        " text-xs font-bold px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                    }
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    <i className="fas fa-arrow-alt-circle-down"></i> Let's talk
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
