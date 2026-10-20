import { Scissors, MapPin, Clock, Navigation, Instagram, Mail, Phone } from 'lucide-react';
import { shop } from '@/data/shop';

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-[#ded8cc] bg-[#1c1c1a] pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Scissors className="h-5 w-5 text-gold-500" />
              <span className="font-serif text-xl font-semibold tracking-[0.2em] text-cream-50">
                ELAN BARBERSHOP
              </span>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-cream-300">
              Moderne Herrenhaarschnitte und präzise Fades in Kleinmachnow.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm font-light text-cream-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream-300" />
                <span>{shop.address.full}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream-300" />
                <a href={shop.phoneHref} className="transition-colors hover:text-gold-400">{shop.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cream-300" />
                <a href={`mailto:${shop.email}`} className="transition-colors hover:text-gold-400">{shop.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cream-300" />
                <span>
                  Mo–Fr 09–19 Uhr
                  <br />
                  Sa 09–18 Uhr · So geschlossen
                </span>
              </li>
            </ul>
            <button
              onClick={() => window.open(shop.mapsUrl, '_blank', 'noopener,noreferrer')}
              className="group mt-5 flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-500"
            >
              <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              Route planen
            </button>
          </div>

          {/* Social / links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Folgen
            </h3>
            {shop.instagram ? (
              <a
                href={shop.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-light text-cream-200 transition-colors hover:text-gold-400"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            ) : (
              <p className="text-sm font-light text-cream-300/50">
                Social-Media-Links folgen nach Bestätigung des echten Profils.
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-ink-700/40 pt-6">
          <p className="text-center text-xs font-light leading-relaxed text-cream-300/60">
            © {new Date().getFullYear()} {shop.name}. Alle Rechte vorbehalten.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[11px] font-light leading-relaxed text-cream-300/40">
            Einfach vorbeikommen – kein Termin erforderlich.
          </p>
        </div>
      </div>
    </footer>
  );
}
