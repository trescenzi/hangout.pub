<footer>
  <p>
    Content on this site is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license</a>
  </p>
  <ul>
    <li><a href="/character_sheet.pdf">Download Character Sheet</a></li>
    <li><a href="https://www.drivethrurpg.com">Buy a Copy</a></li>
    <li><a href="/">Hangout Publishing</a></li>
  </ul>
</footer>

<style>
  footer {
    justify-self: center;
    font-size: var(--font-s);
    display: flex;
    margin-bottom: var(--space-l);
  }

  ul {
    list-style: none;
    padding: 0;
    width: 350px;
  }

  li + li {
    padding-top: 4px;
  }

  a {
    color: white;
  }
  a:visited {
    color: white;
  }

  @media(min-width: 650px) {
    footer {
      grid-column: 1/3;
    }
    p {
      width: 350px;
    }
  }
</style>
