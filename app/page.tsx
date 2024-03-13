import Tasks from "@/components/tasks/main";
import { Button } from "@/components/ui/button";

async function getTasks() {
  try {
    const response = await fetch("https://pomodoro-one-liard.vercel.app//api/tasks", {
      next: { tags: ["tasks"] },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export default async function Inbox() {
  const inboxData = await getTasks();
  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 15h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
            />
          </svg>
          <h2 className="font-semibold text-lg lg:text-xl">Inbox</h2>
        </div>
        <div role="group" className="space-x-4">
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 14h6v6H2M16 8h-6v2h6M2 10h6V4H2m8 0v2h12V4M10 20h6v-2h-6m0-2h12v-2H10"
              />
            </svg>
            <span className="sr-only">Change view to list</span>
          </Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z"
              />
            </svg>
            <span className="sr-only">Sort by</span>
          </Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"
              />
            </svg>
            <span className="sr-only">Filter by</span>
          </Button>
        </div>
      </header>
      <Tasks tasksData={inboxData} />
    </>
  );
}
