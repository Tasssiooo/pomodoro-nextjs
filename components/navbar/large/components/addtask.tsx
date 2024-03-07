import { Button } from "@/components/ui/button";

export default function AddTask() {
  return (
    <div>
      <Button
        variant="ghost"
        className="text-primary text-base hover:text-primary hover:bg-primary/15 gap-x-2 font-semibold w-full h-10 px-4 py-2 justify-start"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
            />
          </svg>
        </span>
        Add task
      </Button>
    </div>
  );
}
