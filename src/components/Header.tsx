import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from './ui/Input';
import { Logo } from './ui/Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0 transition-opacity hover:opacity-90">
            <Logo />
          </Link>

          {/* Search Bar - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-auto relative group">
            <div className="relative w-full">
              <Input
                placeholder="Search products..."
                className="pl-11 pr-4 h-11 rounded-full bg-slate-100/50 border-slate-200 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1 mr-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    isActive(item.href) 
                      ? "text-primary bg-primary/5 font-semibold" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </nav>
            
            <Link to="/contact">
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-5">
          <div className="p-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
            <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-secondary/10 text-secondary"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
