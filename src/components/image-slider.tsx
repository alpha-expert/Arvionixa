import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

const slides = [
  {
    image: slide1,
    eyebrow: "01 // Cryptographic Diplomas",
    title: "Tamper-proof certificates, signed on-chain.",
    body: "Every diploma issued through Arvionixa carries a unique cryptographic signature anchored to the ledger — impossible to forge, instantly verifiable.",
  },
  {
    image: slide2,
    eyebrow: "02 // Student Sovereignty",
    title: "Your record. Your wallet. Forever.",
    body: "Students hold their academic identity in a self-custodied wallet, sharing transcripts with employers or universities in a single click.",
  },
  {
    image: slide3,
    eyebrow: "03 // Institutional Infrastructure",
    title: "Enterprise-grade nodes for registrars.",
    body: "Universities issue, revoke, and update credentials through a private, FERPA-compliant infrastructure that scales to millions of records.",
  },
  {
    image: slide4,
    eyebrow: "04 // Headquartered in Dallas",
    title: "Built in Texas for the global workforce.",
    body: "From the heart of the Dallas tech corridor, our team partners with institutions and employers across six continents.",
  },
];

export function ImageSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[16/9] w-full">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <img
              src={s.image}
              alt={s.title}
              width={1600}
              height={1000}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                  {s.eyebrow}
                </div>
                <h3 className="mt-3 font-[Inter_Tight] text-3xl font-extrabold leading-tight md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* controls */}
      <div className="absolute right-4 top-4 flex gap-2 md:right-6 md:top-6">
        <button
          onClick={prev}
          className="grid size-10 place-items-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-background"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={next}
          className="grid size-10 place-items-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-background"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 right-6 flex gap-2 md:bottom-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full bg-foreground/30 transition-all"
            style={{ width: i === index ? 32 : 12, background: i === index ? "var(--primary)" : undefined }}
          />
        ))}
      </div>
    </div>
  );
}