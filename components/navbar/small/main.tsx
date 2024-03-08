import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Heading from "./components/heading";
import AddTaskModal from "../large/components/addtask-modal";
import Navigation from "../large/components/navigation";
import User from "../large/components/user";
import Open from "./components/open";

export default function NavBarSm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Open />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col space-y-4 w-64 h-screen shadow p-0 gap-0"
        side="left"
      >
        <Heading />
        <div className="flex flex-col justify-between h-full">
          <div className="px-3">
            <AddTaskModal />
            <Separator orientation="horizontal" className="mb-3.5 mt-1.5" />
            <Navigation />
          </div>
          <User />
        </div>
      </SheetContent>
    </Sheet>
  );
}
