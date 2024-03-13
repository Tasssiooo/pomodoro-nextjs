import { Checkbox } from "@/components/ui/checkbox";

export default function Content({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Checkbox aria-label={`Check "${name}" as done`} />
      <div className="space-y-0.5">
        <h3 className="font-semibold">{name}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
