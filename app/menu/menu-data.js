// app/menu/menu-data.js
export const PIZZAS = [
    {
        name: "Cheese Pizza",
        description: "Classic cheese or create your own pizza.",
        sizes: [
            { name: 'Small', dimension: '10"', price: '$9.75' },
            { name: 'Medium', dimension: '14"', price: '$12.75' },
            { name: 'Large', dimension: '16"', price: '$13.75' },
            { name: 'Sicilian', dimension: '16" x 16"', price: '$16.00' }
        ],
        tag: "Best seller",
        image: "/images/pizza/cheese-pizza.jpg",
        toppings: {
            extra: {
                small: "$1.50",
                medium: "$2.00",
                large: "$2.75",
                sicilian: "$3.75"
            },
            half: {
                small: "$1.00",
                medium: "$1.50",
                large: "$1.75",
                sicilian: "$2.50"
            },
            list: "Pepperoni, sausage, ham, bacon, ground beef, meatballs, genoa salami, mushroom, onions, green peppers, broccoli, spinach, black olives, sweet peppers, hot peppers, jalapeño peppers, pineapple, anchovies, fresh tomatoes."
        }
    }
];
export const SPECIALTY_PIZZAS = [
    {
        name: "House Special Pizza",
        description: "Pepperoni, sausage, ham, bacon, meatballs, mushrooms, onions, green peppers and extra cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$24.00",
            "Sicilian": "$27.00"
        },
        image: "/images/pizza/house-special.jpg"
    },
    {
        name: "Meat Lover Pizza",
        description: "Ham, pepperoni, salami, sausage, bacon, and extra cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$24.00",
            "Sicilian": "$27.00"
        },
        tag: "Best seller",
        image: "/images/pizza/meat-lover.jpg"
    },
    {
        name: "Deep Dish Meat Lovers Pizza",
        description: "Ham, pepperoni, salami, sausage, bacon, and extra cheese.",
        prices: {
            "One Size Only": "$20.99"
        },
        image: "/images/pizza/deep-dish-meat-lover.jpg"
    },
    {
        name: "Stuffed Meat Lover Pizza",
        description: "Ham, pepperoni, salami, sausage, bacon, ground beef and extra cheese.",
        prices: {
            "One Size Only": "$24.00"
        },
        image: "/images/pizza/stuffed-meat-lover.jpg"
    },
    {
        name: "Veggie Pizza",
        description: "Broccoli, mushroom, fresh tomato, green peppers, onions, and extra cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$19.99"
        },
        image: "/images/pizza/veggie-pizza.jpg"
    },
    {
        name: "White Pizza",
        description: "Fresh garlic in extra virgin olive oil, ricotta, mozzarella cheese, and shaved parmesan cheese.",
        prices: {
            "Sm": "$10.50",
            "Med": "$15.50",
            "Lg": "$18.50"
        },
        tag: "Best seller",
        image: "/images/pizza/white-pizza.jpg"
    },
    {
        name: "Buffalo Chicken Pizza",
        description: "Grilled chicken tossed in our buffalo sauce and mozzarella cheese. Your choice of ranch or blue cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/buffalo-chicken.jpg"
    },
    {
        name: "Chicken Alfredo Pizza",
        description: "Chicken breast strips sauteed with Alfredo sauce topped with mozzarella cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/chicken-alfredo.jpg"
    },
    {
        name: "Chicken Pesto Pizza",
        description: "Chicken breast strips sauteed with our pesto sauce topped with mozzarella cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/chicken-pesto.jpg"
    },
    {
        name: "Italian Pizza",
        prices: {
            "Sm": "$20.99",
            "Med": "$22.99",
            "Lg": "$29.99"
        },
        image: "/images/pizza/italian-pizza.jpg"
    },
    {
        name: "Chicken Fajita Pizza",
        description: "Marinated chicken strips, homemade pizza sauce, red onions, green peppers, and mozzarella cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$21.00",
            "Lg": "$24.00"
        },
        image: "/images/pizza/chicken-fajita.jpg"
    },
    {
        name: "Steak Pizza",
        description: "Chopped sirloin steak grilled with pizza sauce and topped with mozzarella cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/steak-pizza.jpg"
    },
    {
        name: "Mexican Pizza",
        description: "Taco seasoned ground beef, salsa, mozzarella cheese, and fresh tomato.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/mexican-pizza.jpg"
    },
    {
        name: "Margharita Pizza",
        description: "Homemade pizza sauce, fresh mozzarella cheese, fresh basil, and extra virgin olive oil.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/margherita-pizza.jpg"
    },
    {
        name: "Chicken Ranch Pizza",
        description: "Grilled chicken tossed in our ranch sauce and mozzarella cheese. Your choice of BBQ or buffalo sauce.",
        prices: {
            "Sm": "$14.99",
            "Med": "$17.89",
            "Lg": "$20.99"
        },
        image: "/images/pizza/chicken-ranch.jpg"
    },
    {
        name: "Gluten Free Pizza",
        prices: {
            "One Size Only": "$14.99"
        },
        image: "/images/pizza/gluten-free.jpg"
    },
    {
        name: "Chicken BBQ Pizza",
        description: "Grilled chicken tossed in our BBQ sauce and mozzarella cheese. Your choice of ranch or blue cheese.",
        prices: {
            "Sm": "$14.99",
            "Med": "$18.99",
            "Lg": "$20.99"
        },
        image: "/images/pizza/chicken-bbq.jpg"
    }
];
export const APPETIZERS = [
    {
        name: "French Fries",
        price: "$4.75",
        image: "/images/appetizers/french-fries.jpg"
    },
    {
        name: "Cheesy Fries",
        description: "Mozzarella or cheddar.",
        price: "$7.25",
        tag: "Best seller",
        image: "/images/appetizers/cheesy-fries.jpg"
    },
    {
        name: "Ranch Fries",
        price: "$8.25",
        tag: "Best seller",
        image: "/images/appetizers/ranch-fries.jpg"
    },
    {
        name: "Pizza Fries",
        price: "$7.25",
        image: "/images/appetizers/pizza-fries.jpg"
    },
    {
        name: "Gravy Fries",
        price: "$7.25",
        image: "/images/appetizers/gravy-fries.jpg"
    },
    {
        name: "Seasoned Fries",
        price: "$5.75",
        image: "/images/appetizers/seasoned-fries.jpg"
    },
    {
        name: "Nachos Supreme",
        description: "G.B shredded yellow cheese, jalapenos, tomatoes, onions.",
        price: "$9.99",
        image: "/images/appetizers/nachos-supreme.jpg"
    },
    {
        name: "Fried Zucchini",
        price: "$7.25",
        image: "/images/appetizers/fried-zucchini.jpg"
    },
    {
        name: "Fried Mushrooms",
        price: "$7.25",
        image: "/images/appetizers/fried-mushrooms.jpg"
    },
    {
        name: "Fried Cauliflower",
        price: "$7.25",
        image: "/images/appetizers/fried-cauliflower.jpg"
    },
    {
        name: "Fried Calamari",
        description: "With fries & marinara sauce.",
        price: "$8.75",
        image: "/images/appetizers/fried-calamari.jpg"
    },
    {
        name: "Fried Clam Strips",
        description: "With fries & marinara sauce.",
        price: "$8.75",
        image: "/images/appetizers/fried-clam-strips.jpg"
    },
    {
        name: "Onion Rings",
        price: "$7.25",
        image: "/images/appetizers/onion-rings.jpg"
    },
    {
        name: "Mozzarella Sticks",
        price: "$7.25",
        image: "/images/appetizers/mozzarella-sticks.jpg"
    },
    {
        name: "Broccoli Bites",
        price: "$7.25",
        image: "/images/appetizers/broccoli-bites.jpg"
    },
    {
        name: "Jalapeno Poppers",
        price: "$7.25",
        image: "/images/appetizers/jalapeno-poppers.jpg"
    },
    {
        name: "Garlic Knots",
        price: "$6.99",
        image: "/images/appetizers/garlic-knots.jpg"
    },
    {
        name: "Pepperoni Rolls",
        price: "$7.99",
        image: "/images/appetizers/pepperoni-rolls.jpg"
    },
    {
        name: "Cheese Curds",
        price: "$7.25",
        image: "/images/appetizers/cheese-curds.jpg"
    },
    {
        name: "Mac & Cheese",
        price: "$7.25",
        image: "/images/appetizers/mac-and-cheese.jpg"
    },
    {
        name: "Crunch Tacos",
        description: "G.B shredded yellow cheese, jalapenos, tomato, onion, & sour cream.",
        price: "$10.99",
        image: "/images/appetizers/crunch-tacos.jpg"
    }
];

