"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyles =
    "inline-flex gap-x-2 items-center whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent rounded-md w-full h-10 px-4 py-2";

  return (
    <nav>
      <ul className="flex flex-col space-y-2.5">
        <li>
          <Link
            href="/"
            className={cn(
              linkStyles,
              pathname === "/" ? "bg-primary text-accent hover:bg-primary" : ""
            )}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 15h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
                />
              </svg>
            </span>
            Inbox
          </Link>
        </li>
        <li>
          <Link
            href="/in-progress"
            className={cn(
              linkStyles,
              pathname === "/in-progress"
                ? "bg-primary text-accent hover:bg-primary"
                : ""
            )}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.81 9.81 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13zm5 5.37l-1.39 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63z"
                />
              </svg>
            </span>
            In progress
          </Link>
        </li>
        <li>
          <Link
            href="/completed"
            className={cn(
              linkStyles,
              pathname === "/completed"
                ? "bg-primary text-accent hover:bg-primary"
                : ""
            )}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z"
                />
              </svg>
            </span>
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  );
}
