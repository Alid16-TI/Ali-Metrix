import { useEffect, useState } from "react";
import djLive from "@/assets/alimetrix-dj-live.jpg";
import alidPortrait from "@/assets/alid-portrait.png";
import logo from "@/assets/alimetrix-logo.jpg";
import trophy from "@/assets/trophy-gold.jpg";

const WHATSAPP =
  "https://wa.me/593961459689?text=Hola%20quiero%20informaci%C3%B3n";
const INSTAGRAM = "https://instagram.com/alid_flores";
const TIKTOK = "https://www.tiktok.com/@dj_alid";
const EMAIL = "mailto:alidflores18@gmail.com";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#estilo", label: "Estilo" },
  { href: "#logros", label: "Logros" },
  { href: "#contacto", label: "Contacto" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="" className="w-7 h-7 object-cover rounded-sm" />
          <span className="font-display text-sm tracking-[0.2em] font-medium">
            ALI<span className="text-violet">:</span>METRIX
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.18em] uppercase text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-cyan transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="relative text-[11px] tracking-[0.22em] uppercase px-4 py-2.5 text-foreground border border-violet/50 hover:border-violet hover:bg-violet/10 transition-all duration-500"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden grain"
    >
      <img
        src={djLive}
        alt="ALI:METRIX en cabina durante un set en vivo"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="reveal-slow space-y-8 max-w-4xl">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet" />
            </span>
            <span className="text-foreground/80">10 Years Experience</span>
            <span className="w-8 h-px bg-border" />
            <span>Santa Elena × Riobamba</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight">
            Energía sin <span className="festival-gradient-text">fronteras</span>.
            <br />
            <span className="text-foreground/70 italic font-extralight">
              Géneros sin límites.
            </span>
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            DJ ecuatoriano especializado en sets de alta energía, lectura de pista en
            tiempo real y experiencias que conectan clubes, festivales y audiencias.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 text-[12px] tracking-[0.22em] uppercase font-medium text-white overflow-hidden transition-all duration-500"
              style={{
                background:
                  "linear-gradient(135deg, var(--violet), var(--electric) 60%, var(--cyan))",
              }}
            >
              <span className="relative z-10">Bookings</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition" />
            </a>
            <a
              href="#trayectoria"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[12px] tracking-[0.22em] uppercase hover:border-cyan hover:text-cyan transition-all duration-500"
            >
              Ver Trayectoria
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet transition"
            >
              @alid_flores
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a
              href={TIKTOK}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan transition"
            >
              @dj_alid
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 lg:right-10 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 rotate-90 origin-bottom-right hidden lg:block">
        Press Kit / 2026
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "10", label: "Años en escena", accent: "violet" },
    { value: "02", label: "Campeonatos nacionales", accent: "gold" },
    { value: "50+", label: "Eventos & residencias", accent: "cyan" },
    { value: "09", label: "Géneros dominados", accent: "electric" },
  ];
  return (
    <section className="relative py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src={alidPortrait}
                alt="Alid Flores — ALI:METRIX"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border" />
              <div className="absolute -inset-px pointer-events-none">
                <div className="absolute top-0 left-0 w-12 h-px bg-violet" />
                <div className="absolute top-0 left-0 w-px h-12 bg-violet" />
                <div className="absolute bottom-0 right-0 w-12 h-px bg-cyan" />
                <div className="absolute bottom-0 right-0 w-px h-12 bg-cyan" />
              </div>
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-white/90 backdrop-blur-sm bg-black/30 px-2 py-1">
                ALI:METRIX / 001
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="text-[11px] tracking-[0.3em] uppercase text-violet">
                — Sobre el Artista
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-light leading-tight">
                Entender al público antes de{" "}
                <span className="festival-gradient-text italic">encender</span> la pista.
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed font-light max-w-xl">
              <p>
                DJ ALI:METRIX es uno de los talentos más versátiles del circuito musical
                ecuatoriano. Con casi una década en cabinas, su nombre se ha consolidado
                como sinónimo de energía, conexión con el público y sets capaces de
                adaptarse a cualquier ambiente.
              </p>
              <p>
                Nacido en Santa Elena y actualmente basado entre Santa Elena y Riobamba,
                ha construido su carrera desde cero — posicionándose como una propuesta
                sólida para clubes, residencias, festivales y eventos premium.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative bg-background p-5 group overflow-hidden"
                >
                  <div
                    className={`font-display text-3xl font-light ${
                      s.accent === "gold" ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {s.label}
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ${
                      s.accent === "gold"
                        ? "bg-gold"
                        : s.accent === "cyan"
                          ? "bg-cyan"
                          : s.accent === "electric"
                            ? "bg-electric"
                            : "bg-violet"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { year: "2016", title: "Inicio de carrera", text: "Eventos privados en Santa Elena." },
  { year: "2017", title: "Color Fest", text: "Festival carnavalesco." },
  { year: "2018", title: "Mariana Fest", text: "Festival electrónico juvenil." },
  { year: "2019", title: "Clubes", text: "Desarrollo en circuito de clubes." },
  { year: "2022", title: "Expansión a Riobamba", text: "Nuevo territorio, nueva audiencia." },
  {
    year: "2024",
    title: "Consolidación profesional",
    text: "Residencias · Opening Don Kolo · Campamento Electrónico.",
  },
  {
    year: "2025",
    title: "Bicampeón Nacional",
    text: "Campeón DJs Riobamba · Campeón DJ Sunset CUP Salinas.",
    highlight: true,
  },
  {
    year: "2026",
    title: "Actualidad",
    text: "House en playas y residencias en Santa Elena y Riobamba.",
  },
];

function Timeline() {
  return (
    <section
      id="trayectoria"
      className="relative py-32 lg:py-40 px-6 lg:px-10 bg-card/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="text-[11px] tracking-[0.3em] uppercase text-cyan">
            — Trayectoria
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-light leading-tight">
            Una década construida
            <br />
            paso a paso.
          </h2>
        </div>

        <ol className="relative ml-2">
          <span
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--violet) 20%, var(--cyan) 80%, transparent)",
              opacity: 0.4,
            }}
          />
          {TIMELINE.map((t) => (
            <li key={t.year} className="pl-10 pb-14 last:pb-0 relative group">
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  t.highlight
                    ? "bg-gold ring-4 ring-gold/20"
                    : "bg-foreground/40 group-hover:bg-violet group-hover:ring-4 group-hover:ring-violet/20"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <div
                  className={`font-display text-sm tracking-[0.2em] ${
                    t.highlight ? "text-gold" : "text-muted-foreground"
                  } shrink-0 sm:w-20`}
                >
                  {t.year}
                </div>
                <div className="space-y-1.5">
                  <h3
                    className={`font-display text-xl font-light ${
                      t.highlight ? "text-gold" : "text-foreground"
                    } flex items-center gap-2`}
                  >
                    {t.highlight && <span>🏆</span>}
                    {t.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-md leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const GENRES = [
  { name: "House", color: "cyan" },
  { name: "Electrónica", color: "violet" },
  { name: "Reggaetón", color: "electric" },
  { name: "Dembow", color: "violet" },
  { name: "Salsa", color: "cyan" },
  { name: "Merengue", color: "electric" },
  { name: "Hip-Hop", color: "violet" },
  { name: "Pop Commercial", color: "cyan" },
  { name: "Rock Edits", color: "electric" },
];

const SKILLS = [
  { name: "Lectura de pista", value: 98 },
  { name: "Manejo de energía", value: 96 },
  { name: "Mezcla multi-género", value: 95 },
  { name: "Adaptación de públicos", value: 97 },
  { name: "Control del dancefloor", value: 94 },
  { name: "Selección estratégica", value: 96 },
];

function Style() {
  return (
    <section id="estilo" className="relative py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-violet">
              — Estilo Musical
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-light leading-tight">
              Multi-género
              <br />
              <span className="festival-gradient-text italic">sin compromiso</span>.
            </h2>
            <p className="text-muted-foreground font-light max-w-md leading-relaxed pt-2">
              De la cadencia tropical al pulso electrónico. Cada set se construye en
              tiempo real, leyendo el momento exacto del dancefloor.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {GENRES.map((g) => {
              const colorClass =
                g.color === "cyan"
                  ? "hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_-5px_var(--cyan)]"
                  : g.color === "violet"
                    ? "hover:border-violet hover:text-violet hover:shadow-[0_0_20px_-5px_var(--violet)]"
                    : "hover:border-electric hover:text-electric hover:shadow-[0_0_20px_-5px_var(--electric)]";
              return (
                <span
                  key={g.name}
                  className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase border border-border text-muted-foreground transition-all duration-500 cursor-default ${colorClass}`}
                >
                  {g.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-[11px] tracking-[0.3em] uppercase text-cyan mb-2">
            Habilidades Técnicas
          </div>
          {SKILLS.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-light">{s.name}</span>
                <span className="text-[10px] tracking-[0.2em] font-display text-foreground/70">
                  {s.value.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="h-px bg-border relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${s.value}%`,
                    background:
                      "linear-gradient(90deg, var(--violet), var(--electric) 60%, var(--cyan))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ACHIEVEMENTS = [
  { year: "2025", title: "Campeón Nacional", sub: "DJs Riobamba", champ: true },
  { year: "2025", title: "Campeón Nacional", sub: "DJ Sunset CUP Salinas", champ: true },
  { year: "2024", title: "Opening Act", sub: "Don Kolo" },
  { year: "2018", title: "Mariana Fest", sub: "Festival electrónico" },
  { year: "2017", title: "Color Fest", sub: "Festival carnavalesco" },
];

function Achievements() {
  return (
    <section
      id="logros"
      className="relative py-32 lg:py-40 px-6 lg:px-10 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold">
                — Logros
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-light leading-tight">
                Bicampeón{" "}
                <span className="gold-gradient-text italic">nacional</span>.
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-sm pt-2">
                Reconocimientos que validan una década de trabajo detrás de los platos.
              </p>
            </div>
            <div className="relative aspect-square max-w-[280px] mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gold/15 blur-3xl" />
              <img
                src={trophy}
                alt="Trofeo dorado campeonato nacional"
                className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(229,180,80,0.35)]"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-px bg-border">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className={`group relative bg-background p-7 lg:p-9 flex items-center justify-between gap-6 transition-all duration-500 ${
                  a.champ
                    ? "border-l-2 border-l-gold hover:bg-gold/[0.04]"
                    : "border-l-2 border-l-transparent hover:bg-card"
                }`}
              >
                <div className="flex items-baseline gap-8">
                  <span
                    className={`font-display text-sm tracking-[0.2em] ${
                      a.champ ? "text-gold" : "text-muted-foreground"
                    } w-14`}
                  >
                    {a.year}
                  </span>
                  <div>
                    <div
                      className={`font-display text-lg lg:text-xl font-light flex items-center gap-3 ${
                        a.champ ? "text-gold" : "text-foreground"
                      }`}
                    >
                      {a.champ && <span>🏆</span>}
                      {a.title}
                    </div>
                    <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      {a.sub}
                    </div>
                  </div>
                </div>
                <span
                  className={`opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    a.champ ? "text-gold" : "text-violet"
                  }`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border">
          <div className="text-[11px] tracking-[0.3em] uppercase text-cyan mb-6">
            Residencias & Experiencia
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-light text-foreground/80">
            {[
              "Sunset — Salinas",
              "La Herencia del Changarro",
              "Amadeus",
              "Clubes Riobamba",
              "Clubes Salinas",
              "Eventos privados",
              "Festivales nacionales",
            ].map((r) => (
              <span
                key={r}
                className="hover:text-violet transition-colors cursor-default"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-32 lg:py-44 px-6 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/40" />
      <div className="absolute top-0 inset-x-0 h-px hairline opacity-50" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-violet">
          — Bookings
        </div>
        <h2 className="font-display text-4xl lg:text-6xl font-light leading-[1.05]">
          Haz que la energía
          <br />
          <span className="italic festival-gradient-text">hable</span>.
        </h2>
        <p className="text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Disponible para clubes, festivales, eventos privados y bookings nacionales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-[12px] tracking-[0.22em] uppercase text-white transition-all duration-500 hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, var(--violet), var(--electric) 60%, var(--cyan))",
            }}
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto border border-border px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:border-violet hover:text-violet transition-all duration-500"
          >
            Instagram
          </a>
          <a
            href={TIKTOK}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto border border-border px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:border-cyan hover:text-cyan transition-all duration-500"
          >
            TikTok
          </a>
        </div>

        <div className="pt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          0961459689 · alidflores18@gmail.com
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="ALI:METRIX" className="w-10 h-10 object-cover rounded-sm" />
          <div>
            <div className="font-display text-sm tracking-[0.2em]">
              ALI<span className="text-violet">:</span>METRIX
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
              Ecuador · Worldwide
            </div>
          </div>
        </div>

        <div className="flex md:justify-center gap-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-violet">
            IG
          </a>
          <a href={TIKTOK} target="_blank" rel="noreferrer" className="hover:text-cyan">
            TT
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-electric">
            WA
          </a>
          <a href={EMAIL} className="hover:text-violet">
            Mail
          </a>
        </div>

        <div className="md:text-right text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          © 2026 Alid Flores · Ecuador
        </div>
      </div>
    </footer>
  );
}

function FloatingSocials() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group w-11 h-11 flex items-center justify-center backdrop-blur-xl bg-background/70 border border-border hover:border-electric hover:bg-electric/10 transition-all duration-500"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-foreground/80 group-hover:text-electric transition-colors"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.9 3.3 1.4 5.2 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="group w-11 h-11 flex items-center justify-center backdrop-blur-xl bg-background/70 border border-border hover:border-violet hover:bg-violet/10 transition-all duration-500"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-foreground/80 group-hover:text-violet transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <a
        href={TIKTOK}
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        className="group w-11 h-11 flex items-center justify-center backdrop-blur-xl bg-background/70 border border-border hover:border-cyan hover:bg-cyan/10 transition-all duration-500"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-foreground/80 group-hover:text-cyan transition-colors"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.91a4.85 4.85 0 0 1-1.84-.22z" />
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Style />
      <Achievements />
      <CTA />
      <Footer />
      <FloatingSocials />
    </main>
  );
}
