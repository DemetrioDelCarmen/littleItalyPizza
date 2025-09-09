// app/menu/[category]/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl font-serif text-charcoal mb-4">Category Not Found</h1>
                <p className="text-charcoal/80 font-light mb-8">
                    The menu category you're looking for doesn't exist.
                </p>
                <Link
                    href="/menu"
                    className="px-6 py-3 bg-terracotta text-ivory font-light hover:bg-terracotta/90 transition-colors duration-300"
                >
                    Back to Menu
                </Link>
            </div>
        </div>
    );
}