<div>
  <slot/>
</div>

<style>
  :global(body) {
    background-color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
