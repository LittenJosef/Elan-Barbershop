import { gallery } from '@/data/shop';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const { ref, visible } = useReveal();
  return (
    <section id="galerie" className="bg-[#f7f5f0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`mb-12 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#181817] sm:text-5xl">Frische Schnitte. Echte Ergebnisse.</h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-[#6d6a63]">Originalaufnahmen aus dem Elan Barbershop in Kleinmachnow.</p>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[260px] md:grid-cols-4">
          {gallery.map((image, index) => (
            <figure key={image.src} style={{ transitionDelay: `${index * 80}ms` }} className={`group relative overflow-hidden bg-[#ebe7df] ${image.span} transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#181817]/75 to-transparent px-4 pb-4 pt-12 text-xs font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
