const colorDark = {
  alpha00: "00",
  alpha02: "05",
  alpha03: "08",
  alpha04: "0A",
  alpha05: "0D",
  alpha08: "14",
  alpha10: "1A",
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
  white: "#E5E7E8",
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
      depth0: "#3b3b3d", // quickInput, titleBar, statusBar, sidebarSectionHeader, notificationCenterHeader
      depth1: "#313133", // activityBar, notifications
      depth2: "#272729", // sideBar, panel
      depth3: "#222224", // editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      depth4: "#1d1d1f", // editor
      depth5: "#151517", // input
      depth6: "#131314", // peekViewEditor
      border: {
        depth0: "#09090a",
        depth1: "#404042",
        depth2: "#4b4b4d",
        depth3: "#565659",
      },
    },
    ui: {
      default: "#E5E7E8",
      muted: "#8B949C",
      shadowHard: "#00000080",
      shadowSoft: "#00000040",
      input: "#151517",
      inputBorder: "#151517",
      checkbox: "#151517",
      checkboxBorder: "#151517",
      dropdown: "#3b3b3d",
      dropdownBorder: "#3b3b3d",
    }
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
    silver: '#BFC7CF', // Foreground/Text
    tintedGray: '#ff0000', //'#849CB4', // Punctuation
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

export default colorDark;
