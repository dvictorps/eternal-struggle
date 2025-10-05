import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import ConvexProvider from "../integrations/convex/provider";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

// Clerk removed

import "@fontsource/jersey-15";

import type { QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { AlertModalProvider } from "@/hooks/use-alert-modal";
import { ModalProvider } from "@/hooks/use-modal";
import appCss from "../styles.css?url";

// Better Auth TanStack Start handler not required here

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	notFoundComponent: () => (
		<div className="min-h-screen flex items-center justify-center bg-black text-white">
			<div className="text-center">
				<p className="text-2xl">Página não encontrada</p>
				<a className="underline" href="/">
					Voltar para a home
				</a>
			</div>
		</div>
	),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ConvexProvider>
					<ThemeProvider defaultTheme="dark">
						<ModalProvider>
							<AlertModalProvider>
								{children}
								<Toaster position="bottom-right" richColors />
							</AlertModalProvider>
						</ModalProvider>
					</ThemeProvider>
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</ConvexProvider>
				<Scripts />
			</body>
		</html>
	);
}
