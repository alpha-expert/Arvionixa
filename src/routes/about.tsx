import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import slide3 from "@/assets/slide-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Arvionixa — Dallas Blockchain Credentials Company" },
      { name: "description", content: "Arvionixa is a Dallas-headquartered company building the global infrastructure for verifiable academic credentials on blockchain." },
      { property: "og:title", content: "About Arvionixa" },
      { property: "og:description", content: "Building the global infrastructure for verifiable academic credentials." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">About Arvionixa</div>
        <h1 className="mt-4 max-w-4xl font-[Inter_Tight] text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl">
          We're rebuilding the infrastructure of academic trust.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Arvionixa is a tech-enabled service company headquartered in Dallas, Texas. We design and operate the secure, blockchain-anchored network that institutions, students, and employers use to exchange academic credentials with absolute confidence.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto aspect-[16/7] max-w-7xl overflow-hidden rounded-3xl border border-border">
          <img
            src={slide3}
            alt="Arvionixa secure infrastructure"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-card/40 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Our mission</div>
            <h2 className="mt-3 font-[Inter_Tight] text-3xl font-extrabold md:text-4xl">
              End credential fraud. Empower learners. Free institutions from paperwork.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Every year, billions of dollars are wasted verifying academic records and chasing forged diplomas. Arvionixa replaces that broken pipeline with a single source of truth: a permissioned blockchain where every credential is signed by its issuer, owned by its student, and verifiable in milliseconds by any employer or institution on earth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="max-w-2xl font-[Inter_Tight] text-4xl font-extrabold tracking-tight md:text-5xl">
          The principles we build on.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { t: "Sovereignty", d: "Students own their credentials. No registrar gatekeepers, no fees per request, no waiting." },
            { t: "Permanence", d: "Records anchored to a tamper-proof ledger remain verifiable for a lifetime — even if an institution closes." },
            { t: "Interoperability", d: "Open standards mean any institution, employer, or background-check service can plug in." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-[Inter_Tight] text-2xl font-bold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Headquarters</div>
            <h2 className="mt-3 font-[Inter_Tight] text-3xl font-extrabold md:text-4xl">Dallas, Texas.</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Founded in the heart of the Dallas tech corridor, Arvionixa partners with North Texas universities, Fortune 500 employers, and a growing global network of academic institutions. We chose Dallas for its rare combination of academic depth, financial-services rigor, and access to one of the fastest-growing technology talent pools in the United States.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}