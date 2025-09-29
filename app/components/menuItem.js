// components/MenuItem.jsx
import Image from 'next/image';

const MenuItem = ({ name, description, sizes, toppings, tag, image }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Displaying sizes and prices */}
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                {sizes.map((size, index) => (
                    <div key={index} className="text-center">
                        <span className="text-sm font-semibold">{size.name}</span>
                        <p className="text-lg font-bold">{size.price}</p>
                        <span className="text-xs text-gray-500">{size.dimension}</span>
                    </div>
                ))}
            </div>

            {/* Displaying toppings information */}
            {toppings && (
                <div className="mt-4 text-sm">
                    <p className="font-semibold text-gray-700">Extra Toppings:</p>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        {Object.entries(toppings.extra).map(([size, price]) => (
                            <div key={size} className="flex justify-between">
                                <span className="capitalize">{size}:</span>
                                <span className="font-bold">{price}</span>
                            </div>
                        ))}
                    </div>

                    <p className="font-semibold text-gray-700 mt-4">Half Toppings:</p>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        {Object.entries(toppings.half).map(([size, price]) => (
                            <div key={size} className="flex justify-between">
                                <span className="capitalize">{size}:</span>
                                <span className="font-bold">{price}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-500 mt-4">
                        Toppings: {toppings.list}
                    </p>
                </div>
            )}
        </div>
    );
};

export default MenuItem;