<script lang="ts">
  import ThankYou from './thankyou.svelte';
  import Button from '/src/components/button.svelte';
  import nexusStation from '/src/assets/nexus_station2.png?format=webp';
  import collision from '/src/assets/collision.png?format=webp';
  import playing from '/src/assets/playing.png?format=webp';
  import maverick from '/src/assets/maverick.png?format=webp';
  import dyson from '/src/assets/dyson_dilemma_banner.jpg?format=webp&width=1028';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<p class="font-l">
  Explore the universe from Nexus Station in this rules-light retrofuturist space TTRPG that uses a
  standard deck of cards to propel players across worlds and dimensions in a collaborative
  storytelling adventure.
</p>
<img class="collision" src={collision} alt="a space station" />
<h2 id="setting">The Collision</h2>
<section>
  <p>
    In 1953, the United Nations completed construction on the largest multinational research colony
    ever constructed in Antarctica with two aims. First, to create a united culture to avert a third
    World War. Second, to take advantage of the remote setting to deepen humanity's understanding of
    fundamental physics. This colony of scientists, engineers, and settlers represented the best and
    brightest from over a dozen countries. Early the colony was hailed as a breakthrough with the
    adoption of shared language and the construction of a massive particle collider.
  </p>
  <p>
    Multiple activations of the collider provided compelling evidence in support of the Many-Worlds
    interpretation. These experiments ultimately culminate with an attempt to open a hole to another
    dimension. Unfortunately, as far as the world knew, the colony was lost in an all consuming
    explosion.
  </p>
  <p>
    The experiment however was more successful than could have been dreamed of; the colonists found
    themselves in an enormous, abandoned space station orbiting a remote star, full of alien
    technology. For 15 years they have adapted this alien technology for their own needs to allow
    them to continue with their experiments, traveling to countless galaxies and dimensions in their
    quest to return to Earth.
  </p>
</section>
<img class="span station" src={nexusStation} alt="a space station" />
<h2 class="col2">Nexus Station</h2>
<section class="col1">
  <p>
    These past 15 years the lost colony has called Nexus Station their home and their base of
    operations for their continued experiments. The station itself is a marvel of technology.
    Dizzyingly large and complex, such a construct couldn't even have been imagined by the scientists
    as humans had yet to even put a satellite in space at the time of The Collision.
  </p>
  <p>
    Now uncertain if they'll ever return to Earth, Nexus Station is home to a new generation of
    humanity growing up amongst the stars.
  </p>
</section>
<img class="span" src={playing} alt="a group of people playing cards on a space station" />
<h2 id="rules">Playing with Cards</h2>
<section>
  <p>
    Unlike most other TTRPGs WARP21 uses cards to create randomness. This is done both to give the
    game a unique feel as well as to make it simpler to play in places where rolling dice is, well,
    dicey. By combining Contests and Tasks, WARP21 merges random draws with a spiced up version of
    Blackjack to keep the narrative moving without getting bogged down in the specifics of combat.
  </p>
</section>
<section>
  <h3>Contests</h3>
  <p>
    When you come across a challenge that is going to take some time to surmount, if you get into a
    tussle that might be prolonged, or if that robot needs a particularly complex fix you're going
    to have to win a Contest. At their heart Contests are just Blackjack played out over multiple
    rounds. But add in some Archetype abilities plus the knowledge of your Background and things get
    more interesting. The winner of the Contest, be it the Dealer or the players involved, gets to
    describe the outcome.
  </p>
</section>
<section>
  <h3>Tasks</h3>
  <p>
    In contrast to Contests where you resolve a larger conflict over multiple hands Tasks are
    simple. Just draw a card, or maybe more, add your Superlative bonus and see if you hit 11. Aces
    are high and for those who like excitement Jokers can be treated as a critical success. Tasks
    help you resolve the little things. Hacking your way past a locked door, knocking out a guard,
    and snatching a beaker off a desk can all be decided by a Task.
  </p>
</section>
<img
  src={maverick}
  class="span"
  alt="depiction of the maveric Archytype. it's abilities allow you to take risks during tasks and to swap hands with the dealer in contests"
