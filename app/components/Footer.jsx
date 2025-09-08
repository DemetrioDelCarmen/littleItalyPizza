'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const hours = [
        { day: 'Monday', hours: 'CLOSED' },
        { day: 'Tuesday', hours: '11:00 a.m. – 9:00 p.m.' },
        { day: 'Wednesday', hours: '11:00 a.m. – 9:00 p.m.' },
        { day: 'Thursday', hours: '11:00 a.m. – 9:00 p.m.' },
        { day: 'Friday', hours: '11:00 a.m. – 9:00 p.m.' },
        { day: 'Saturday', hours: '11:00 a.m. – 9:00 p.m.' },
        { day: 'Sunday', hours: '12:00 p.m. – 9:00 p.m.' }
    ];

    const quickLinks = [
        { name: 'Menu', href: '/menu' },
        { name: 'About Us', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
        { name: 'Reservations', href: '/reservations' }
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: 'facebook' },
        { name: 'Instagram', href: '#', icon: 'instagram' },
        { name: 'Twitter', href: '#', icon: 'twitter' }
    ];

    return (
        <footer className="bg-charcoal text-ivory pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand Column */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-terracotta/30">
                                <Image
                                    src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/logo-italy-pizza.jpg"
                                    alt="Little Italy Pizza Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <h3 className="text-2xl font-serif mb-4">Little Italy IV</h3>
                        <p className="text-ivory/80 font-light mb-6 leading-relaxed">
                            Authentic Italian pizza made with tradition and passion since 1985.
                            Experience the taste of Italy in every bite.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-ivory/30 flex items-center justify-center text-ivory hover:bg-terracotta hover:border-terracotta transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Icon would be implemented here - using text as placeholder */}
                                    {social.icon === 'facebook' && 'f'}
                                    {social.icon === 'instagram' && 'i'}
                                    {social.icon === 'twitter' && 't'}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hours Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-terracotta">
                            Hours
                        </h4>
                        <ul className="space-y-3">
                            {hours.map((day) => (
                                <li key={day.day} className="flex justify-between text-ivory/80 font-light">
                                    <span className={day.hours === 'CLOSED' ? 'text-ivory/50' : ''}>
                                        {day.day}
                                    </span>
                                    <span className={day.hours === 'CLOSED' ? 'text-ivory/50' : 'text-ivory'}>
                                        {day.hours}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-terracotta">
                            Contact
                        </h4>
                        <address className="not-italic text-ivory/80 font-light">
                            <p className="mb-4">27 Stoney Point Rd</p>
                            <p className="mb-4">New Oxford, PA 17350</p>
                            <p className="mb-4">
                                <a
                                    href="tel:7176246280"
                                    className="hover:text-terracotta transition-colors duration-300"
                                >
                                    (717) 624-6280
                                </a>
                            </p>
                            <p className="mb-2 text-ivory">
                                Dine-in or carryout
                            </p>
                        </address>
                    </motion.div>

                    {/* Quick Links Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-terracotta">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-ivory/80 font-light hover:text-terracotta transition-colors duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-6"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter Subscription */}
                <motion.div
                    className="border-t border-ivory/20 pt-10 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="text-lg font-medium mb-4">Stay Updated</h4>
                        <p className="text-ivory/80 font-light mb-6">
                            Subscribe to our newsletter for special offers and updates
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 bg-ivory/10 border border-ivory/30 text-ivory placeholder-ivory/50 focus:outline-none focus:border-terracotta transition-colors duration-300"
                                required
                            />
                            <motion.button
                                type="submit"
                                className="px-6 py-3 bg-terracotta text-ivory font-light hover:bg-terracotta/90 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div
                    className="border-t border-ivory/20 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-ivory/60 text-sm">
                        © {currentYear} Little Italy Pizza. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;