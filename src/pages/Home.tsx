import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ArrowRight, Search, ShoppingBag, Truck, FileText, FileCheck, Handshake, Leaf, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold shadow-sm animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Connecting Chad to the World
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
                  Your Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global Trade</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We bridge the gap between Chad's premium agricultural resources and the global market, ensuring quality, reliability, and seamless logistics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-14 rounded-2xl text-lg gap-2 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all hover:-translate-y-0.5">
                    Explore Products
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-14 rounded-2xl text-lg gap-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                    Get a Quote
                    <FileText className="h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="pt-8 border-t border-slate-200/60 flex flex-wrap gap-8 justify-center lg:justify-start text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>Verified Suppliers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>Export-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Image / Visual */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 bg-white">
                <OptimizedImage
                  src="/container_transport.jpeg"
                  alt="Global Logistics and Transport"
                  className="w-full h-auto object-cover aspect-[4/3] scale-105 hover:scale-110 transition-transform duration-[1.5s]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                />

                {/* Floating Glass Cards */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 animate-fade-in-left">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Logistics</div>
                    <div className="text-sm font-bold text-slate-900">Fast Delivery</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 animate-fade-in-right">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Partners</div>
                    <div className="text-sm font-bold text-slate-900">Trusted Network</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements behind image */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2.5rem] border-2 border-slate-200/60 bg-transparent" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end trade and supply services designed for reliability, compliance, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Search,
                title: "B2B Trade & Sourcing",
                desc: "Supplying international buyers with quality products sourced from trusted local producers in Chad.",
                color: "bg-blue-50 text-blue-600 border-blue-100"
              },
              {
                icon: Leaf,
                title: "Export of Agricultural Commodities",
                desc: "Sourcing and exporting selected agricultural products prepared to meet international standards.",
                color: "bg-emerald-50 text-emerald-600 border-emerald-100"
              },
              {
                icon: ShoppingBag,
                title: "Import & Supply of Essential Goods",
                desc: "Importing and distributing essential goods through reliable supply chains for local demand.",
                color: "bg-amber-50 text-amber-600 border-amber-100"
              },
              {
                icon: Handshake,
                title: "B2B Matchmaking",
                desc: "Connecting international buyers with verified local producers while coordinating negotiation and transactions.",
                color: "bg-indigo-50 text-indigo-600 border-indigo-100"
              },
              {
                icon: FileCheck,
                title: "Trade Documentation & Compliance",
                desc: "Handling invoices, packing lists, certificates of origin, and required compliance documents.",
                color: "bg-purple-50 text-purple-600 border-purple-100"
              },
              {
                icon: Truck,
                title: "Logistics Coordination",
                desc: "Coordinating freight forwarding and delivery to ensure efficient and timely shipments.",
                color: "bg-slate-50 text-slate-700 border-slate-200"
              }
            ].map((service, index) => (
              <div key={index} className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} border mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Highlights */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Featured Products</h2>
              <p className="text-lg text-slate-600">
                Discover our range of premium exports and essential imports, carefully selected for quality and value.
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="gap-2 rounded-full border-slate-300 hover:bg-white hover:text-primary transition-all">
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sesame Seeds", image: "/white_sesame_seed.jpeg", tag: "Export" },
              { name: "Gum Arabic", image: "/gome_arabic_1.jpeg", tag: "Export" },
              { name: "Groundnuts", image: "/groundnuts.jpg", tag: "Export" },
              { name: "Dried Hibiscus", image: "/hibiscus_1.jpeg", tag: "Export" },
              { name: "Solar Systems", image: "/solar_kit_1.jpeg", tag: "Import" },
              { name: "Mobile & Tech", image: "/mobile-phones-accessories.jpg", tag: "Import" }
            ].map((product, i) => (
              <Link key={i} to="/products" className="group block relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10" />
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    {product.name}
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 px-6 py-16 sm:px-12 sm:py-24 text-center lg:text-left">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-50" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                  Why Partner With <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ChadGlobal Market?</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  We don't just trade; we build bridges. Our local expertise combined with global standards ensures your business succeeds without hassles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    "Direct Source Access",
                    "Transparent Pricing",
                    "Quality Assurance",
                    "End-to-End Logistics"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
                  <p className="text-slate-300 mb-8">Get a competitive quote for your specific needs today.</p>
                  <Link to="/contact">
                    <Button size="lg" className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5">
                      Contact Us Now
                    </Button>
                  </Link>
                  <p className="mt-4 text-xs text-slate-400">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