export const SALADS = [
    {
        name: "Side Tossed Salad",
        description: "Crispy hand-tossed salad with your favorite dressing and cheese.",
        price: "$8.75",
        image: "/images/salads/side-tossed.jpg"
    },
    {
        name: "Grilled Chicken Salad",
        description: "A crispy hand-tossed salad topped with marinated grilled chicken and mozzarella cheese, served with your favorite dressing.",
        price: "$11.75",
        image: "/images/salads/grilled-chicken.jpg"
    },
    {
        name: "Side Caesar Salad",
        description: "Crispy hand-tossed salad with your favorite dressing and cheese.",
        price: "$8.75",
        image: "/images/salads/side-caesar.jpg"
    },
    {
        name: "Greek Salad",
        description: "Feta cheese, pitted Kalamata olives, house dressing.",
        price: "$11.25",
        image: "/images/salads/greek-salad.jpg"
    },
    {
        name: "Tuna Salad",
        description: "Homemade tuna salad served with a crispy hand-tossed salad with your favorite dressing.",
        price: "$11.75",
        image: "/images/salads/tuna-salad.jpg"
    },
    {
        name: "Steak Salad",
        price: "$12.75",
        image: "/images/salads/steak-salad.jpg"
    },
    {
        name: "Chef Salad",
        description: "A large hand-tossed salad topped with ham, turkey, provolone cheese, and mozzarella cheese, served with your favorite dressing.",
        price: "$11.75",
        image: "/images/salads/chef-salad.jpg"
    },
    {
        name: "Chicken Fajita Salad",
        description: "A crispy hand tossed salad topped with marinated grilled chicken strips, grilled onions and peppers, shaved parmesan served w/ your favorite dressing.",
        price: "$11.75",
        image: "/images/salads/chicken-fajita-salad.jpg"
    },
    {
        name: "Antipasto Salad",
        description: "A crispy hand tossed salad topped with Italian cold cuts, giardiniera, and olives, served with our homemade house dressing.",
        price: "$11.75",
        image: "/images/salads/antipasto-salad.jpg"
    },
    {
        name: "Taco Salad",
        description: "Ground beef, shredded yellow cheese, lettuce, tomato, onion and a side of taco sauce.",
        price: "$12.25",
        image: "/images/salads/taco-salad.jpg"
    },
    {
        name: "Grilled Chicken Caesar Salad",
        description: "Crispy romaine lettuce topped with marinated grilled chicken, shaved parmesan, croutons and caesar dressing.",
        price: "$11.75",
        image: "/images/salads/grilled-chicken-caesar.jpg"
    },
    {
        name: "Grilled Shrimp Salad",
        description: "A crispy hand tossed salad topped with grilled jumbo shrimp and shaved parmesan, served with your favorite dressing.",
        price: "$13.75",
        image: "/images/salads/grilled-shrimp.jpg"
    },
    {
        name: "Buffalo Chicken Salad",
        description: "A crispy hand tossed salad topped with chopped fried chicken fillet tossed with our buffalo sauce and shaved parmesan served with your favorite dressing.",
        price: "$11.75",
        image: "/images/salads/buffalo-chicken-salad.jpg"
    },
    {
        name: "Grilled Salmon Salad",
        description: "A crispy hand tossed salad topped with Atlantic salmon and shaved parmesan cheese, served with your favorite dressing.",
        price: "$13.75",
        image: "/images/salads/grilled-salmon-salad.jpg"
    },
    {
        name: "House Salad",
        description: "A crispy hand tossed salad topped with a chopped fried chicken fillet and bacon tossed in favorite dressing and shaved parmesan.",
        price: "$11.75",
        image: "/images/salads/house-salad.jpg"
    }
];

