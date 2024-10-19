import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/recommendations")({
  component: RecommendPage,
});

function RecommendPage() {
  return (
    <div className="p-2">
      <h3>Recommendation Page</h3>
    </div>
  );
}
