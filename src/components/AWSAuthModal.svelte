<script>
  import CustomModal from './helpers/CustomModal.svelte';
  import { Form, FormGroup, Input, FormText, Label, Button } from 'sveltestrap';
  import AWS from 'aws-sdk';
  import { mturk_mode, mturk_store } from '../stores.js';

  export let modalOpen;
  let aws_accessKey = '';
  let aws_secretKey = '';
  let sandbox = true;
  let region_name = 'us-east-1';
  let mturk_object;

  function toggle() {
    modalOpen = !modalOpen;
  }
  function setupAWS() {
    if (aws_accessKey && aws_secretKey) {
      let endpoint;
      if (sandbox) {
        endpoint = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com';
        mturk_mode.set('sandbox');
      } else {
        endpoint = 'https://mturk-requester.us-east-1.amazonaws.com';
        mturk_mode.set('market');
      }
      try {
        AWS.config.update({
          region: region_name,
          endpoint: endpoint,
          accessKeyId: aws_accessKey,
          secretAccessKey: aws_secretKey
        });
        mturk_object = new AWS.MTurk();
        mturk_store.set({ mturk: mturk_object });
        toggle();
      } catch (error) {
        console.error(error);
      }
    }

  }
</script>

<CustomModal modalOpen={modalOpen}>
  <span slot="title">
    API Credentials
  </span>
  <span slot="body">
    <Form>
      <Label for="credentials">Please enter your AWS credentials below</Label>
      <FormGroup>
        <Input type="text" bind:value={aws_accessKey}></Input>
        <FormText color="muted">
          AWS Access Key
        </FormText>
      </FormGroup>
      <FormGroup>
        <Input type="text" bind:value={aws_secretKey}></Input>
        <FormText color="muted">
          AWS Secret Key
        </FormText>
      </FormGroup>
    </Form>
  </span>
  <span slot="footer">
    <Label for="mturk_model">
      <Input type="checkbox" name="mturk_mode" bind:checked={sandbox} />
      Sandbox
    </Label>
    <Button color="success" on:click={setupAWS}>
      Authorize
    </Button>
    <Button color="danger" on:click={toggle}>
      Cancel
    </Button>
  </span>

</CustomModal>