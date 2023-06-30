<header>
  <h1>WARP 21</h1>
  <nav>
    <a href="#setting">Setting</a>
    <a href="#rules">How to Play</a>
    <a target="_blank" href="/WARP21-Fillable-Character-Sheet-V1.0.pdf">Character Sheet</a>
    <button type="button">
      <a href="https://www.drivethrurpg.com" target="_blank">
        Get the Book
      </a>
    </button>
  </nav>
</header>
<main>
  <slot/>
</main>

<style>
  :global(button) {
    align-self: center;
    background-color: black;
    border: 1px solid #000;
    border-radius: 4px;
    font-weight: var(--font-weight-strong);
    box-shadow: #fff200 0px 0px 4px 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    height: var(--space-xl);
    font-size: var(--font-m);
  }
  h1 {
    font-size: var(--font-xxxl);
    color: var(--yellow);
    font-family: var(--slab);
    font-weight: var(--font-weight-bold);
    align-self: center;
  }
  header, main {
    padding: 2rem 1.5rem;
    max-width: 1080px;
    margin: 0 auto;
  }
  main {
    display: grid;
    grid-auto-flow: dense;
    column-gap: var(--space-m);
    row-gap: 7.5vh;
    height: 100vh;
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
  nav a {
    color: var(--white);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    align-self: center;
    display: none;
  }
  nav button a {
    display: inline;
  }
  @media(hover: hover) {
    :global(button:hover) {
      background-color: var(--yellow);
      box-shadow: none;
      color: black;
    }
    button:hover a {
      color: black;
    }
  }
  @media(min-width: 600px) {
    nav a:first-of-type {
      display: inline;
    }
  }
  @media(min-width: 810px) {
    nav a:not(:first-of-type) {
      display: inline;
    }
    main {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 15vh;
    }
  }
  @media(min-width: 1200px) {
    a {
      font-size: var(--font-l);
    }
    h1 {
      font-size: var(--font-xxxxl);
    }
    button { 
      height: var(--space-xl);
      padding: 0 var(--space-m);
    }
  }
</style>
