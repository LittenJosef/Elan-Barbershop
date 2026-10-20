import { Check, Sparkles } from 'lucide-react';
import { packageOffer, prices } from '@/data/shop';
import { useReveal } from '@/hooks/useReveal';

export default function PriceList() {
  const { ref, visible } = useReveal();
  return (
    <section id="preise" className="bg-[#f7f5f0] py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className={`mb-14 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="eyebrow">Preisliste</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#181817] sm:text-5xl">Klar kalkuliert.</h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-[#6d6a63]">Alle Preise auf einen Blick. Ohne Termin – einfach vorbeikommen.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {prices.map((group, index) => (
            <div key={group.category} style={{ transitionDelay: `${index * 80}ms` }} className={`border-t border-[#c9c2b5] pt-5 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${index === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-[#181817]">{group.category}</h3>
              <div className="divide-y divide-[#e4dfd5]">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-4 py-4 text-sm">
                    <span className="text-[#54514a]">{item.name}</span>
                    <span className="shrink-0 font-semibold text-[#181817]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`relative mt-10 overflow-hidden border border-[#b8945a] bg-[#1c1c1a] p-7 text-white shadow-xl shadow-[#181817]/10 transition-all duration-700 sm:p-9 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#b8945a]/10" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[#d4b77e]"><Sparkles className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Komplettangebot</span></div>
              <h3 className="font-serif text-3xl font-semibold">{packageOffer.name}</h3>
              <p className="mt-1 text-sm font-light text-white/65">{packageOffer.description}</p>
            </div>
            <div className="flex items-center gap-4 sm:text-right"><div className="hidden h-10 w-px bg-white/20 sm:block" /><span className="font-serif text-4xl text-[#d4b77e]">{packageOffer.price}</span></div>
          </div>
          <div className="relative mt-6 flex items-center gap-2 text-xs text-white/60"><Check className="h-4 w-4 text-[#d4b77e]" /> Haare, Bart und Gesichtsbehandlung in einem Paket</div>
        </div>
      </div>
    </section>
  );
}
