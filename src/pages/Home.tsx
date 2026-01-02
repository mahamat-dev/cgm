import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ArrowRight, ShoppingBag, Truck, FileText, Handshake, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-emerald-50 to-white py-16 lg:py-28">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm border border-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Export • Import • Supply
              </div>

              <h1 className="mt-6 mb-4 text-4xl font-bold font-heading leading-tight sm:text-5xl lg:text-6xl text-foreground">
                ChadGlobal Market
              </h1>
              <h2 className="mb-6 text-2xl font-semibold text-primary sm:text-3xl">
                Reliable Trade & Supply Partner from Chad
              </h2>

              <p className="mb-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We source and export premium agricultural commodities from Chad and supply essential goods through trusted import channels—backed by export-ready documentation and reliable communication.
              </p>

              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0 text-left">
                {[
                  "Direct sourcing from producers",
                  "Bulk / wholesale supply",
                  "Export documentation support",
                  "Consistent quality checks"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white p-4 shadow-sm">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="font-semibold text-slate-900">{item}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button size="lg" className="gap-2 h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                    Browse Our Products
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg rounded-full border-2 bg-white/60 hover:bg-white">
                    Contact Us Today
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-white/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-black/0 pointer-events-none" />
                <OptimizedImage
                  src="/container_transport.jpeg"
                  alt="Container transport and logistics"
                  className="w-full h-auto object-cover aspect-[16/11] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3">
                  <div className="rounded-full bg-white/85 backdrop-blur-sm px-4 py-2 text-sm font-bold text-slate-900 shadow-sm">
                    International Logistics
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    <Truck className="h-4 w-4 text-primary" />
                    Fast coordination
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Direct sourcing", value: "Chad" },
                      { label: "Order model", value: "RFQ" },
                      { label: "Supply", value: "Wholesale" }
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-white/85 backdrop-blur-sm p-4 shadow-sm border border-white/60">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                        <div className="text-lg font-bold text-slate-900 mt-1">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trade solutions connecting Chad to the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Agro-commodity Export", desc: "Sourcing and exporting premium Chadian agricultural products." },
              { icon: ShoppingBag, title: "Import & Supply", desc: "Wholesale supply of essential goods, solar systems, and electronics." },
              { icon: FileText, title: "Documentation Support", desc: "Full assistance with export/import paperwork and compliance." },
              { icon: Handshake, title: "Buyer Matchmaking", desc: "Connecting international buyers with trusted local suppliers." }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From premium agricultural exports to essential modern goods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Sesame Seeds (White & Brown)",
              "Gum Arabic",
              "Groundnuts (Peanuts)",
              "Dried Hibiscus (Karkadé)",
              "Solar Lamps & Systems",
              "Mobile Phones & Accessories"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                 <span className="font-medium text-lg">{item}</span>
               </div>
             ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Choose Us?</h2>
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl">
                  We build long-term partnerships based on trust, quality, and reliability.
                </p>
                <ul className="space-y-4">
                  {[
                    "Direct sourcing from Chad",
                    "Export-ready documentation",
                    "Reliable communication",
                    "Long-term partnership approach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-md w-full text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to cooperate?</h3>
                  <p className="mb-8 opacity-90">Contact us today for quotations and cooperation.</p>
                  <Link to="/contact">
                    <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 rounded-xl">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
