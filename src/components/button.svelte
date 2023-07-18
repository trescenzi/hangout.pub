<script lang="ts">
  export let href: string;
  export let target: string;
  export let type: 'button' | 'submit' | undefined;
  export let onclick: any;
</script>

<button type={type ? type : 'submit'} on:click={onclick}>
  {#if href}
    <a {href} {target}>
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</button>

<style>
  button {
    align-self: center;
    background-color: black;
    border: 1px solid #000;
    border-radius: 4px;
    font-weight: var(--font-weight-strong);
    box-shadow: #fff200 0px 0px 4px 0;
    color: var(--white);
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    text-align: center;
    height: var(--space-xl);
    font-size: var(--font-m);
    padding: 0 var(--space-m);
    display: block;
    width: 100%;
    appearance: none;
  }
  button a {
    text-decoration: none;
    color: var(--white);
    font-weight: var(--font-weight-bold);
  }
  @media (hover: hover) {
    button:hover {
      background-color: var(--yellow);
      box-shadow: none;
      color: black;
    }
    button:hover a {
      color: black;
    }
  }
</style>
