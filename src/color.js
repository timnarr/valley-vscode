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
  alpha55: "8C",
  alpha60: "99",
  alpha70: "B3",
  alpha75: "BF",
  alpha80: "CC",
  alpha90: "E6",
  black: "#000000",
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
      extensionStar: "#E9BF3A",
      neutral: "#989898",
      neutralHover: "#ADADAD",
      secondary: "#D3AEE6",
      selection: "#006AFF",
      tertiary: "#66D5AC",
      warningBackground: "#C58F67",
      warningForeground: "#EB8E47",
    },
    // A lower depth is "closer to the user" and brighter,
    // a higher depth is "further away from the user" and darker
    surface: {
      depth0: "#4B4B4D", // quickInput, dropdown, menu, suggest/hover widgets, notificationCenterHeader, commandCenter
      depth1: "#383838", // titleBar, statusBar, notifications, borders between areas
      depth2: "#292929", // activityBar, sideBar, panel, tabs bar, inactive tabs, editorWidget
      depth3: "#1F1F1F", // editor, active tab, breadcrumb, borders between tabs
      depth4: "#151515", // input
      depth5: "#141414", // peekViewEditor, code blocks
      border: {
        depth0: "#0A0A0A",
        depth1: "#434343",
        depth2: "#4D4D4D",
        depth3: "#585858",
      },
    },
    text: {
      default: "#BFC7CF",
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
    deletedResource: "#D66A81",
    ignoredResource: "#8B949C",
    mergeConflictCommon: "#ed586e",
    mergeConflictCurrent: "#10ac84",
    mergeConflictIncoming: "#64AEF7",
    modifiedIndicator: "#216479",
    modifiedResource: "#5A8BF9",
    submoduleResource: "#A6C837",
    untrackedResource: "#04A374",
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
    tintedGray: '#8B949C', // Punctuation
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

export default color;
