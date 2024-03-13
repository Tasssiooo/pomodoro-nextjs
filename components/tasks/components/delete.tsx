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

export default function Delete({
  taskId,
  taskName,
}: {
  taskId: string;
  taskName: string;
}) {
  async function deleteTask() {
    try {
<<<<<<< HEAD
      await fetch(`https://pomodoro-one-liard.vercel.app/api/tasks/${taskId}`, {
=======
      await fetch(`https://pomodoro-one-liard.vercel.app//api/tasks/${taskId}`, {
>>>>>>> 3f43a67a2cc94770bc4e0246dbc05db3023e0272
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
