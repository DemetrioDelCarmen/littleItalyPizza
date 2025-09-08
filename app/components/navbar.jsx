"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
    ];

    const menuVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
    };

    return (
        <nav className="bg-ivory/95 backdrop-blur-sm border-b border-gray-200/30 sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-5 xl:px-0">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center group"
                            onClick={() => setActiveLink('')}
                        >
                            <motion.div
                                className="relative overflow-hidden rounded-full border border-terracotta/20"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Image
                                    src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/logo-italy-pizza.jpg"
                                    alt="Little Italy Pizza Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                            </motion.div>
                            <motion.span
                                className="ml-3 text-xl font-serif text-charcoal tracking-wide hidden sm:block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                Little Italy
                            </motion.span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-light tracking-wider ${activeLink === link.name ? 'text-terracotta' : 'text-charcoal/80 hover:text-terracotta'} transition-colors duration-300`}
                                    onClick={() => setActiveLink(link.name)}
                                >
                                    {link.name}
                                    {activeLink === link.name && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-px bg-terracotta"
                                            layoutId="activeLink"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {activeLink !== link.name && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-0 h-px bg-terracotta"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-terracotta focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <motion.div
                                variants={{
                                    closed: { rotate: 0 },
                                    open: { rotate: 90 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden bg-ivory border-t border-gray-200/30"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="px-5 pt-2 pb-5 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    variants={itemVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveLink(link.name);
                                        }}
                                        className={`block px-3 py-3 rounded-md text-base font-light ${activeLink === link.name ? 'text-terracotta bg-terracotta/5' : 'text-charcoal/80'} hover:text-terracotta transition-colors duration-200 border-l-2 ${activeLink === link.name ? 'border-terracotta' : 'border-transparent'} hover:border-terracotta/30`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;