<script>
	import warp21 from '/src/assets/warp21-banner.jpg?format=webp&w=1080';
</script>

<main>
	<h1>Hangout Publishing</h1>
	<section>
		<ul>
			<li>
				<a href="/warp21">
					<img
						src={warp21}
						alt="Warp21 Banner reading: WARP21 A retrofuturistic TTRPG with images of different characters"
					/>
				</a>
			</li>
		</ul>
	</section>
</main>

<style>
	h1 {
		font-weight: 400;
		margin-bottom: 2rem;
		font-family: var(--slab);
	}

	ul {
		padding: 0;
		list-style: none;
	}

	a:visited {
		color: lavenderblush;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1.5rem;
		height: 100vh;
		max-width: 1080px;
		margin: 0 auto;
	}
</style>
