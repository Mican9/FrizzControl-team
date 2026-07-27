"use client";

import { useState } from "react";
import Link from "next/link";

export function NavMenu({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      <nav className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm font-medium sm:flex">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-primary">
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Meni sa članovima tima"
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
      >
        <span className="h-0.5 w-6 rounded bg-foreground" />
        <span className="h-0.5 w-6 rounded bg-foreground" />
        <span className="h-0.5 w-6 rounded bg-foreground" />
      </button>

      {open ? (
        <nav className="absolute top-full left-1/2 z-50 mt-3 flex w-max -translate-x-1/2 flex-col items-center gap-3 rounded-2xl border border-secondary/40 bg-surface px-6 py-4 text-sm font-medium shadow-lg sm:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