export const WINGS = [
    {
        name: "Wings",
        price: "$9.99",
        image: "/images/wings/wings.jpg"
    },
    {
        name: "Boneless Wings",
        price: "$9.99",
        image: "/images/wings/boneless-wings.jpg"
    }
];
export const CALZONES_STROMBOLIS = [
    {
        name: "Regular Stromboli",
        description: "Ham, salami, pepperoni, mozzarella cheese, and our homemade pizza sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/regular-stromboli.jpg"
    },
    {
        name: "Meat Lovers Stromboli",
        description: "Ham, salami, pepperoni, bacon, ground beef, sausage, cheese, and our homemade pizza sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/meat-lover-stromboli.jpg"
    },
    {
        name: "Special Stromboli",
        description: "Ham, salami, pepperoni, bacon, green peppers, mushrooms, onions, extra cheese, and our homemade pizza sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/special-stromboli.jpg"
    },
    {
        name: "Veggie Stromboli",
        description: "Broccoli, spinach, mushrooms, green peppers, onions, fresh tomato, and our homemade pizza sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/veggie-stromboli.jpg"
    },
    {
        name: "Steak Stromboli",
        description: "Chopped steak, mozzarella cheese, and our homemade pizza sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/steak-stromboli.jpg"
    },
    {
        name: "Buffalo Chicken Stromboli",
        description: "Chopped marinated chicken breast, mozzarella cheese, and hot sauce with your choice of ranch or blue cheese.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/buffalo-chicken-stromboli.jpg"
    },
    {
        name: "Chicken Stromboli",
        description: "Chopped marinated chicken breast, mozzarella cheese, and homemade sauce.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/chicken-stromboli.jpg"
    },
    {
        name: "Calzone",
        description: "Ham, ricotta, and mozzarella cheese.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/calzone.jpg"
    },
    {
        name: "Spinach Calzone",
        description: "Ricotta cheese, mozzarella cheese, fresh spinach, parmesan cheese.",
        prices: {
            "Small": "$15.99",
            "Medium": "$18.99",
            "Large": "$20.99"
        },
        sauce: {
            "Small": "$1.25",
            "Medium": "$2.50",
            "Large": "$2.50"
        },
        image: "/images/calzones/spinach-calzone.jpg"
    }
];
export const SANDWICHES = [
    {
        name: "Cheeseburger Sandwich",
        description: "Grilled 1/3 lb Angus burger served with lettuce, tomato, onion, and mayo.",
        price: "$7.50",
        image: "/images/sandwiches/cheeseburger-sandwich.jpg"
    },
    {
        name: "Ham & Cheese Sandwich",
        description: "Grilled ham and cheese served with lettuce, tomato, onion, and mayo.",
        price: "$7.00",
        image: "/images/sandwiches/ham-and-cheese.jpg"
    },
    {
        name: "Pizza Burger Sandwich",
        description: "Grilled 1/3 lb Angus burger baked with homemade marinara sauce and mozzarella cheese.",
        price: "$7.50",
        image: "/images/sandwiches/pizza-burger.jpg"
    },
    {
        name: "Chicken Sandwich",
        description: "Fried chicken breast fillet served with lettuce, tomato, onion, and mayo.",
        price: "$7.00",
        image: "/images/sandwiches/chicken-sandwich.jpg"
    },
    {
        name: "Crab Cake Sandwich",
        description: "Crab cakes served with lettuce, tomato, onion, and your choice of tartar sauce or mayo.",
        price: "$7.99",
        image: "/images/sandwiches/crab-cake.jpg"
    },
    {
        name: "Spicy Chicken Sandwich",
        description: "Fried spicy chicken breast filled served with lettuce, tomato, onion and mayo.",
        price: "$7.75",
        image: "/images/sandwiches/spicy-chicken.jpg"
    },
    {
        name: "Fish Sandwich",
        description: "Fried flounder fillet served with lettuce, tomato, onion, and your choice of tartar sauce or mayo.",
        price: "$7.00",
        image: "/images/sandwiches/fish-sandwich.jpg"
    },
    {
        name: "Grilled Chicken Sandwich",
        description: "Marinated chicken, served with fried mushrooms, fried onions, BBQ sauce & American cheese.",
        price: "$7.99",
        image: "/images/sandwiches/grilled-chicken.jpg"
    },
    {
        name: "Tuna Sandwich",
        description: "Tuna salad served with lettuce, tomato, onion, and your choice of tartar sauce or mayo.",
        price: "$7.00",
        image: "/images/sandwiches/tuna-sandwich.jpg"
    }
];

