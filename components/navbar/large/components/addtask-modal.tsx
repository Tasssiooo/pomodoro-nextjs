import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddTask from "./addtask";
import AddTaskForm from "./addtask-form";

export default function AddTaskModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddTask />
      </DialogTrigger>
      <DialogContent className="px-1 py-0">
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">New task</DialogTitle>
          <DialogDescription className="sr-only">
            Create a new task
          </DialogDescription>
        </DialogHeader>
        <AddTaskForm />
      </DialogContent>
    </Dialog>
  );
}
