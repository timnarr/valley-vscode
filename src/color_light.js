const colorLight = {
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
      secondary: "#9F55CB",
      selection: "#006AFF",
      tertiary: "#66D5AC",
      tertiaryHover: "#90DFC2",
      warningBackground: "#C58F67",
      warningForeground: "#EB8E47",
    },
    // A higher number means "closer to the user": at the top = brighter
    // A lower number means "further away from the user": at the bottom = darker
    surface: {
      depth0: "#f0f2f5", // quickInput, titleBar, dropdown
      depth1: "#f0f2f5", // statusBar, sidebarSectionHeader, notificationCenterHeader
      depth2: "#E7EAEF", // activityBar, notifications
      depth3: "#f0f2f5", // sideBar, panel
      depth4: "#FFFFFF", // editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      depth5: "#FFFFFF", // editor
      depth6: "#FFFFFF", // input
      depth7: "#E0E0E1", // peekViewEditor
      border: {
        depth0: "#0000aa",
        depth1: "#D3D6DA",
        depth2: "#00aa00",
        depth3: "#C8CCD0",
      },
    },
    ui: {
      default: "#26292C",
      muted: "#6E747B",
      shadowHard: "#00000040",
      shadowSoft: "#0000001A",
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
    tea: '#418458',
    turquoiseBlue: '#1380A6',
    darkSkyBlue: '#326ce0',
    wisteria: '#7064b8',
    lavenderPink: '#C93DA1',
    pinkish: '#c74560',
    pinkishTan: '#A86642',
    sand: '#877535',
    silver: '#484C50', // Foreground/Text
    tintedGray: '#6E747B', // Punctuation
    metallicBlue: '#5D7892', // Comment
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
