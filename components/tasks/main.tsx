import Task from "./components/task";

export default async function Tasks({ tasksData }: { tasksData: any[] }) {
  return (
    <div className="py-4 mt-2 h-[calc(100%-2.84rem)]">
      <ul className="grid grid-flow-row auto-rows-max gap-4 h-full overflow-y-auto overflow-x-hidden">
        {tasksData && tasksData.length ? (
          tasksData.map(
            ({
              task_id,
              task_name,
              task_description,
            }: {
              task_id: string;
              task_name: string;
              task_description: string;
            }) => (
              <Task
                key={task_id}
                id={task_id}
                name={task_name}
                description={task_description}
              />
            )
          )
        ) : (
          <>
            <p>Nothing yet...</p>
          </>
        )}
      </ul>
    </div>
  );
}
