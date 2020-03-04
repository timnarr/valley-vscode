const color = {
  alpha00: "00",
  alpha02: "05",
  alpha03: "08",
  alpha04: "0A",
  alpha05: "0D",
  alpha08: "14",
  alpha10: "1a",
  alpha15: "26",
  alpha20: "33",
  alpha25: "40",
  alpha30: "4D",
  alpha35: "59",
  alpha40: "66",
  alpha50: "80",
  alpha60: "99",
  alpha70: "B3",
  alpha75: "BF",
  alpha80: "CC",
  alpha90: "E6",
  black: "#000000",
  debug: "#ff00aa",
  white: "#FFFFFF",
  editor: {
    action: {
      activeSelectionBackground: "#324866",
      activeSelectionForeground: "#FFFFFF",
      debugging: "#D55975",
      errorBackground: "#C66783",
      errorForeground: "#EB4755",
      focusBackground: "#2C4C7A",
      focusForeground: "#8FBEFF",
      infoBackground: "#67A0C5",
      infoForeground: "#47A9EB",
      primary: "#64AEF7",
      primaryHover: "#96C7F8",
      search: "#E7BB5A",
      searchHighlight: "#E9BF3A",
      secondary: "#D1AEE6",
      selection: "#006AFF",
      tertiary: "#66D5AC",
      tertiaryHover: "#90DFC2",
      warningBackground: "#C58F67",
      warningForeground: "#EB8E47",
    },
    // A higher number means "closer to the user": at the top = brighter
    // A lower number means "further away from the user": at the bottom = darker
    surface: {
      depth0: "#3E3E41", // quickInput, titleBar, dropdown
      depth1: "#3C3C3E", // statusBar, sidebarSectionHeader, notificationCenterHeader
      depth2: "#323233", // activityBar, notifications
      depth3: "#282829", // sideBar, panel
      depth4: "#232324", // editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      depth5: "#1E1E1F", // editor
      depth6: "#161618", // input
      depth7: "#141415", // peekViewEditor
      border: {
        depth0: "#0A0A0B",
        depth1: "#414143",
        depth2: "#4C4C4D",
        depth3: "#59595A",
      },
    },
    text: {
      default: "#C5C5C9",
      muted: "#8B949C",
    },
  },
  git: {
    addedIndicator: "#217962",
    deletedIndicator: "#792138",
    diffInserted: "#1FF9BF",
    diffRemoved: "#F91F59",
    addedResource: "#36C7A0",
    conflictingResource: "#C837A6",
    deletedResource: "#C8375E",
    ignoredResource: "#D0D4D8",
    mergeConflictCommon: "#ed586e",
    mergeConflictCurrent: "#10ac84",
    mergeConflictIncoming: "#64AEF7",
    modifiedIndicator: "#216479",
    modifiedResource: "#38A7C9",
    submoduleRescource: "#A6C837",
    untrackedResource: "#375EC8",
  },
  syntax: {
    tea: '#78B98A',
    turquoiseBlue: '#57B6CD',
    darkSkyBlue: '#5B89DB',
    wisteria: '#9285CC',
    lavenderPink: '#DF91CA',
    pinkish: '#D66A81',
    pinkishTan: '#CD926D',
    sand: '#D8C67E',
    silver: '#C5C5C9', // Foreground/Text
    tintedGray: '#8B949C', // Punctuation
    metallicBlue: '#55708B', // Comment
  },
}

export default color;
