import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Arvionixa — Dallas, Texas" },
      { name: "description", content: "Get in touch with Arvionixa. Headquartered at 1920 McKinney Ave, Dallas, TX." },
      { property: "og:title", content: "Contact Arvionixa" },
      { property: "og:description", content: "Talk to our Dallas team about credentials, partnerships, and onboarding." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-24">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Contact</div>
        <h1 className="mt-4 max-w-3xl font-[Inter_Tight] text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Let's secure your credentials.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Tell us about your institution, employer use case, or partnership idea. Our Dallas team replies within one business day.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch shortly."); }}
            className="space-y-6 rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Doe" />
              <Field label="Work email" name="email" type="email" placeholder="jane@university.edu" />
            </div>
            <Field label="Organization" name="org" placeholder="University of North Texas" />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a bit about your needs…"
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>

          <aside className="space-y-6">
            <ContactCard Icon={MapPin} title="Headquarters" body={<>1920 McKinney Avenue<br />Dallas, TX 75201, USA</>} />
            <ContactCard Icon={Mail} title="Email" body={<a href="mailto:hello@arvionixa.com" className="hover:text-primary">hello@arvionixa.com</a>} />
            <ContactCard Icon={Phone} title="Phone" body="+1 (214) 555-0142" />
          </aside>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactCard({ Icon, title, body }: { Icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm leading-relaxed">{body}</div>
      </div>
    </div>
  );
}