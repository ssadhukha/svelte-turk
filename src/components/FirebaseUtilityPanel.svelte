<script>
  import { Button, Badge, Modal, ModalHeader, ModalBody } from 'sveltestrap';
  import { fb_status } from '../stores';

  let mode, mode_color;
  let responseModal = false;

  $: if ($fb_status === 'connected') {
    mode = 'Connected';
    mode_color = 'success';
  } else if ($fb_status === 'unset') {
    mode = 'Not configured';
    mode_color = 'dark';
  } else {
    mode = 'Error';
    mode_color = 'danger';
  }

</script>

<h2>Firebase: <Badge color={mode_color}>{mode} </Badge>
</h2>