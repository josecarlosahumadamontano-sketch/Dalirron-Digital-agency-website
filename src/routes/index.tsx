import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Globe,
  LayoutTemplate,
  Search,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import conceptCrownBlade from "@/assets/concept-crown-blade.jpg";
import conceptBellanova from "@/assets/concept-bellanova.jpg";
import conceptHarbourDental from "@/assets/concept-harbour-dental.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dalirron Digital — Helping Local Businesses Grow Online" },
      {
        name: "description",
        content:
          "Premium websites for barbers, restaurants, gyms, dentists and electricians. Book more clients with a site that looks luxury and converts.",
      },
      { property: "og:title", content: "Dalirron Digital — Helping Local Businesses Grow Online" },
      {
        property: "og:description",
        content:
          "Premium, high-converting websites for local businesses. Get a free website demo today.",
      },
    ],
  }),
  component: LandingPage,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
        [data-reveal].is-visible{opacity:1;transform:none}
        .marquee{mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
      `}</style>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQs />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- NAV ---------- */
const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_12px] shadow-accent-blue" />
          Dalirron Digital
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-all hover:border-accent-blue hover:text-accent-blue md:inline-flex"
        >
          Get a Free Demo
        </a>
        <button
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-accent-blue to-accent px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Get a Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-40 pb-24 md:pt-56 md:pb-40">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        width={1920}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div
          data-reveal
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent-blue" />
          UK-based web design for local businesses
        </div>
        <h1
          data-reveal
          className="mx-auto max-w-5xl text-5xl font-medium leading-[1.05] md:text-7xl"
        >
          Professional websites that help local businesses{" "}
          <span className="italic text-gradient-blue">get more customers.</span>
        </h1>
        <p
          data-reveal
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          We design fast, mobile-friendly websites for barbers, restaurants, gyms, dentists and
          other local businesses across the UK — built to make a strong first impression and turn
          visitors into enquiries, bookings and calls.
        </p>
        <div data-reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent px-8 py-4 text-sm font-semibold text-primary-foreground shadow-luxe transition-transform hover:scale-[1.02]"
          >
            Get a Free Website Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            View our work
          </a>
        </div>

        <div data-reveal className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {[
            "Mobile Friendly Websites",
            "Fast Loading",
            "Built for Local Businesses",
          ].map((s) => (
            <div key={s} className="text-center">
              <div className="font-display text-lg md:text-xl">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Barbers", "Restaurants", "Gyms", "Dentists", "Electricians", "Cafés", "Studios", "Clinics"];
  return (
    <div className="border-y border-border bg-secondary/30">
      <div className="marquee mx-auto flex max-w-7xl gap-12 overflow-hidden px-6 py-6">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-12">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {t} <span className="ml-12 text-accent-blue">◆</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Custom Web Design",
    desc: "Bespoke, brand-aligned designs that give your business a professional online presence customers can trust.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Build",
    desc: "Websites that look sharp and work smoothly on every phone, tablet and screen — where most of your customers browse.",
  },
  {
    icon: Search,
    title: "Local SEO Foundations",
    desc: "SEO foundations to help your website perform well in search engines.",
  },
  {
    icon: Zap,
    title: "Speed & Performance",
    desc: "Optimised for speed and performance so visitors stay, read and get in touch.",
  },
  {
    icon: Globe,
    title: "Booking & Payments",
    desc: "Integrated booking tools, contact forms and Stripe payments to make it effortless for customers to take action.",
  },
  {
    icon: Wrench,
    title: "Website Handover",
    desc: "Once the project is fully paid, you receive ownership of the completed website and the access needed to manage it. Future edits can be requested and quoted separately.",
  },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>Everything your business needs <em className="italic text-gradient-blue">to grow online.</em></>}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className="group relative bg-card p-8 transition-all hover:bg-secondary"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent-blue transition-all group-hover:border-accent-blue group-hover:shadow-[0_0_24px] group-hover:shadow-accent-blue/40">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-medium">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PORTFOLIO ---------- */
const WORK = [
  {
    img: conceptCrownBlade,
    title: "Crown & Blade",
    tag: "Barbershop Website",
    location: "Manchester, UK",
    copy: "A premium barbershop website designed to showcase services, pricing, atmosphere and booking information clearly.",
    href: "https://crown-and-blade-demo.vercel.app/",
  },
  {
    img: conceptBellanova,
    title: "Bellanova",
    tag: "Restaurant Website",
    location: "London, UK",
    copy: "An elegant restaurant website designed to present the dining experience, menu and reservation options in a polished way.",
    href: "https://bellanova-restaurant-demo.vercel.app/#home",
  },
  {
    img: conceptHarbourDental,
    title: "Harbour Dental",
    tag: "Dental Practice Website",
    location: "Brighton, UK",
    copy: "A polished dental practice website designed to build trust and make appointment enquiries simple.",
    href: "https://harbour-dental-demo.vercel.app/",
  },
];

function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Concept Website Designs" title={<>Concept websites built to <em className="italic text-gradient-blue">demonstrate what we can build.</em></>}>
      <p data-reveal className="mb-10 -mt-8 max-w-2xl text-sm text-muted-foreground">
        These are concept websites created by Dalirron Digital to showcase the quality, layout and craft
        we bring to real client work. They are not live client projects — your website will be designed
        from scratch for your business.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {WORK.map((w, i) => (
          <article
            key={w.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={w.img}
                alt={`${w.title} — ${w.tag} concept website homepage`}
                loading="lazy"
                width={1440}
                height={1080}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest text-accent-blue backdrop-blur">
                Concept Website
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="text-xs uppercase tracking-widest text-accent-blue">{w.tag}</div>
              <h3 className="mt-2 text-2xl font-medium">{w.title}</h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {w.location}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{w.copy}</p>
              <div className="mt-auto pt-6">
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-blue hover:text-accent-blue"
              >
                View Live Demo <ExternalLink className="h-4 w-4" />
              </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
const WHY = [
  { t: "Local business specialists", d: "We only build for local trades — we know what converts your kind of customer." },
  { t: "Fixed prices, no surprises", d: "Transparent pricing with everything included. No nickel-and-diming." },
  { t: "Fast, reliable turnaround", d: "Most small-business websites can be completed within 2–4 weeks, depending on the project." },
  { t: "Conversion-focused design", d: "Every button, section and word is engineered to drive bookings." },
  { t: "Real humans, real support", d: "Text or call your dedicated project lead — no ticket queues." },
  { t: "Own everything you build", d: "You get full ownership of your site, code and content. Always." },
];

function WhyChooseUs() {
  return (
    <Section id="why" eyebrow="Why Dalirron" title={<>The details others <em className="italic text-gradient-blue">overlook.</em></>}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <div key={w.t} data-reveal style={{ transitionDelay: `${i * 60}ms` }} className="border-l border-accent-blue/40 pl-6">
            <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full border border-accent-blue/60 bg-accent-blue/10 text-accent-blue">
              <Check className="h-3.5 w-3.5" />
            </div>
            <h3 className="mb-2 text-lg font-medium">{w.t}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{w.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: "01", t: "Initial Consultation", d: "We discuss your business, goals, customers and website requirements." },
  { n: "02", t: "Homepage Preview", d: "We create a free initial homepage concept so you can see the direction before committing." },
  { n: "03", t: "Design & Build", d: "After the deposit is paid, we complete the website and the agreed rounds of revisions." },
  { n: "04", t: "Launch & Handover", d: "After final approval and payment, we launch the website and provide the relevant ownership and access details." },
];

function Process() {
  return (
    <Section id="process" eyebrow="Our Process" title={<>A simple path from <em className="italic text-gradient-blue">idea to launch.</em></>}>
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
            className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent-blue/60"
          >
            <div className="font-display text-5xl text-accent-blue/80">{s.n}</div>
            <h3 className="mt-4 text-lg font-medium">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>Building our <em className="italic text-gradient-blue">first success stories.</em></>}
    >
      <div data-reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          We&apos;re currently accepting our first client projects. Genuine reviews and case studies
          will be added as completed websites go live.
        </p>
      </div>
    </Section>
  );
}

/* ---------- PRICING ---------- */
const PLANS = [
  {
    name: "Starter Website",
    price: "Request a Quote",
    tagline: "Perfect for a one-location business ready to look professional.",
    features: ["Up to 5 pages", "Mobile-first design", "Contact form", "Local SEO basics", "1 round of revisions"],
  },
  {
    name: "Business Website",
    price: "Request a Quote",
    tagline: "Our most popular — built to turn more visitors into enquiries and bookings.",
    features: ["Up to 10 pages", "Online bookings", "Copywriting included", "Advanced local SEO", "3 rounds of revisions", "Website handover on completion"],
    featured: true,
  },
  {
    name: "Bespoke Website",
    price: "Request a Quote",
    tagline: "Bespoke design & premium build for established local brands.",
    features: ["Larger multi-page build", "Custom animations", "Payments & memberships", "Full SEO strategy", "Agreed rounds of revisions", "Website handover on completion"],
  },
];

function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Clear quotes. <em className="italic text-gradient-blue">No unexpected costs.</em></>}
      subtitle="Every project receives an agreed written quote before work begins. Any additional work is discussed and approved first."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p, i) => (
          <div
            key={p.name}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
              p.featured
                ? "border-accent-blue bg-gradient-to-b from-accent-blue/10 to-transparent shadow-luxe"
                : "border-border bg-card hover:border-foreground/30"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-accent-blue to-accent px-3 py-1 text-xs font-medium text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground">{p.name}</h3>
            <div className="mt-4">
              <span className="font-display text-3xl md:text-4xl">{p.price}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out will-change-transform ${
                p.featured
                  ? "bg-gradient-to-r from-accent-blue to-accent text-primary-foreground hover:scale-[1.02] active:scale-[0.98]"
                  : "border border-border bg-foreground/[0.02] text-foreground hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/[0.06] hover:text-foreground active:translate-y-0 active:scale-[0.97]"
              }`}
            >
              Get a Free Website Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQs ---------- */
