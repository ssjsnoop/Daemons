DAEMONS: RIFTBOUND — VERSION 3
==============================

PLAY ON A COMPUTER
Open index.html in Chrome, Edge, or another modern browser. This standalone HTML contains the game sprites and works offline without any installation.

PUBLISH THE INSTALLABLE PHONE VERSION
1. Extract this ZIP.
2. Upload index.html, manifest.webmanifest, sw.js and the icons folder together to the ROOT of your GitHub Pages repository.
3. Wait for your GitHub Pages site to update, then open the HTTPS URL on your phone.
4. On the title screen, choose INSTALL ON PHONE.
   - Android Chrome: If an install prompt is available, accept it. Otherwise tap Chrome's three-dot menu > Install app or Add to Home screen.
   - iPhone Safari: Tap the Share icon > Add to Home Screen > Add.
5. Launch from the home screen icon. The worker caches the game shell for offline use once loaded.

The title-screen DOWNLOAD OFFLINE HTML option downloads a separate index.html which can be opened to play in a browser. It is NOT itself a standalone phone app installer; use the GitHub Pages PWA route for installation.

DESKTOP CONTROLS
Overworld: WASD or arrow keys to move, E to interact, Shift to run, Tab/M to open menus.
Battle: LEFT/RIGHT ARROWS move, UP ARROW or Space jumps.
A = Slash | S = Shot | D = Elemental Power | F = Ultimate (at 100% energy).
Shift = Dash | C = Capture | T = Swap Daemon | R = Keeper Gift | Q = Secret Echo when unlocked | V = Flee from wild fights.

MOBILE
Directional controls are on the left. Jump and Dash are on the left, attacks and other combat skills on the right. Portrait and landscape modes supported.

VERSION 3 CHANGES
- No forced opening battle; start by exploring or opt into practice.
- Walking through tall grass shows a Fight or Keep Exploring choice instead of an automatic fight.
- Keeper duel also requires an explicit confirmation.
- New victory/EXP result screen with animated EXP bar, level-up rewards, and newly learned skill descriptions.
- Real combat enhancements unlocked at levels 7, 8, 11, 14, 18, 24 and 32.
- Title-screen Install and Download Offline HTML options; visible install button in top bar.
- Preserves the 110 Daemons, 8 Keeper powers, secret fragments, Echo ability, hidden bosses and campaign ending.

SAVES
Progress is saved in browser localStorage under riftboundSave2 and should remain compatible with Version 2 when run on the SAME WEBSITE ORIGIN. Moving to a new domain or opening a file:// HTML cannot automatically import a save from another origin. Downloading a standalone HTML does not transfer your existing website save.

LIMITATIONS
Automated Chromium tests exercised opening, input mappings, reward flow, optional encounters, 8 Keepers, secrets, save/load, and phone-view controls. A real device test of the install flow and actual manual completion of every fight have NOT been completed. Animations are still assembled from existing Daemon art, not hand-drawn full original cycles.
