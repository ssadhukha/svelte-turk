<script>
  import { Col, Container, Row, Form, Button, FormGroup, FormText, Input, Label } from 'sveltestrap';

  // Create HIT vars
  let assignmentDuration = '60';
  let description = '';
  let lifetime = '60';
  let reward = '1';
  let title = '';
  let autoApprovalDelay = '60';
  let keywords = 'research, experiment';
  let maxAssignments = '10';
  let externalQuestion = `
  <ExternalQuestion xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2006-07-14/ExternalQuestion.xsd">
  <ExternalURL>https://cosanlab.com</ExternalURL>
  <FrameHeight>80</FrameHeight>
  </ExternalQuestion>`;

  // Component handlers
  function handleSubmit(ev) {
    ev.preventDefault();
    console.log("form submitted");
    console.log(assignmentDuration, description, lifetime, reward, title, autoApprovalDelay, keywords, maxAssignments);
  }

</script>

<style>
</style>

<Form>
  <Row>
    <Col>
    <FormGroup>
      <Label for="assignmentDuration">Duration</Label>
      <Input name="assignmentDuration" type="text" bind:value={assignmentDuration} />
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
      <Label for="reward">Reward</Label>
      <Input name="reward" type="text" bind:value={reward} />
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
      <Label for="autoApprovalDelay">Approval Delay</Label>
      <Input name="autoApprovalDelay" type="text" bind:value={autoApprovalDelay} />
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
      <Label for="maxAssignments">Max Assignments</Label>
      <Input name="maxAssignments" type="text" bind:value={maxAssignments} />
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
      <Label for="lifetime">Lifetime</Label>
      <Input name="lifetime" type="text" bind:value={lifetime} />
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input name="title" type="text" bind:value={title} placeholder='HIT Title' />
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
      <Label for="keywords">Keywords</Label>
      <Input name="keywords" type="text" bind:value={keywords} />
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input name="keywords" type="textarea" bind:value={description} placeholder='HIT Description' />
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col>
    <Button on:click={handleSubmit}>Create HIT</Button>
    </Col>
  </Row>
</Form>