import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const navigate = useNavigate();
	if (isAuthenticated) navigate({ to: "/characters" });

	if (isLoading)
		return (
			<div className="min-h-screen bg-black justify-center items-center flex text-white flex-col gap-4">
				<h1>Loading...</h1>
			</div>
		);

	return (
		<div className="min-h-screen bg-black justify-center items-center flex text-white flex-col gap-4">
			{!isAuthenticated && (
				<>
					<h1 className="text-9xl text-shadow-lg text-shadow-purple-500">
						Eternal Struggle
					</h1>

					<div className="flex gap-4">
						<Button variant="ghost">
							<Link
								className="text-xl h-fit flex flex-row items-center gap-2"
								to="/sign-in/$"
							>
								Login <LogInIcon />
							</Link>
						</Button>
						<Button variant="ghost">
							<Link
								className="text-xl h-fit flex flex-row items-center gap-2"
								to="/register"
							>
								Sign Up
							</Link>
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
