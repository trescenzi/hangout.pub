<script>
  import Footer from './footer.svelte';
</script>

<p class="font-l">
  Explore the universe from Nexus Station in this rules-light retrofuturist space TTRPG that uses a standard deck of cards to propel players across worlds and dimensions in a collaborative storytelling adventure.
</p>
<img class="collision" src="/collision.png" alt="a space station" />
<h2 id="setting">
  The Collision
</h2>
<section>
  <p>
   In 1953, the United Nations completed construction on the largest multinational research colony ever constructed in Antarctica with two aims. First, to create a united culture to avert a third World War. Second, to take advantage of the remote setting to deepen humanity's understanding of fundamental physics. This colony of scientists, engineers, and settlers represented the best and brightest from over a dozen countries. Early the colony was hailed as a breakthrough with the adoption of shared language and the construction of a massive particle collider.
  </p>
  <p>
Multiple activations of the collider provided compelling evidence in support of the Many-Worlds interpretation. These experiments ultimately culminate with an attempt to open a hole to another dimension.  Unfortunately, as far as the world knew, the colony was lost in an all consuming explosion.
  </p>
  <p>
The experiment however was more successful than could have dreamed of; the colonists found themselves in an enormous, abandoned space station orbiting a remote star, full of alien technology. For 15 years they have adapted this alien technology for their own needs to allow them to continue with their experiments, traveling to countless galaxies and dimensions in their quest to return to Earth.
  </p>
</section>
<img class="span station" src="/nexus_station2.png" alt="a space station" />
<h2 class="col2">
  Nexus Station
</h2>
<section class="col1">
  <p>
    These past 15 years the lost colony has called Nexus Station their home and their base of operations for their continued experiments. The station itself is a marvel of technology. Dizzyingly large and complex such a construct couldn't even have been imagined by the scientists as humans had yet to even put a satellite in space at the time of The Collision.
  </p>
  <p>
    Now uncertain if they'll ever return to Earth, Nexus Station is home to a new generation of humanity growing up amongst the stars.
  </p>
</section>
<img class="span" src="/playing.png" alt="a group of people playing cards on a space station" />
<h2 id="rules">
  Playing with Cards
</h2>
<section>
  <p>
    Unlike most other TTRPGs WARP21 uses cards to create randomness. This is done both to give the game a unique feel as well as to make it simpler to play in places where rolling dice is, well, dicey. By combining Contests and Tasks, WARP21 merges random draws with a spiced up version of Blackjack to keep the narrative moving without getting bogged down in the specifics of combat.
  </p>
</section>
<section>
  <h3>Contests</h3>
  <p>
    When you come across a challenge that is going to take some time to surmount, if you get into a tussle that might be prolonged, or if that robot needs a particularly complex fix you're going to have to win a Contest. At their heart Contests are just Blackjack played out over multiple rounds. But add in some Archetype abilities plus the knowledge of your Profession and things get more interesting. The winner of the Contest, be it the Dealer or the players involved, gets to describe the outcome.
  </p>
</section>
<section>
  <h3>Tasks</h3>
  <p>In contrast to Contests where you resolve a larger conflict over multiple hands Tasks are simple. Just draw a card, or maybe more, add your Superlative bonus and see if you hit 11. Aces are high and for those who like excitement Jokers can be treated as a critical success. Tasks help you resolve the little things. Hacking your way past a locked door, knocking out a guard, and snatching a beaker off a desk can all be decided by a Task.</p>
</section>
<img src="/maverick.png" class="span" alt="depiction of the maveric Archytype. it's abilities allow you to take risks during tasks and to swap hands with the dealer in contests"/>
<h2 class="col2">
  Characters
</h2>
<section class="col1">
  <p>
    Character creation is simple and involves picking a Superlative, an Archetype, and a Profession. You could be The Cleverest Brainiac Academic or go off the beaten path with The Strongest Maverick Provocateur. Your choices directly impact every part of the game and each character feels unique.
  </p>
  <p>
    Pick a Superlative from the examples or invent your own. When you complete a Task that is up your alley you get a small bonus. Like pickpocketing or sneaking around? Be The Sneakiest. Have a strong constitution? Maybe you're The Hardiest.
  </p>
  <p>
    Your Archetype and Profession give you abilities that you can use during encounters and further describe your character. Play a Bruiser if you'd like to be headstrong or The Jack-of-all-Trades if you'd like to be a master of none.
  </p>
</section>
<Footer />

<style>
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
    height: 25vh;
  }
  .station {
    height: 50vh;
    width: 100%;
    object-fit: none;
  }
  .span {
    margin: -5vh 0;
    justify-self: center;
  }
  .collision {
    object-fit: contain;
  }
  @media(min-width: 810px) {
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
  }
</style>
