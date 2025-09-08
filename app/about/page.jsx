'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-ivory text-charcoal">
            {/* Hero Section with Subtle Italian Flag Inspiration */}
            <motion.section
                className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[url(https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/rebe-adelaida-zunQwMy5B6M-unsplash.jpg)] bg-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10 p-4 max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white font-serif mb-6 tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Our Story
                    </motion.h1>
                    <motion.div
                        className="h-1 w-24 bg-white mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 1, duration: 1 }}
                    ></motion.div>
                    <motion.p
                        className="text-xl md:text-2xl text-white font-light italic max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Tradition, passion, and the authentic taste of Italy in every dish.
                    </motion.p>
                </div>
            </motion.section>

            {/* Section 1: Our Legacy */}
            <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative h-[400px] md:h-[500px]"
                >
                    <Image
                        src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/sarda-bamberg-7xFTUwUbcZ4-unsplash.jpg"
                        alt="The Bianchi family"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-sm shadow-lg"
                    />
                    <div className="absolute -inset-4 border border-terracotta/30 pointer-events-none"></div>
                </motion.div>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="mb-2 text-terracotta font-medium tracking-wider">SINCE 1999</div>
                    <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal mb-6 leading-tight">
                        A Legacy of Authentic Italian Flavor
                    </h2>
                    <div className="h-px w-16 bg-terracotta mb-8"></div>
                    <p className="text-lg leading-relaxed mb-6 font-light">
                        At Little Italy, our story begins with a dream: to bring authentic Italian cuisine to your table. Founded by the Bianchi family in 1999, we have preserved our Nonna's recipes, passing down our passion for exceptional food from generation to generation.
                    </p>
                    <p className="text-lg leading-relaxed font-light">
                        Every ingredient is carefully selected, every dish prepared with love. We believe food is more than sustenance; it's celebration, family, and tradition.
                    </p>


                    <p className="text-lg leading-relaxed font-light">
                        Since 1999, Little Italy IV has been serving the Hampton area the best Traditional New York Style Pizza around.

                        In addition to our famous pizza, our menu offers a large variety of subs, boli’s , salads, wings, baked dinners, and platters that our customers love.

                    </p>

                </motion.div>
            </section>

            {/* Full-width statement section */}
            <section className="py-20 bg-charcoal text-ivory">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.blockquote
                        className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        "In Italy, we don't eat to live. We live to eat. This philosophy is at the heart of everything we do at Little Italy."
                    </motion.blockquote>
                    <motion.div
                        className="mt-8 text-terracotta font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        — BY ADRIAN CORDOVA, FOUNDER
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Our Philosophy */}
            <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
                    <motion.div
                        className="md:col-span-3"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal mb-6 leading-tight">
                            The Essence of Our Kitchen
                        </h2>
                        <div className="h-px w-16 bg-terracotta mb-8"></div>
                        <p className="text-lg leading-relaxed mb-6 font-light">
                            Our philosophy is simple: <span className="italic">respect for ingredients, fidelity to tradition, and a touch of innovation.</span> We work with local producers whenever possible, ensuring freshness and quality in every bite.
                        </p>
                        <p className="text-lg leading-relaxed mb-8 font-light">
                            From our hand-stretched pizza dough to our slow-simmered sauces, every detail matters. It's this unwavering commitment to excellence that sets us apart.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="mt-1 mr-4 text-terracotta">■</div>
                                <span className="font-light">72-hour fermented dough for perfect texture</span>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 mr-4 text-terracotta">■</div>
                                <span className="font-light">San Marzano tomatoes imported from Italy</span>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 mr-4 text-terracotta">■</div>
                                <span className="font-light">Fresh mozzarella made daily in-house</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="md:col-span-2 relative h-[400px]"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image
                            src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/anna-church-57au006DTws-unsplash.jpg"
                            alt="Fresh ingredients"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-sm"
                        />
                        <div className="absolute -inset-4 border border-terracotta/30 pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>

            {/* Architectural Element */}
            <div className="py-16 bg-ivory overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-3 gap-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="h-1 bg-terracotta/40"></div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Final CTA Section */}
            <section className="py-24 px-4 md:px-8 text-center bg-ivory">
                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal mb-6">
                        Experience Little Italy
                    </h2>
                    <div className="h-px w-16 bg-terracotta mx-auto mb-8"></div>
                    <p className="text-xl leading-relaxed mb-10 font-light max-w-2xl mx-auto">
                        We invite you to become part of our story and enjoy a culinary experience that will delight your senses.
                    </p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="/menu"
                            className="px-8 py-4 border border-charcoal text-charcoal text-lg font-light hover:bg-charcoal hover:text-ivory transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Our Menu
                        </motion.a>
                        <motion.a
                            href="/reservations"
                            className="px-8 py-4 bg-charcoal text-ivory text-lg font-light hover:bg-terracotta transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Make a Reservation
                        </motion.a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUsPage;