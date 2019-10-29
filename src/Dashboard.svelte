<script>
  import { Col, Container, Row } from 'sveltestrap';
  import Instructions from './components/Instructions.svelte';
  import CreateHITForm from './components/CreateHITForm.svelte';
  import MturkUtilityPanel from './components/MturkUtilityPanel.svelte';
  import FirebaseUtilityPanel from './components/FirebaseUtilityPanel.svelte';
  import { onMount } from 'svelte';


  // Component vars
  // Get/store this in firebase
  let firstTimeInstructions = true;


</script>

<style></style>


<Instructions modalOpen={firstTimeInstructions} />
<Container class="container-fluid">
  <Row>
    <Col xs="6">
    <h1>Utility Panel</h1>
    <Row>
      <Col>
      <MturkUtilityPanel />
      </Col>
    </Row>
    <Row>
      <Col>
      <FirebaseUtilityPanel />
      </Col>
    </Row>
    </Col>
    <Col xs="6">
    <h1>Create New HIT</h1>
    <CreateHITForm />
    </Col>
  </Row>
</Container>