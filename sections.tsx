import {
  Eye,
  FileX,
  Link2,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { BrandMark } from "@/components/landing/mark";
import { CvDevice } from "@/components/landing/cv-preview";
import { Button } from "@/components/ui/button";
import { faqs, features, plans, profiles, steps, testimonials } from "@/data/site";
import { cn } from "@/lib/utils";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const featureIcons = {
  link: Link2,
  refresh: RefreshCw,
  lock: ShieldCheck,
  phone: Smartphone,
  eye: Eye,
  file: FileX,
} as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 sm:pt-16 sm:pb-24 lg:grid-cols-[1.15fr_auto] lg:gap-10 lg:pt-20">
        <div>
          <p className="hero-rise hero-rise-1 text-kicker text-muted uppercase">
            ThriveCV — paperless CVs
          </p>
          <h1 className="hero-rise hero-rise-2 font-display text-display mt-5 text-fg">
            Your CV, without the <em className="italic font-medium">paper</em>.
          </h1>
          <p className="hero-rise hero-rise-3 mt-6 max-w-lg text-lg leading-relaxed text-muted">
            A living page you keep, not a file you reprint. One private link,
            always current, readable on a phone.
          </p>
          <div className="hero-rise hero-rise-4 mt-8" id="waitlist">
            <WaitlistForm id="hero-email" />
          </div>
        </div>
        <div className="hero-rise hero-rise-4 flex justify-center lg:justify-end">
          <CvDevice profile={profiles[0]} layout="editorial" />
        </div>
      </div>
    </section>
  );
}

export function PhotoBand() {
  return (
    <section aria-label="Writing a ThriveCV at a quiet desk" className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <img
          src="/images/hero.jpg"
          alt="Over the shoulder at a pale desk, a laptop open, no printed papers in sight."
          className="aspect-video h-auto w-full object-cover"
          crossOrigin="anonymous"
        />
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-kicker text-muted uppercase">Product</p>
        <h2 className="font-display text-title mt-4">
          Built for the send, not for the printer.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Most CV tools still think in pages of A4. ThriveCV is a URL you
          control. That is the whole product.
        </p>
      </div>
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = featureIcons[feature.icon];
          return (
            <li
              key={feature.title}
              className="rounded-2xl bg-bg-warm p-6 shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-md bg-surface text-primary">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-bg-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/desk.jpg"
            alt="A pale oak desk with a closed laptop, a cup, and a plant. No paper."
            className="aspect-still h-auto w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
        <div>
          <p className="text-kicker text-muted uppercase">How it works</p>
          <h2 className="font-display text-title mt-4">
            Write it. Share the link. Keep it true.
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((step) => (
              <li key={step.n} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-2xl font-medium italic text-subtle">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-kicker text-muted uppercase">From the first pages</p>
        <h2 className="font-display text-title mt-4">
          People who were tired of version seven.
        </h2>
      </div>
      <ul className="mt-14 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="flex flex-col rounded-2xl bg-bg-warm p-6 shadow-card"
          >
            <blockquote className="font-serif text-lg leading-relaxed text-fg">
              {item.quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <img
                src={item.image}
                alt=""
                className="size-12 rounded-full object-cover"
                crossOrigin="anonymous"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="bg-bg-warm">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-kicker text-muted uppercase">Plans</p>
            <h2 className="font-display text-title mt-4">
              Pay for a page that stays yours.
            </h2>
          </div>
          <div className="flex rounded-full bg-bg p-1 shadow-card">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "h-10 min-w-24 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150 ease-out",
                !yearly ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "h-10 min-w-24 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150 ease-out",
                yearly ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
              )}
            >
              Yearly
            </button>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const period = yearly ? "year" : "month";
            return (
              <li
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-2xl p-6",
                  plan.featured
                    ? "bg-primary text-primary-fg shadow-device"
                    : "bg-bg shadow-card",
                )}
              >
                <p
                  className={cn(
                    "text-kicker uppercase",
                    plan.featured ? "text-primary-fg/70" : "text-muted",
                  )}
                >
                  {plan.name}
                </p>
                <p className="mt-4 font-display text-4xl font-medium tracking-tight tabular-nums">
                  {price === 0 ? (
                    "Free"
                  ) : (
                    <>
                      ${price}
                      <span
                        className={cn(
                          "ml-1 text-base font-sans font-medium",
                          plan.featured ? "text-primary-fg/70" : "text-muted",
                        )}
                      >
                        / {period}
                      </span>
                    </>
                  )}
                </p>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.featured ? "text-primary-fg/80" : "text-muted",
                  )}
                >
                  {plan.blurb}
                  {yearly && plan.monthly > 0 ? " Two months aside." : null}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
                  {plan.features.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span
                        className={cn(
                          "mt-2 size-1 shrink-0 rounded-full",
                          plan.featured ? "bg-primary-fg" : "bg-primary",
                        )}
                      />
                      {line}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8"
                  variant={plan.featured ? "night" : "default"}
                >
                  <a href="#waitlist">{plan.cta}</a>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-kicker text-muted uppercase">Questions</p>
      <h2 className="font-display text-title mt-4">Before you join the list.</h2>
      <Accordion.Root type="single" collapsible className="mt-12 divide-y divide-border">
        {faqs.map((item) => (
          <Accordion.Item key={item.q} value={item.q} className="py-1">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium tracking-tight transition-colors duration-150 ease-out hover:text-muted">
                {item.q}
                <ChevronDown
                  className="size-5 shrink-0 text-subtle transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
                  strokeWidth={1.6}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
              <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

export function Closing() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-night lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16">
          <p className="text-kicker text-night-muted uppercase">The list</p>
          <h2 className="font-display text-title mt-4 text-night-fg">
            Leave the printer. Take the link.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-night-muted">
            The first build goes to this list — a living CV in the browser, then
            on your phone. Not an app-store banner dressed as a waitlist.
          </p>
          <div className="mt-8">
            <WaitlistForm tone="night" id="closing-email" />
          </div>
        </div>
        <div className="min-h-64">
          <img
            src="/images/evening.jpg"
            alt="A phone slid across a cafe table, a paperless CV on the screen."
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-end md:justify-between">
      <div>
        <BrandMark />
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          A living CV you share as a link. Made in Cape Town.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a href="#features" className="hover:text-fg">
          Product
        </a>
        <a href="#cv" className="hover:text-fg">
          The CV
        </a>
        <a href="#pricing" className="hover:text-fg">
          Plans
        </a>
        <a href="#faq" className="hover:text-fg">
          Questions
        </a>
        <p className="text-subtle">© 2026 ThriveCV</p>
      </div>
    </footer>
  );
}
