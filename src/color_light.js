const colorLight = {
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
      depth0: "#F5F5F5", // quickInput, titleBar, dropdown
      depth1: "#F5F5F5", // statusBar, sidebarSectionHeader, notificationCenterHeader
      depth2: "#EDEDEE", // activityBar, notifications
      depth3: "#E5E5E6", // sideBar, panel
      depth4: "#E2E2E4", // editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      depth5: "#F5F5F5", // editor
      depth6: "#FFFFFF", // input
      depth7: "#D4D4D8", // peekViewEditor
      border: {
        depth0: "#0A0A0B",
        depth1: "#414143",
        depth2: "#4C4C4D",
        depth3: "#59595A",
      },
    },
    text: {
      default: "#1E1F20",
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
    tea: '#1D7C37',
    turquoiseBlue: '#0B687F',
    darkSkyBlue: '#053A99',
    wisteria: '#2E1890',
    lavenderPink: '#CF0C98',
    pinkish: '#9D0B2A',
    pinkishTan: '#924311',
    sand: '#AE8E0F',
    silver: '#2D2D32', // Foreground/Text
    tintedGray: '#2D2D32', // Punctuation
    metallicBlue: '#55708B', // Comment
  },
  terminal: {
    ansiBlack: {
      normal: '#282829',
      bright: '#656567'
    },
    ansiBlue: {
      normal: '#5B89DB',
      bright: '#91B7F8'
    },
    ansiCyan: {
      normal: '#57B6CD',
      bright: '#84DCF0'
    },
    ansiGreen: {
      normal: '#78B98A',
      bright: '#A0E4B2'
    },
    ansiMagenta: {
      normal: '#DF91CA',
      bright: '#FACCEE'
    },
    ansiRed: {
      normal: '#D66A81',
      bright: '#F59EB1'
    },
    ansiWhite: {
      normal: '#FAFAFA',
      bright: '#FAFAFA'
    },
    ansiYellow: {
      normal: '#D8C67E',
      bright: '#F5E8B2'
    },
  },
}

export default colorLight;