export const COLD_SUBS = [
    {
        name: "Capicola Sub",
        description: "Capicola, provolone.",
        price: "$10.25",
        image: "/images/cold-subs/capicola-sub.jpg"
    },
    {
        name: "Club Sub",
        description: "Turkey, bacon, American cheese.",
        price: "$10.25",
        image: "/images/cold-subs/club-sub.jpg"
    },
    {
        name: "Italian Sub",
        description: "Ham, Genoa salami, provolone cheese.",
        price: "$10.25",
        image: "/images/cold-subs/italian-sub.jpg"
    },
    {
        name: "Veggie Sub",
        description: "Lettuce, tomato, onions, black olives, mushrooms, and your choice of provolone or American cheese.",
        price: "$10.25",
        image: "/images/cold-subs/veggie-sub.jpg"
    },
    {
        name: "Salami Sub",
        description: "Genoa salami, provolone.",
        price: "$10.25",
        image: "/images/cold-subs/salami-sub.jpg"
    },
    {
        name: "Tuna Sub",
        description: "Homemade tuna salad.",
        price: "$10.25",
        image: "/images/cold-subs/tuna-sub.jpg"
    },
    {
        name: "American Sub",
        description: "Ham, genoa salami, American cheese.",
        price: "$10.25",
        image: "/images/cold-subs/american-sub.jpg"
    },
    {
        name: "Turkey & Cheese Sub",
        description: "Turkey & your choice of provolone or American cheese.",
        price: "$10.25",
        image: "/images/cold-subs/turkey-cheese-sub.jpg"
    },
    {
        name: "Ham & Cheese Sub",
        description: "Ham & Provolone or American Cheese.",
        price: "$10.25",
        image: "/images/cold-subs/ham-cheese-sub.jpg"
    },
    {
        name: "Ham, Turkey & Provolone Cheese Sub",
        price: "$10.25",
        image: "/images/cold-subs/ham-turkey-provolone-sub.jpg"
    },
    {
        name: "Mixed Cheese Sub",
        description: "Provolone & American cheese.",
        price: "$10.25",
        image: "/images/cold-subs/mixed-cheese-sub.jpg"
    },
    {
        name: "Roast Beef & Provolone Cheese Sub",
        price: "$10.50",
        image: "/images/cold-subs/roast-beef-provolone-sub.jpg"
    }
];

