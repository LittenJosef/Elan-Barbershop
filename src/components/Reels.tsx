import { Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import { reels, shop } from '@/data/shop';
import { useReveal } from '@/hooks/useReveal';

export default function Reels() {
  const { ref, visible } = useReveal();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [soundIndex, setSoundIndex] = useState<number | null>(null);

  const activateVideo = (index: number) => {
    videoRefs.current.forEach((video, otherIndex) => {
      if (otherIndex !== index && video) {
        video.pause();
        video.muted = true;
      }
    });
    setSoundIndex(index);
  };

  const toggleSound = (index: number) => {
    setSoundIndex((currentIndex) => currentIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <p className="eyebrow">Einblicke</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#181817] sm:text-5xl">Unsere Arbeit in Bewegung</h2>
          </div>
          <a href={shop.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#98743f] transition-colors hover:text-[#181817]">@elanbarber_2021</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reels.map((reel, index) => (
            <article key={reel.videoSrc} style={{ transitionDelay: `${index * 100}ms` }} className={`group overflow-hidden border border-[#e4dfd5] bg-[#f7f5f0] transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#181817]/5 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative mx-auto aspect-[9/14] max-h-[560px] overflow-hidden bg-[#ebe7df]">
                <video
                  ref={(video) => { videoRefs.current[index] = video; }}
                  src={reel.videoSrc}
                  title={reel.title}
                  controls
                  playsInline
                  preload="metadata"
                  muted={soundIndex !== index}
                  onPlay={() => activateVideo(index)}
                  onVolumeChange={(event) => {
                    if (!event.currentTarget.muted) activateVideo(index);
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => toggleSound(index)}
                  className="absolute right-4 top-4 flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#181817] shadow-lg transition-colors hover:bg-[#181817] hover:text-white"
                  aria-label={soundIndex === index ? 'Ton ausschalten' : 'Ton einschalten'}
                >
                  {soundIndex === index ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  {soundIndex === index ? 'Ton an' : 'Ton aus'}
                </button>
              </div>
              <div className="p-6"><h3 className="font-serif text-2xl font-semibold text-[#181817]">{reel.title}</h3><p className="mt-1 text-sm font-light text-[#6d6a63]">{reel.description}</p></div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-relaxed text-[#8d887e]">Beide Videos starten zunächst ohne Ton. Über „Ton an“ kannst du den Sound aktivieren; beim Wechsel wird das andere Video automatisch stumm geschaltet.</p>
      </div>
    </section>
  );
}
