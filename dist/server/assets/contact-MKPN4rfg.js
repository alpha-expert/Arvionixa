import { V as jsxRuntimeExports } from "./server-xTAsFYYP.js";
import { S as SiteNav, a as SiteFooter } from "./site-footer-DTEH1QFf.js";
import { c as createLucideIcon } from "./createLucideIcon-B8NM0rJ5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DQ5HhCYT.js";
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-24 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 max-w-3xl font-[Inter_Tight] text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl", children: "Let's secure your credentials." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Tell us about your institution, employer use case, or partnership idea. Our Dallas team replies within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          alert("Thanks — we'll be in touch shortly.");
        }, className: "space-y-6 rounded-3xl border border-border bg-card p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", placeholder: "Jane Doe" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", name: "email", type: "email", placeholder: "jane@university.edu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", name: "org", placeholder: "University of North Texas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, placeholder: "Tell us a bit about your needs…", className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5", children: "Send message" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { Icon: MapPin, title: "Headquarters", body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "1920 McKinney Avenue",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Dallas, TX 75201, USA"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { Icon: Mail, title: "Email", body: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@arvionixa.com", className: "hover:text-primary", children: "hello@arvionixa.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { Icon: Phone, title: "Phone", body: "+1 (214) 555-0142" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, placeholder, className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" })
  ] });
}
function ContactCard({
  Icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm leading-relaxed", children: body })
    ] })
  ] });
}
export {
  ContactPage as component
};