export const HOT_SUBS = [
    {
        name: "Cheese Steak Sub",
        description: "8 oz sirloin steak chopped with grilled onions and homemade tomato sauce.",
        price: "$10.50",
        image: "/images/hot-subs/cheese-steak.jpg"
    },
    {
        name: "Buffalo Chicken Cheese Steak Sub",
        description: "Grilled and chopped chicken tenderloins marinated in spicy buffalo sauce, served with lettuce, tomato, onions, and your choice of ranch or blue cheese.",
        price: "$11.75",
        image: "/images/hot-subs/buffalo-chicken-cheese-steak.jpg"
    },
    {
        name: "California Cheese Steak Sub",
        description: "8 oz sirloin steak chopped, served with lettuce, tomato, onions, and mayo.",
        price: "$11.25",
        image: "/images/hot-subs/california-cheese-steak.jpg"
    },
    {
        name: "Chicken Fajita Sub",
        description: "Marinated chicken strips, fried onions, lettuce, tomato, fresh peppers, cheese & mayo.",
        price: "$11.75",
        image: "/images/hot-subs/chicken-fajita-sub.jpg"
    },
    {
        name: "Special Cheese Steak Sub",
        description: "8 oz sirloin steak chopped with grilled onions, sauteed mushrooms, green peppers, and our homemade tomato sauce.",
        price: "$11.75",
        image: "/images/hot-subs/special-cheese-steak.jpg"
    },
    {
        name: "Italian Sausage Sub",
        description: "Italian sweet sausage grilled with green peppers, onions & sauce.",
        price: "$11.25",
        image: "/images/hot-subs/italian-sausage.jpg"
    },
    {
        name: "Cheeseburger Sub",
        description: "Two 4 oz angus burgers grilled and served with lettuce, tomato, onions, and mayo.",
        price: "$11.25",
        image: "/images/hot-subs/cheeseburger-sub.jpg"
    },
    {
        name: "Fish Sub",
        description: "Deep fried fish served with lettuce, tomato, onions, mayo or tarter sauce.",
        price: "$11.00",
        image: "/images/hot-subs/fish-sub.jpg"
    },
    {
        name: "Chicken Cheese Steak Sub",
        description: "Marinated chicken tenderloins grilled and chopped, served with lettuce, tomato, onion, and mayo.",
        price: "$11.75",
        image: "/images/hot-subs/chicken-cheese-steak.jpg"
    },
    {
        name: "Chicken Fillet Sub",
        description: "Fried chicken breast served with lettuce, tomato, onions & mayo.",
        price: "$11.75",
        image: "/images/hot-subs/chicken-fillet-sub.jpg"
    },
    {
        name: "Spicy Chicken Filet Sub",
        description: "Fried Spice Chicken Breast served w/lettuce, tomato, onions and mayo.",
        price: "$11.75",
        image: "/images/hot-subs/spicy-chicken-fillet.jpg"
    },
    {
        name: "Crabcake Sub",
        description: "Crab cakes served w/ lettuce, onions, and your choice of tarter sauce or mayo.",
        price: "$11.99",
        image: "/images/hot-subs/crabcake-sub.jpg"
    },
    {
        name: "Chicken Bacon Ranch Sub",
        description: "Marinated chicken tenderloins grilled with onions and chopped, served with lettuce, tomato, and ranch.",
        price: "$11.75",
        image: "/images/hot-subs/chicken-bacon-ranch.jpg"
    },
    {
        name: "BLT Sub",
        description: "With lettuce, tomato, mayo.",
        price: "$11.25",
        image: "/images/hot-subs/blt-sub.jpg"
    }
];

