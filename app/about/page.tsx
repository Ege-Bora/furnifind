import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, Sparkles, ShoppingBag, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - FurniFind',
  description: 'Learn about FurniFind and our mission to make furniture discovery effortless through AI.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About FurniFind</h1>

          {/* Mission Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Making furniture discovery effortless through AI-powered visual search.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Founded in 2025, FurniFind was created to solve a simple problem: finding furniture that matches your style shouldn't be difficult.
              </p>
              <p className="text-gray-700 mb-4">
                We've all experienced it—you see a beautiful piece of furniture in a photo, a friend's home, or while browsing social media, and you wonder, "Where can I find something like that?" Traditional text-based searches fall short when you're trying to describe the exact style, color, or design you have in mind.
              </p>
              <p className="text-gray-700 mb-4">
                That's where FurniFind comes in. Our AI-powered platform helps you discover similar furniture from top retailers by simply uploading a photo. No more endless scrolling or vague text searches. Just upload, and let our AI do the work.
              </p>
              <p className="text-gray-700 mb-4">
                We partner with leading furniture retailers to bring you the best selection at competitive prices, making it easier than ever to find and purchase the furniture you love.
              </p>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Upload</h3>
                <p className="text-gray-700">
                  Drag & drop or select any furniture photo from your device.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. AI Analysis</h3>
                <p className="text-gray-700">
                  Our AI identifies the furniture type, style, color, and material.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Shop</h3>
                <p className="text-gray-700">
                  Browse similar products from trusted stores and make your purchase.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-700">
                  We're upfront about our affiliate partnerships and how we earn revenue.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User-First</h3>
                <p className="text-gray-700">
                  Your experience and satisfaction are our top priorities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-700">
                  We work with reputable retailers to ensure quality products.
                </p>
              </div>
            </div>
          </section>

          {/* Our Affiliate Partners Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
              Our Affiliate Partners
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              We partner with leading retailers across AWIN and CJ Affiliate networks, including Wayfair, Maisons du Monde, La Redoute, Etsy, and specialty furniture brands across Europe.
            </p>

            {/* Partner Networks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {/* CJ Affiliate Partners */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">CJ Affiliate Network</h3>
                <div className="space-y-2">
                  {['Wayfair', 'Joss & Main', 'AllModern', 'Birch Lane'].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AWIN Partners */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">AWIN Network</h3>
                <div className="space-y-2">
                  {['Maisons du Monde', 'La Redoute', 'Etsy', 'Hoffmann Germany', 'OTTO Office', 'Happy Lamps'].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-700">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500">
              14 verified affiliate partners with active programs
            </p>
          </section>

          {/* Disclosure Section */}
          <section className="mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Affiliate Disclosure</h3>
              <p className="text-gray-700">
                FurniFind participates in affiliate programs with furniture retailers. When you make a purchase through our links, we may earn a commission at no additional cost to you. This helps us provide our service for free while maintaining transparency and quality recommendations.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
