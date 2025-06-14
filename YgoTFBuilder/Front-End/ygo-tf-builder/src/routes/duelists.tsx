import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/duelists")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/duelists"!</div>;
}