export const OVEN_BAKED_SUBS = [
    {
        name: "Pizza Steak Sub",
        description: "Marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/pizza-steak-sub.jpg"
    },
    {
        name: "Meat Parmigiana Sub",
        description: "Meatballs served with marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/meat-parmigiana.jpg"
    },
    {
        name: "Pizza Burger Sub",
        description: "Marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/pizza-burger-sub.jpg"
    },
    {
        name: "Eggplant Parmigiana Sub",
        description: "Breaded eggplant served with marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/eggplant-parmigiana.jpg"
    },
    {
        name: "Chicken Parmigiana Sub",
        description: "Breaded chicken breast filet served with marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/chicken-parmigiana.jpg"
    },
    {
        name: "Sausage Parmigiana Sub",
        description: "Sausage served with marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/sausage-parmigiana.jpg"
    },
    {
        name: "Veal Parmigiana Sub",
        description: "Breaded veal patty served with marinara sauce & mozzarella.",
        price: "$11.50",
        image: "/images/oven-baked-subs/veal-parmigiana.jpg"
    },
    {
        name: "Super Sub",
        description: "Ham, salami, pepperoni, provolone, lettuce, tomato, onion, mayo.",
        price: "$11.50",
        image: "/images/oven-baked-subs/super-sub.jpg"
    }
];

export const PASTA_DINNERS = [
    {
        name: "Pasta with Tomato Sauce",
        price: "$10.00",
        image: "/images/pasta/tomato-sauce-pasta.jpg"
    },
    {
        name: "Pasta with Sausage",
        description: "With two sausage links.",
        price: "$13.75",
        image: "/images/pasta/sausage-pasta.jpg"
    },
    {
        name: "Pasta with Meat Sauce",
        price: "$13.75",
        image: "/images/pasta/meat-sauce-pasta.jpg"
    },
    {
        name: "Pasta with Pesto Sauce",
        price: "$13.75",
        image: "/images/pasta/pesto-sauce-pasta.jpg"
    },
    {
        name: "Pasta with Meatballs",
        description: "With three meatballs.",
        price: "$13.75",
        image: "/images/pasta/meatballs-pasta.jpg"
    },
    {
        name: "Pasta with Alfredo Sauce",
        price: "$13.75",
        image: "/images/pasta/alfredo-sauce-pasta.jpg"
    }
];

export const BAKED_DINNERS = [
    {
        name: "Stuffed Shells",
        description: "Large shell pasta stuffed with the finest ricotta cheese baked in our homemade tomato sauce and mozzarella cheese.",
        price: "$13.75",
        image: "/images/baked-dinners/stuffed-shells.jpg"
    },
    {
        name: "Baked Ziti",
        description: "Ziti sauteed in our homemade tomato sauce then baked with the finest ricotta and mozzarella ceese.",
        price: "$14.75",
        image: "/images/baked-dinners/baked-ziti.jpg"
    },
    {
        name: "Manicotti",
        description: "Tube-shaped pasta stuffed with our finest ricotta cheese baked in our homemade tomato sauce and mozzarella cheese.",
        price: "$13.75",
        image: "/images/baked-dinners/manicotti.jpg"
    },
    {
        name: "Lasagna",
        description: "Homemade lasagna layered with our bolognese sauce and ricotta cheese.",
        price: "$14.75",
        image: "/images/baked-dinners/lasagna.jpg"
    }
];

