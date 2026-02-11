async function RemoveAllVideos() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  while (true) {
    // Find the first menu button (3 points) of a video
    const menuBtn = document.querySelector(
      "ytd-playlist-video-renderer #button.dropdown-trigger",
    );
    if (!menuBtn) {
      console.log("Finished! No more videos to delete.");
      break;
    }

    menuBtn.click();
    await delay(500);

    // Look for the "Remove from" button
    const menuItems = [
      ...document.querySelectorAll(
        "ytd-menu-service-item-renderer yt-formatted-string",
      ),
    ];
    const removeBtn = menuItems.find((el) =>
      el.textContent.includes("Remove from"),
    );

    if (removeBtn) {
      removeBtn.click();
      console.log("Video deleted");
      await delay(1000);
    } else {
      console.log("Remove button not found, trying again...");
      document.body.click(); // close the menu
      await delay(500);
    }
  }
}

RemoveAllVideos();
