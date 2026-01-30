'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size={40} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-none">
                  FurniFind
                </span>
                <span className="text-xs text-gray-600 font-medium">AI-Powered Discovery</span>
              </div>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="px-2.5 py-1 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-md"
              >
                BETA
              </motion.span>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <motion.button
              onClick={() => scrollToSection('how-it-works')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors font-medium rounded-lg hover:bg-purple-50 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>How It Works</span>
            </motion.button>
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-800 hover:text-purple-600 transition-colors font-medium rounded-lg hover:bg-purple-50 flex items-center space-x-2 cursor-pointer"
              >
                <Info className="w-4 h-4" />
                <span>About</span>
              </motion.div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - dark overlay for better contrast */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            />

            {/* Menu Drawer - solid white background */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                  <Logo size={32} />
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    FurniFind
                  </span>
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 rounded-full transition-colors shadow-sm"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="p-6 space-y-2">
                <motion.button
                  onClick={() => scrollToSection('how-it-works')}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-4 text-left text-gray-800 hover:text-purple-600 transition-colors font-medium rounded-xl hover:bg-purple-50 flex items-center space-x-3"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>How It Works</span>
                </motion.button>
                <Link href="/about" className="block">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-4 text-left text-gray-800 hover:text-purple-600 transition-colors font-medium rounded-xl hover:bg-purple-50 flex items-center space-x-3 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Info className="w-5 h-5" />
                    <span>About</span>
                  </motion.div>
                </Link>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  AI-Powered Furniture Discovery
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
