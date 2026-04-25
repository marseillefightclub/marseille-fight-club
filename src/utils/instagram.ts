/**
 * Attempts to open an Instagram story in the app, falling back to the browser if it fails.
 */
export const openInstagramStory = (username: string) => {
  const appUri = `instagram://stories/${username}/`;
  const webUri = `https://www.instagram.com/stories/${username}/`;
  
  // Detect mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Attempt to open the app
    window.location.href = appUri;
    
    // Set a timeout to check if the app opened. 
    // If we're still on the page after 1.5 seconds, redirect to web.
    setTimeout(() => {
      // If the page is still visible, it means the app probably didn't open
      if (document.visibilityState === 'visible') {
        window.open(webUri, '_blank');
      }
    }, 1500);
  } else {
    // On desktop, just open the web link
    window.open(webUri, '_blank');
  }
};
