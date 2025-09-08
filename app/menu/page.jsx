// app/menu/page.jsx
"use client"
import MenuSection from '../components/menuSection';
import {
    PIZZAS,
    SPECIALTY_PIZZAS,
    APPETIZERS,
    SALADS,
    WINGS,
    CALZONES_STROMBOLIS,
    SANDWICHES,
    COLD_SUBS,
    HOT_SUBS,
    OVEN_BAKED_SUBS,
    PASTA_DINNERS,
    BAKED_DINNERS,
    PARMIGIANA_DINNERS,
    SPECIALTY_DINNERS,
    PLATTERS,
    DESSERTS,
    BEVERAGES,
    LUNCH_SPECIAL
} from './menu-data'; // We'll create this file next
import { motion } from "framer-motion";

export default function MenuPage() {

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };
    return (
        <div className='bg-contain bg-[url(https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/72159777_9782021.jpg)]'>
            <div className="bg-white/90 min-h-screen py-16 px-4 sm:px-6 lg:px-8">

                <motion.div variants={itemVariants} className="my-12 flex justify-center">
                    <img className='object-contain w-[180px] h-[180px] shadow-2xl' src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/logo-italy-pizza.jpg" alt="Pizzeria Logo" />
                </motion.div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-6xl font-extrabold text-red-700 leading-tight">
                            Our Delicious Menu
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our wide variety of dishes, prepared with the freshest ingredients for an unforgettable flavor.
                        </p>
                    </div>

                    <MenuSection
                        title="Pizza"
                        items={PIZZAS}
                        id="pizzas"
                    />

                    <MenuSection
                        title="Specialty Pizza"
                        items={SPECIALTY_PIZZAS}
                        id="specialty-pizza"
                    />

                    <MenuSection
                        title="Appetizers"
                        items={APPETIZERS}
                        id="appetizers"
                    />

                    <MenuSection
                        title="Salads"
                        subtitle="Served with garlic bread, shaved parmesan cheese, & your favorite dressing."
                        items={SALADS}
                        id="salads"
                    />

                    <MenuSection
                        title="Wings"
                        subtitle="Choice of hot, mild, or BBQ. Served with celery & bleu cheese or ranch dressing."
                        items={WINGS}
                        id="wings"
                    />

                    <MenuSection
                        title="Calzones & Strombolis"
                        subtitle="Baked, folded dough stuffed & served with one cup of sauce."
                        items={CALZONES_STROMBOLIS}
                        id="calzones-strombolis"
                    />

                    <MenuSection
                        title="Sandwiches"
                        subtitle="Brioche rolls."
                        items={SANDWICHES}
                        id="sandwiches"
                    />

                    <MenuSection
                        title="Cold Subs"
                        subtitle="All subs include lettuce, tomato, onions, & your choice of mayo, oil & vinegar, ketchup, or mustard."
                        items={COLD_SUBS}
                        id="cold-subs"
                    />

                    <MenuSection
                        title="Hot Subs"
                        subtitle="All subs include lettuce, tomato, onions, & your choice of mayo, oil & vinegar, ketchup, or mustard."
                        items={HOT_SUBS}
                        id="hot-subs"
                    />

                    <MenuSection
                        title="Oven Baked Subs"
                        subtitle="All subs include lettuce, tomatoes, onions & your choice of mayo, oil & vinegar, ketchup, or mustard."
                        items={OVEN_BAKED_SUBS}
                        id="oven-baked-subs"
                    />

                    <MenuSection
                        title="Pasta Dinners"
                        subtitle="Served with a tossed salad & garlic bread. Your choice of spaghetti, fettuccine, or penne."
                        items={PASTA_DINNERS}
                        id="pasta-dinners"
                    />

                    <MenuSection
                        title="Baked Dinners"
                        subtitle="Served with a tossed salad & garlic bread."
                        items={BAKED_DINNERS}
                        id="baked-dinners"
                    />

                    <MenuSection
                        title="Parmigiana Dinners"
                        subtitle="Served with a tossed salad & garlic bread & your choice of spaghetti, fettuccine, or penne."
                        items={PARMIGIANA_DINNERS}
                        id="parmigiana-dinners"
                    />

                    <MenuSection
                        title="Specialty Dinners"
                        subtitle="Served with a tossed salad & homemade garlic bread."
                        items={SPECIALTY_DINNERS}
                        id="specialty-dinners"
                    />

                    <MenuSection
                        title="Platters"
                        items={PLATTERS}
                        id="platters"
                    />

                    <MenuSection
                        title="Desserts"
                        items={DESSERTS}
                        id="desserts"
                    />

                    <MenuSection
                        title="Beverages"
                        items={BEVERAGES}
                        id="beverages"
                    />

                    <MenuSection
                        title="Lunch Special"
                        subtitle="Only available 12:00 PM - 2:00 PM"
                        items={LUNCH_SPECIAL}
                        id="lunch-special"
                    />
                </div>
            </div>
        </div>

    );
}