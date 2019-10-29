<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/firestore';
  import CustomModal from './helpers/CustomModal.svelte';
  import { Form, FormGroup, Input, FormText, Label, Button } from 'sveltestrap';
  import { fb_store, fb_status } from '../stores.js';

  export let modalOpen;
  let db, fb_apiKey, fb_authDomain, fb_databaseURL, fb_projectId, fb_storageBucket, fb_messagingSenderId, fb_appId, fb_measurementId;

  function toggle() {
    modalOpen = !modalOpen;
  }
  function setupFirebase() {
    if (fb_apiKey && fb_authDomain && fb_databaseURL && fb_projectId && fb_storageBucket && fb_messagingSenderId && fb_appId && fb_measurementId) {
      try {
        const firebaseConfig = {
          apiKey: fb_apiKey,
          authDomain: fb_authDomain,
          databaseURL: fb_databaseURL,
          projectId: fb_projectId,
          storageBucket: fb_storageBucket,
          messagingSenderId: fb_messagingSenderId,
          appId: fb_appId,
          measurementId: fb_measurementId
        };
        firebase.initializeApp(firebaseConfig);
        fb_store.set({ db: db });
        fb_status.set('connected');
        toggle();
      } catch (error) {
        console.error(error);
      }
    }
  }

</script>

<CustomModal modalOpen={modalOpen}>
  <span slot="title">
    Firebase Configuration
  </span>
  <span slot="body">
    <Form>
      <Label for="credentials">Please enter your Firebase settings below</Label>
      <FormGroup>
        <Input type="text" bind:value={fb_apiKey}></Input>
        <FormText color="muted">
          API Key
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_authDomain}></Input>
        <FormText color="muted">
          Auth Domain
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_databaseURL}></Input>
        <FormText color="muted">
          Database URL
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_projectId}></Input>
        <FormText color="muted">
          Project ID
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_storageBucket}></Input>
        <FormText color="muted">
          Storage Bucket
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_messagingSenderId}></Input>
        <FormText color="muted">
          Messaging Sender ID
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_appId}></Input>
        <FormText color="muted">
          App ID
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={fb_measurementId}></Input>
        <FormText color="muted">
          Measurement ID
        </FormText>
      </FormGroup>
    </Form>
  </span>
  <span slot="footer">
    <Button color="success" on:click={setupFirebase}>
      Configure
    </Button>
    <Button color="danger" on:click={toggle}>
      Cancel
    </Button>
  </span>
</CustomModal>