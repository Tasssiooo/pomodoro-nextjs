import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import Heading from "./components/heading";
import AddTask from "../large/components/addtask";
import Navigation from "../large/components/navigation";
import User from "../large/components/user";

export default function NavBarSm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden fixed top-12 left-0 rounded-l-none"
          variant="outline"
          size="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
            />
          </svg>
          <span className="sr-only">Open navigation bar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col space-y-4 w-64 h-screen shadow p-0 gap-0"
        side="left"
      >
        <Heading />
        <div className="flex flex-col justify-between h-full">
          <div className="px-3">
            <AddTask />
            <Separator orientation="horizontal" className="mb-3.5 mt-1.5" />
            <Navigation />
          </div>
          <User />
        </div>
      </SheetContent>
    </Sheet>
  );
}
