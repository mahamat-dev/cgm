import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Search, Truck, FileCheck, Handshake, Leaf, ShoppingBag, Target, Globe2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-semibold shadow-sm backdrop-blur-md mb-6">
            ChadGlobal Market
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 text-white tracking-tight">
            Connecting Markets, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Delivering Trust</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reliable Trade & Supply Partner from Chad. We source and export agricultural commodities and import essential goods with transparent processes and consistent quality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-slate-900 leading-tight">
                Reliable Trade & Supply Partner from Chad
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  ChadGlobal Market is an international trade and supply company based in Chad, specializing in the sourcing and export of agricultural commodities and the import of essential goods.
                </p>
                <p>
                  We work directly with local producers and trusted suppliers to deliver export-ready products, supported by proper documentation, transparent processes, and consistent quality.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="h-12 px-8 rounded-full text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                    Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white bg-slate-100">
              <OptimizedImage
                src="/container_transport_2.jpeg"
                alt="Warehouse and logistics"
                className="absolute inset-0 w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-[1.5s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Global Reach</div>
                    <div className="text-xl font-bold text-slate-900">International Standards</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Globe2 className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From sourcing to shipping, we coordinate the full trade cycle with clear documentation and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Search,
                title: 'B2B Trade & Sourcing',
                desc: 'Supplying international buyers with quality products sourced from trusted local producers in Chad. We manage the entire sourcing process to ensure consistency, compliance, and reliability.',
                color: 'bg-blue-50 text-blue-600 border-blue-100'
              },
              {
                icon: Leaf,
                title: 'Export of Agricultural Commodities',
                desc: 'We source and export selected agricultural products from Chad, prepared to meet international quality standards and market requirements.',
                color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
              },
              {
                icon: ShoppingBag,
                title: 'Import & Supply of Essential Goods',
                desc: 'Importing and distributing essential goods to meet local and regional market demand through reliable supply chains.',
                color: 'bg-amber-50 text-amber-600 border-amber-100'
              },
              {
                icon: Handshake,
                title: 'B2B Matchmaking & Partnership Facilitation',
                desc: 'Connecting international buyers with verified local producers and suppliers in Chad while overseeing sourcing, negotiation, and transaction coordination.',
                color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
              },
              {
                icon: FileCheck,
                title: 'Trade Documentation & Compliance',
                desc: 'Handling export and import documentation, including invoices, packing lists, certificates of origin, and other required compliance documents.',
                color: 'bg-purple-50 text-purple-600 border-purple-100'
              },
              {
                icon: Truck,
                title: 'Logistics Coordination',
                desc: 'Coordinating transportation, freight forwarding, and delivery to ensure efficient and timely shipment of goods.',
                color: 'bg-slate-50 text-slate-700 border-slate-200'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-left"
              >
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

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To connect markets and deliver quality general goods with honesty, efficiency, and professionalism.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become a trusted global market partner for general goods supply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
