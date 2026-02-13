async function RemoveAllVideos() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Selector constants
  const MENU_BTN =
    "ytd-playlist-video-renderer #button.dropdown-trigger";
  const MENU_POPUP =
    "tp-yt-iron-dropdown:not([aria-hidden='true']) ytd-menu-service-item-renderer";
  const REMOVE_ICON =
    'tp-yt-iron-dropdown:not([aria-hidden="true"]) ytd-menu-service-item-renderer tp-yt-paper-item svg path[d^="M19 3h-4V2"]';

  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve) => {
      const check = () => document.querySelector(selector);
      const el = check();
      if (el) return resolve(el);

      const observer = new MutationObserver(() => {
        const el = check();
        if (el) {
          observer.disconnect();
          resolve(el);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    });
  }

  let deleted = 0;
  let iterations = 0;
  const MAX_ITERATIONS = 5000;

  while (iterations++ < MAX_ITERATIONS) {
    const menuBtn = document.querySelector(MENU_BTN);
    if (!menuBtn) {
      console.log(`Done! Removed ${deleted} video(s).`);
      break;
    }

    menuBtn.click();

    // Wait for the popup menu to actually appear in the DOM
    const popup = await waitForElement(MENU_POPUP);

    if (!popup) {
      console.log("Menu didn't open, retrying...");
      document.body.click();
      await delay(500);
      continue;
    }

    // Find the remove button by its trash icon SVG path (language-independent)
    const removeBtn = document
      .querySelector(REMOVE_ICON)
      ?.closest("ytd-menu-service-item-renderer");

    if (removeBtn) {
      removeBtn.click();
      deleted++;
      console.log(`Removed video #${deleted}`);
      await delay(1000);
    } else {
      console.log("Remove button not found, closing menu and retrying...");
      document.body.click();
      await delay(500);
    }
  }

  if (iterations > MAX_ITERATIONS) {
    console.log(
      `Safety limit reached (${MAX_ITERATIONS} iterations). Removed ${deleted} video(s).`,
    );
  }
}

RemoveAllVideos();
