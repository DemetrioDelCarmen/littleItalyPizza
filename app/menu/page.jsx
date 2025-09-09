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
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pq3yhxe8w85yhnr9phsp44%2F1757404147_img_0.webp?st=2025-09-09T06%3A33%3A05Z&se=2025-09-15T07%3A33%3A05Z&sks=b&skt=2025-09-09T06%3A33%3A05Z&ske=2025-09-15T07%3A33%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TqZhT6PIvGqj6iod6tlgdsiXXSMdmbm49h3PHy8vmjo%3D&az=oaivgprodscus"
    },
    {
        id: "specialty-pizzas",
        name: "Specialty Pizzas",
        description: "Our signature creations for the ultimate pizza experience",
        icon: "🌟",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pqbwf4f7hvyqtzk7jsk21r%2F1757404409_img_1.webp?st=2025-09-09T06%3A33%3A05Z&se=2025-09-15T07%3A33%3A05Z&sks=b&skt=2025-09-09T06%3A33%3A05Z&ske=2025-09-15T07%3A33%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vobT41bfuEu0zWkpPj417pgwfZM4XDbgjSufwhHSzHE%3D&az=oaivgprodscus"
    },
    {
        id: "appetizers",
        name: "Appetizers",
        description: "Start your meal with these delicious beginnings",
        icon: "🍤",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pqs0hyfa6sqbx6664t2nmj%2F1757404815_img_0.webp?st=2025-09-09T06%3A34%3A26Z&se=2025-09-15T07%3A34%3A26Z&sks=b&skt=2025-09-09T06%3A34%3A26Z&ske=2025-09-15T07%3A34%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=0OmwonhXGO3l4vp6BMMu1KumQc%2FzQEBR7zTHWHfTKXw%3D&az=oaivgprodscus"
    },
    {
        id: "salads",
        name: "Salads",
        description: "Fresh greens with your favorite dressings",
        icon: "🥗",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pqwzgpedrb7tw9bfb3dn0t%2F1757404945_img_0.webp?st=2025-09-09T07%3A01%3A48Z&se=2025-09-15T08%3A01%3A48Z&sks=b&skt=2025-09-09T07%3A01%3A48Z&ske=2025-09-15T08%3A01%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=weJRgb6%2B0m1YkAn%2BLbafnojxFppqdvKF2ykCqs%2BG64w%3D&az=oaivgprodscus"
    },
    {
        id: "wings",
        name: "Wings",
        description: "Crispy wings with your choice of sauce",
        icon: "🍗",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pr19j3fzm9wtqede7pqxky%2F1757405086_img_0.webp?st=2025-09-09T06%3A34%3A39Z&se=2025-09-15T07%3A34%3A39Z&sks=b&skt=2025-09-09T06%3A34%3A39Z&ske=2025-09-15T07%3A34%3A39Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ujK%2B7%2Fh%2FIFeEoJdWMdvO0ZGRoU9Ha2yVnSFptQqNn5c%3D&az=oaivgprodscus"
    },
    {
        id: "calzones-strombolis",
        name: "Calzones & Strombolis",
        description: "Baked, folded dough stuffed with delicious fillings",
        icon: "🥟",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4pre8ncft7re1d2884m45v7%2F1757405512_img_0.webp?st=2025-09-09T06%3A34%3A40Z&se=2025-09-15T07%3A34%3A40Z&sks=b&skt=2025-09-09T06%3A34%3A40Z&ske=2025-09-15T07%3A34%3A40Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=fA6jSuAcxAfsf0TEnI7FjeGtmGhnH%2F8K8tHewf10RoE%3D&az=oaivgprodscus"
    },
    {
        id: "sandwiches-subs",
        name: "Sandwiches & Subs",
        description: "Freshly made sandwiches on brioche rolls",
        icon: "🥪",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4prm79jfy3a56gryy193xva%2F1757405679_img_0.webp?st=2025-09-09T06%3A34%3A34Z&se=2025-09-15T07%3A34%3A34Z&sks=b&skt=2025-09-09T06%3A34%3A34Z&ske=2025-09-15T07%3A34%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=KamSQi2KVMMumTbJdtoPBbnWL1zuPvxH2baY7fzBUes%3D&az=oaivgprodscus"
    },
    {
        id: "pasta-dinners",
        name: "Pasta Dinners",
        description: "Classic Italian pasta dishes served with salad and bread",
        icon: "🍝",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4qvwq7cfzxssgdkc2f1pg58%2F1757442692_img_0.webp?st=2025-09-09T17%3A19%3A55Z&se=2025-09-15T18%3A19%3A55Z&sks=b&skt=2025-09-09T17%3A19%3A55Z&ske=2025-09-15T18%3A19%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=rglxsAuzpJu9rC%2FkvpiW5TClKfAoAHEU6iLqD8fuwNc%3D&az=oaivgprodscus"
    },
    {
        id: "dinners",
        name: "Dinners",
        description: "Complete meals including baked and specialty dinners",
        icon: "🍽️",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4qwpkmge6haptrqadxrnxnq%2F1757443508_img_0.webp?st=2025-09-09T17%3A12%3A25Z&se=2025-09-15T18%3A12%3A25Z&sks=b&skt=2025-09-09T17%3A12%3A25Z&ske=2025-09-15T18%3A12%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=sTyQmpRhHBYazkGlqXOS%2Fox2ixU9sEJ937YVkF%2BUXLc%3D&az=oaivgprodscus"
    },
    {
        id: "desserts",
        name: "Desserts",
        description: "Sweet endings to your Italian feast",
        icon: "🍰",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k4qwv87nfr7a3sbhrz8r1dpy%2F1757443688_img_0.webp?st=2025-09-09T17%3A14%3A55Z&se=2025-09-15T18%3A14%3A55Z&sks=b&skt=2025-09-09T17%3A14%3A55Z&ske=2025-09-15T18%3A14%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=bZi5W0cWlsW1en6U5urAMGw2V%2BdC8LsegtP5Qt%2F9Ej0%3D&az=oaivgprodscus"
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