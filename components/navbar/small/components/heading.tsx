import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function Heading() {
  return (
    <div className="flex flex-row justify-between items-center px-3 pt-3">
      <SheetHeader className="flex flex-row items-center space-y-0 space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          aria-hidden
          viewBox="0 0 64 64"
        >
          <path
            fill="#ef4d3c"
            d="M62 31.6C62.8 47 48.9 60 32.1 60S.4 46.2 2.1 30.9C4.5 9.4 20.4 8 32.1 8C39.2 8 60.2 1.8 62 31.6"
          />
          <path
            fill="#8cc63e"
            d="M11 27c6.2-9.6 16.8-6.8 19.6-10.4c0 6.9 5 3.5 7.5 6.6c3.2 4 4.4 11.1 8.2 12.5c-3.7-7.9 2.3-7.6-6.1-18.2c4.5 2.8 6.8 0 12.9 2.5c-5.3-8.4-13.6-6-13.6-6s5.2-4.8 9.6-2.3c-4.6-6.8-17.9 1.8-17.9 1.8s-5.5-9.4-17.3.5c6.9-2.8 14.5 0 14.5 0S15.9 10.9 11 27"
          />
          <g fill="#64892f">
            <path d="M11 27s7.3-13.5 19.9-12.3C19.8 9.6 11 20.4 11 27" />
            <path d="M13.9 14s9.2-6.9 17.3 0c-2.4-8.4-14.7-4.5-17.3 0m19.3.9c12.2 5.6 8.1 12 13.1 21c-3.4-7.5 5-21-13.1-21" />
            <path d="M28.4 14s2.8-4.2 3.8-9.4c.1-.7 3.1-.6 3 .1c-1 6.7 1.7 10.4 1.7 10.4s-2.1.7-4.7.7c-2.6.1-3.8-1.8-3.8-1.8" />
          </g>
          <ellipse cx="33.7" cy="4.6" fill="#8cc63e" rx="1.5" ry=".6" />
        </svg>
        <SheetTitle className="font-semibold text-lg">Pomodoro</SheetTitle>
        <SheetDescription className="sr-only">Navigation bar</SheetDescription>
      </SheetHeader>
      <div role="group" className="space-x-2.5">
        <Button variant="ghost" size="icon" aria-label="settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
            />
          </svg>
        </Button>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <Cross2Icon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetClose>
      </div>
    </div>
  );
}
