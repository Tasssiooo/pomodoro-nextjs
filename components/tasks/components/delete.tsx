"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

import revalidate from "@/actions";

import { cannonicalUrl } from "@/global";

export default function Delete({
  taskId,
  taskName,
}: {
  taskId: string;
  taskName: string;
}) {
  async function deleteTask() {
    try {
      await fetch(`${cannonicalUrl}/api/tasks/${taskId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    } finally {
      revalidate();
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <TrashIcon className="size-5" aria-hidden />
          <span className="sr-only">Delete this task {`(${taskName})`}.</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteTask}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
