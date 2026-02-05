import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shreya Punj. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="h-3.5 w-3.5 text-warm fill-warm" /> for a purposeful career
          </p>
        </div>
      </div>
    </footer>
  );
}