const MenuItem = ({ name, description, price, tag }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="p-6">
                {tag && (
                    <span className="bg-green-600 mb-12 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                        {tag}
                    </span>
                )}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">{name}</h3>
                    <span className="text-2xl font-extrabold text-red-600 ml-4">{price}</span>
                </div>
                {description && <p className="text-gray-600 text-sm">{description}</p>}
            </div>
        </div>
    );
};

export default MenuItem;