/>
<h2 class="col2" id="characters">Characters</h2>
<section class="col1">
  <p>
    Character creation is simple and involves picking a Superlative, an Archetype, and a Background.
    You could be The Cleverest Brainiac Academic or go off the beaten path with The Strongest
    Maverick Provocateur. Your choices directly impact every part of the game and each character
    feels unique.
  </p>
  <p>
    Pick a Superlative from the examples or invent your own. When you complete a Task that is up
    your alley you get a small bonus. Like pickpocketing or sneaking around? Be The Sneakiest. Have
    a strong constitution? Maybe you're The Hardiest.
  </p>
  <p>
    Your Archetype gives you abilities that you can use during encounters and further describe your
    character. Play a Bruiser if you'd like to be headstrong and capable of taking challenges
    straight on or The Jack-of-all-Trades if you want to be capable in many different situations.
  </p>
  <p>
    Finally your Background helps describe where your character came from and what they are
    especially good at. Are you a Greaser specializing in mechanical knowhow and brawn? Maybe you'd
    rather play an Academic any solve problems with your deep knowledge. Or maybe you'd like to come
    up with your own unique Background that accentuates how you like to play.
  </p>
</section>
<h2 id="faq">FAQ</h2>
<section>
  <p>
    Coming soon! Ask questions below and we'll try our best to answer them. Email optional but if
    you include it we'll try to get back to you!
  </p>
  <p />
  <form method="POST">
    <label for="email">Your Email</label>
    <input id="email" name="email" type="email" />
    <label for="question">Your Question</label>
    <textarea id="question" name="question" />
    <div class="btn">
      <Button>Submit</Button>
    </div>
  </form>
</section>
{#if form?.showThankYou}
  <ThankYou />
{/if}
<section class="span flex_section" id="dyson-dilemma">
  <h2>Check out our free adventure:</h2>
  <a href="/warp21/dyson_dilemma">
    <img
      src={dyson}
      class="no_height"
      alt="banner ad for The Dyaon Dilemma a free adventure for the WARP21 system showcasing characters from the adventure."
    />
  </a>
</section>

<style>
  form {
    display: grid;
    gap: var(--space-l);
  }
  textarea,
  input {
    appearance: none;
    border: none;
    flex: 1;
    box-shadow: #fff200 0px 0px 4px 0;
    border-radius: 4px;
    padding: 4px;
    background-color: black;
    color: white;
  }
  .flex_section {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
  }
  textarea {
    height: 4em;
  }
  input {
    height: var(--space-l);
    padding: var(--space-xs);
  }
  textarea:focus-within,
  input:focus-within {
    outline: 2px solid yellow;
    box-shadow: none;
  }
  label {
    vertical-align: top;
    color: var(--yellow);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-l);
    margin-right: var(--space-l);
  }
  h2 {
    font-size: var(--font-xxl);
    font-family: var(--slab);
    color: var(--yellow);
    font-weight: var(--font-weight-bold);
  }
  h3 {
    color: var(--yellow);
    font-weight: var(--font-weight-medium);
    font-family: var(--slab);
    font-size: var(--font-l);
    margin-bottom: var(--space-s);
  }
  .font-l {
    font-size: var(--font-l);
  }
  p {
    font-size: var(--font-m);
  }
  p + p {
    margin-top: var(--space-m);
  }
  img {
    height: 35vh;
  }
  .station {
    width: 100%;
    object-fit: cover;
  }
  .span {
    margin: -5vh 0;
    justify-self: center;
  }
  .collision {
    object-fit: contain;
    margin-left: auto;
  }

  img.no_height {
    min-height: initial;
    height: initial;
  }
  @media (min-width: 810px) {
    form {
      grid-template-columns: 175px 1fr;
    }
    .btn {
      grid-column: 2;
    }
    .col1 {
      grid-column: 1;
      text-align: left;
    }
    .col2 {
      grid-column: 2;
      text-align: right;
    }
    .span {
      align-self: center;
      grid-column: 1/3;
    }
    img {
      min-height: 350px;
    }
  }
</style>
