import { useEffect, useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { navLinks, shop } from '@/data/shop';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-[#e4dfd5] bg-[#f7f5f0]/95 py-3 backdrop-blur-md' : 'border-transparent bg-[#f7f5f0]/80 py-5 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => handleNav('#start')} className="group flex items-center gap-2.5" aria-label="Elan Barbershop – nach oben scrollen">
          <Scissors className="h-5 w-5 text-[#a57d42] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-lg font-semibold tracking-[0.2em] text-[#181817] sm:text-xl">ELAN</span>
          <span className="hidden text-[10px] font-light tracking-[0.35em] text-[#6d6a63] sm:inline">BARBERSHOP</span>
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)} className="group relative text-sm font-medium text-[#54514a] transition-colors hover:text-[#181817]">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#a57d42] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="hidden border border-[#a57d42] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#87652f] transition-all hover:bg-[#a57d42] hover:text-white sm:block">
            Route planen
          </a>
          <button onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center text-[#181817] lg:hidden" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 top-0 z-40 transform bg-[#f7f5f0] transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-full flex-col items-center justify-center gap-7">
          {navLinks.map((link, index) => (
            <button key={link.href} onClick={() => handleNav(link.href)} style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }} className={`font-serif text-3xl tracking-wide text-[#181817] transition-all duration-300 hover:text-[#98743f] ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              {link.label}
            </button>
          ))}
          <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 border border-[#a57d42] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#87652f]">Route planen</a>
        </div>
      </div>
    </header>
  );
}
