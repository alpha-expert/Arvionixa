import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Arvionixa home">
          <img src={logo} alt="Arvionixa — Student Information System" className="h-9 w-auto" />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Home</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Contact</Link>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          Request Access
        </Link>
      </div>
    </nav>
  );
}