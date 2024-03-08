import { Separator } from "@/components/ui/separator";

import Heading from "./components/heading";
import AddTask from "./components/addtask";
import User from "./components/user";
import Navigation from "./components/navigation";

export default function NavBarLg() {
  return (
    <header className="hidden lg:flex flex-col space-y-4 min-w-64 h-screen shadow dark:shadow-primary/50">
      <Heading />
      <div className="flex flex-col justify-between h-full">
        <div className="px-3">
          <AddTask />
          <Separator orientation="horizontal" className="mb-3.5 mt-1.5" />
          <Navigation />
        </div>
        <User />
      </div>
    </header>
  );
}
