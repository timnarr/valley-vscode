# Changelog
All notable changes to "Valley" will be documented in this file.

***

## Unreleased
`Added`
- Valley colors for places that still showed VS Code's own colors: source control graph, chat, warning and error badges, the activity bar at the top, test icons, the option toggles in find and search, base changes in the merge editor, moved code in the diff editor, terminal text and a few smaller spots

`Fixed`
- Inlay hints use the muted text color again, so they no longer look like comments and are easier to read
- Better contrast for the status line of the suggest widget
- The profile badge on the settings icon uses the badge blue instead of VS Code's grey, because VS Code replaced the old status bar profile colors

`Changed`
- Smaller download: the extension package no longer includes screenshots and build sources

`Removed`
- Colors VS Code no longer supports (`statusBarItem.settingsProfiles*`, `welcomePage.tileShadow`)

## 0.5.0 - November 11, 2026
`Changed`
- New, more neutral grey surfaces: editor `#1F1F1F`, sidebar, panel and tabs `#292929`, title and status bar `#383838`, menus, dropdowns and widgets `#4B4B4D`
- The active tab now blends into the editor and the inactive tabs use the sidebar color; the blue top border on the active tab is gone
- The activity bar uses the sidebar color and gets a thin border
- Secondary buttons are grey instead of purple
- Install buttons in the Extensions view use the regular button blue instead of green
- Bracket pair colorization uses the regular syntax colors instead of the brighter terminal variants
- More subtle inlay hints, folded ranges and current line highlight
- The active terminal tab is marked in blue

`Added`
- Colors for features VS Code added since 0.4.0: bracket pair guides, merge editor, command center, sticky scroll, unicode highlighting, diff editor line backgrounds, terminal find matches and command decorations, keybinding table, settings profiles and extension icons (verified, pre-release, sponsor)

`Removed`
- Colors VS Code no longer supports (`welcomePage.button*`)

## 0.4.0 - September 30, 2021
`Changed`
- Added all the new theme color options which were added from the VSCode team in the last year and added the following (mostly smaller) improvements
  - Added default colors for the new "bracket pair colorization" feature
  - Added colors for secondary buttons
  - Improved list colors states like (focus, in-/active selection)
  - Added "inline hint" colors
  - Unified and improved drop borders for scaling sidebars, terminal view etc.
  - Improved keybinding colors for command palette
  - Different color improvements for debugging views
  - and other small color improvements
- Highlighting the current tab with a thin blue border
- Improved punctutation styles in scss/css

## 0.3.0 - June 16, 2020
`Changed`
- Enabled "semanticHighlighting" by default
- Simplified Sidebar-Section-Header
- Minor text color adjustments

## 0.2.0 - April 26, 2020
`Added`
- Italic theme introduced

`Changed`
- Removed "meta.embedded" from the punctutation style and added detailed scopes for punctuation to work correctly in PHP

## 0.1.4 - April 01, 2020
`Changed`
- Improved contrast of whitspace rendering
- Improved and unified assignment scopes
- Improved punctuation color in embedded scopes
- Unified background color for titleBar, quickInput, statusBar etc.

## 0.1.3 - March 12, 2020
`Added`
- Added terminal color palette with normal and bright variants

`Changed`
- Improved contrast for linenumbers
- Improved terminal colors

## 0.1.2 - March 05, 2020
`Fixed`
- Fixed undefined color for alpha values and added the forgotten build

## 0.1.1 - March 05, 2020
`Fixed`
- Fixed menu and menubar colors for Windows and Linux [#1](https://github.com/timnarr/valley-vscode/issues/1)

## 0.1.0 - March 04, 2020
🎉 Initial Release
