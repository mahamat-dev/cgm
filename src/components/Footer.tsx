import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';
import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo variant="default" theme="dark" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your reliable source for quality general goods. We connect markets and deliver quality products with honesty, efficiency, and professionalism.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                  <div className="h-4 w-4 bg-slate-400 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-white hover:pl-2 transition-all text-sm inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Our Products</h3>
            <ul className="space-y-3">
              {[
                'Sesame Seeds',
                'Gum Arabic',
                'Groundnuts',
                'Solar Systems',
                'Mobile Accessories'
              ].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-slate-400 hover:text-white hover:pl-2 transition-all text-sm inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 group">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs mb-0.5">Email us</span>
                  info@chadglobalmarket.com
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs mb-0.5">Call us</span>
                  +235 69 03 04 05
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs mb-0.5">Working Hours</span>
                  Mon – Sat | 8:00 AM – 6:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Chad Global Market. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
