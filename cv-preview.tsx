import { useState } from "react";
import { profiles, type Profile } from "@/data/site";
import { cn } from "@/lib/utils";

type Layout = "editorial" | "compact";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function CvDevice({
  profile,
  layout,
  inverted = false,
}: {
  profile: Profile;
  layout: Layout;
  inverted?: boolean;
}) {
  const night = inverted;
  const compact = layout === "compact";

  return (
    <div
      className={cn(
        "relative w-72 overflow-hidden rounded-device bg-fg p-2",
        night ? "shadow-device-night ring-1 ring-night-fg/25" : "shadow-device",
      )}
    >
      <div
        className={cn(
          "flex h-128 flex-col overflow-hidden rounded-xl",
          night ? "bg-night text-night-fg" : "bg-bg text-fg",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-5 pt-3 pb-2 text-kicker uppercase",
            night ? "text-night-muted" : "text-subtle",
          )}
        >
          <span>9:41</span>
          <span className="mx-auto h-4 w-16 rounded-full bg-current/20" />
          <span>ThriveCV</span>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pb-8">
          <p
            className={cn(
              "text-kicker mt-2 uppercase",
              night ? "text-night-muted" : "text-muted",
            )}
          >
            thrive.cv/{profile.slug}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                night ? "bg-night-surface text-night-fg" : "bg-surface text-fg",
              )}
            >
              {initials(profile.name)}
            </span>
            <div>
              <h3
                className={cn(
                  "font-medium leading-snug tracking-tight",
                  compact ? "font-sans text-lg" : "font-display text-xl",
                )}
              >
                {profile.name}
              </h3>
              <p
                className={cn(
                  "text-sm",
                  night ? "text-night-muted" : "text-muted",
                )}
              >
                {profile.title}
              </p>
            </div>
          </div>
          <p
            className={cn(
              "mt-3 text-sm",
              night ? "text-night-muted" : "text-muted",
            )}
          >
            {profile.place} · {profile.availability}
          </p>
          <p
            className={cn(
              "mt-5 leading-relaxed",
              compact ? "font-sans text-sm" : "font-serif text-sm",
              night ? "text-night-fg/90" : "text-fg/90",
            )}
          >
            {profile.about}
          </p>
          <p
            className={cn(
              "text-kicker mt-6 uppercase",
              night ? "text-night-muted" : "text-muted",
            )}
          >
            Now
          </p>
          <div className="mt-3 space-y-4">
            {profile.roles.map((role) => (
              <div key={role.org}>
                <p className="text-sm font-medium">
                  {role.org}
                  <span
                    className={cn(
                      "ml-2 font-sans text-xs font-medium",
                      night ? "text-night-muted" : "text-subtle",
                    )}
                  >
                    {role.years}
                  </span>
                </p>
                <p
                  className={cn(
                    "text-sm",
                    night ? "text-night-muted" : "text-muted",
                  )}
                >
                  {role.title}
                </p>
                <p
                  className={cn(
                    "mt-1 leading-relaxed",
                    compact ? "text-xs" : "text-sm",
                    night ? "text-night-fg/80" : "text-fg/80",
                  )}
                >
                  {role.note}
                </p>
              </div>
            ))}
          </div>
          <p
            className={cn(
              "text-kicker mt-6 uppercase",
              night ? "text-night-muted" : "text-muted",
            )}
          >
            Selected
          </p>
          <ul className="mt-3 space-y-1.5">
            {profile.selected.map((item) => (
              <li
                key={item}
                className={cn(
                  "text-sm",
                  night ? "text-night-fg/90" : "text-fg/90",
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center pb-2.5">
          <span
            className={cn(
              "h-1 w-28 rounded-full",
              night ? "bg-night-fg/30" : "bg-fg/25",
            )}
          />
        </div>
      </div>
    </div>
  );
}

export function CvDemo() {
  const [activeId, setActiveId] = useState(profiles[0].id);
  const [layout, setLayout] = useState<Layout>("editorial");
  const profile = profiles.find((item) => item.id === activeId) ?? profiles[0];

  return (
    <section id="cv" className="bg-night text-night-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <p className="text-kicker text-night-muted uppercase">The CV</p>
          <h2 className="font-display text-title mt-4">
            What they open. Not what you attached.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-night-muted">
            Three living pages. Switch people, then type. Editorial for a
            letter; compact for a screen in a corridor.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Sample CVs"
          >
            {profiles.map((item) => {
              const on = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150 ease-out",
                    on
                      ? "bg-night-fg text-night"
                      : "text-night-fg shadow-night-ring hover:bg-night-surface",
                  )}
                >
                  {item.name.split(" ")[0]}
                </button>
              );
            })}
          </div>

          <fieldset className="mt-8">
            <legend className="text-kicker text-night-muted mb-2 uppercase">
              Layout
            </legend>
            <div className="flex w-fit rounded-full p-1 shadow-night-ring">
              {(["editorial", "compact"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLayout(value)}
                  className={cn(
                    "h-9 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150 ease-out",
                    layout === value
                      ? "bg-night-fg text-night"
                      : "text-night-muted hover:text-night-fg",
                  )}
                >
                  {value === "editorial" ? "Editorial" : "Compact"}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CvDevice profile={profile} layout={layout} inverted />
        </div>
      </div>
    </section>
  );
}
