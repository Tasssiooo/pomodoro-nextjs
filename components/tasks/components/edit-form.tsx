"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import revalidate from "@/actions";

interface Props {
  id: string;
  oldName: string;
  oldDescription: string;
}

const newTaskSchema = z.object({
  newTaskName: z.string().min(1).max(50),
  newTaskDescription: z.string().max(100),
});

export default function EditForm({ id, oldName, oldDescription }: Props) {
  const { register, handleSubmit, watch } = useForm<
    z.infer<typeof newTaskSchema>
  >({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      newTaskName: oldName,
      newTaskDescription: oldDescription,
    },
  });

  async function onSubmit(values: z.infer<typeof newTaskSchema>) {
    try {
      await fetch(`https://pomodoro-one-liard.vercel.app//api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
    } finally {
      revalidate();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b p-4 cursor-text">
        <div className="max-h-52 overflow-x-hidden overflow-y-auto">
          <div className="flex items-start text-xl leading-[21px] break-words">
            <div className="flex flex-col flex-grow justify-center">
              <div className="tracking-[.0065em] leading-[1.65] font-semibold *:outline-none">
                <input
                  type="text"
                  aria-readonly="false"
                  aria-multiline="true"
                  aria-label="Edit task name"
                  translate="no"
                  tabIndex={0}
                  {...register("newTaskName")}
                  placeholder="New task name"
                  className="bg-inherit"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center text-sm">
            <div className="flex flex-col flex-grow justify-center">
              <div className=" tracking-[.0065em] leading-[1.65] *:outline-none">
                <input
                  type="text"
                  aria-readonly="false"
                  aria-multiline="true"
                  aria-label="Edit task description"
                  translate="no"
                  tabIndex={0}
                  {...register("newTaskDescription")}
                  placeholder="New description"
                  className="bg-inherit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertDialogFooter className="my-4 mx-0 py-0 px-4 w-full flex flex-row justify-between">
        <AlertDialogCancel asChild>
          <Button variant="secondary" type="button">
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button
            type="submit"
            disabled={watch("newTaskName") === "" ? true : false}
          >
            Save edit
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </form>
  );
}
