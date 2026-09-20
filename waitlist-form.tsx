import { useEffect, useId, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "thrivecv-waitlist";
const EVENT_NAME = "thrivecv-waitlist";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function emailSafe(value: string) {
  return value.trim().toLowerCase();
}

function hasAnySaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) && list.length > 0;
  } catch {
    return false;
  }
}

function remember(email: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: string[] = raw ? (JSON.parse(raw) as string[]) : [];
    if (!list.includes(email)) {
      list.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  } catch {
    // Private mode — still show success.
  }
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function WaitlistForm({
  tone = "day",
  id,
}: {
  tone?: "day" | "night";
  id?: string;
}) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const night = tone === "night";

  useEffect(() => {
    const sync = () => {
      if (hasAnySaved()) setDone(true);
    };
    sync();
    window.addEventListener(EVENT_NAME, sync);
    return () => window.removeEventListener(EVENT_NAME, sync);
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = emailSafe(email);
    if (!isEmail(next)) {
      setError("Enter a real email — we will only write when a seat is ready.");
      return;
    }
    remember(next);
    setError(null);
    setDone(true);
  }

  if (done) {
    return (
      <p
        role="status"
        className={cn(
          "flex items-start gap-2.5 text-sm leading-relaxed",
          night ? "text-night-fg" : "text-fg",
        )}
      >
        <Check
          className={cn(
            "mt-0.5 size-4 shrink-0",
            night ? "text-night-fg" : "text-primary",
          )}
          strokeWidth={1.75}
        />
        <span>
          You are on the list. We will write once, when the first build is ready
          — not before.
        </span>
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <label htmlFor={fieldId} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <div
          className={cn(
            "flex h-12 items-center rounded-full px-5",
            night
              ? "bg-night-surface shadow-night-card"
              : "bg-bg shadow-card",
            "sm:min-w-0 sm:flex-1",
          )}
        >
          <Input
            id={fieldId}
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError(null);
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${fieldId}-error` : undefined}
            className={cn(
              "h-11",
              night && "text-night-fg placeholder:text-night-muted",
            )}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          variant={night ? "night" : "default"}
          className="h-12 w-full shrink-0 sm:w-auto"
        >
          Join the list
        </Button>
      </div>
      {error ? (
        <p
          id={`${fieldId}-error`}
          role="alert"
          className={cn(
            "mt-2 text-sm",
            night ? "text-night-muted" : "text-muted",
          )}
        >
          {error}
        </p>
      ) : (
        <p
          className={cn(
            "mt-2 text-sm",
            night ? "text-night-muted" : "text-muted",
          )}
        >
          No newsletter until then. Leave whenever you like.
        </p>
      )}
    </form>
  );
}
