import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('question');
        console.log(email);

        //const user = await db.getUser(email);
        //cookies.set('sessionid', await db.createSession(user));

        throw redirect(303, '/warp21#faq'); 
    },
}
