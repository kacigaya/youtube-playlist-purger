async function RemoveAllVideos() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve) => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);

      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
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

  while (true) {
    const menuBtn = document.querySelector(
      "ytd-playlist-video-renderer #button.dropdown-trigger",
    );
    if (!menuBtn) {
      console.log(`Done! Removed ${deleted} video(s).`);
      break;
    }

    menuBtn.click();

    // Wait for the popup menu to actually appear in the DOM
    const popup = await waitForElement(
      "tp-yt-iron-dropdown:not([aria-hidden='true']) ytd-menu-service-item-renderer",
    );

    if (!popup) {
      console.log("Menu didn't open, retrying...");
      document.body.click();
      await delay(500);
      continue;
    }

    await delay(300);

    // Find the remove button from visible menu items
    const menuItems = document.querySelectorAll(
      "tp-yt-iron-dropdown:not([aria-hidden='true']) ytd-menu-service-item-renderer",
    );
    const removeBtn = [...menuItems].find((el) => {
      const text = el.textContent.toLowerCase();
      return text.includes("remove from") || text.includes("supprimer de");
    });

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
}

RemoveAllVideos();
