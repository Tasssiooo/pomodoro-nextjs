import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function User() {
  return (
    <div className="flex flex-row justify-between items-center px-3 h-16 bg-accent">
      <div className="flex flex-row space-x-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h6 className="font-semibold">Prem Shani</h6>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Log out"
        className="hover:bg-background"
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
            d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5zM19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2z"
          />
        </svg>
      </Button>
    </div>
  );
}
