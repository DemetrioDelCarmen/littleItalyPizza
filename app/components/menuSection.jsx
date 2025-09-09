// components/MenuSection.jsx
"use client"
import { motion } from "framer-motion";

const MenuSection = ({ title, items, description }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section>
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-charcoal mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-charcoal/70 font-light max-w-2xl mx-auto mb-4">
                        {description}
                    </p>
                )}
                <div className="h-px w-16 bg-terracotta mx-auto"></div>
            </motion.div>

            <div className="grid gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white rounded-lg border border-charcoal/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-serif text-charcoal mb-2">
                                    {item.name}
                                </h3>
                                {item.description && (
                                    <p className="text-charcoal/80 font-light mb-3">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            {item.price && (
                                <div className="text-right">
                                    <span className="text-xl font-serif text-terracotta">
                                        ${item.price}
                                    </span>
                                </div>
                            )}
                        </div>

                        {item.variations && (
                            <div className="mt-4 pt-4 border-t border-charcoal/5">
                                <div className="grid gap-3">
                                    {item.variations.map((variation, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <span className="text-charcoal/80 font-light">
                                                {variation.size}
                                            </span>
                                            <span className="text-charcoal font-medium">
                                                ${variation.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MenuSection;