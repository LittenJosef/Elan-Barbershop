import { Scissors, Sparkles, UserRound } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  { icon: Scissors, title: 'Fokus auf Herren', text: 'Klassische und moderne Herrenhaarschnitte – klar ausgerichtet auf deinen Look.' },
  { icon: Sparkles, title: 'Präzise Fades', text: 'Saubere Linien und weiche Übergänge für Ergebnisse, die auch im Detail überzeugen.' },
  { icon: UserRound, title: 'Ohne Termin', text: 'Einfach vorbeikommen – kein Termin erforderlich.' },
];

export default function WhyElan() {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#1c1c1a] py-24 text-white sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className={`mb-14 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4b77e]">Warum Elan</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Fokus auf das Wesentliche</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} style={{ transitionDelay: `${index * 100}ms` }} className={`text-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-[#b8945a]/60 text-[#d4b77e]"><feature.icon className="h-6 w-6" /></div>
              <h3 className="font-serif text-2xl font-semibold">{feature.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-relaxed text-white/65">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
