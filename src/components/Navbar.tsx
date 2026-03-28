'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sản phẩm', href: '/#products' },
    { label: 'Câu chuyện', href: '/#story' },
    { label: 'Quy trình', href: '/#process' },
    { label: 'Khách hàng', href: '/#testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Liên hệ', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-pearl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="font-display text-xl font-light tracking-wide text-charcoal group-hover:text-gold transition-colors duration-300">
                AI Agent Services
              </span>
              <div className="h-px w-10 bg-gold mt-1 group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <Link href="/#contact" className="btn-luxury btn-luxury-primary text-xs px-5 py-2.5">
              Tư Vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-pearl pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-luxury btn-luxury-primary w-full text-xs text-center mt-4 block py-3">
              Tư Vấn
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
