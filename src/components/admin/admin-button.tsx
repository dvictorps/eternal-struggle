import { Link, useRouterState } from "@tanstack/react-router";
import { api } from "convex/_generated/api";
import { useQuery } from "convex/react";
import { PencilIcon } from "lucide-react";

export function AdminButton() {
	const isAdmin = useQuery(api.admin.meIsAdmin);

	const routerState = useRouterState();
	const currentPathname = routerState.location.pathname.startsWith("/admin");

	if (!isAdmin || currentPathname) return null;

	return (
		<div className="fixed bottom-0 left-0 flex rounded-full bg-black border border-white p-2 w-fit h-fit justify-center items-center m-4 hover:bg-[#2E2E2E] transition-colors">
			<Link to="/admin">
				<button
					type="button"
					className="flex flex-row gap-2 text-xl items-center p-2"
				>
					<PencilIcon className="flex-shrink-0" />
				</button>
			</Link>
		</div>
	);
}
