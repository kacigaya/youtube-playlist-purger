# YouTube Playlist Purger

A simple browser console script to bulk remove all videos from a YouTube playlist.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#330000" />
      <stop offset="50%" stop-color="#cc0000" />
      <stop offset="100%" stop-color="#ff9999" />
    </linearGradient>
    
    <linearGradient id="eraserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff3333" />
      <stop offset="100%" stop-color="#800000" />
    </linearGradient>

    <style>
      .swoosh-main {
        stroke-dasharray: 1200;
        stroke-dashoffset: 1200;
        animation: drawSwoosh 1.5s ease-out infinite alternate;
      }
      
      .swoosh-accent {
        stroke-dasharray: 800;
        stroke-dashoffset: 800;
        animation: drawSwoosh 1.5s ease-out infinite alternate 0.2s;
      }

      .eraser-group {
        animation: moveEraser 1.5s ease-out infinite alternate;
      }

      .block-fade {
        animation: fadeBlock 1.5s ease-in-out infinite alternate;
      }

      @keyframes drawSwoosh {
        0% { stroke-dashoffset: 1200; }
        100% { stroke-dashoffset: 0; }
      }

      @keyframes moveEraser {
        0% { transform: translate(180px, -200px) rotate(45deg); }
        100% { transform: translate(0px, 0px) rotate(45deg); }
      }

      @keyframes fadeBlock {
        0% { opacity: 1; transform: scaleX(1); }
        100% { opacity: 0; transform: scaleX(0.5); }
      }
    </style>
  </defs>

  <g transform="translate(100, 80)">
    <rect x="0" y="0" width="90" height="30" fill="#e61919" />
    <rect x="0" y="40" width="90" height="30" fill="#e61919" />
    <rect x="0" y="80" width="70" height="25" fill="#cc1414" />
    
    <rect x="0" y="115" width="45" height="20" fill="#b30f0f" opacity="0.8" class="block-fade" />
    <rect x="55" y="115" width="25" height="20" fill="#b30f0f" opacity="0.8" class="block-fade" style="animation-delay: 0.1s;" />
    
    <rect x="0" y="145" width="45" height="20" fill="#990a0a" opacity="0.6" class="block-fade" style="animation-delay: 0.2s;" />
    <rect x="55" y="145" width="25" height="20" fill="#990a0a" opacity="0.6" class="block-fade" style="animation-delay: 0.3s;" />
    
    <rect x="0" y="175" width="25" height="15" fill="#800000" opacity="0.4" class="block-fade" style="animation-delay: 0.4s;" />
    <rect x="35" y="175" width="15" height="15" fill="#800000" opacity="0.4" class="block-fade" style="animation-delay: 0.5s;" />
  </g>

  <path class="swoosh-main" d="M 110 370 C 90 470, 240 480, 310 380 C 370 290, 420 180, 470 110" fill="none" stroke="url(#swooshGrad)" stroke-width="45" stroke-linecap="round" />
  <path class="swoosh-accent" d="M 130 390 C 120 440, 210 440, 280 360 C 340 280, 380 200, 410 140" fill="none" stroke="#4d0000" stroke-width="12" stroke-linecap="round" />
  
  <path class="swoosh-main" d="M 330 420 L 450 300" fill="none" stroke="#990000" stroke-width="6" stroke-linecap="round" style="animation-duration: 1.2s;" />
  <path class="swoosh-accent" d="M 230 430 L 310 380" fill="none" stroke="#660000" stroke-width="4" stroke-linecap="round" style="animation-duration: 1.6s;" />

  <g class="eraser-group">
    <g transform="translate(300, 270)">
      <rect x="-45" y="-90" width="90" height="180" rx="12" fill="url(#eraserGrad)" stroke="#260000" stroke-width="6" />
      <rect x="-46" y="-10" width="92" height="70" fill="#ffffff" stroke="#260000" stroke-width="6" />
      
      <path d="M -45 -90 L -30 -105 L 60 -105 L 45 -90 Z" fill="#ff9999" stroke="#260000" stroke-width="6" stroke-linejoin="round" />
      <path d="M 45 -90 L 60 -105 L 60 75 L 45 90 Z" fill="#660000" stroke="#260000" stroke-width="6" stroke-linejoin="round" />
      
      <path d="M 45 -10 L 60 -25 L 60 45 L 45 60 Z" fill="#cccccc" stroke="#260000" stroke-width="6" stroke-linejoin="round" />
    </g>
  </g>
</svg>

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
