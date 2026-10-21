import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import { heroImage, shop } from '@/data/shop';

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="start" className="relative overflow-hidden bg-[#f7f5f0] pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-24">
        <div className="order-2 lg:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a57d42]" />
            <span className="eyebrow">Kleinmachnow · Herrenfriseur</span>
          </div>
          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[0.98] text-[#181817] sm:text-6xl lg:text-7xl">{shop.tagline}</h1>
          <p className="mt-7 max-w-lg text-lg font-light leading-relaxed text-[#625f57]">{shop.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollTo('#oeffnungszeiten')} className="group flex items-center justify-center gap-2.5 bg-[#181817] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#a57d42]">
              <MapPin className="h-4 w-4" /> Standort ansehen
            </button>
            <button onClick={() => scrollTo('#preise')} className="group flex items-center justify-center gap-2.5 border border-[#c9c2b5] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#312f2b] transition-all hover:border-[#181817]">
              Preise entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#ded8cc] pt-5 text-sm text-[#625f57]">
            <span className="font-medium text-[#181817]">Ohne Termin</span>
            <span>Einfach vorbeikommen</span>
            <span>Mo–Fr 09–19 Uhr</span>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -right-3 -top-3 h-full w-full border border-[#c9a96a]/60 sm:-right-5 sm:-top-5" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#eae5dc] sm:aspect-[5/6]">
            <img src={heroImage} alt="Frischer Fade-Haarschnitt bei Elan Barbershop" className="h-full w-full object-cover object-center" loading="eager" />
          </div>
          <div className="absolute -bottom-5 -left-4 bg-white px-5 py-4 shadow-xl shadow-black/5 sm:-left-8">
            <p className="eyebrow">Elan Barbershop</p>
            <p className="mt-1 font-serif text-xl text-[#181817]">Präzision, die man sieht.</p>
          </div>
        </div>
      </div>
      <button onClick={() => scrollTo('#leistungen')} className="mx-auto mb-7 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8d887e] transition-colors hover:text-[#98743f] sm:flex" aria-label="Zu den Leistungen scrollen">
        Entdecken <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
