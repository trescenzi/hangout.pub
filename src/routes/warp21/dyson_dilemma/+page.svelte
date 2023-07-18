<script lang="ts">
  import jiminez from '/src/assets/Jiminez.png?format=webp';
  import Button from '/src/components/button.svelte';
</script>

<h2>The Dyson Dilemma</h2>
<section>
  <p>
    In this free introductory adventure Nexus Station's fate hangs in the balance when it loses
    contact with The Sphere, an alien Dyson Sphere and the primary power source for the station.
    Journey to The Sphere, investigate the mystery, and battle an unknown threat.
  </p>
  <p>
    Structured for use over one or two sessions it provides an entrypoint into the world of Nexus
    Station that will be easy to build off of. Players will leave feelign accomplished and Game
    Masters will be reading to run a full campaign in WARP21.
  </p>
</section>
<img class="col2" src={jiminez} alt="Chief Executive Jiminez pointing to a map of The Sphere" />
<section class="col1">
  <p>
    Chock full of encounters to provide instructive examples of how to run fun and exciting WARP21
    encounters The Dyson Dilemma is perfect for both experienced and novice Game Masters.
  </p>
  <p>
    The Dyson Dilemma also includes multiple unique items which showcase how to build with the
    mechanics of WARP21 and keep your players entertained. There's also tables for creating NPCs
    with different helpful abilities to aid your players in their exploration of the multiverse.
  </p>
</section>
<h2>Get your copy</h2>
<section>
  <div class="btn">
    <Button
      target="_blank"
      href="https://www.drivethrurpg.com/product/445843/The-Dyson-Dilemma-A-WARP21-Adventure?affiliate_id=3996177"
    >
      Download it on Drivethrurpg
    </Button>
  </div>
  <div class="btn">
    <Button href="/dyson_dilemma.pdf" target="_blank">Download a pdf</Button>
  </div>
</section>

<style>
  .btn {
    display: block;
    margin: var(--space-m);
  }
  h2 {
    font-size: var(--font-xxl);
    font-family: var(--slab);
    color: var(--yellow);
    font-weight: var(--font-weight-bold);
  }
  p {
    font-size: var(--font-m);
  }
  p + p {
    margin-top: var(--space-m);
  }

  @media (min-width: 810px) {
    .col1 {
      grid-column: 1;
      text-align: left;
    }
    .col2 {
      grid-column: 2;
      text-align: right;
    }
  }
</style>
