// app/menu/[category]/page.jsx
import { notFound } from 'next/navigation';
import {
    getCategoryData,
    getCategoryTitle,
    getCategoryDescription,
    getCategoryImage
} from '../menu-data';
import MenuSection from '@/app/components/menuSection';

export async function generateMetadata({ params }) {
    const category = params.category;
    const title = getCategoryTitle(category);

    return {
        title: `${title} | Little Italy Pizza`,
        description: getCategoryDescription(category)
    };
}

export default function CategoryPage({ params }) {
    const category = params.category;
    const categoryData = getCategoryData(category);
    const categoryTitle = getCategoryTitle(category);
    const image = getCategoryImage(category)
    if (!categoryData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-ivory">
            {/* Hero Section */}
            <div className="relative h-60 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${image}')`
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-normal text-white mb-4">
                        {categoryTitle}
                    </h1>
                    <div className="h-px w-16 bg-terracotta"></div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-charcoal/5 py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="text-sm text-charcoal/80 font-light">
                        <a href="/" className="hover:text-terracotta">Home</a>
                        <span className="mx-2">/</span>
                        <a href="/menu" className="hover:text-terracotta">Menu</a>
                        <span className="mx-2">/</span>
                        <span className="text-charcoal">{categoryTitle}</span>
                    </nav>
                </div>
            </div>

            {/* Menu Items */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <MenuSection
                    title={categoryTitle}
                    items={categoryData}
                    description={getCategoryDescription(category)}
                />
            </div>

            {/* Navigation */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-between">
                    <a
                        href="/menu"
                        className="px-6 py-3 border border-charcoal text-charcoal font-light hover:bg-charcoal hover:text-ivory transition-colors duration-300"
                    >
                        ← Back to Menu
                    </a>
                </div>
            </div>
        </div>
    );
}