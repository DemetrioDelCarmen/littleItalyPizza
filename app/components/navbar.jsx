"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const pathname = usePathname();

    // Cerrar el menú móvil al cambiar de página
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Menu',
            href: '/menu',
            submenu: [
                { name: 'Pizzas', href: '/menu/pizzas' },
                { name: 'Specialty Pizzas', href: '/menu/specialty-pizzas' },
                { name: 'Appetizers', href: '/menu/appetizers' },
                { name: 'Salads', href: '/menu/salads' },
                { name: 'Wings', href: '/menu/wings' },
                { name: 'Calzones & Strombolis', href: '/menu/calzones-strombolis' },
                { name: 'Sandwiches & Subs', href: '/menu/sandwiches-subs' },
                { name: 'Pasta Dinners', href: '/menu/pasta-dinners' },
                { name: 'Dinners', href: '/menu/dinners' },
                { name: 'Desserts', href: '/menu/desserts' },
                { name: 'Beverages', href: '/menu/beverages' }
            ]
        },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' }
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

    const submenuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const isActiveLink = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
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
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.submenu && setIsMenuHovered(true)}
                                onMouseLeave={() => link.submenu && setIsMenuHovered(false)}
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-light tracking-wider ${isActiveLink(link.href) ? 'text-terracotta' : 'text-charcoal/80 hover:text-terracotta'} transition-colors duration-300 flex items-center gap-1`}
                                    >
                                        {link.name}
                                        {link.submenu && (
                                            <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                        {isActiveLink(link.href) && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-full h-px bg-terracotta"
                                                layoutId="activeLink"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {!isActiveLink(link.href) && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-0 h-px bg-terracotta"
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>

                                {/* Submenu para categorías del menú */}
                                {link.submenu && (
                                    <AnimatePresence>
                                        {isMenuHovered && (
                                            <motion.div
                                                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-charcoal/10 py-2 z-50"
                                                variants={submenuVariants}
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                            >
                                                <div className="grid gap-1">
                                                    {link.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="px-4 py-3 text-sm text-charcoal/80 hover:text-terracotta hover:bg-charcoal/5 transition-colors duration-200 font-light"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Phone Number & CTA */}
                    <div className="hidden md:flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="tel:7176246280"
                                className="px-5 py-2.5 text-sm bg-terracotta text-ivory font-light tracking-wider hover:bg-terracotta/90 transition-colors duration-300 rounded-full"
                            >
                                Order Now
                            </a>
                        </motion.div>
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
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    variants={itemVariants}
                                >
                                    {link.submenu ? (
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between px-3 py-3 rounded-md text-base font-light text-charcoal/80 border-l-2 border-transparent">
                                                <span>{link.name}</span>
                                                <button
                                                    onClick={() => setIsMenuHovered(!isMenuHovered)}
                                                    className="p-1"
                                                >
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-200 ${isMenuHovered ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <AnimatePresence>
                                                {isMenuHovered && (
                                                    <motion.div
                                                        className="ml-4 space-y-2 border-l border-charcoal/10 pl-2"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                    >
                                                        {link.submenu.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block px-3 py-2 rounded-md text-sm font-light text-charcoal/60 hover:text-terracotta transition-colors duration-200"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-3 py-3 rounded-md text-base font-light ${isActiveLink(link.href) ? 'text-terracotta bg-terracotta/5' : 'text-charcoal/80'} hover:text-terracotta transition-colors duration-200 border-l-2 ${isActiveLink(link.href) ? 'border-terracotta' : 'border-transparent'} hover:border-terracotta/30`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-4 border-t border-charcoal/10 mt-4"
                            >
                                <a
                                    href="tel:7176246280"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 bg-terracotta text-ivory font-light rounded-md hover:bg-terracotta/90 transition-colors duration-300"
                                >
                                    Call to Order: (717) 624-6280
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;