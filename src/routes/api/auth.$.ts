import { reactStartHandler } from "@convex-dev/better-auth/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/env";

const convexSiteUrl = env.VITE_CONVEX_SITE_URL;

async function proxyToConvex(request: Request) {
	try {
		const url = new URL(request.url);
		const upstream = `${convexSiteUrl}${url.pathname}${url.search}`;
		const headers = new Headers(request.headers);
		headers.set("accept-encoding", "application/json");

		let body: BodyInit | undefined;
		if (request.method !== "GET" && request.method !== "HEAD") {
			const buf = await request.arrayBuffer();
			body = buf;
		}

		const res = await fetch(upstream, {
			method: request.method,
			headers,
			body,
			redirect: "follow",
		});

		return new Response(res.body, {
			status: res.status,
			statusText: res.statusText,
			headers: res.headers,
		});
	} catch (e) {
		console.error("BetterAuth proxy error", { convexSiteUrl, error: e });
		return new Response(JSON.stringify({ error: "BetterAuth proxy failed" }), {
			status: 500,
		});
	}
}

export const Route = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				if (import.meta.env.DEV) return proxyToConvex(request);
				return reactStartHandler(request, { convexSiteUrl });
			},
			POST: async ({ request }) => {
				if (import.meta.env.DEV) return proxyToConvex(request);
				return reactStartHandler(request, { convexSiteUrl });
			},
		},
	},
});
