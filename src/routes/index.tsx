import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Upload, Play, X, Twitter, Music2, Youtube, Facebook, Instagram, Cloud } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import creator from "@/assets/creator.jpg";
import listening from "@/assets/listening.png";
import track1 from "@/assets/track-1.jpg";
import track2 from "@/assets/track-2.jpg";
import track3 from "@/assets/track-3.jpg";
import track4 from "@/assets/track-4.jpg";
import track5 from "@/assets/track-5.jpg";
import track6 from "@/assets/track-6.jpg";
import track7 from "@/assets/track-7.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soundwave — Every scene lives here" },
      { name: "description", content: "Discover the world's largest music library — chart toppers, demos, secret tracks, remixes, and DJ sets." },
      { property: "og:title", content: "Soundwave — Every scene lives here" },
      { property: "og:description", content: "Discover the world's largest music library." },
    ],
  }),
  component: Index,
});

const slides = [
  {
    image: hero1,
    title: ["Every scene", "lives here."],
    artist: "IDEMI",
    role: "Ascending Artist",
  },
  {
    image: hero2,
    title: ["Turn it up", "after dark."],
    artist: "NOXWAVE",
    role: "Live Set",
  },
  {
    image: hero3,
    title: ["Raw takes,", "first listens."],
    artist: "MIRA LOW",
    role: "New Demo",
  },
];

const trending = [
  { img: track1, title: "30 Days", artist: "Raq baby" },
  { img: track2, title: "Obsession", artist: "ZOIG" },
  { img: track3, title: "Brackish", artist: "Of The Trees, Tape B" },
  { img: track4, title: "What's Luv?", artist: "iskey+" },
  { img: track5, title: "EAZY MF FINGER w/ Richar…", artist: "EAZYBAKED, Richard Finger" },
  { img: track6, title: "Outlaw", artist: "GRiZ" },
  { img: track7, title: "Nightcurrent", artist: "Halverune" },
];

function Index() {
  const [banner, setBanner] = useState(true);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Promo banner */}
      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-secondary"
          >
            <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 text-sm">
              <span className="text-accent">◆</span>
              <span className="font-semibold">Now available:</span>
              <span className="text-muted-foreground">Get heard by up to 100 listeners on your next upload with Artist or Artist Pro.</span>
              <a href="#" className="font-semibold underline-offset-4 hover:underline">Learn More</a>
              <button
                onClick={() => setBanner(false)}
                aria-label="Dismiss"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="px-3 pt-3">
        <div className="relative overflow-hidden rounded-2xl bg-card">
          <AnimatePresence mode="sync">
            <motion.div
              key={slide}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0"
            >
              <img
                src={current.image}
                alt=""
                className="h-full w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/30" />
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
            <a href="#" className="flex items-center gap-2 text-primary">
              <Cloud className="h-7 w-7 fill-primary" strokeWidth={1.5} />
              <span className="font-display text-xl tracking-wide">SOUNDWAVE</span>
            </a>
            <nav className="flex items-center gap-2 text-sm font-medium">
              <button className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition hover:bg-primary/90">Sign in</button>
              <button className="rounded-full bg-black px-5 py-2 text-primary ring-1 ring-white/20 transition hover:bg-white/10">Create account</button>
              <a href="#" className="hidden px-3 text-primary/80 hover:text-primary sm:inline">For artists</a>
            </nav>
          </div>

          {/* Hero content */}
          <div className="relative z-10 grid min-h-[520px] grid-rows-[1fr_auto] px-6 pb-10 sm:min-h-[600px] sm:px-12 sm:pb-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-2xl pt-8"
              >
                <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-primary sm:text-7xl">
                  {current.title[0]}<br />{current.title[1]}
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-primary/85 sm:text-base">
                  Discover the world's largest music library, with over 4X the catalog of every major platform: every chart topper you know, plus demos, secret tracks, remixes, and DJ sets you can't find anywhere else.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">Upload</button>
                  <button className="rounded-full bg-transparent px-6 py-2.5 text-sm font-semibold text-primary ring-1 ring-white/40 transition hover:bg-white/10">Explore Go+</button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-end justify-between">
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === slide ? "w-6 bg-primary" : "w-2 bg-primary/40"}`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-right text-primary"
                >
                  <div className="font-display text-lg tracking-wide">{current.artist}</div>
                  <div className="text-xs text-primary/70">{current.role}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto mt-16 max-w-2xl px-6 text-center">
        <div className="relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="search"
            placeholder="Search for artists, bands, tracks, podcasts"
            className="h-12 w-full rounded-full bg-muted pl-12 pr-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60"
          />
        </div>
        <div className="mt-5 text-sm text-muted-foreground">or</div>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
          <Upload size={16} /> Upload your own
        </button>
      </section>

      {/* Trending — sliding right-to-left */}
      <section className="mt-20 overflow-hidden">
        <h2 className="mb-8 text-center font-display text-2xl tracking-wide">Hear what's trending</h2>
        <div className="group relative">
          <motion.div
            className="flex w-max gap-5 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[...trending, ...trending].map((t, i) => (
              <div key={i} className="w-44 shrink-0 sm:w-52">
                <div className="group/card relative aspect-square overflow-hidden rounded-md bg-muted">
                  <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover/card:scale-105" />
                  <button className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground opacity-0 shadow-lg transition group-hover/card:opacity-100">
                    <Play size={16} className="ml-0.5 fill-current" />
                  </button>
                </div>
                <div className="mt-3 truncate text-sm font-semibold">{t.title}</div>
                <div className="truncate text-xs text-muted-foreground">{t.artist}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">Explore trending playlists</button>
        </div>
      </section>

      {/* Never Stop Listening */}
      <section className="mx-auto mt-32 grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Never stop<br />listening
          </h2>
          <div className="mt-8 flex items-center gap-5">
            <div className="grid h-28 w-28 place-items-center rounded-md bg-primary p-2">
              <QrPlaceholder />
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Scan to grab the app. Your library, your queue, your scene — wherever you go.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img src={listening} alt="Headphones, phone, piano keys collage" loading="lazy" className="w-full max-w-md" />
        </motion.div>
      </section>

      {/* Calling All Creators */}
      <section className="mx-auto mt-28 grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-md"
        >
          <img src={creator} alt="Artist in studio" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Calling all<br />creators
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Build a home for your sound. Connect with fans directly, share your sound with other artists, and grow your audience. What are you waiting for?
          </p>
          <button className="mt-7 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
            Find out more
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-28 max-w-6xl px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-7 text-muted-foreground">
          {[Twitter, Music2, Music2, Youtube, Facebook, Instagram].map((Icon, i) => (
            <a key={i} href="#" className="transition hover:text-foreground"><Icon size={18} /></a>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Soundwave. All rights reserved.</p>
      </footer>
    </div>
  );
}

function QrPlaceholder() {
  // Decorative QR-style grid
  const cells = Array.from({ length: 81 }, (_, i) => (i * 13) % 7 < 4);
  return (
    <div className="grid h-full w-full grid-cols-9 gap-px bg-primary">
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-primary-foreground" : "bg-primary"} />
      ))}
    </div>
  );
}
