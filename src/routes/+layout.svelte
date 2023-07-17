<script>
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { page } from '$app/stores';
  import '/src/main.css';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <meta name="description" content={$page.data.description} />
</svelte:head>
<slot />