const FAQ = [
  { q: "How long does it take to launch a website?", a: "Most small businesses are completed within 2–4 weeks depending on the project's scope and requirements." },
  { q: "Do I own the site once it’s built?", a: "Yes — once the final payment has been made, you receive ownership of the completed website, its code and the custom content created for your project. Any third-party services, images, fonts or software remain subject to their own licences." },
  { q: "Can you write my content and copy?", a: "Absolutely. Copywriting is included in Growth and Signature. We can also start from your existing content." },
  { q: "Do you handle hosting and updates?", a: "We can help set up the domain and hosting in your name. After launch, the website is yours. Future updates can be requested and quoted separately." },
  { q: "What if I already have a website?", a: "We’ll audit it for free and either redesign or rebuild — whichever gives you the best return." },
  { q: "Do you work with businesses outside my industry?", a: "We specialise in local and service-based businesses, and we're happy to consider businesses across a wide range of industries." },
];

function FAQs() {
  return (
    <Section id="faqs" eyebrow="FAQs" title={<>Answers before <em className="italic text-gradient-blue">you even ask.</em></>}>
      <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {FAQ.map((f, i) => (
          <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/60"
        aria-expanded={open}
      >
        <span className="text-base font-medium md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180 text-accent-blue" : ""
          }`}
        />
      </button>
      <div
        ref={ref}
        style={{ maxHeight: open ? (ref.current?.scrollHeight ? `${ref.current.scrollHeight}px` : "400px") : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-out"
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-hero-glow" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-8 md:p-14 lg:grid-cols-2">
          <div data-reveal>
            <div className="mb-4 text-xs uppercase tracking-widest text-accent-blue">
              Get a Free Website Demo
            </div>
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              Let’s build the site that <em className="italic text-gradient-blue">grows your business.</em>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Tell us about your business. We’ll design a free live demo of your website — no cost,
              no obligation. See it before you commit.
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              We usually reply within one working day.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:dalirrondigital@gmail.com" className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-accent-blue" /> dalirrondigital@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+447916702846" className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-accent-blue" /> 07916 702846
                </a>
              </li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent-blue" /> Remote — working with local businesses online</li>
            </ul>
          </div>
          <form
            data-reveal
            action="https://formspree.io/f/xwvgnjzn"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              const form = e.currentTarget;
              const data = new FormData(form);
              // Honeypot spam check — if filled, silently "succeed"
              if ((data.get("_gotcha") as string)?.trim()) {
                setSent(true);
                return;
              }
              setSubmitting(true);
              try {
                const res = await fetch("https://formspree.io/f/xwvgnjzn", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: data,
                });
                if (res.ok) {
                  setSent(true);
                  form.reset();
                } else {
                  const payload = await res.json().catch(() => null);
                  const msg = payload?.errors?.[0]?.message;
                  setError(msg || "Something went wrong. Please try again, or reach us by email or WhatsApp.");
                }
              } catch {
                setError("Network error. Please try again, or reach us by email or WhatsApp.");
              } finally {
                setSubmitting(false);
              }
            }}
            className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur md:p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent-blue to-accent">
                  <Check className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-medium">Request received.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We’ll be in touch within one business day with your free demo.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Your name" name="name" placeholder="Your full name" required />
                <Field label="Business name" name="business" placeholder="Your business name" required />
                <Field label="Email" name="email" type="email" placeholder="you@yourbusiness.com" required />
                <Field label="Industry" name="industry" placeholder="Barber, restaurant, gym, dentist…" />
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Goals, existing site, timeline…"
                    className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-accent-blue focus:bg-secondary/70"
                  />
                </div>
                {/* Honeypot field — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <input type="hidden" name="_subject" value="New website demo request — Dalirron Digital" />
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                  >
                    {error} You can also email{" "}
                    <a href="mailto:dalirrondigital@gmail.com" className="underline">dalirrondigital@gmail.com</a>{" "}
                    or message us on{" "}
                    <a href="https://wa.me/447916702846" target="_blank" rel="noopener noreferrer" className="underline">WhatsApp</a>.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent px-8 py-4 text-sm font-semibold text-primary-foreground shadow-luxe transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? "Sending…" : "Get a Free Website Demo"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-accent-blue focus:bg-secondary/70"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:items-start">
        <div className="min-w-0">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_12px] shadow-accent-blue" />
            Dalirron<span className="text-muted-foreground">/</span>Digital
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium websites for local businesses. Built to grow you online.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-widest text-accent-blue">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:dalirrondigital@gmail.com" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 text-accent-blue" /> dalirrondigital@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+447916702846" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-accent-blue" /> 07916 702846
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Dalirron Digital.
          <br />All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FAB ---------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/447916702846"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dalirron Digital on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.11 17.28c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.17 2.95.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.18 1.6 6l-1.6 5.85 6-1.57A11.94 11.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.94c-1.83 0-3.62-.49-5.19-1.41l-.37-.22-3.56.93.95-3.47-.24-.36A9.95 9.95 0 1 1 25.94 16 9.95 9.95 0 0 1 16 25.94z" />
      </svg>
    </a>
  );
}

/* ---------- LAYOUT HELPER ---------- */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <div data-reveal className="mb-4 text-xs uppercase tracking-[0.3em] text-accent-blue">
            {eyebrow}
          </div>
          <h2 data-reveal className="text-4xl font-medium leading-[1.1] md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p data-reveal className="mt-5 text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}