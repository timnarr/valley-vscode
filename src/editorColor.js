import colorDark from './color_dark';
import colorLight from './color_light';

const editorColor = (type) => {

  let color = colorDark

  if (type === 'light') {
    color = colorLight;
  }

  const editorColor = {
    colors: {
      // Contrast colors
      // https://code.visualstudio.com/api/references/theme-color#contrast-colors
      // "contrastActiveBorder": "",
      // "contrastBorder": "",

      // Base colors
      // https://code.visualstudio.com/api/references/theme-color#base-colors
      "focusBorder": color.editor.action.primary + color.alpha80,
      "foreground": color.editor.ui.default,
      "widget.shadow": color.editor.ui.shadowSoft,

      "selection.background": color.editor.action.selection + color.alpha40,
      "descriptionForeground": color.editor.ui.muted,
      "errorForeground": color.editor.action.errorForeground,
      "icon.foreground": color.editor.ui.default,

      // Window border
      // https://code.visualstudio.com/api/references/theme-color#window-border
      // "window.activeBorder": "",
      // "window.inactiveBorder": "",

      // Text colors
      // https://code.visualstudio.com/api/references/theme-color#text-colors
      "textBlockQuote.background": color.editor.surface.depth2,
      "textBlockQuote.border": color.editor.action.primary,
      "textCodeBlock.background": color.editor.surface.depth6,
      "textLink.foreground": color.editor.action.primary,
      "textLink.activeForeground": color.editor.action.primaryHover,
      "textPreformat.foreground": color.editor.action.secondary,
      "textSeparator.foreground": color.editor.surface.depth2,

      // Button control
      // https://code.visualstudio.com/api/references/theme-color#button-control
      "button.background": color.editor.action.primary,
      "button.foreground": color.black + color.alpha90,
      "button.hoverBackground": color.editor.action.primaryHover,
      "checkbox.background": color.editor.ui.checkbox,
      "checkbox.foreground": color.editor.action.primary,
      "checkbox.border": color.editor.ui.checkboxBorder,

      // Dropdown control
      // https://code.visualstudio.com/api/references/theme-color#dropdown-control
      "dropdown.background": color.editor.ui.dropdown,
      "dropdown.listBackground": color.editor.ui.dropdown,
      "dropdown.border": color.editor.ui.dropdownBorder,
      "dropdown.foreground": color.editor.ui.default,

      // Input control
      // https://code.visualstudio.com/api/references/theme-color#input-control
      "input.background": color.editor.ui.input,
      "input.border": color.editor.ui.inputBorder,
      "input.foreground": color.editor.ui.default,
      "input.placeholderForeground": color.editor.ui.default + color.alpha50,
      "inputOption.activeBackground": color.editor.action.primary + color.alpha50,
      // "inputOption.activeBorder": "",
      "inputValidation.errorBackground": color.editor.action.errorBackground,
      "inputValidation.errorForeground": color.black + color.alpha90,
      "inputValidation.errorBorder": color.editor.action.errorBackground,
      "inputValidation.infoBackground": color.editor.action.infoBackground,
      "inputValidation.infoForeground": color.black + color.alpha90,
      "inputValidation.infoBorder": color.editor.action.infoBackground,
      "inputValidation.warningBackground": color.editor.action.warningBackground,
      "inputValidation.warningForeground": color.black + color.alpha90,
      "inputValidation.warningBorder": color.editor.action.warningBackground,

      // Scrollbar control
      // https://code.visualstudio.com/api/references/theme-color#scrollbar-control
      "scrollbar.shadow": color.editor.ui.shadowHard,
      "scrollbarSlider.activeBackground": color.editor.ui.default + color.alpha30,
      "scrollbarSlider.background": color.editor.ui.default + color.alpha10,
      "scrollbarSlider.hoverBackground": color.editor.ui.default + color.alpha20,

      // Badge
      // https://code.visualstudio.com/api/references/theme-color#badge
      "badge.background": color.editor.action.primary,
      "badge.foreground": color.black + color.alpha90,

      // Progressbar
      // https://code.visualstudio.com/api/references/theme-color#progress-bar
      "progressBar.background": color.editor.action.primary,

      // List and Trees
      // https://code.visualstudio.com/api/references/theme-color#lists-and-trees
      "list.activeSelectionBackground": color.editor.action.activeSelectionBackground,
      "list.activeSelectionForeground": color.editor.action.activeSelectionForeground,
      "list.dropBackground": color.editor.action.selection + color.alpha40,
      "list.focusBackground": color.editor.action.focusBackground,
      "list.focusForeground": color.editor.action.focusForeground,
      "list.highlightForeground": color.editor.action.searchHighlight,
      "list.hoverBackground": color.editor.ui.default + color.alpha04,
      "list.hoverForeground": color.editor.ui.default,
      "list.inactiveSelectionBackground": color.editor.ui.default + color.alpha08,
      "list.inactiveSelectionForeground": color.editor.ui.default,
      // "list.inactiveFocusBackground": "",

      "list.invalidItemForeground": color.editor.action.errorForeground,
      "list.errorForeground": color.editor.action.errorForeground,
      "list.warningForeground": color.editor.action.warningForeground,
      "listFilterWidget.background": color.editor.surface.depth0,
      "listFilterWidget.outline": color.editor.action.search,
      "listFilterWidget.noMatchesOutline": color.editor.surface.depth0,
      "list.filterMatchBackground": color.editor.action.search + color.alpha30,
      "list.filterMatchBorder": color.editor.action.search,
      "tree.indentGuidesStroke": color.editor.ui.default + color.alpha15,

      // Activity Bar
      // https://code.visualstudio.com/api/references/theme-color#activity-bar
      "activityBar.background": color.editor.surface.depth2,
      "activityBar.dropBackground": color.editor.action.selection + color.alpha40,
      "activityBar.foreground": color.editor.ui.default,
      "activityBar.inactiveForeground": color.editor.ui.default + color.alpha50,
      // "activityBar.border": "#E6E8EA",
      "activityBarBadge.background": color.editor.action.primary,
      "activityBarBadge.foreground": color.black + color.alpha90,
      "activityBar.activeBorder": color.editor.ui.default,
      "activityBar.activeBackground": color.black + color.alpha00,
      "activityBar.activeFocusBorder": color.editor.action.primary + color.alpha80,

      // Sidebar
      // https://code.visualstudio.com/api/references/theme-color#side-bar
      "sideBar.background": color.editor.surface.depth3,
      "sideBar.foreground": color.editor.ui.default + color.alpha75,
      // "sideBar.border": "#E6E8EA",
      "sideBar.dropBackground": color.editor.action.selection + color.alpha40,
      "sideBarTitle.foreground": color.editor.ui.default,
      "sideBarSectionHeader.background": color.editor.surface.depth3,
      "sideBarSectionHeader.foreground": color.editor.ui.default,
      "sideBarSectionHeader.border": color.editor.surface.border.depth2,

      // Minimap
      // https://code.visualstudio.com/api/references/theme-color#minimap
      "minimap.findMatchHighlight": color.editor.action.search + color.alpha10,
      "minimap.selectionHighlight": color.editor.action.selection + color.alpha40,
      "minimap.errorHighlight": color.editor.action.errorBackground,
      "minimap.warningHighlight": color.editor.action.warningBackground,
      "minimap.background": color.editor.surface.depth4,
      "minimapSlider.background": color.editor.ui.default + color.alpha10,
      "minimapSlider.hoverBackground": color.editor.ui.default + color.alpha20,
      "minimapSlider.activeBackground": color.editor.ui.default + color.alpha30,
      "minimapGutter.addedBackground": color.git.modifiedIndicator,
      "minimapGutter.modifiedBackground": color.git.modifiedIndicator,
      "minimapGutter.deletedBackground": color.git.deletedIndicator,

      // Editor Group & Tabs
      // https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
      "editorGroup.border": color.editor.surface.border.depth0,
      "editorGroup.dropBackground": color.editor.action.selection + color.alpha40,
      "editorGroupHeader.noTabsBackground": color.editor.surface.depth3,
      "editorGroupHeader.tabsBackground": color.editor.surface.depth3,
      // "editorGroupHeader.tabsBorder": "",
      // "editorGroupHeader.border": "",
      "editorGroup.emptyBackground": color.editor.surface.depth4,
      // "editorGroup.focusedEmptyBorder": "",
      "tab.activeBackground": color.editor.surface.depth4,
      // "tab.unfocusedActiveBackground": "",
      "tab.activeForeground": color.editor.ui.default,
      // "tab.border": "",
      // "tab.activeBorder": "",
      // "tab.unfocusedActiveBorder": "",
      // "tab.activeBorderTop": "",
      // "tab.unfocusedActiveBorderTop": "",
      "tab.inactiveBackground": color.editor.surface.depth3,
      "tab.unfocusedInactiveBackground": color.editor.surface.depth3,
      "tab.inactiveForeground": color.editor.ui.default + color.alpha70,
      "tab.unfocusedActiveForeground": color.editor.ui.default + color.alpha60,
      "tab.unfocusedInactiveForeground": color.editor.ui.default + color.alpha30,
      "tab.hoverBackground": color.editor.surface.depth1,
      "tab.unfocusedHoverBackground": color.editor.surface.depth1,
      "tab.hoverForeground": color.editor.ui.default,
      "tab.unfocusedHoverForeground": color.editor.ui.default + color.alpha50,
      // "tab.hoverBorder": "",
      // "tab.unfocusedHoverBorder": "",
      "tab.activeModifiedBorder": color.editor.action.primary,
      "tab.inactiveModifiedBorder": color.editor.action.warningBackground,
      "tab.unfocusedActiveModifiedBorder": color.editor.action.primary + color.alpha40,
      "tab.unfocusedInactiveModifiedBorder": color.editor.action.warningBackground + color.alpha40,
      "editorPane.background": color.editor.surface.depth4,

      // Editor colors
      // https://code.visualstudio.com/api/references/theme-color#editor-colors
      // ## Basic Editor colors
      "editor.background": color.editor.surface.depth4,
      "editor.foreground": color.editor.ui.default,
      "editorLineNumber.foreground": color.editor.ui.default + color.alpha30,
      "editorLineNumber.activeForeground": color.editor.ui.default,
      "editorCursor.background": color.editor.action.primary,
      "editorCursor.foreground": color.editor.action.primary,
      // ## Selection
      "editor.selectionBackground": color.editor.action.selection + color.alpha35,
      // "editor.selectionForeground": "",
      "editor.inactiveSelectionBackground": color.editor.action.selection + color.alpha10,
      "editor.selectionHighlightBackground": color.editor.action.selection + color.alpha15,
      // "editor.selectionHighlightBorder": "",
      // ## Word Highlight
      "editor.wordHighlightBackground": color.editor.ui.default + color.alpha10,
      // "editor.wordHighlightBorder": "",
      "editor.wordHighlightStrongBackground": color.editor.ui.default + color.alpha10,
      // "editor.wordHighlightStrongBorder": "",
      // ## Matches Find/Replace
      "editor.findMatchBackground": color.editor.action.search + color.alpha10,
      "editor.findMatchHighlightBackground": color.editor.action.search + color.alpha20,
      "editor.findRangeHighlightBackground": color.editor.ui.default + color.alpha05,
      "editor.findMatchBorder": color.editor.action.search,
      "editor.findMatchHighlightBorder": color.black + color.alpha00,
      // "editor.findRangeHighlightBorder": "",
      // ## Search Editor
      "searchEditor.findMatchBackground": color.editor.action.search + color.alpha10,
      "searchEditor.findMatchBorder": color.editor.action.search,
      // "searchEditor.textInputBorder": "",
      // ## Hover Highlight
      "editor.hoverHighlightBackground": color.editor.ui.default + color.alpha05,
      // ## Current Line
      "editor.lineHighlightBackground": color.editor.action.currentLine + color.alpha03,
      // "editor.lineHighlightBorder": "",
      // ## Link
      "editorLink.activeForeground": color.editor.action.primaryHover,
      // ## Range Highlight
      "editor.rangeHighlightBackground": color.editor.action.search + color.alpha20,
      // "editor.rangeHighlightBorder": "",
      // ## Symbol Highlights
      "editor.symbolHighlightBackground": color.editor.action.search + color.alpha10,
      // "editor.symbolHighlightBorder": "",
      // ## Whitespace
      "editorWhitespace.foreground": color.editor.ui.default + color.alpha20,
      // ## Indent Guides
      "editorIndentGuide.background": color.editor.ui.default + color.alpha05,
      "editorIndentGuide.activeBackground": color.editor.ui.default + color.alpha15,
      // ## Rulers
      "editorRuler.foreground": color.editor.ui.default + color.alpha05,
      // ## CodeLens
      "editorCodeLens.foreground": color.editor.ui.default + color.alpha70,
      // ## Lightbulb
      "editorLightBulb.foreground": color.editor.action.warningBackground,
      "editorLightBulbAutoFix.foreground": color.editor.action.primary,
      // ## Bracket matches
      "editorBracketMatch.background": color.editor.ui.default + color.alpha20,
      "editorBracketMatch.border": color.black + color.alpha00,
      // ## Folding
      "editor.foldBackground": color.editor.ui.default + color.alpha10,
      // ## Overview ruler
      "editorOverviewRuler.border": color.editor.ui.default + color.alpha00,
      "editorOverviewRuler.findMatchForeground": color.editor.action.search + color.alpha25,
      "editorOverviewRuler.rangeHighlightForeground": "",
      "editorOverviewRuler.selectionHighlightForeground": color.editor.action.primary + color.alpha10,
      "editorOverviewRuler.wordHighlightForeground": color.editor.ui.default + color.alpha20,
      "editorOverviewRuler.wordHighlightStrongForeground": color.editor.ui.default + color.alpha30,
      "editorOverviewRuler.modifiedForeground": color.git.modifiedIndicator,
      "editorOverviewRuler.addedForeground": color.git.modifiedIndicator,
      "editorOverviewRuler.deletedForeground": color.git.deletedIndicator,
      "editorOverviewRuler.errorForeground": color.editor.action.errorForeground,
      "editorOverviewRuler.warningForeground": color.editor.action.warningForeground,
      "editorOverviewRuler.infoForeground": color.editor.action.infoForeground,
      "editorOverviewRuler.bracketMatchForeground": color.editor.ui.default + color.alpha20,
      // ## Error and Warnings
      "editorError.foreground": color.editor.action.errorForeground,
      // "editorError.border": "",
      "editorWarning.foreground": color.editor.action.warningForeground,
      // "editorWarning.border": "",
      "editorInfo.foreground": color.editor.action.infoForeground,
      // "editorInfo.border": "",
      "editorHint.foreground": color.syntax.tintedGray,
      // "editorHint.border": "",
      "problemsErrorIcon.foreground": color.editor.action.errorForeground,
      "problemsWarningIcon.foreground": color.editor.action.warningForeground,
      "problemsInfoIcon.foreground": color.editor.action.infoForeground,
      // ## Unused source code
      "editorUnnecessaryCode.border": color.black + color.alpha00,
      "editorUnnecessaryCode.opacity": color.black + color.alpha50,
      // ## Editor - Gutter
      "editorGutter.background": color.editor.surface.depth4,
      "editorGutter.modifiedBackground": color.git.modifiedIndicator,
      "editorGutter.addedBackground": color.git.modifiedIndicator,
      "editorGutter.deletedBackground": color.git.deletedIndicator,
      // "editorGutter.commentRangeForeground": "",

      // # Diff editor colors
      // https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
      "diffEditor.insertedTextBackground": color.git.diffInserted + color.alpha15,
      // "diffEditor.insertedTextBorder": "",
      "diffEditor.removedTextBackground": color.git.diffRemoved + color.alpha15,
      // "diffEditor.removedTextBorder": "",
      "diffEditor.border": color.editor.surface.border.depth0,

      // # Editor widget colors
      // https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
      "editorWidget.foreground": color.editor.ui.default,
      "editorWidget.background": color.editor.surface.depth3,
      // "editorWidget.border": "",
      "editorWidget.resizeBorder": color.editor.action.primary,

      "editorSuggestWidget.background": color.editor.surface.depth0,
      "editorSuggestWidget.border": color.editor.surface.depth0,
      "editorSuggestWidget.foreground": color.editor.ui.default,
      "editorSuggestWidget.highlightForeground": color.editor.action.searchHighlight,
      "editorSuggestWidget.selectedBackground": color.editor.action.selection + color.alpha25,

      "editorHoverWidget.background": color.editor.surface.depth0,
      "editorHoverWidget.border": color.editor.surface.depth0,
      "editorHoverWidget.statusBarBackground": color.editor.surface.depth0,
      // ## Debug Exception widget
      "debugExceptionWidget.background": color.editor.surface.depth4,
      "debugExceptionWidget.border": color.editor.surface.depth0,
      // ## Editor marker (press F8)
      "editorMarkerNavigation.background": color.editor.surface.depth4,
      "editorMarkerNavigationError.background": color.editor.action.errorBackground,
      "editorMarkerNavigationWarning.background": color.editor.action.warningBackground,
      "editorMarkerNavigationInfo.background": color.editor.action.infoBackground,

      // # Peek View colors
      // https://code.visualstudio.com/api/references/theme-color#peek-view-colors
      "peekView.border": color.editor.action.primary,
      "peekViewEditor.background": color.editor.surface.depth6,
      "peekViewEditorGutter.background": color.editor.surface.depth6,
      "peekViewEditor.matchHighlightBackground": color.editor.action.search + color.alpha25,
      "peekViewEditor.matchHighlightBorder": color.editor.action.search,
      "peekViewResult.background": color.editor.surface.depth4,
      "peekViewResult.fileForeground": color.editor.ui.default,
      "peekViewResult.lineForeground": color.editor.ui.default + color.alpha75,
      "peekViewResult.matchHighlightBackground": color.editor.action.search + color.alpha25,
      "peekViewResult.selectionBackground": color.editor.action.primary + color.alpha10,
      "peekViewResult.selectionForeground": color.editor.action.primary,
      "peekViewTitle.background": color.editor.surface.depth2,
      "peekViewTitleDescription.foreground": color.editor.ui.default + color.alpha50,
      "peekViewTitleLabel.foreground": color.editor.ui.default,

      // # Merge Conflicts
      // https://code.visualstudio.com/api/references/theme-color#merge-conflicts
      "merge.currentHeaderBackground": color.git.mergeConflictCurrent + color.alpha50,
      "merge.currentContentBackground": color.git.mergeConflictCurrent + color.alpha30,
      "merge.incomingHeaderBackground": color.git.mergeConflictIncoming + color.alpha50,
      "merge.incomingContentBackground": color.git.mergeConflictIncoming + color.alpha30,
      // "merge.border": "",
      "merge.commonContentBackground": color.git.mergeConflictCommon + color.alpha30,
      "merge.commonHeaderBackground": color.git.mergeConflictCommon + color.alpha50,
      "editorOverviewRuler.currentContentForeground": color.git.mergeConflictCurrent + color.alpha30,
      "editorOverviewRuler.incomingContentForeground": color.git.mergeConflictIncoming + color.alpha30,
      "editorOverviewRuler.commonContentForeground": color.git.mergeConflictCommon,

      // # Panel
      // https://code.visualstudio.com/api/references/theme-color#panel-colors
      "panel.background": color.editor.surface.depth4,
      "panel.border": color.editor.surface.border.depth1,
      "panel.dropBackground": color.editor.action.selection + color.alpha05,
      "panelTitle.activeBorder": color.editor.ui.default,
      "panelTitle.activeForeground":color.editor.ui.default,
      "panelTitle.inactiveForeground":color.editor.ui.default + color.alpha70,
      // "panelInput.border": "",

      // ## Preview
      // "imagePreview.border": "",

      // # Statusbar
      // https://code.visualstudio.com/api/references/theme-color#status-bar-colors
      "statusBar.background": color.editor.surface.depth1,
      "statusBar.foreground": color.editor.ui.default + color.alpha70,
      // "statusBar.border": "#E6E8EA",
      "statusBar.debuggingBackground": color.editor.action.debugging,
      "statusBar.debuggingForeground": color.black + color.alpha90,
      "statusBar.debuggingBorder": color.black + color.alpha00,
      "statusBar.noFolderForeground": color.editor.ui.default + color.alpha70,
      "statusBar.noFolderBackground": color.editor.surface.depth1,
      // "statusBar.noFolderBorder": "",
      "statusBarItem.activeBackground": color.editor.ui.default + color.alpha20,
      "statusBarItem.hoverBackground": color.editor.ui.default + color.alpha05,
      "statusBarItem.prominentForeground": color.black + color.alpha90,
      "statusBarItem.prominentBackground": color.editor.action.primary,
      "statusBarItem.prominentHoverBackground": color.editor.ui.default + color.alpha05,
      "statusBarItem.remoteBackground": color.editor.action.tertiary,
      "statusBarItem.remoteForeground": color.black + color.alpha90,

      // # Title Bar colors
      // https://code.visualstudio.com/api/references/theme-color#title-bar-colors
      "titleBar.activeBackground": color.editor.surface.depth0,
      "titleBar.activeForeground": color.editor.ui.default,
      "titleBar.inactiveBackground": color.editor.surface.depth0,
      "titleBar.inactiveForeground": color.editor.ui.default + color.alpha30,
      // "titleBar.border": "",

      // # Menu Bar colors
      // https://code.visualstudio.com/api/references/theme-color#menu-bar-colors
      "menubar.selectionForeground": color.editor.ui.default,
      "menubar.selectionBackground": color.editor.ui.default + color.alpha04,
      "menubar.selectionBorder": color.editor.ui.default + color.alpha00,
      "menu.foreground": color.editor.ui.default,
      "menu.background": color.editor.surface.depth0,
      "menu.selectionForeground": color.editor.ui.default,
      "menu.selectionBackground": color.editor.ui.default + color.alpha04,
      "menu.selectionBorder": color.editor.ui.default + color.alpha00,
      "menu.separatorBackground": color.editor.surface.border.depth3,
      "menu.border": color.editor.surface.depth0,

      // # Notification colors
      // https://code.visualstudio.com/api/references/theme-color#notification-colors
      // "notificationCenter.border": "",
      "notificationCenterHeader.foreground": color.editor.ui.default,
      "notificationCenterHeader.background": color.editor.surface.depth0,
      // "notificationToast.border": "",
      "notifications.foreground": color.editor.ui.default,
      "notifications.background": color.editor.surface.depth1,
      "notifications.border": color.editor.surface.border.depth2,
      "notificationLink.foreground": color.editor.action.primary,
      "notificationsErrorIcon.foreground": color.editor.action.errorForeground,
      "notificationsWarningIcon.foreground": color.editor.action.warningForeground,
      "notificationsInfoIcon.foreground": color.editor.action.infoForeground,

      // # Extensions
      // https://code.visualstudio.com/api/references/theme-color#extensions
      "extensionButton.prominentForeground": color.black + color.alpha90,
      "extensionButton.prominentBackground": color.editor.action.tertiary,
      "extensionButton.prominentHoverBackground": color.editor.action.tertiaryHover,
      "extensionBadge.remoteBackground": color.editor.action.debugging,
      "extensionBadge.remoteForeground": color.black + color.alpha90,

      // # Quick picker
      // https://code.visualstudio.com/api/references/theme-color#quick-picker
      "pickerGroup.border": color.editor.surface.border.depth3,
      "pickerGroup.foreground": color.editor.action.secondary,
      "quickInput.background": color.editor.surface.depth0,
      "quickInput.foreground": color.editor.ui.default,

      // # Terminal
      // https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
      "terminal.background": color.editor.surface.depth4,
      "terminal.border": color.editor.surface.border.depth1,
      "terminal.ansiBlack": color.terminal.ansiBlack.normal,
      "terminal.ansiBlue": color.terminal.ansiBlue.normal,
      "terminal.ansiBrightBlack": color.terminal.ansiBlack.bright,
      "terminal.ansiBrightBlue": color.terminal.ansiBlue.bright,
      "terminal.ansiBrightCyan": color.terminal.ansiCyan.bright,
      "terminal.ansiBrightGreen": color.terminal.ansiGreen.bright,
      "terminal.ansiBrightMagenta": color.terminal.ansiMagenta.bright,
      "terminal.ansiBrightRed": color.terminal.ansiRed.bright,
      "terminal.ansiBrightWhite": color.terminal.ansiWhite.bright,
      "terminal.ansiBrightYellow": color.terminal.ansiYellow.bright,
      "terminal.ansiCyan": color.terminal.ansiCyan.normal,
      "terminal.ansiGreen": color.terminal.ansiGreen.normal,
      "terminal.ansiMagenta": color.terminal.ansiMagenta.normal,
      "terminal.ansiRed": color.terminal.ansiRed.normal,
      "terminal.ansiWhite": color.terminal.ansiWhite.normal,
      "terminal.ansiYellow": color.terminal.ansiYellow.normal,
      "terminal.selectionBackground": color.editor.action.selection + color.alpha40,
      "terminalCursor.background": color.editor.ui.default,
      "terminalCursor.foreground": color.editor.action.primary,

      // # Debug
      // https://code.visualstudio.com/api/references/theme-color#debug
      "debugToolBar.background": color.editor.surface.depth0,
      // "debugToolBar.border": "",
      "editor.stackFrameHighlightBackground": color.editor.action.selection + color.alpha25,
      "editor.focusedStackFrameHighlightBackground": color.editor.action.selection + color.alpha40,

      // # Welcome Page
      // https://code.visualstudio.com/api/references/theme-color#welcome-page
      "welcomePage.background": color.editor.surface.depth4,
      "welcomePage.buttonBackground": color.editor.surface.depth2,
      "welcomePage.buttonHoverBackground": color.editor.surface.depth1,
      "walkThrough.embeddedEditorBackground": color.editor.surface.depth6,

      // # Git colors
      // https://code.visualstudio.com/api/references/theme-color#git-colors
      "gitDecoration.addedResourceForeground": color.git.addedResource,
      "gitDecoration.modifiedResourceForeground": color.git.modifiedResource,
      "gitDecoration.deletedResourceForeground": color.git.deletedResource,
      "gitDecoration.untrackedResourceForeground": color.git.untrackedResource,
      "gitDecoration.ignoredResourceForeground": color.git.ignoredResource,
      "gitDecoration.conflictingResourceForeground": color.git.conflictingResource,
      "gitDecoration.submoduleResourceForeground": color.git.submoduleRescource,

      // # Settings Editor colors
      // https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
      "settings.headerForeground": color.editor.ui.default,
      "settings.modifiedItemIndicator": color.git.modifiedIndicator,
      "settings.dropdownBackground": color.editor.ui.dropdown,
      "settings.dropdownForeground": color.editor.ui.default,
      "settings.dropdownBorder": color.editor.ui.dropdownBorder,
      "settings.dropdownListBorder": color.editor.ui.dropdownBorder,
      "settings.checkboxBackground": color.editor.ui.checkbox,
      "settings.checkboxForeground": color.editor.action.primary,
      "settings.checkboxBorder": color.editor.ui.checkboxBorder,
      "settings.textInputBackground": color.editor.ui.input,
      "settings.textInputForeground": color.editor.ui.default,
      "settings.textInputBorder": color.editor.ui.inputBorder,
      "settings.numberInputBackground": color.editor.ui.input,
      "settings.numberInputForeground": color.editor.ui.default,
      "settings.numberInputBorder": color.editor.ui.inputBorder,

      // # Breadcrumbs
      // https://code.visualstudio.com/api/references/theme-color#breadcrumbs
      "breadcrumb.foreground": color.editor.ui.default + color.alpha50,
      "breadcrumb.background": color.editor.surface.depth4,
      "breadcrumb.focusForeground": color.editor.action.primary,
      "breadcrumb.activeSelectionForeground": color.editor.ui.default,
      "breadcrumbPicker.background": color.editor.surface.depth0,

      // # Snippets
      // https://code.visualstudio.com/api/references/theme-color#snippets
      "editor.snippetTabstopHighlightBackground": color.editor.ui.default + color.alpha05,
      "editor.snippetTabstopHighlightBorder": color.black + color.alpha00,
      "editor.snippetFinalTabstopHighlightBackground": color.editor.ui.default + color.alpha05,
      "editor.snippetFinalTabstopHighlightBorder": color.black + color.alpha00,

      // # Symbol Icons
      // https://code.visualstudio.com/api/references/theme-color#symbol-icons
      "symbolIcon.arrayForeground": color.syntax.turquoiseBlue,
      "symbolIcon.booleanForeground": color.syntax.lavenderPink,
      "symbolIcon.classForeground": color.syntax.sand,
      "symbolIcon.colorForeground": color.editor.ui.default,
      "symbolIcon.constantForeground": color.syntax.turquoiseBlue,
      "symbolIcon.constructorForeground": color.syntax.wisteria,
      "symbolIcon.enumeratorForeground": color.editor.ui.default,
      "symbolIcon.enumeratorMemberForeground": color.editor.ui.default,
      "symbolIcon.eventForeground": color.editor.ui.default,
      "symbolIcon.fieldForeground": color.editor.ui.default,
      "symbolIcon.fileForeground": color.editor.ui.default,
      "symbolIcon.folderForeground": color.editor.ui.default,
      "symbolIcon.functionForeground": color.syntax.tea,
      "symbolIcon.interfaceForeground": color.editor.ui.default,
      "symbolIcon.keyForeground": color.editor.ui.default,
      "symbolIcon.keywordForeground": color.editor.ui.default,
      "symbolIcon.methodForeground": color.syntax.tea,
      "symbolIcon.moduleForeground": color.syntax.turquoiseBlue,
      "symbolIcon.namespaceForeground": color.editor.ui.default,
      "symbolIcon.nullForeground": color.syntax.lavenderPink,
      "symbolIcon.numberForeground": color.syntax.darkSkyBlue,
      "symbolIcon.objectForeground": color.editor.ui.default,
      "symbolIcon.operatorForeground": color.syntax.pinkish,
      "symbolIcon.packageForeground": color.editor.ui.default,
      "symbolIcon.propertyForeground": color.editor.ui.default,
      "symbolIcon.referenceForeground": color.editor.ui.default,
      "symbolIcon.snippetForeground": color.editor.ui.default,
      "symbolIcon.stringForeground": color.syntax.pinkishTan,
      "symbolIcon.structForeground": color.editor.ui.default,
      "symbolIcon.textForeground": color.editor.ui.default,
      "symbolIcon.typeParameterForeground": color.editor.ui.default,
      "symbolIcon.unitForeground": color.syntax.lavenderPink,
      "symbolIcon.variableForeground": color.syntax.turquoiseBlue,

      // Debug Icons
      // https://code.visualstudio.com/api/references/theme-color#debug-icons
      "debugIcon.breakpointForeground": color.syntax.pinkish,
      "debugIcon.breakpointDisabledForeground": color.syntax.pinkish + color.alpha30,
      "debugIcon.breakpointUnverifiedForeground": color.syntax.pinkish,
      "debugIcon.breakpointCurrentStackframeForeground": color.editor.action.primary,
      "debugIcon.breakpointStackframeForeground": color.editor.action.primary + color.alpha80,
      "debugIcon.startForeground": color.syntax.tea,
      "debugIcon.pauseForeground": color.syntax.wisteria,
      "debugIcon.stopForeground": color.syntax.pinkish,
      "debugIcon.disconnectForeground": color.syntax.pinkish,
      "debugIcon.restartForeground": color.syntax.tea,
      "debugIcon.stepOverForeground": color.syntax.turquoiseBlue,
      "debugIcon.stepIntoForeground": color.syntax.turquoiseBlue,
      "debugIcon.stepOutForeground": color.syntax.turquoiseBlue,
      "debugIcon.continueForeground": color.syntax.tea,
      "debugIcon.stepBackForeground": color.syntax.turquoiseBlue,
    }
  };

  return editorColor;
};

export default editorColor;