export const PARMIGIANA_DINNERS = [
    {
        name: "Veal Parmigiana",
        description: "Breaded veal patty fried and then finished in the oven in our homemade marinara sauce and melted mozzarella cheese.",
        price: "$14.75",
        image: "/images/parmigiana/veal-parmigiana.jpg"
    },
    {
        name: "Eggplant Parmigiana",
        description: "Breaded eggplant, fried and then finished in the oven in our homemade marinara sauce and melted mozzarella cheese.",
        price: "$14.75",
        image: "/images/parmigiana/eggplant-parmigiana.jpg"
    },
    {
        name: "Chicken Parmigiana",
        description: "Breaded chicken fillet, fried and then finished in the oven in our homemade marinara sauce and melted mozzarella cheese.",
        price: "$14.75",
        image: "/images/parmigiana/chicken-parmigiana.jpg"
    }
];

export const SPECIALTY_DINNERS = [
    {
        name: "Shrimp Fra Diavolo",
        description: "Jumbo shrimp, sauteed in our homemade marinara sauce.",
        price: "$17.25",
        image: "/images/specialty-dinners/shrimp-fra-diavolo.jpg"
    },
    {
        name: "Spaghetti with Clams Red Sauce",
        description: "Red clams sauteed in a light marinara sauce.",
        price: "$17.25",
        image: "/images/specialty-dinners/spaghetti-clams-red.jpg"
    },
    {
        name: "Seafood Alfredo",
        description: "An assortment of shrimp, scallops, crab meat in a velvety cream sauce.",
        price: "$18.25",
        image: "/images/specialty-dinners/seafood-alfredo.jpg"
    },
    {
        name: "Spaghetti with Clams White Sauce",
        description: "White clams sauteed in a white wine sauce.",
        price: "$17.25",
        image: "/images/specialty-dinners/spaghetti-clams-white.jpg"
    },
    {
        name: "Tortellini Alfredo",
        description: "Cheese tortellini sauteed with chopped ham and a velvety cream sauce.",
        price: "$16.25",
        image: "/images/specialty-dinners/tortellini-alfredo.jpg"
    }
];

export const PLATTERS = [
    {
        name: "Chicken Fingers with French Fries Platter",
        price: "$8.99",
        image: "/images/platters/chicken-fingers.jpg"
    },
    {
        name: "Shrimp in Basket with French Fries Platter",
        description: "Breaded eggplant, fried and then finished in the oven in our homemade marinara sauce and melted mozzarella cheese.",
        price: "$8.75",
        image: "/images/platters/shrimp-basket.jpg"
    },
    {
        name: "Chicken Nuggets with French Fries Platter",
        price: "$7.75",
        image: "/images/platters/chicken-nuggets.jpg"
    },
    {
        name: "Fish with French Fries",
        description: "Beer battered fish fillet with cocktail or tartar sauce.",
        price: "$10.25",
        image: "/images/platters/fish-with-fries.jpg"
    },
    {
        name: "Fried Seafood Combo with French Fries Platter",
        description: "Crabcake, fish filet, shrimp, served with cocktail and tartar sauce.",
        price: "$13.00",
        image: "/images/platters/seafood-combo.jpg"
    }
];

export const DESSERTS = [
    {
        name: "Cheesecake",
        price: "$5.25",
        image: "/images/desserts/cheesecake.jpg"
    },
    {
        name: "Tiramisu",
        price: "$6.25",
        image: "/images/desserts/tiramisu.jpg"
    },
    {
        name: "Cannoli",
        price: "$5.25",
        image: "/images/desserts/cannoli.jpg"
    },
    {
        name: "Limoncello Cake",
        price: "$5.25",
        image: "/images/desserts/limoncello-cake.jpg"
    }
];

export const BEVERAGES = [
    {
        name: "Soda",
        price: "$2.99",
        image: "/images/beverages/soda.jpg"
    },
    {
        name: "Arizona Iced Tea",
        price: "$2.50",
        image: "/images/beverages/arizona-iced-tea.jpg"
    },
    {
        name: "Water",
        price: "$2.50",
        image: "/images/beverages/water.jpg"
    },
    {
        name: "Brisk Tea",
        price: "$3.75",
        image: "/images/beverages/brisk-tea.jpg"
    }
];

