import { Button } from "@/components/ui/button";

export default function Open() {
  return (
    <Button
      className="lg:hidden fixed top-12 left-0 rounded-l-none"
      variant="outline"
      size="icon"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        aria-hidden
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
      </svg>
      <span className="sr-only">Open navigation bar</span>
    </Button>
  );
}
