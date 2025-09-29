// components/MenuSection.jsx
"use client";
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
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
                        </div>

                        {/* Renderizar precios de pizzas por tamaño */}
                        {item.sizes && (
                            <div className="mt-4 pt-4 border-t border-charcoal/5">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {item.sizes.map((size) => (
                                        <div key={size.name} className="flex flex-col items-start">
                                            <span className="text-sm font-serif text-terracotta/70">{size.name}</span>
                                            <span className="text-base font-bold text-terracotta">{size.price}</span>
                                            <span className="text-xs text-charcoal/50">{size.dimension}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* --- AQUI ESTA LA PARTE MEJORADA DE TOPPINGS --- */}
                                {item.toppings && (
                                    <div className="mt-6 text-sm">
                                        <h4 className="font-bold text-charcoal mb-2">Toppings Extras</h4>
                                        <p className="font-light text-charcoal/80 leading-relaxed mb-4">
                                            {item.toppings.list}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Extra Topping */}
                                            <div>
                                                <span className="font-semibold text-charcoal">Extra Topping:</span>
                                                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                                                    {Object.entries(item.toppings.extra).map(([size, price]) => (
                                                        <div key={size} className="flex gap-1 items-baseline">
                                                            <span className="capitalize text-xs text-charcoal/70">{size}:</span>
                                                            <span className="font-bold text-terracotta">{price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Half Topping */}
                                            <div>
                                                <span className="font-semibold text-charcoal">Half Topping:</span>
                                                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                                                    {Object.entries(item.toppings.half).map(([size, price]) => (
                                                        <div key={size} className="flex gap-1 items-baseline">
                                                            <span className="capitalize text-xs text-charcoal/70">{size}:</span>
                                                            <span className="font-bold text-terracotta">{price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Renderizar precios de SPECIALTY_PIZZAS (si no tiene 'sizes') */}
                        {!item.sizes && item.prices && Object.keys(item.prices).length > 0 && (
                            <div className="mt-4 pt-4 border-t border-charcoal/5">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {Object.entries(item.prices).map(([size, price]) => (
                                        <div key={size} className="flex flex-col items-start">
                                            <span className="text-sm font-serif text-terracotta/70">{size}</span>
                                            <span className="text-base font-bold text-terracotta">{price}</span>
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