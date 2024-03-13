"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import revalidate from "@/actions";

const taskSchema = z.object({
  taskName: z.string().min(1).max(50),
  taskDescription: z.string().max(100),
});

export default function AddTaskForm() {
  const { register, handleSubmit, watch } = useForm<z.infer<typeof taskSchema>>(
    {
      resolver: zodResolver(taskSchema),
      defaultValues: {
        taskName: "",
        taskDescription: "",
      },
    }
  );

  async function onSubmit(values: z.infer<typeof taskSchema>) {
    try {
      await fetch("https://pomodoro-one-liard.vercel.app//api/tasks", {
        method: "POST",
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
                  aria-label="Task name"
                  translate="no"
                  tabIndex={0}
                  {...register("taskName")}
                  placeholder="Task name"
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
                  aria-label="Description"
                  translate="no"
                  tabIndex={0}
                  {...register("taskDescription")}
                  placeholder="Description"
                  className="bg-inherit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 mx-0 py-0 px-4 w-full flex flex-row justify-between">
        <div className="flex-nowrap ml-auto flex flex-row items-center gap-2 *:font-semibold p-0 m-0">
          <DialogClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              disabled={watch("taskName") === "" ? true : false}
            >
              Add task
            </Button>
          </DialogClose>
        </div>
      </div>
    </form>
  );
}
