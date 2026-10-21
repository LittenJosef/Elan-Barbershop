export const shop = {
  name: 'Elan Barbershop',
  tagline: 'Dein Style. Dein Schnitt. Dein ELAN.',
  subtitle: 'Moderne Herrenhaarschnitte und präzise Fades in Kleinmachnow.',
  address: {
    street: 'Zehlendorfer Damm 107',
    zip: '14532',
    city: 'Kleinmachnow',
    country: 'Deutschland',
    full: 'Zehlendorfer Damm 107, 14532 Kleinmachnow, Deutschland',
  },
  phone: '0163 2014432',
  phoneHref: 'tel:+491632014432',
  email: 'barberelan21@gmail.com',
  instagram: 'https://www.instagram.com/elanbarber_2021/',
  hours: [
    { day: 'Montag', time: '09:00 – 19:00' },
    { day: 'Dienstag', time: '09:00 – 19:00' },
    { day: 'Mittwoch', time: '09:00 – 19:00' },
    { day: 'Donnerstag', time: '09:00 – 19:00' },
    { day: 'Freitag', time: '09:00 – 19:00' },
    { day: 'Samstag', time: '09:00 – 18:00' },
    { day: 'Sonntag', time: 'Geschlossen', closed: true },
  ],
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Zehlendorfer+Damm+107+14532+Kleinmachnow',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Zehlendorfer+Damm+107+14532+Kleinmachnow&output=embed',
};

export const prices = [
  {
    category: 'Haarschnitte',
    items: [
      { name: 'Trockenschnitt', price: '20 €' },
      { name: 'Waschen, Schneiden und Stylen', price: '23 €' },
      { name: 'Kinderhaarschnitt bis einschließlich 12 Jahre', price: '15 €' },
    ],
  },
  {
    category: 'Bartpflege',
    items: [{ name: 'Bartrasur / Kontur', price: '15 €' }],
  },
  {
    category: 'Extras & Gesichtspflege',
    items: [
      { name: 'Waxing (Ohren und Nase)', price: '6 €' },
      { name: 'Waxing Gesicht', price: '10 €' },
      { name: 'Fadentechnik', price: '10 €' },
    ],
  },
];

export const packageOffer = {
  name: 'Herrenpaket',
  description: 'Haare, Bart und Gesichtsbehandlung',
  price: '50 €',
};

const imagePath = (filename: string) => `/images/gallery/${filename}`;

export const heroImage = '/images/IMG_1325 copy 2.webp';

export const gallery = [
  {
    src: imagePath('25b4d3e0-4db5-4493-8f26-769530161ebf.jpeg'),
    alt: 'Kinderhaarschnitt im Elan Barbershop',
    label: 'Junior Cut',
    span: 'md:row-span-2',
  },
  {
    src: imagePath('9ea5a32b-5233-4973-8463-ca6746ec9b6c.jpeg'),
    alt: 'Elan Barbershop Logo',
    label: 'Elan Barbershop',
    span: '',
  },
  {
    src: imagePath('850097023_3536027926574562_4254535497540787741_n copy.jpg'),
    alt: 'Frischer Fade-Haarschnitt im Seitenprofil',
    label: 'Fade · Seitenprofil',
    span: '',
  },
  {
    src: imagePath('852600380_1165223356177140_2983769012915701227_n_(1) copy.jpg'),
    alt: 'Moderner Herrenhaarschnitt mit präzisem Übergang',
    label: 'Moderner Schnitt',
    span: '',
  },
  {
    src: imagePath('852642358_1826419378549070_3266586720669650540_n_(1) copy.jpg'),
    alt: 'Klassischer Herrenhaarschnitt mit sauberer Kontur',
    label: 'Clean Cut',
    span: '',
  },
  {
    src: imagePath('852642358_2528536617556693_4143592609402703289_n copy.jpg'),
    alt: 'Herrenhaarschnitt mit Bart und präziser Kontur',
    label: 'Cut & Beard',
    span: 'md:row-span-2',
  },
  {
    src: imagePath('856834706_889488290916768_6861227009213742649_n copy.jpg'),
    alt: 'Barbershop-Atmosphäre mit Spiegel und frischem Schnitt',
    label: 'Im Shop',
    span: '',
  },
];

export const serviceImages = [
  gallery[0].src,
  '/images/ab3a2f27-19f4-4163-8737-234a681b4a74.jpeg',
  gallery[5].src,
];

export const reels = [
  {
    title: 'Preise & Leistungen',
    description: 'Die Leistungen und Preise von Elan Barbershop.',
    videoSrc: '/videos/WhatsApp_Video_2026-10-20_at_21.52.25.mp4',
  },
  {
    title: 'Fade im Detail',
    description: 'Ein Blick auf das Ergebnis eines präzisen Fades.',
    videoSrc: '/videos/WhatsApp_Video_2026-10-20_at_21.55.31.mp4',
  },
];

export const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Preise', href: '#preise' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
];
