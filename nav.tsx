import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/landing/mark";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out",
        scrolled
          ? "border-border bg-bg/92 shadow-card backdrop-blur-md"
          : "border-transparent bg-bg/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-150 ease-out hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#waitlist">Get ThriveCV</a>
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu strokeWidth={1.75} />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-fg/20" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex flex-col bg-bg px-5 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] focus:outline-none"
              aria-describedby={undefined}
            >
              <div className="flex h-12 items-center justify-between">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <BrandMark />
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X strokeWidth={1.75} />
                  </Button>
                </Dialog.Close>
              </div>
              <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Dialog.Close asChild key={link.href}>
                    <a
                      href={link.href}
                      className="font-display text-title py-3 text-fg"
                    >
                      {link.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>
              <div className="mt-auto">
                <Dialog.Close asChild>
                  <Button asChild size="lg" className="w-full">
                    <a href="#waitlist">Get ThriveCV</a>
                  </Button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
