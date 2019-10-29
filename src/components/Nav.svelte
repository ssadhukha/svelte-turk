<script>
  // Nav bar with right-side drop down options for setting up AWS and Firebase access
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    FormText,
  } from 'sveltestrap';
  import Instructions from './Instructions.svelte';
  import AWSAuthModal from './AWSAuthModal.svelte';
  import FirebaseAuthModal from './FirebaseAuthModal.svelte';

  let dropOpen = false;
  let awsModal = false;
  let firebaseModal = false;
  let tutorialOpen = false;
  let aws_accessKey, aws_secretKey, fb_apiKey, fb_authDomain, fb_databaseURL, fb_projectId, fb_storageBucket, fb_messagingSenderId, fb_appId, fb_measurementId;
  let secretKey = '';

  function handleUpdate(event) {
    dropOpen = event.detail.dropOpen;
  }
  function toggleAWS() {
    awsModal = !awsModal;
  }
  function toggleFirebase() {
    firebaseModal = !firebaseModal;
  }
  function toggleTutorial() {
    tutorialOpen = !tutorialOpen;
  }
</script>

<!-- Tutorial modal in case the user asks for it -->
<Instructions modalOpen={tutorialOpen} />

<!-- Authorize AWS access with keys -->
<AWSAuthModal modalOpen={awsModal} />

<!-- Setup firebase -->
<FirebaseAuthModal modalOpen={firebaseModal} />

<!-- Main Navbar -->
<Navbar color="dark" dark expand="md">
  <NavbarBrand href="/">Svelte-Turk</NavbarBrand>
  <NavbarToggler on:click={()=> (dropOpen = !dropOpen)} />
    <Collapse {dropOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink href="https://github.com/ejolly/create-svelte-app"><i class="fab fa-github"></i></NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>Options</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem on:click={toggleAWS}>Authorize AWS</DropdownItem>
            <DropdownItem on:click={toggleFirebase}>Configure Firebase</DropdownItem>
            <DropdownItem divider />
            <DropdownItem on:click={toggleTutorial}>Tutorial</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
</Navbar>