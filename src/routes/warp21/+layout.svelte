<script>
  import Footer from './footer.svelte';
  import Button from '/src/components/button.svelte';
</script>

<header>
  <a href="/warp21"><h1>WARP 21</h1></a>
  <nav>
    <a href="#setting">Setting</a>
    <a href="#rules">How to Play</a>
    <a target="_blank" href="/WARP21-Fillable-Character-Sheet-V1.0.pdf">Character Sheet</a>
    <a href="/warp21/dyson_dilemma">Free Adventure</a>
    <div style="align-self: center">
      <Button
        type="button"
        href="https://www.drivethrurpg.com/product/443618/WARP21?affiliate_id=3996177"
        target="_blank"
      >
        Get the Book
      </Button>
    </div>
  </nav>
</header>
<main>
  <slot />
</main>
<Footer />

<style>
  h1 {
    font-size: var(--font-xxxl);
    color: var(--yellow);
    font-family: var(--slab);
    font-weight: var(--font-weight-bold);
    align-self: center;
  }
  header,
  main {
    padding: 2rem 1.5rem;
    max-width: 1080px;
    margin: 0 auto;
  }
  main {
    display: grid;
    grid-auto-flow: dense;
    column-gap: var(--space-m);
    row-gap: 7.5vh;
    min-height: 100vh;
    margin-bottom: 50px;
  }
  header {
    display: flex;
    width: 100%;
    align-items: space-between;
    margin-bottom: var(--space-xl);
  }
  nav {
    margin-left: auto;
    display: flex;
    gap: var(--space-m);
  }
  a {
    text-decoration: none;
  }
  nav a {
    color: var(--white);
    font-weight: var(--font-weight-medium);
    align-self: center;
    display: none;
  }
  @media (min-width: 600px) {
    nav a:nth-of-type(2n) {
      display: inline;
    }
  }
  @media (min-width: 810px) {
    nav a {
      display: inline;
    }
    main {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 15vh;
    }
  }
  @media (min-width: 1200px) {
    a {
      font-size: var(--font-l);
    }
    h1 {
      font-size: var(--font-xxxxl);
    }
  }
</style>
