import React from 'react'
import { Facebook, Twitter, GitHub, Instagram } from '@material-ui/icons'

const navigation = {
    main: [
        { name: 'About', href: '/about' },
        { name: 'Articles', href: '/articles' },
        { name: 'Contact', href: '/contact' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/tatenda.bakoh/',
            icon: (props) => (
                <Facebook height={16} width={16} />
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/oneroofmarket/',
            icon: (props) => (
                <Instagram height={16} width={16} />
            ),
        },
        {
            name: 'Github',
            href: 'https://github.com/tatendabakozw',
            icon: (props) => (
                <GitHub height={16} width={16} />
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/bako_tatenda',
            icon: (props) => (
                <Twitter height={16} width={16} />
            ),
        }
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 DevBako, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
