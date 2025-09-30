// app/menu/page.jsx
"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

const menuCategories = [
    {
        id: "pizzas",
        name: "Pizzas",
        description: "Hand-tossed dough, homemade sauce, and fresh ingredients",
        icon: "🍕",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0153_Gourmet%20Pizza%20Creations_simple_compose_01k4pqbxb1ez09xebfcvb25pwf.png"
    },
    {
        id: "specialty-pizzas",
        name: "Specialty Pizzas",
        description: "Our signature creations for the ultimate pizza experience",
        icon: "🌟",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0153_Gourmet%20Pizza%20Creations_simple_compose_01k4pqbxb1ez09xebfcvb25pwf.png"
    },
    {
        id: "appetizers",
        name: "Appetizers",
        description: "Start your meal with these delicious beginnings",
        icon: "🍤",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0200_Delicious%20Appetizers_simple_compose_01k4pqs18jftw99s01zyd7xwzg.png"
    },
    {
        id: "salads",
        name: "Salads",
        description: "Fresh greens with your favorite dressings",
        icon: "🥗",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0202_Fresh%20Green%20Salad_simple_compose_01k4pqx25rf01rcjd3h4h76g97.png"
    },
    {
        id: "wings",
        name: "Wings",
        description: "Crispy wings with your choice of sauce",
        icon: "🍗",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0204_Saucy%20Crispy%20Wings_simple_compose_01k4pr1bsff5at16d3qfe6ev4x.png"
    },
    {
        id: "calzones-strombolis",
        name: "Calzones & Strombolis",
        description: "Baked, folded dough stuffed with delicious fillings",
        icon: "🥟",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0211_Calzones%20and%20Strombolis_simple_compose_01k4preat7ey5sahs43w09wrqx.png"
    },
    {
        id: "sandwiches-subs",
        name: "Sandwiches & Subs",
        description: "Freshly made sandwiches on brioche rolls",
        icon: "🥪",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0214_Delicious%20Sandwiches%20Display_simple_compose_01k4prm9g2e89avxy55atgdw4v.png"
    },
    {
        id: "pasta-dinners",
        name: "Pasta Dinners",
        description: "Classic Italian pasta dishes served with salad and bread",
        icon: "🍝",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1231_Italian%20Pasta%20Feast_simple_compose_01k4qvwt5vee0vv7hc35vs6bf4.png"
    },
    {
        id: "dinners",
        name: "Dinners",
        description: "Complete meals including baked and specialty dinners",
        icon: "🍽️",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1245_Delicious%20Dinner%20Spread_simple_compose_01k4qwpp4af93t2djk9604p1zs.png"
    },
    {
        id: "desserts",
        name: "Desserts",
        description: "Sweet endings to your Italian feast",
        icon: "🍰",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1248_Italian%20Dessert%20Delights_simple_compose_01k4qwv9cferza17bx3mmrp04c.png"
    },
    {
        id: "beverages",
        name: "Beverages",
        description: "Refreshments to complement your meal",
        icon: "🥤",
        image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/beverages.jpg"
    }
];

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-ivory">
            {/* Hero Section */}
            <div className="relative h-80 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/jakub-kapusnak-tEVisOXz26Y-unsplash.jpg')",
                        backgroundPosition: "center 30%"
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        className="text-5xl md:text-6xl font-serif font-normal text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Menu
                    </motion.h1>
                    <motion.div
                        className="h-px w-16 bg-terracotta mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    ></motion.div>
                    <motion.p
                        className="text-xl text-white/90 font-light max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Explore our authentic Italian cuisine by category
                    </motion.p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-serif text-charcoal mb-4">Menu Categories</h2>
                    <div className="h-px w-16 bg-terracotta mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Link href={`/menu/${category.id}`}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-charcoal/10 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                                            style={{ backgroundImage: `url(${category.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute top-4 right-4 bg-terracotta text-ivory rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                                            {category.icon}
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-serif text-charcoal mb-3">
                                            {category.name}
                                        </h3>
                                        <p className="text-charcoal/80 font-light mb-4 flex-1">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-terracotta font-light">View Items</span>
                                            <span className="text-charcoal/60">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20 p-8 bg-charcoal/5 rounded-lg border border-charcoal/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h3 className="text-2xl font-serif text-charcoal mb-4">Ready to Order?</h3>
                    <p className="text-charcoal/80 font-light mb-6 max-w-2xl mx-auto">
                        Call us at <a href="tel:7176246280" className="text-terracotta hover:underline">(717) 624-6280</a> for delivery or carryout.
                    </p>
                    <a
                        href="tel:7176246280"
                        className="inline-block px-6 py-3 bg-terracotta text-ivory font-light hover:bg-terracotta/90 transition-colors duration-300"
                    >
                        Call to Order
                    </a>
                </motion.div>
            </div>
        </div>
    );
}