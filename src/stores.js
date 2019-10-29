import { writable } from 'svelte/store';

// Create stores for Mturk and Firebase objects so they're available in all components
export const mturk_mode = writable('unset');
export const mturk_store = writable({ mturk: '' });
export const fb_status = writable('unset');
export const fb_store = writable({ db: '' });