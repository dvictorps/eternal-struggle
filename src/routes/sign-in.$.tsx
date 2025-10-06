import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "../lib/auth-client";

export const Route = createFileRoute("/sign-in/$")({
	component: Page,
});

function Page() {
	const { isAuthenticated } = useConvexAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	if (isAuthenticated) navigate({ to: "/" });
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = String(formData.get("email") ?? "");
		const password = String(formData.get("password") ?? "");
		const res = await authClient.signIn.email({ email, password });
		if (res.data) navigate({ to: "/" });
	};
	return (
		<div className="flex justify-center items-center h-screen bg-black text-foreground flex-col gap-4">
			<h1 className="text-5xl text-shadow-lg text-shadow-purple-500">
				Eternal Struggle
			</h1>
			<form className="flex flex-col gap-3 w-80" onSubmit={onSubmit}>
				<input
					name="email"
					placeholder="Email"
					className="px-3 py-2 rounded bg-white/10"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					className="px-3 py-2 rounded bg-white/10"
				/>
				<Button type="submit" className="text-xl" variant="outline">
					{isLoading ? <Spinner className="w-5 h-5" /> : "Login"}
				</Button>
			</form>
		</div>
	);
}
