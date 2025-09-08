import MenuItem from "./menuItem";

// components/MenuSection.jsx
const MenuSection = ({ title, subtitle, items, id }) => {
    return (
        <section id={id} className="mb-16">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-2">{title}</h2>
                {subtitle && <p className="text-gray-500 italic text-lg">{subtitle}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;