import { redirect } from '@sveltejs/kit';
export const actions = {
  default: async ({ cookies, request }) => {
    const token = process.env.WARP21FAQ_BOT_TOKEN;
    const channelId = process.env.WARP21FAQ_CHANNEL_ID;
    const data = await request.formData();
    const question = data.get('question');
    await fetch(`https://discord.com/api/channels/${channelId}/messages`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bot ${token}`,
      },
      body: JSON.stringify({content: question}),
    });

    throw redirect(303, '/warp21#faq'); 
  },
}
