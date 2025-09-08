'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Reemplaza estas URLs con tus propias imágenes
    const galleryImages = [
        {
            id: 1,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/jordi-pujadas-_uUcx36lwVo-unsplash.jpg",
            title: "Pizza Margherita",
            description: "Classic tomato, mozzarella, and basil"
        },
        {
            id: 2,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/jochen-van-wylick-uqTyxObHAQo-unsplash.jpg",
            title: "Pepperoni Pizza",
            description: "Spicy pepperoni with our signature sauce"
        },
        {
            id: 3,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/gabriele-proietti-mattia-uldLsaHEUQE-unsplash.jpg",
            title: "Restaurant Interior",
            description: "Our cozy dining space"
        },
        {
            id: 4,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/emanuel-ekstrom-_CO7YZ501g4-unsplash.jpg",
            title: "Homemade Pasta",
            description: "Fresh pasta with seasonal ingredients"
        },
        {
            id: 5,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/2077.jpg",
            title: "Wood-Fired Oven",
            description: "Our traditional cooking method"
        },
        {
            id: 6,
            url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/chad-montano-MqT0asuoIcU-unsplash.jpg",
            title: "Fresh Ingredients",
            description: "Locally sourced produce"
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.03, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen bg-ivory pt-24 pb-16">
            {/* Header Section */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-16">
                <motion.h1
                    className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Gallery
                </motion.h1>
                <motion.div
                    className="h-px w-16 bg-terracotta mx-auto mb-8"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
                <motion.p
                    className="text-lg text-charcoal/80 font-light max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    A visual journey through our authentic Italian cuisine, cozy atmosphere, and the passion we put into every dish.
                </motion.p>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-sm bg-gray-100"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                            whileHover="hover"
                            onClick={() => openModal(image)}
                        >
                            <Image
                                src={image.url}
                                alt={image.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="font-serif text-lg">{image.title}</h3>
                                    <p className="text-sm font-light">{image.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full max-h-full bg-ivory rounded-sm overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 text-charcoal hover:text-terracotta bg-ivory/80 rounded-full p-2"
                                onClick={closeModal}
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative h-96 md:h-[500px]">
                                <Image
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-charcoal mb-2">{selectedImage.title}</h3>
                                <p className="text-charcoal/80 font-light">{selectedImage.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Call to Action */}
            <section className="max-w-4xl mx-auto px-4 md:px-8 text-center mt-20">
                <motion.h2
                    className="text-3xl font-serif text-charcoal mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Experience Our Atmosphere
                </motion.h2>
                <motion.p
                    className="text-lg text-charcoal/80 font-light mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    These photos capture just a glimpse of what awaits you at Little Italy. Come see—and taste—the difference for yourself.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="/reservations"
                        className="inline-block px-8 py-3 bg-charcoal text-ivory font-light hover:bg-terracotta transition-colors duration-300"
                    >
                        Make a Reservation
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

// Necesitarás importar AnimatePresence desde framer-motion
import { AnimatePresence } from 'framer-motion';

export default GalleryPage;