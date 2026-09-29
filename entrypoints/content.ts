export default defineContentScript({
  matches: ['*://*.tiktok.com/*'],
  main() {
    console.log('Hello content.tiktok.');
  },
});
