<script lang="ts">
  import { onMount } from 'svelte';
  let dialog: HTMLDialogElement;
  onMount(() => {
    dialog = document.getElementById('thankyou') as HTMLDialogElement;
    dialog.showModal();
  });

  function close() {
    dialog.close();
  }
</script>

<dialog id="thankyou">
  <h2>Thank you!</h2>
  <p>
    If you provided an email we'll try our best to get back to you. If not check back later and your
    question might make it into the FAQ.
  </p>
  <button on:click={close}>Awesome</button>
</dialog>

<style>
  dialog[open] {
    appearance: none;
    border: 1px solid yellow;
    border-radius: 4px;
    background: black;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    width: calc(100% - var(--space-l) * 2);
    max-width: 350px;
    z-index: 2;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
  dialog p {
    color: white;
  }
  h2 {
    font-size: var(--font-xxl);
    font-family: var(--slab);
    color: var(--yellow);
    font-weight: var(--font-weight-bold);
  }
  button {
    width: 50%;
    align-self: end;
  }
</style>
