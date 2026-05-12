import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src={logo} alt="Arvionixa" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The blockchain-secured registry for academic credentials.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Product</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Platform</Link></li>
            <li><Link to="/about" className="hover:text-primary">Security</Link></li>
            <li><Link to="/about" className="hover:text-primary">Network</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Headquarters</div>
          <div className="mt-2 text-sm leading-relaxed">
            1920 McKinney Ave<br />Dallas, TX 75201, USA
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>32.78° N, 96.80° W</span>
            <span className="flex items-center gap-1.5 text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" /> OPERATIONAL
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] text-muted-foreground sm:flex-row">
          <p>© 2026 Arvionixa Systems Inc. Built for institutional permanence.</p>
          <div className="flex gap-6 font-mono uppercase tracking-widest">
            <a href="#">Privacy</a><a href="#">Legal</a><a href="#">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}