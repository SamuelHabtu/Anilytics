import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile")({
  component: RecommendPage,
});

function RecommendPage() {
  return <div>Recommend Page</div>;
}
