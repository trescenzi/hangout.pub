import { redirect } from '@sveltejs/kit';

export function load({ url }: { url: URL }) {
	if (url.pathname === '/WARP21') {
		throw redirect(301, '/warp21');
	}
}
