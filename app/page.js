// app/page.jsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg",
      title: "Authentic Italian Pizza",
      subtitle: "Made with tradition since 1985"
    },
    {
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/nik-owens-40OJLYVWeeM-unsplash.jpg",
      title: "Wood-Fired Perfection",
      subtitle: "Crafted in our traditional oven"
    },
    {
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/jakub-kapusnak-tEVisOXz26Y-unsplash.jpg",
      title: "Fresh Ingredients",
      subtitle: "Locally sourced, always fresh"
    }
  ];

  const features = [
    {
      icon: "🍅",
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally sourced ingredients in all our dishes"
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Our Italian-trained chefs bring authentic flavors to every recipe"
    },
    {
      icon: "🏺",
      title: "Traditional Recipes",
      description: "Generations-old recipes passed down from our Nonna's kitchen"
    },
    {
      icon: "🔥",
      title: "Wood-Fired Oven",
      description: "Authentic wood-fired oven for that perfect crispy crust"
    }
  ];

  const reviews = [
    {
      name: "Maria Rodriguez",
      rating: 5,
      comment: "The best pizza I've had outside of Italy! The Margherita is absolutely perfect.",
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/review-1.jpg"
    },
    {
      name: "John Smith",
      rating: 5,
      comment: "Authentic flavors and friendly service. The calzones are incredible!",
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/review-2.jpg"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Family-owned charm with exceptional food. Our go-to pizza place!",
      image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/review-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-normal text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Little Italy Pizza
          </motion.h1>
          <motion.div
            className="h-px w-16 bg-terracotta mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Authentic Italian flavors crafted with passion since 1985
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link
              href="/menu"
              className="text-white px-8 py-4 bg-terracotta text-ivory font-light hover:bg-terracotta/90 transition-colors duration-300 text-lg"
            >
              View Our Menu
            </Link>
            <Link
              href="/reservations"
              className="text-white px-8 py-4 border border-ivory text-ivory font-light hover:bg-ivory hover:text-charcoal transition-colors duration-300 text-lg"
            >
              Make Reservation
            </Link>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-terracotta' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Why Choose Little Italy?</h2>
            <div className="h-px w-16 bg-terracotta mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal/80 font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
            <div className="h-px w-16 bg-terracotta mb-6" />
            <p className="text-ivory/80 font-light mb-6 leading-relaxed">
              Since 1985, Little Italy Pizza has been serving authentic Italian cuisine to the New Oxford community.
              Founded by the Bianchi family, we've maintained the traditional recipes and cooking methods that
              make our food truly special.
            </p>
            <p className="text-ivory/80 font-light mb-8 leading-relaxed">
              Every dish is prepared with love and attention to detail, using only the finest ingredients.
              From our wood-fired pizzas to our homemade pasta, we bring the taste of Italy to your table.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 border border-ivory text-ivory font-light hover:bg-ivory hover:text-charcoal transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/2148584835-min.jpg"
              alt="Little Italy Restaurant Interior"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -inset-4 border border-terracotta/30 rounded-lg pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Specialties</h2>
            <p className="text-charcoal/80 font-light mb-4 max-w-2xl mx-auto">
              Discover our most popular dishes that keep our customers coming back for more
            </p>
            <div className="h-px w-16 bg-terracotta mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/specialty-pizza-preview.jpg",
                title: "Specialty Pizzas",
                description: "Handcrafted pizzas with unique flavor combinations"
              },
              {
                image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/pasta-preview.jpg",
                title: "Homemade Pasta",
                description: "Fresh pasta made daily with authentic sauces"
              },
              {
                image: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/calzone-preview.jpg",
                title: "Calzones",
                description: "Stuffed with your favorite ingredients and baked to perfection"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/80 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-terracotta text-ivory font-light hover:bg-terracotta/90 transition-colors duration-300 text-lg"
            >
              Explore Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-charcoal/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">What Our Customers Say</h2>
            <p className="text-charcoal/80 font-light mb-4">Real reviews from real customers</p>
            <div className="h-px w-16 bg-terracotta mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-charcoal/10 rounded-full flex items-center justify-center text-xl">
                    ⭐
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif text-charcoal">{review.name}</h4>
                    <div className="flex text-terracotta">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-charcoal/80 font-light italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-terracotta text-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Taste Authentic Italy?
          </motion.h2>
          <motion.p
            className="text-ivory/90 font-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit us today or order online for the best Italian dining experience in New Oxford
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="tel:7176246280"
              className="px-8 py-4 bg-ivory text-terracotta font-light hover:bg-ivory/90 transition-colors duration-300 text-lg"
            >
              Call to Order
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-ivory text-ivory font-light hover:bg-ivory hover:text-terracotta transition-colors duration-300 text-lg"
            >
              Get Directions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-charcoal mb-6">Hours & Location</h2>
            <div className="h-px w-16 bg-terracotta mb-6" />

            <div className="mb-8">
              <h3 className="text-xl font-serif text-charcoal mb-4">Business Hours</h3>
              <div className="space-y-2 text-charcoal/80 font-light">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-charcoal/50">CLOSED</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday - Thursday</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Location</h3>
              <address className="not-italic text-charcoal/80 font-light">
                <p className="mb-2">27 Stoney Point Rd</p>
                <p className="mb-2">New Oxford, PA 17350</p>
                <p className="mb-4">
                  <a href="tel:7176246280" className="text-terracotta hover:underline">
                    (717) 624-6280
                  </a>
                </p>
              </address>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.234567890123!2d-77.0566!3d39.8635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUxJzQ4LjYiTiA3N8KwMDMnMjMuNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}