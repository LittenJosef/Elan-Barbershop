import { useReveal } from '@/hooks/useReveal';
import { serviceImages } from '@/data/shop';

const serviceCopy = [
  { title: 'Klassische Herrenhaarschnitte', description: 'Trockenschnitt oder Waschen, Schneiden und Stylen – sauber, präzise und passend zu deinem Stil.' },
  { title: 'Moderne Fades', description: 'Saubere Linien und weiche Übergänge für einen modernen Look mit sichtbarer Präzision.' },
  { title: 'Bart & Gesichtspflege', description: 'Konturen, Bartrasur, Waxing und Fadentechnik als passende Ergänzung zum Haarschnitt.' },
];

export default function Services() {
  const { ref, visible } = useReveal();
  return (
    <section id="leistungen" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`mx-auto mb-16 max-w-2xl text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#181817] sm:text-5xl">Handwerk für Herren</h2>
          <p className="mt-4 text-base font-light leading-relaxed text-[#6d6a63]">Vom klassischen Schnitt bis zum modernen Fade – mit Blick fürs Detail und einem klaren Fokus auf Herrenhaarschnitte.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCopy.map((service, index) => (
            <article key={service.title} style={{ transitionDelay: `${index * 100}ms` }} className={`group border border-[#e4dfd5] bg-[#f7f5f0] transition-all duration-700 hover:-translate-y-1 hover:border-[#b8945a] hover:shadow-xl hover:shadow-[#181817]/5 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative h-72 overflow-hidden">
                <img src={serviceImages[index]} alt={service.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181817]/60 to-transparent" />
                <span className="absolute left-5 top-5 font-serif text-3xl text-white/80">0{index + 1}</span>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-[#181817]">{service.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#6d6a63]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
