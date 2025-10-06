import { Link } from "@tanstack/react-router";
import { GemIcon, PenIcon, PlusIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function AdminSidebar() {
	const sidebarItems = [
		{
			label: "Classes",
			icon: PenIcon,
			to: "/admin/class",
		},
		{
			label: "Items",
			icon: GemIcon,
			to: "/admin/items",
		},
	];
	return (
		<div className="w-16 h-screen bg-[#171717] border-r border-[#2E2E2E] fixed items-center flex flex-col group transition-all duration-300 hover:w-52">
			<div className="w-full justify-center flex items-center py-4">
				<h1 className="text-2xl overflow-hidden whitespace-nowrap bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent group-hover:bg-none group-hover:bg-clip-border group-hover:text-white">
					Admin Dashboard
				</h1>
			</div>
			<Separator className="mb-1" />
			<ul className="flex flex-col gap-2 w-full mt-4">
				{sidebarItems.map((item) => (
					<li key={item.label} className="w-full">
						<Link to={item.to} className="w-full block">
							<button
								type="button"
								className="w-full flex flex-row gap-2 text-xl items-center px-4 py-2 hover:bg-[#2E2E2E] transition-colors"
							>
								<item.icon className="flex-shrink-0 ml-1" />
								<span className="overflow-hidden whitespace-nowrap transition-opacity duration-200 delay-300">
									{item.label}
								</span>
							</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
