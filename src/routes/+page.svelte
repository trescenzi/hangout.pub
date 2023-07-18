<script>
  import warp21 from '/src/assets/warp21-banner.jpg?format=webp&w=1080';
  import dyson from '/src/assets/dyson_dilemma_banner.jpg?format=webp&w=1080';
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
        <ul>
          <li>
            <a href="/warp21/dyson_dilemma">
              <img src={dyson} alt="Dyson Dilemman Banner reading: A (free) WAPR21 Adventure" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</main>

<style>
  h1 {
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: var(--slab);
    color: var(--yellow);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li li {
    margin-top: var(--space-s);
    margin-left: var(--space-xl);
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
