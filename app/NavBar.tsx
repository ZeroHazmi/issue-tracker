'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react'
import { FaBug } from "react-icons/fa";
import classnames from 'classnames';

const NavBar = () => {

    const currentPath = usePathname()
    console.log('Current Path: ' + currentPath)

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}
                            className={classnames({
                                'text-zinc-900': link.href === currentPath,
                                'text-gray-500': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
