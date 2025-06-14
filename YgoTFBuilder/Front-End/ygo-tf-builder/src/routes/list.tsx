import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/list")({
  component: List,
});

function List() {
  return <div className="p-2">Hello from List!</div>;
}
