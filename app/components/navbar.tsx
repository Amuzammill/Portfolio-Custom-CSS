"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MdFileDownload } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import '@/app/styles/navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <div className='logo'>Muzamil Ahmed</div>

                    {/* Desktop Links */}
                    <div className='navLinks'>
                        <Link href="/" className='link'>Home</Link>
                        <Link href="/about" className='link'>About</Link>
                        <Link href="/portfolio" className='link'>Portfolio</Link>
                        <Link href="/skills" className='link'>Skills</Link>
                        <Link href="/contact" className='link'>Contact</Link>
                        <Link href="#" className='downloadButton'>
                            Download CV
                            <MdFileDownload className='icon' />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <button className='menuButton' onClick={toggleMenu}>
                        {isMenuOpen ? <IoMdClose /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className='mobileLink' onClick={toggleMenu}>Home</Link>
                    <Link href="/about" className='mobileLink' onClick={toggleMenu}>About</Link>
                    <Link href="/portfolio" className='mobileLink' onClick={toggleMenu}>Portfolio</Link>
                    <Link href="/skills" className='mobileLink' onClick={toggleMenu}>Skills</Link>
                    <Link href="/contact" className='mobileLink' onClick={toggleMenu}>Contact</Link>
                    <Link href="#" className='mobileDownloadButton' onClick={toggleMenu}>
                        Download CV
                        <MdFileDownload className='icon' />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