export const LUNCH_SPECIAL = [
    {
        name: "6\" Sub, Small French Fries & a Small Soda Lunch Special",
        price: "$10.25",
        image: "/images/lunch-special/lunch-special.jpg"
    }
];



// Función para obtener datos por categoría
export function getCategoryData(category) {
    switch (category) {
        case 'pizzas': return PIZZAS;
        case 'specialty-pizzas': return SPECIALTY_PIZZAS;
        case 'appetizers': return APPETIZERS;
        case 'salads': return SALADS;
        case 'wings': return WINGS;
        case 'calzones-strombolis': return CALZONES_STROMBOLIS;
        case 'sandwiches-subs': return [...SANDWICHES, ...COLD_SUBS, ...HOT_SUBS, ...OVEN_BAKED_SUBS];
        case 'pasta-dinners': return PASTA_DINNERS;
        case 'dinners': return [...BAKED_DINNERS, ...PARMIGIANA_DINNERS, ...SPECIALTY_DINNERS, ...PLATTERS];
        case 'desserts': return DESSERTS;
        case 'beverages': return BEVERAGES;
        default: return null;
    }
}

// Función para obtener títulos de categoría
export function getCategoryTitle(category) {
    const titles = {
        'pizzas': 'Pizzas',
        'specialty-pizzas': 'Specialty Pizzas',
        'appetizers': 'Appetizers',
        'salads': 'Salads',
        'wings': 'Wings',
        'calzones-strombolis': 'Calzones & Strombolis',
        'sandwiches-subs': 'Sandwiches & Subs',
        'pasta-dinners': 'Pasta Dinners',
        'dinners': 'Dinners',
        'desserts': 'Desserts',
        'beverages': 'Beverages'
    };
    return titles[category] || 'Menu Category';
}

// Función para obtener descripciones de categoría
export function getCategoryDescription(category) {
    const descriptions = {
        'pizzas': 'Hand-tossed dough, homemade sauce, and fresh ingredients',
        'specialty-pizzas': 'Our signature creations for the ultimate pizza experience',
        'appetizers': 'Start your meal with these delicious beginnings',
        'salads': 'Fresh greens with your favorite dressings',
        'wings': 'Crispy wings with your choice of sauce',
        'calzones-strombolis': 'Baked, folded dough stuffed with delicious fillings',
        'sandwiches-subs': 'Freshly made sandwiches on brioche rolls',
        'pasta-dinners': 'Classic Italian pasta dishes served with salad and bread',
        'dinners': 'Complete meals including baked and specialty dinners',
        'desserts': 'Sweet endings to your Italian feast',
        'beverages': 'Refreshments to complement your meal'
    };
    return descriptions[category] || '';
}



// Función para obtener descripciones de categoría
export function getCategoryImage(category) {
    const images = {
        'pizzas': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0153_Gourmet%20Pizza%20Creations_simple_compose_01k4pqbxb1ez09xebfcvb25pwf.png',
        'specialty-pizzas': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0153_Gourmet%20Pizza%20Creations_simple_compose_01k4pqbxb1ez09xebfcvb25pwf.png',
        'appetizers': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0200_Delicious%20Appetizers_simple_compose_01k4pqs18jftw99s01zyd7xwzg.png',
        'salads': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0202_Fresh%20Green%20Salad_simple_compose_01k4pqx25rf01rcjd3h4h76g97.png',
        'wings': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0204_Saucy%20Crispy%20Wings_simple_compose_01k4pr1bsff5at16d3qfe6ev4x.png',
        'calzones-strombolis': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0211_Calzones%20and%20Strombolis_simple_compose_01k4preat7ey5sahs43w09wrqx.png',
        'sandwiches-subs': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_0214_Delicious%20Sandwiches%20Display_simple_compose_01k4prm9g2e89avxy55atgdw4v.png',
        'pasta-dinners': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1231_Italian%20Pasta%20Feast_simple_compose_01k4qvwt5vee0vv7hc35vs6bf4.png',
        'dinners': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1245_Delicious%20Dinner%20Spread_simple_compose_01k4qwpp4af93t2djk9604p1zs.png',
        'desserts': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/menu/20250909_1248_Italian%20Dessert%20Delights_simple_compose_01k4qwv9cferza17bx3mmrp04c.png',
        'beverages': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/beverages.jpg'
    };
    return images[category] || '';
}