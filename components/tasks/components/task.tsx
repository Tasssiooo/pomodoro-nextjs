import Content from "./content";
import Delete from "./delete";
import Edit from "./edit";

interface Props {
  id: string;
  name: string;
  description: string;
}

export default function Task({ id, name, description }: Props) {
  return (
    <div className="border-b p-2.5 flex flex-row justify-between min-h-max max-h-20">
      <Content name={name} description={description} />
      <div role="group" className="flex flex-row items-center space-x-2">
        <Edit taskId={id} taskName={name} taskDescription={description} />
        <Delete taskId={id} taskName={name} />
      </div>
    </div>
  );
}
