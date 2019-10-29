<script>
  import CustomModal from './helpers/CustomModal.svelte';
  import { Button } from 'sveltestrap';

  export let modalOpen;

  function toggle() {
    modalOpen = !modalOpen;
  }
  function moreInstructions() {
    consoe.log("more instructions requested");
    toggle();
  }
</script>

<style>
  .underline {
    text-decoration: underline;
  }
</style>

<CustomModal modalOpen={modalOpen}>
  <span slot="title">
    Welcome to Svelte Turk!
  </span>
  <span slot="body">
    <p>This is a browser-based application for interacting with Amazon's Mechanical Turk. Unlike other solutions
      (e.g.
      PsiTurk) you do <span class="underline">not</span> have to setup and configure your own server and
      database! This is designed to make it fast and easy to launch online experiments. There are only two things
      you need to do to get started:
    </p>
    <ol>
      <li>Make sure to <span class="underline">authorize</span> with AWS using your app and secrete keys</li>
      <li>Make sure to <span class="underline">configure</span> Firebase to save data</li>
    </ol>
    <p>
      You can perform both of these actions using the Options menu on the right side of the navigation bar.
    </p>
  </span>
  <span slot="footer">
    <Button color="success" on:click={toggle}>
      Start Using
    </Button>
    <Button color="primary" on:click={moreInstructions}>
      Take a Tour
    </Button>
  </span>
</CustomModal>