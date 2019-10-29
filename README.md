# Svelte-Turk

Client-side Svelte app for interacting with Amazon's Mechanical Turk and storing data in Firebase.

## Notes

- Designed to be lightweight offering a way to store data and interact with Mturk without all the compilcations of setting up a backend or database server
- As a result all application state is stored in the browser and a user will need to re-authorize if they refresh the page (there are ways around this e.g. saving state within firebase, but this is not currently implemented)


### Dependencies  

- Has no dependencies except for [SvelteStrap](https://bestguy.github.io/sveltestrap/?path=/story/introduction--get-started) for styling
- Loads in [Mturk Javascript API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) from a CDN
- Loads in [Firebase](https://firebase.google.com/docs/reference/js) from a CDN
- Loads in [Bootstrap CSS](https://getbootstrap.com/docs/4.3/getting-started/introduction/) from a CDN


