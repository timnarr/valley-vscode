import color from './color';

const editorColor = {
  colors: {
    // Contrast colors
    // https://code.visualstudio.com/api/references/theme-color#contrast-colors
    // "contrastActiveBorder": "",
    // "contrastBorder": "",

    // Base colors
    // https://code.visualstudio.com/api/references/theme-color#base-colors
    "focusBorder": color.editor.action.primary + color.alpha80,
    "foreground": color.editor.text.default,
    "widget.shadow": color.black + color.alpha10,

    "selection.background": color.editor.action.selection + color.alpha40,
    "descriptionForeground": color.editor.text.muted,
    "errorForeground": color.editor.action.errorForeground,
    "icon.foreground": color.editor.text.default,
    "sash.hoverBorder": color.editor.action.selection,

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

    // Action colors
    // https://code.visualstudio.com/api/references/theme-color#action-colors
    "toolbar.hoverBackground": color.white + color.alpha10,
    // "toolbar.hoverOutline": "",
    "toolbar.activeBackground":color.editor.action.focusBackground + color.alpha60,

    // Button control
    // https://code.visualstudio.com/api/references/theme-color#button-control
    "button.background": color.editor.action.primary,
    "button.foreground": color.black + color.alpha90,
    // "button.border": "",
    "button.hoverBackground": color.editor.action.primaryHover,
    "button.secondaryForeground": color.black + color.alpha90,
    "button.secondaryBackground": color.editor.action.secondary,
    "button.secondaryHoverBackground": color.editor.action.secondaryHover,
    "checkbox.background": color.editor.surface.depth0,
    "checkbox.foreground": color.editor.action.primary,
    "checkbox.border": color.editor.surface.depth0,

    // Dropdown control
    // https://code.visualstudio.com/api/references/theme-color#dropdown-control
    "dropdown.background": color.editor.surface.depth0,
    "dropdown.listBackground": color.editor.surface.depth0,
    "dropdown.border": color.editor.surface.depth0,
    "dropdown.foreground": color.editor.text.default,

    // Input control
    // https://code.visualstudio.com/api/references/theme-color#input-control
    "input.background": color.editor.surface.depth5,
    "input.border": color.editor.surface.depth5,
    "input.foreground": color.editor.text.default,
    "input.placeholderForeground": color.editor.text.default + color.alpha50,
    "inputOption.activeBackground": color.editor.action.primary + color.alpha50,
    // "inputOption.activeBorder": "",
    // "inputOption.activeForeground": "",
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
    "scrollbar.shadow": color.black + color.alpha30,
    "scrollbarSlider.activeBackground": color.white + color.alpha30,
    "scrollbarSlider.background": color.white + color.alpha10,
    "scrollbarSlider.hoverBackground": color.white + color.alpha20,

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
    "list.activeSelectionIconForeground": color.editor.action.activeSelectionForeground,
    "list.dropBackground": color.editor.action.selection + color.alpha40,
    "list.focusBackground": color.editor.action.focusBackground,
    "list.focusForeground": color.editor.action.focusForeground,
    "list.focusHighlightForeground": color.editor.action.focusForeground,
    // "list.focusOutline": "",
    "list.highlightForeground": color.editor.action.searchHighlight,
    "list.hoverBackground": color.white + color.alpha04,
    "list.hoverForeground": color.white,
    "list.inactiveSelectionBackground": color.white + color.alpha08,
    "list.inactiveSelectionForeground": color.white,
    "list.inactiveSelectionIconForeground": color.white,
    // "list.inactiveFocusBackground": "",
    // "list.inactiveFocusOutline": "",
    "list.invalidItemForeground": color.editor.action.errorForeground,
    "list.errorForeground": color.editor.action.errorForeground,
    "list.warningForeground": color.editor.action.warningForeground,
    "listFilterWidget.background": color.editor.surface.depth0,
    "listFilterWidget.outline": color.editor.action.search,
    "listFilterWidget.noMatchesOutline": color.editor.surface.depth0,
    "list.filterMatchBackground": color.editor.action.search + color.alpha30,
    "list.filterMatchBorder": color.editor.action.search,
    // "list.deemphasizedForeground": "",
    "tree.indentGuidesStroke": color.white + color.alpha15,
    // "tree.tableColumnsBorder": "",

    // Activity Bar
    // https://code.visualstudio.com/api/references/theme-color#activity-bar
    "activityBar.background": color.editor.surface.depth1,
    "activityBar.dropBorder": color.editor.action.selection,
    "activityBar.foreground": color.editor.text.default,
    "activityBar.inactiveForeground": color.editor.text.default + color.alpha50,
    // "activityBar.border": "",
    "activityBarBadge.background": color.editor.action.primary,
    "activityBarBadge.foreground": color.black + color.alpha90,
    "activityBar.activeBorder": color.editor.text.default,
    "activityBar.activeBackground": color.black + color.alpha00,
    "activityBar.activeFocusBorder": color.editor.action.primary + color.alpha80,

    // Sidebar
    // https://code.visualstudio.com/api/references/theme-color#side-bar
    "sideBar.background": color.editor.surface.depth2,
    "sideBar.foreground": color.editor.text.default + color.alpha75,
    "sideBar.border": color.editor.surface.depth4,
    "sideBar.dropBackground": color.editor.action.selection + color.alpha40,
    "sideBarTitle.foreground": color.editor.text.default,
    "sideBarSectionHeader.background": color.editor.surface.depth2,
    "sideBarSectionHeader.foreground": color.editor.text.default,
    "sideBarSectionHeader.border": color.editor.surface.border.depth1,

    // Minimap
    // https://code.visualstudio.com/api/references/theme-color#minimap
    "minimap.findMatchHighlight": color.editor.action.search + color.alpha10,
    "minimap.selectionHighlight": color.editor.action.selection + color.alpha40,
    "minimap.errorHighlight": color.editor.action.errorBackground,
    "minimap.warningHighlight": color.editor.action.warningBackground,
    "minimap.background": color.editor.surface.depth4,
    "minimapSlider.background": color.white + color.alpha10,
    "minimapSlider.hoverBackground": color.white + color.alpha20,
    "minimapSlider.activeBackground": color.white + color.alpha30,
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
    "tab.activeBackground": color.editor.surface.depth2,
    // "tab.unfocusedActiveBackground": "",
    "tab.activeForeground": color.white,
    "tab.border": color.editor.surface.depth3,
    // "tab.activeBorder": "",
    // "tab.unfocusedActiveBorder": "",
    "tab.activeBorderTop": color.editor.action.primary,
    // "tab.unfocusedActiveBorderTop": "",
    "tab.lastPinnedBorder": color.editor.surface.depth0,
    "tab.inactiveBackground": color.editor.surface.depth3,
    "tab.unfocusedInactiveBackground": color.editor.surface.depth3,
    "tab.inactiveForeground": color.white + color.alpha50,
    "tab.unfocusedActiveForeground": color.white + color.alpha60,
    "tab.unfocusedInactiveForeground": color.white + color.alpha30,
    "tab.hoverBackground": color.editor.surface.depth2,
    "tab.unfocusedHoverBackground": color.editor.surface.depth2,
    "tab.hoverForeground": color.white,
    "tab.unfocusedHoverForeground": color.white + color.alpha50,
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
    "editor.foreground": color.editor.text.default,
    "editorLineNumber.foreground": color.editor.text.default + color.alpha30,
    "editorLineNumber.activeForeground": color.editor.text.default,
    "editorCursor.background": color.editor.action.primary,
    "editorCursor.foreground": color.editor.action.primary,
    // ## Selection
    "editor.selectionBackground": color.editor.action.selection + color.alpha35,
    // "editor.selectionForeground": "",
    "editor.inactiveSelectionBackground": color.editor.action.selection + color.alpha10,
    "editor.selectionHighlightBackground": color.editor.action.selection + color.alpha15,
    // "editor.selectionHighlightBorder": "",
    // ## Word Highlight
    "editor.wordHighlightBackground": color.editor.text.default + color.alpha10,
    // "editor.wordHighlightBorder": "",
    "editor.wordHighlightStrongBackground": color.editor.text.default + color.alpha10,
    // "editor.wordHighlightStrongBorder": "",
    // ## Matches Find/Replace
    "editor.findMatchBackground": color.editor.action.search + color.alpha10,
    "editor.findMatchHighlightBackground": color.editor.action.search + color.alpha20,
    "editor.findRangeHighlightBackground": color.editor.text.default + color.alpha05,
    "editor.findMatchBorder": color.editor.action.search,
    "editor.findMatchHighlightBorder": color.black + color.alpha00,
    // "editor.findRangeHighlightBorder": "",
    // ## Search Editor
    "searchEditor.findMatchBackground": color.editor.action.search + color.alpha10,
    "searchEditor.findMatchBorder": color.editor.action.search,
    // "searchEditor.textInputBorder": "",
    // ## Hover Highlight
    "editor.hoverHighlightBackground": color.editor.text.default + color.alpha05,
    // ## Current Line
    "editor.lineHighlightBackground": color.editor.text.default + color.alpha03,
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
    "editorWhitespace.foreground": color.editor.text.default + color.alpha20,
    // ## Indent Guides
    "editorIndentGuide.background": color.white + color.alpha05,
    "editorIndentGuide.activeBackground": color.white + color.alpha15,
    // ## Inline Hints
    "editorInlayHint.background": color.editor.surface.depth2,
    "editorInlayHint.foreground": color.editor.text.muted,
    // ## Rulers
    "editorRuler.foreground": color.white + color.alpha05,
    "editor.linkedEditingBackground": color.editor.action.selection + color.alpha25,
    // ## CodeLens
    "editorCodeLens.foreground": color.editor.text.default + color.alpha70,
    // ## Lightbulb
    "editorLightBulb.foreground": color.editor.action.warningBackground,
    "editorLightBulbAutoFix.foreground": color.editor.action.primary,
    // ## Bracket matches
    "editorBracketMatch.background": color.white + color.alpha20,
    "editorBracketMatch.border": color.black + color.alpha00,
    "editorBracketHighlight.foreground1": color.terminal.ansiGreen.bright,
    "editorBracketHighlight.foreground2": color.terminal.ansiCyan.bright,
    "editorBracketHighlight.foreground3": color.terminal.ansiBlue.bright,
    "editorBracketHighlight.foreground4": color.terminal.ansiMagenta.bright,
    "editorBracketHighlight.foreground5": color.terminal.ansiRed.bright,
    "editorBracketHighlight.foreground6": color.terminal.ansiYellow.bright,
    "editorBracketHighlight.unexpectedBracket.foreground": color.editor.action.errorForeground,
    // ## Folding
    "editor.foldBackground": color.editor.text.default + color.alpha10,
    // ## Overview ruler
    // "editorOverviewRuler.background": "",
    "editorOverviewRuler.border": color.white + color.alpha00,
    "editorOverviewRuler.findMatchForeground": color.editor.action.search + color.alpha25,
    "editorOverviewRuler.rangeHighlightForeground": "",
    "editorOverviewRuler.selectionHighlightForeground": color.editor.action.primary + color.alpha10,
    "editorOverviewRuler.wordHighlightForeground": color.white + color.alpha20,
    "editorOverviewRuler.wordHighlightStrongForeground": color.white + color.alpha30,
    "editorOverviewRuler.modifiedForeground": color.git.modifiedIndicator,
    "editorOverviewRuler.addedForeground": color.git.modifiedIndicator,
    "editorOverviewRuler.deletedForeground": color.git.deletedIndicator,
    "editorOverviewRuler.errorForeground": color.editor.action.errorForeground,
    "editorOverviewRuler.warningForeground": color.editor.action.warningForeground,
    "editorOverviewRuler.infoForeground": color.editor.action.infoForeground,
    "editorOverviewRuler.bracketMatchForeground": color.white + color.alpha20,
    // ## Error and Warnings
    "editorError.foreground": color.editor.action.errorForeground,
    // "editorError.border": "",
    // "editorError.background": "",
    "editorWarning.foreground": color.editor.action.warningForeground,
    // "editorWarning.border": "",
    // "editorWarning.background": "",
    "editorInfo.foreground": color.editor.action.infoForeground,
    // "editorInfo.border": "",
    "editorInfo.background": color.editor.action.infoBackground,
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
    "editorGutter.foldingControlForeground": color.editor.action.primary,

    // # Diff editor colors
    // https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
    "diffEditor.insertedTextBackground": color.git.diffInserted + color.alpha15,
    // "diffEditor.insertedTextBorder": "",
    "diffEditor.removedTextBackground": color.git.diffRemoved + color.alpha15,
    // "diffEditor.removedTextBorder": "",
    "diffEditor.border": color.editor.surface.border.depth0,
    "diffEditor.diagonalFill": color.editor.text.default + color.alpha40,

    // # Editor widget colors
    // https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
    "editorWidget.foreground": color.editor.text.default,
    "editorWidget.background": color.editor.surface.depth3,
    // "editorWidget.border": "",
    "editorWidget.resizeBorder": color.editor.action.primary,

    "editorSuggestWidget.background": color.editor.surface.depth0,
    "editorSuggestWidget.border": color.editor.surface.depth0,
    "editorSuggestWidget.foreground": color.editor.text.default,
    "editorSuggestWidget.focusHighlightForeground": color.editor.action.searchHighlight,
    "editorSuggestWidget.highlightForeground": color.editor.action.searchHighlight,
    "editorSuggestWidget.selectedBackground": color.editor.action.selection + color.alpha25,
    // "editorSuggestWidget.selectedForeground": "",
    // "editorSuggestWidget.selectedIconForeground": "",
    "editorHoverWidget.foreground": color.editor.text.default,
    "editorHoverWidget.background": color.editor.surface.depth0,
    "editorHoverWidget.border": color.editor.surface.depth0,
    "editorHoverWidget.statusBarBackground": color.editor.surface.depth0,
    // "editorGhostText.border": "",
    // "editorGhostText.foreground": "",
    // ## Debug Exception widget
    "debugExceptionWidget.background": color.editor.surface.depth4,
    "debugExceptionWidget.border": color.editor.surface.depth0,
    // ## Editor marker (press F8)
    "editorMarkerNavigation.background": color.editor.surface.depth4,
    "editorMarkerNavigationError.background": color.editor.action.errorBackground,
    "editorMarkerNavigationWarning.background": color.editor.action.warningBackground,
    "editorMarkerNavigationInfo.background": color.editor.action.infoBackground,
    "editorMarkerNavigationError.headerBackground": color.editor.action.errorBackground + color.alpha20,
    "editorMarkerNavigationWarning.headerBackground": color.editor.action.warningBackground + color.alpha20,
    "editorMarkerNavigationInfo.headerBackground": color.editor.action.infoBackground + color.alpha20,

    // # Peek View colors
    // https://code.visualstudio.com/api/references/theme-color#peek-view-colors
    "peekView.border": color.editor.action.primary,
    "peekViewEditor.background": color.editor.surface.depth6,
    "peekViewEditorGutter.background": color.editor.surface.depth6,
    "peekViewEditor.matchHighlightBackground": color.editor.action.search + color.alpha25,
    "peekViewEditor.matchHighlightBorder": color.editor.action.search,
    "peekViewResult.background": color.editor.surface.depth4,
    "peekViewResult.fileForeground": color.editor.text.default,
    "peekViewResult.lineForeground": color.editor.text.default + color.alpha75,
    "peekViewResult.matchHighlightBackground": color.editor.action.search + color.alpha25,
    "peekViewResult.selectionBackground": color.editor.action.primary + color.alpha10,
    "peekViewResult.selectionForeground": color.editor.action.primary,
    "peekViewTitle.background": color.editor.surface.depth2,
    "peekViewTitleDescription.foreground": color.editor.text.default + color.alpha50,
    "peekViewTitleLabel.foreground": color.editor.text.default,

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
    "panel.background": color.editor.surface.depth2,
    "panel.border": color.white + color.alpha02,
    "panel.dropBorder": color.editor.action.selection,
    "panelTitle.activeBorder": color.editor.text.default,
    "panelTitle.activeForeground":color.editor.text.default,
    "panelTitle.inactiveForeground":color.editor.text.default + color.alpha70,
    // "panelInput.border": "",
    // "panelSection.border": "",
    "panelSection.dropBackground": color.editor.action.selection + color.alpha40,
    // "panelSectionHeader.background": "",
    // "panelSectionHeader.foreground": "",
    // "panelSectionHeader.border": "",

    // # Statusbar
    // https://code.visualstudio.com/api/references/theme-color#status-bar-colors
    "statusBar.background": color.editor.surface.depth0,
    "statusBar.foreground": color.editor.text.default + color.alpha70,
    // "statusBar.border": "",
    "statusBar.debuggingBackground": color.editor.action.debugging,
    "statusBar.debuggingForeground": color.black + color.alpha90,
    // "statusBar.debuggingBorder": "",
    "statusBar.noFolderForeground": color.editor.text.default + color.alpha70,
    "statusBar.noFolderBackground": color.editor.surface.depth0,
    // "statusBar.noFolderBorder": "",
    "statusBarItem.activeBackground": color.white + color.alpha20,
    "statusBarItem.hoverBackground": color.white + color.alpha10,
    "statusBarItem.prominentForeground": color.black + color.alpha90,
    "statusBarItem.prominentBackground": color.editor.action.primary,
    "statusBarItem.prominentHoverBackground": color.white + color.alpha05,
    "statusBarItem.remoteBackground": color.editor.action.tertiary,
    "statusBarItem.remoteForeground": color.black + color.alpha90,
    "statusBarItem.errorBackground": color.editor.action.errorBackground,
    "statusBarItem.errorForeground": color.editor.action.errorForeground,
    "statusBarItem.warningBackground": color.editor.action.warningBackground,
    "statusBarItem.warningForeground": color.editor.action.warningForeground,

    // # Title Bar colors
    // https://code.visualstudio.com/api/references/theme-color#title-bar-colors
    "titleBar.activeBackground": color.editor.surface.depth0,
    "titleBar.activeForeground": color.editor.text.default,
    "titleBar.inactiveBackground": color.editor.surface.depth0,
    "titleBar.inactiveForeground": color.editor.text.default + color.alpha30,
    // "titleBar.border": "",

    // # Menu Bar colors
    // https://code.visualstudio.com/api/references/theme-color#menu-bar-colors
    "menubar.selectionForeground": color.white,
    "menubar.selectionBackground": color.white + color.alpha04,
    "menubar.selectionBorder": color.white + color.alpha00,
    "menu.foreground": color.editor.text.default,
    "menu.background": color.editor.surface.depth0,
    "menu.selectionForeground": color.white,
    "menu.selectionBackground": color.white + color.alpha04,
    "menu.selectionBorder": color.white + color.alpha00,
    "menu.separatorBackground": color.editor.surface.border.depth3,
    "menu.border": color.editor.surface.depth0,

    // # Notification colors
    // https://code.visualstudio.com/api/references/theme-color#notification-colors
    // "notificationCenter.border": "",
    "notificationCenterHeader.foreground": color.editor.text.default,
    "notificationCenterHeader.background": color.editor.surface.depth0,
    // "notificationToast.border": "",
    "notifications.foreground": color.editor.text.default,
    "notifications.background": color.editor.surface.depth1,
    "notifications.border": color.editor.surface.border.depth2,
    "notificationLink.foreground": color.editor.action.primary,
    "notificationsErrorIcon.foreground": color.editor.action.errorForeground,
    "notificationsWarningIcon.foreground": color.editor.action.warningForeground,
    "notificationsInfoIcon.foreground": color.editor.action.infoForeground,

    // # Banner
    // "banner.background": "",
    // "banner.foreground": "",
    // "banner.iconForeground": "",

    // # Extensions
    // https://code.visualstudio.com/api/references/theme-color#extensions
    "extensionButton.prominentForeground": color.black + color.alpha90,
    "extensionButton.prominentBackground": color.editor.action.tertiary,
    "extensionButton.prominentHoverBackground": color.editor.action.tertiaryHover,
    "extensionBadge.remoteBackground": color.editor.action.debugging,
    "extensionBadge.remoteForeground": color.black + color.alpha90,
    "extensionIcon.starForeground": color.editor.action.extensionStar,

    // # Quick picker
    // https://code.visualstudio.com/api/references/theme-color#quick-picker
    "pickerGroup.border": color.editor.surface.border.depth3,
    "pickerGroup.foreground": color.editor.action.secondary,
    "quickInput.background": color.editor.surface.depth0,
    "quickInput.foreground": color.editor.text.default,
    "quickInputList.focusBackground": color.editor.action.activeSelectionBackground,
    "quickInputList.focusForeground": color.editor.action.primary,
    "quickInputList.focusIconForeground": color.editor.action.primary,
    // "quickInputTitle.background": "",

    // # Keybinding label
    "keybindingLabel.background": color.white + color.alpha10,
    "keybindingLabel.foreground": color.editor.text.default,
    // "keybindingLabel.border": "",
    "keybindingLabel.bottomBorder": color.black + color.alpha30,

    // # Terminal
    // https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
    "terminal.background": color.editor.surface.depth4,
    "terminal.border": color.editor.surface.border.depth1,
    // "terminal.foreground": "",
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
    "terminalCursor.background": color.editor.text.default,
    "terminalCursor.foreground": color.editor.action.primary,
    "terminal.dropBackground": color.editor.action.selection + color.alpha40,
    "terminal.tab.activeBorder": color.editor.text.default,

    // # Debug
    // https://code.visualstudio.com/api/references/theme-color#debug
    "debugToolBar.background": color.editor.surface.depth0,
    // "debugToolBar.border": "",
    "editor.stackFrameHighlightBackground": color.editor.action.selection + color.alpha25,
    "editor.focusedStackFrameHighlightBackground": color.editor.action.selection + color.alpha40,
    "editor.inlineValuesForeground": color.editor.action.warningForeground + color.alpha90,
    "editor.inlineValuesBackground": color.editor.action.warningBackground + color.alpha15,
    // "debugView.exceptionLabelForeground": "",
    // "debugView.exceptionLabelBackground": "",
    "debugView.stateLabelForeground": color.black + color.alpha90,
    "debugView.stateLabelBackground": color.editor.action.debugging,
    // "debugView.valueChangedHighlight": "",
    "debugTokenExpression.name": color.syntax.turquoiseBlue,
    "debugTokenExpression.value": color.syntax.wisteria,
    "debugTokenExpression.string": color.syntax.pinkishTan,
    "debugTokenExpression.boolean": color.syntax.lavenderPink,
    "debugTokenExpression.number": color.syntax.darkSkyBlue,
    "debugTokenExpression.error": color.editor.action.errorForeground,

    // # Testing
    // https://code.visualstudio.com/api/references/theme-color#testing-colors
    // "testing.iconFailed": "",
    // "testing.iconErrored": "",
    // "testing.iconPassed": "",
    // "testing.runAction": "",
    // "testing.iconQueued": "",
    // "testing.iconUnset": "",
    // "testing.iconSkipped": "",
    // "testing.peekBorder": "",
    // "testing.peekHeaderBackground": "",
    // "testing.message.error.decorationForeground": "",
    // "testing.message.error.lineBackground": "",
    // "testing.message.info.decorationForeground": "",
    // "testing.message.info.lineBackground": "",

    // # Welcome Page
    // https://code.visualstudio.com/api/references/theme-color#welcome-page
    "welcomePage.background": color.editor.surface.depth4,
    "welcomePage.buttonBackground": color.editor.surface.depth2,
    "welcomePage.buttonHoverBackground": color.editor.surface.depth1,
    "welcomePage.progress.background": color.editor.surface.depth2,
    "welcomePage.progress.foreground": color.editor.action.primary,
    "welcomePage.tileBackground": color.editor.surface.depth2,
    "welcomePage.tileHoverBackground": color.editor.surface.depth1,
    "welcomePage.tileShadow": color.black + color.alpha00,
    "walkThrough.embeddedEditorBackground": color.editor.surface.depth6,

    // # Source Control
    // https://code.visualstudio.com/api/references/theme-color#source-control-colors
    // "scm.providerBorder": "",

    // # Git colors
    // https://code.visualstudio.com/api/references/theme-color#git-colors
    "gitDecoration.addedResourceForeground": color.git.addedResource,
    "gitDecoration.modifiedResourceForeground": color.git.modifiedResource,
    "gitDecoration.deletedResourceForeground": color.git.deletedResource,
    "gitDecoration.renamedResourceForeground": color.git.modifiedResource,
    "gitDecoration.stageModifiedResourceForeground": color.git.modifiedResource,
    "gitDecoration.stageDeletedResourceForeground": color.git.deletedResource,
    "gitDecoration.untrackedResourceForeground": color.git.untrackedResource,
    "gitDecoration.ignoredResourceForeground": color.git.ignoredResource,
    "gitDecoration.conflictingResourceForeground": color.git.conflictingResource,
    "gitDecoration.submoduleResourceForeground": color.git.submoduleRescource,

    // # Settings Editor colors
    // https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
    "settings.headerForeground": color.editor.text.default,
    "settings.modifiedItemIndicator": color.git.modifiedIndicator,
    "settings.dropdownBackground": color.editor.surface.depth0,
    "settings.dropdownForeground": color.editor.text.default,
    "settings.dropdownBorder": color.editor.surface.depth0,
    "settings.dropdownListBorder": color.editor.surface.border.depth3,
    "settings.checkboxBackground": color.editor.surface.depth0,
    "settings.checkboxForeground": color.editor.action.primary,
    "settings.checkboxBorder": color.editor.surface.depth0,
    "settings.rowHoverBackground": color.editor.surface.depth2,
    "settings.textInputBackground": color.editor.surface.depth5,
    "settings.textInputForeground": color.editor.text.default,
    "settings.textInputBorder": color.editor.surface.depth5,
    "settings.numberInputBackground": color.editor.surface.depth5,
    "settings.numberInputForeground": color.editor.text.default,
    "settings.numberInputBorder": color.editor.surface.depth5,
    "settings.focusedRowBackground": color.editor.action.focusBackground + color.alpha40,
    "settings.focusedRowBorder": color.editor.action.primary + color.alpha40,

    // # Breadcrumbs
    // https://code.visualstudio.com/api/references/theme-color#breadcrumbs
    "breadcrumb.foreground": color.editor.text.default + color.alpha50,
    "breadcrumb.background": color.editor.surface.depth2,
    "breadcrumb.focusForeground": color.editor.action.primary,
    "breadcrumb.activeSelectionForeground": color.editor.text.default,
    "breadcrumbPicker.background": color.editor.surface.depth0,

    // # Snippets
    // https://code.visualstudio.com/api/references/theme-color#snippets
    "editor.snippetTabstopHighlightBackground": color.white + color.alpha05,
    "editor.snippetTabstopHighlightBorder": color.black + color.alpha00,
    "editor.snippetFinalTabstopHighlightBackground": color.white + color.alpha05,
    "editor.snippetFinalTabstopHighlightBorder": color.black + color.alpha00,

    // # Symbol Icons
    // https://code.visualstudio.com/api/references/theme-color#symbol-icons
    "symbolIcon.arrayForeground": color.syntax.turquoiseBlue,
    "symbolIcon.booleanForeground": color.syntax.lavenderPink,
    "symbolIcon.classForeground": color.syntax.sand,
    "symbolIcon.colorForeground": color.editor.text.default,
    "symbolIcon.constantForeground": color.syntax.turquoiseBlue,
    "symbolIcon.constructorForeground": color.syntax.wisteria,
    "symbolIcon.enumeratorForeground": color.editor.text.default,
    "symbolIcon.enumeratorMemberForeground": color.editor.text.default,
    "symbolIcon.eventForeground": color.editor.text.default,
    "symbolIcon.fieldForeground": color.editor.text.default,
    "symbolIcon.fileForeground": color.editor.text.default,
    "symbolIcon.folderForeground": color.editor.text.default,
    "symbolIcon.functionForeground": color.syntax.tea,
    "symbolIcon.interfaceForeground": color.editor.text.default,
    "symbolIcon.keyForeground": color.editor.text.default,
    "symbolIcon.keywordForeground": color.editor.text.default,
    "symbolIcon.methodForeground": color.syntax.tea,
    "symbolIcon.moduleForeground": color.syntax.turquoiseBlue,
    "symbolIcon.namespaceForeground": color.editor.text.default,
    "symbolIcon.nullForeground": color.syntax.lavenderPink,
    "symbolIcon.numberForeground": color.syntax.darkSkyBlue,
    "symbolIcon.objectForeground": color.editor.text.default,
    "symbolIcon.operatorForeground": color.syntax.pinkish,
    "symbolIcon.packageForeground": color.editor.text.default,
    "symbolIcon.propertyForeground": color.editor.text.default,
    "symbolIcon.referenceForeground": color.editor.text.default,
    "symbolIcon.snippetForeground": color.editor.text.default,
    "symbolIcon.stringForeground": color.syntax.pinkishTan,
    "symbolIcon.structForeground": color.editor.text.default,
    "symbolIcon.textForeground": color.editor.text.default,
    "symbolIcon.typeParameterForeground": color.editor.text.default,
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
    "debugConsole.infoForeground": color.editor.action.infoForeground,
    "debugConsole.warningForeground": color.editor.action.warningForeground,
    "debugConsole.errorForeground": color.editor.action.errorForeground,
    // "debugConsole.sourceForeground": "",
    // "debugConsoleInputIcon.foreground": "",

    // # Notebook
    // https://code.visualstudio.com/api/references/theme-color#notebook-colors
    // "notebook.cellBorderColor": "",
    // "notebook.cellHoverBackground": "",
    // "notebook.cellInsertionIndicator": "",
    // "notebook.cellStatusBarItemHoverBackground": "",
    // "notebook.cellToolbarSeparator": "",
    // "notebook.cellEditorBackground": "",
    // "notebook.focusedCellBackground": "",
    // "notebook.focusedCellBorder": "",
    // "notebook.focusedEditorBorder": "",
    // "notebook.inactiveFocusedCellBorder": "",
    // "notebook.inactiveSelectedCellBorder": "",
    // "notebook.outputContainerBackgroundColor": "",
    // "notebook.selectedCellBackground": "",
    // "notebook.selectedCellBorder": "",
    // "notebook.symbolHighlightBackground": "",
    // "notebookScrollbarSlider.activeBackground": "",
    // "notebookScrollbarSlider.background": "",
    // "notebookScrollbarSlider.hoverBackground": "",
    // "notebookStatusErrorIcon.foreground": "",
    // "notebookStatusRunningIcon.foreground": "",
    // "notebookStatusSuccessIcon.foreground": "",

    // # Chart
    // https://code.visualstudio.com/api/references/theme-color#chart-colors
    "charts.foreground": color.editor.text.default,
    "charts.lines": color.editor.text.muted,
    "charts.red": color.syntax.pinkish,
    "charts.blue": color.syntax.darkSkyBlue,
    "charts.yellow": color.syntax.sand,
    "charts.orange": color.syntax.pinkishTan,
    "charts.green": color.syntax.tea,
    "charts.purple": color.syntax.wisteria,

    // # Ports
    // https://code.visualstudio.com/api/references/theme-color#ports-colors
    // "ports.iconRunningProcessForeground": "",
  }
};

export default editorColor;
