import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { shop } from '@/data/shop';
import { useReveal } from '@/hooks/useReveal';

const todayName = () => ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][new Date().getDay()];

export default function Hours() {
  const { ref, visible } = useReveal();
  const today = todayName();
  return (
    <section id="oeffnungszeiten" className="bg-white py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`mb-14 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="eyebrow">Öffnungszeiten & Standort</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#181817] sm:text-5xl">Wann & Wo</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={`border border-[#e4dfd5] bg-[#f7f5f0] p-8 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-6 flex items-center gap-3 text-[#98743f]"><Clock className="h-5 w-5" /><h3 className="font-serif text-2xl font-semibold text-[#181817]">Öffnungszeiten</h3></div>
            <dl className="divide-y divide-[#e4dfd5]">
              {shop.hours.map((row) => {
                const isToday = row.day === today;
                return <div key={row.day} className={`flex items-center justify-between py-3.5 ${isToday ? 'bg-[#e9dfcf] px-3 -mx-3' : ''}`}><dt className="flex items-center gap-2 text-sm text-[#54514a]">{row.day}{isToday && <span className="text-[10px] font-semibold uppercase tracking-wider text-[#98743f]">Heute</span>}</dt><dd className={`text-sm ${row.closed ? 'text-[#aaa49a]' : 'font-medium text-[#181817]'}`}>{row.time}</dd></div>;
              })}
            </dl>
            <div className="mt-8 border-t border-[#ded8cc] pt-6"><p className="font-serif text-2xl text-[#181817]">Einfach vorbeikommen.</p><p className="mt-1 text-sm text-[#6d6a63]">Kein Termin erforderlich.</p></div>
          </div>
          <div style={{ transitionDelay: '120ms' }} className={`flex flex-col transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-5 border border-[#e4dfd5] bg-[#f7f5f0] p-8">
              <div className="mb-5 flex items-center gap-3 text-[#98743f]"><MapPin className="h-5 w-5" /><h3 className="font-serif text-2xl font-semibold text-[#181817]">Kontakt</h3></div>
              <p className="text-base leading-relaxed text-[#54514a]">{shop.name}<br />{shop.address.street}<br />{shop.address.zip} {shop.address.city}</p>
              <div className="mt-5 grid gap-2 text-sm text-[#54514a] sm:grid-cols-2"><a href={shop.phoneHref} className="flex items-center gap-2 hover:text-[#98743f]"><Phone className="h-4 w-4 text-[#98743f]" />{shop.phone}</a><a href={`mailto:${shop.email}`} className="flex items-center gap-2 hover:text-[#98743f]"><Mail className="h-4 w-4 text-[#98743f]" />{shop.email}</a></div>
              <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center justify-center gap-2.5 bg-[#181817] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#a57d42]"><Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />Route planen</a>
            </div>
            <div className="relative min-h-[240px] flex-1 overflow-hidden border border-[#e4dfd5]"><iframe title="Karte – Elan Barbershop, Kleinmachnow" src={shop.mapsEmbedUrl} className="h-full min-h-[240px] w-full" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
