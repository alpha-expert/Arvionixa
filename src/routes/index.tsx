import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, KeyRound, GraduationCap, Building2, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ImageSlider } from "@/components/image-slider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arvionixa — Blockchain-Verified Academic Credentials" },
      { name: "description", content: "The secure, blockchain-powered exchange for academic transcripts, diplomas, and certificates. Headquartered in Dallas, Texas." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 pt-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pt-36">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Blockchain Verified Network
            </div>
            <h1 className="mt-6 font-[Inter_Tight] text-5xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-7xl">
              The immutable ledger for{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                academic truth.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Arvionixa is a Dallas-based platform for the secure, electronic exchange of transcripts, diplomas, and certificates — for students, institutions, and employers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Request access <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="rounded-lg border border-border bg-card/60 px-6 py-3.5 font-semibold backdrop-blur-md transition-colors hover:bg-card"
              >
                How it works
              </Link>
            </div>

            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["14M+", "Credentials"],
                ["2,400+", "Institutions"],
                ["0%", "Fraud rate"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="font-[Inter_Tight] text-3xl font-extrabold">{stat}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
              <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="size-12 rounded-lg bg-[image:var(--gradient-primary)]" />
                  <div className="text-right font-mono text-[10px] uppercase leading-tight text-muted-foreground">
                    Certificate ID<br />
                    <span className="text-foreground">0x882A···F92</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    Authenticated Diploma
                  </div>
                  <div className="mt-2 font-[Inter_Tight] text-3xl font-extrabold leading-tight">
                    Master of Science in Cryptography
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    University of North Texas • Class of 2026
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Verification Latency
                      </div>
                      <div className="mt-1 font-[Inter_Tight] text-2xl font-bold">1.24ms</div>
                    </div>
                    <div className="grid size-16 place-items-center rounded-lg border border-border bg-background/40">
                      <div className="grid grid-cols-4 gap-0.5">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="size-1.5"
                            style={{ background: Math.random() > 0.5 ? "var(--primary)" : "transparent" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SLIDER */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                The platform
              </div>
              <h2 className="mt-3 max-w-2xl font-[Inter_Tight] text-4xl font-extrabold tracking-tight md:text-5xl">
                A full-stack credential infrastructure.
              </h2>
            </div>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-y border-border bg-card/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-[Inter_Tight] text-4xl font-extrabold tracking-tight md:text-5xl">
            Engineered for the entire ecosystem.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { Icon: GraduationCap, eyebrow: "01 // Students", title: "Own your legacy", body: "Carry your entire academic history in a secure digital wallet. Share verified credentials in a single click." },
              { Icon: Building2, eyebrow: "02 // Institutions", title: "Zero-friction issuance", body: "Issue tamper-proof diplomas at scale. Cut administrative overhead by 90% with cryptographic signing." },
              { Icon: Briefcase, eyebrow: "03 // Employers", title: "Absolute certainty", body: "Verify any candidate's academic background in seconds with mathematically proven authenticity." },
            ].map(({ Icon, eyebrow, title, body }) => (
              <div key={title} className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/40">
                <Icon className="size-7 text-primary" />
                <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-primary">{eyebrow}</div>
                <h3 className="mt-2 font-[Inter_Tight] text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">How it works</div>
              <h2 className="mt-3 font-[Inter_Tight] text-4xl font-extrabold tracking-tight md:text-5xl">
                Three steps from issuance to verification.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                A cryptographic pipeline that turns any academic record into a portable, verifiable, lifetime asset.
              </p>
            </div>
            <ol className="space-y-6">
              {[
                { Icon: KeyRound, t: "Issue", d: "Registrars sign a credential with the institution's private key. The hash is committed to the ledger." },
                { Icon: ShieldCheck, t: "Anchor", d: "The signed credential is permanently anchored on-chain — immutable, timestamped, auditable." },
                { Icon: Zap, t: "Verify", d: "Any third party can verify in milliseconds without contacting the issuing institution." },
              ].map(({ Icon, t, d }, i) => (
                <li key={t} className="flex gap-6 rounded-2xl border border-border bg-card p-6">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Step 0{i + 1}
                    </div>
                    <div className="mt-1 font-[Inter_Tight] text-2xl font-bold">{t}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-[Inter_Tight] text-3xl font-extrabold md:text-4xl">
                Ready to secure your institution's credentials?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Talk to our Dallas team about onboarding your registrar, employer pipeline, or alumni network.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
