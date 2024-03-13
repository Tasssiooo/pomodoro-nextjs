import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";

import EditForm from "./edit-form";

export default function Edit({
  taskId,
  taskName,
  taskDescription
}: {
  taskId: string;
  taskName: string;
  taskDescription: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <Pencil1Icon className="size-5" aria-hidden />
          <span className="sr-only">Edit this task {`(${taskName})`}.</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0">
        <AlertDialogHeader className="sr-only">
          <AlertDialogTitle className="sr-only">Edit task</AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Edit the following task: {taskName}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <EditForm id={taskId} oldName={taskName} oldDescription={taskDescription} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
