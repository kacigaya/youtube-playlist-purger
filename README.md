# YouTube Playlist Purger

A simple browser console script to bulk remove all videos from a YouTube playlist.

<p align="left">
  <img src="logo.png" alt="YouTube Playlist Purger" width="200">
</p>

## Features

- Automatically removes all videos from a YouTube playlist
- Works with Watch Later, Liked Videos, or any custom playlist
- Simple copy-paste execution in browser console

## Usage

### Step 1: Open Your Playlist

Navigate to your YouTube playlist:

- **Watch Later**: https://www.youtube.com/playlist?list=WL
- **Liked Videos**: https://www.youtube.com/playlist?list=LL
- **Custom Playlist**: `https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID`

### Step 2: Load All Videos

Scroll down to the bottom of the page to ensure all videos are loaded. For large playlists, you may need to scroll multiple times until no new videos appear.

> **Tip**: You can use `End` key or hold `Page Down` to scroll faster.

### Step 3: Open Browser Console

Open the developer console in your browser:

| Browser | Mac | Windows/Linux |
|---------|-----|---------------|
| Chrome  | `Cmd + Option + J` | `Ctrl + Shift + J` |
| Firefox | `Cmd + Option + K` | `Ctrl + Shift + K` |
| Edge    | `Cmd + Option + J` | `Ctrl + Shift + J` |
| Safari  | `Cmd + Option + C` | N/A |

### Step 4: Run the Script

Copy and paste the contents of `script.js` into the console and press `Enter`.



The script will automatically:
1. Click the menu button (⋮) on each video
2. Select "Remove from" option
3. Repeat until all videos are deleted
4. Log progress to the console

## Notes

- **Rate limiting**: The script includes delays between actions to avoid triggering YouTube's rate limiting.
- **Language**: The script supports English ("Remove from") and French ("Supprimer de"). If your YouTube is in a different language, add your translation to the `removeBtn` check in the script.
- **Undo**: This action cannot be undone. Make sure you want to remove all videos before running the script.

## License

MIT
