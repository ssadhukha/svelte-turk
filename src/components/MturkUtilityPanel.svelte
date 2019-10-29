<script>
  import { Button, Badge, Modal, ModalHeader, ModalBody, Row, Col, Input, FormGroup } from 'sveltestrap';
  import { mturk_mode, mturk_store } from '../stores';

  let mode, mode_color, account_balance;
  let responseModal = false;
  let hitId;

  $: if ($mturk_mode === 'unset') {
    mode = 'Not configured';
    mode_color = 'dark';
  } else if ($mturk_mode === 'sandbox') {
    mode = 'Sandbox';
    mode_color = 'warning';
  } else if ($mturk_mode === 'market') {
    mode = 'Live';
    mode_color = 'success';
  }

  function toggle() {
    responseModal = !responseModal;
  }

  async function checkBalance() {
    try {
      let resp = await $mturk_store.mturk.getAccountBalance().promise();
      account_balance = resp.AvailableBalance;
    } catch (error) {
      console.error(error);
      account_balance = error;
    }
    toggle();
  }
  async function checkHITStatus() {
    console.log("check hit status");
  }

</script>
<style>
  #mturk-panel {
    margin-bottom: 15%;
  }
</style>

<div id="mturk-panel">
  <Row>
    <Col>
    <h2>Mturk: <Badge color={mode_color}>{mode} </Badge>
    </h2>
    </Col>
  </Row>
  <Row>
    <Col xs='3'>
    <Button disabled={$mturk_mode==='unset' } on:click={checkBalance} color="primary">
      Check Account Balance
    </Button>
    </Col>
    <Col xs='6'>
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" disabled={$mturk_mode==='unset' } on:click={checkHITStatus}>Check
          HIT Status</button>
      </span>
      <input bind:value={hitId} type="text" class="form-control" placeholder="Enter HIT Id">
    </div>
    </Col>
  </Row>
</div>
<Modal isOpen={responseModal} {toggle}>
  <ModalHeader {toggle}>Account Balance</ModalHeader>
  <ModalBody>${account_balance}</ModalBody>
</Modal>