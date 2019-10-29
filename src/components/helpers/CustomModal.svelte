<script>
  // Custom Modal box with a header, body, and footer. Makes it easier to just slot in title, body, and footer info into custom modals (e.g. instructions)
  import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';

  export let modalOpen = true;
  function toggle() {
    modalOpen = !modalOpen;
  }

</script>

<div>
  <Modal isOpen={modalOpen} {toggle}>
    <ModalHeader>
      <slot name="title"></slot>
    </ModalHeader>
    <ModalBody>
      <slot name="body"></slot>
    </ModalBody>
    <ModalFooter>
      <slot name="footer"></slot>
    </ModalFooter>
  </Modal>
</div>