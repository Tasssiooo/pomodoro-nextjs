import { Button } from "@/components/ui/button";

export default function InProgress() {
  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="orange"
              d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.81 9.81 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13zm5 5.37l-1.39 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63z"
            />
          </svg>
          <h2 className="font-semibold text-lg lg:text-xl">
            In progress tasks
          </h2>
        </div>
        <div role="group" className="space-x-4">
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 14h6v6H2M16 8h-6v2h6M2 10h6V4H2m8 0v2h12V4M10 20h6v-2h-6m0-2h12v-2H10"
              />
            </svg>
            <span className="sr-only">Change view to list</span>
          </Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z"
              />
            </svg>
            <span className="sr-only">Sort by</span>
          </Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"
              />
            </svg>
            <span className="sr-only">Filter by</span>
          </Button>
        </div>
      </header>
    </>
  );
}
