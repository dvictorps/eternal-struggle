import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/admin/_layout/items")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Card>
			<CardContent>
				<h1>Items</h1>
			</CardContent>
		</Card>
	);
}
