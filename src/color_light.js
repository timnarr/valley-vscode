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
      activeSelectionBackground: "#BCD2FF",
      activeSelectionForeground: "#6B9BFA",
      currentLine: "#6B9BFA",
      debugging: "#D55975",
      errorBackground: "#C66783",
      errorForeground: "#EB4755",
      focusBackground: "#6B9BFA",
      focusForeground: "#B9DCFF",
      infoBackground: "#67A0C5",
      infoForeground: "#47A9EB",
      primary: "#6DB5FF",
      primaryHover: "",
      search: "#E7BB5A",
      searchHighlight: "#E9BF3A",
      secondary: "#9F55CB",
      selection: "#47A2FF",
      tertiary: "#66D5AC",
      tertiaryHover: "#90DFC2",
      warningBackground: "#C58F67",
      warningForeground: "#EB8E47",
    },
    // A higher number means "closer to the user": at the top = brighter
    // A lower number means "further away from the user": at the bottom = darker
    surface: {
      // DATEI 14
      depth0: "#EEF0F2", //"#FAFAFB", // "#F9FAFB", // quickInput, titleBar
      depth1: "#DCE1E5", // "#DBDEE1", // "#EDF0F2", // statusBar, notificationCenterHeader
      depth2: "#E9ECEE", //"#EDEFF2" // activityBar, notifications
      depth3: "#F4F5F6", //"#F6F7F8" // sideBar, panel
      depth4: "#FFFFFF", // "#F7F8F8", // "#F2F4F7", // editor, editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      depth5: "#FFFFFF", // "#F7F8F8", // "#F2F4F7", // editor
      depth6: "#FFFFFF", // input
      depth7: "#E0E0E1", // peekViewEditor
      // DATEI 13
      // depth0: "#F9FAFB", // "#F9FAFB", // quickInput, titleBar
      // depth1: "#EDF0F2", // "#EDF0F2", // statusBar, notificationCenterHeader
      // depth2: "#EDF0F2", // "#EDF0F2", // activityBar, notifications
      // depth3: "#E8EBED", // "#E7EBEE", // sideBar, panel
      // depth4: "#F6F7F9", // "#F2F4F7", // editor, editorWidget, editorGroupHeader.tabsBackground, breadcrumb
      // depth5: "#F6F7F9", // "#F2F4F7", // editor
      // depth6: "#FFFFFF", // input
      // depth7: "#E0E0E1", // peekViewEditor
      border: {
        depth0: "#D2D6DA", // editorGroup, diffEditor
        depth1: "#D2D6DA", // activityBar, sideBar
        depth2: "#D2D6DA",
        depth3: "#D2D6DA",
      },
    },
    ui: {
      default: "#26292C",
      muted: "#6E747B",
      shadowHard: "#00000040",
      shadowSoft: "#0000001A",
      input: "#FFFFFF",
      inputBorder: "#DBE0E6",
      checkbox: "#DBE0E6",
      checkboxBorder: "#DBE0E6",
      dropdown: "#DBE0E6",
      dropdownBorder: "#DBE0E6",
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
    tea: '#048145', // '#04813B', //#05893F',
    turquoiseBlue: '#0978A2', //#007A97', //'#0081A0',
    darkSkyBlue: '#215DFE', //'#1966F0', //'#1B6DFE',
    wisteria: '#7052F4', //'#7657FF',
    lavenderPink: '#D2019B', //'#DE00A3',
    pinkish: '#DC1641', // '#E71845',
    pinkishTan: '#B35405', // '#BE5A06',
    sand: '#846F00', // '#9B8711',
    silver: '#414448', // Foreground/Text
    tintedGray: '#414448', // Punctuation
    metallicBlue: '#587999', // Comment
  },
  terminal: {
    ansiBlack: {
      normal: '#282829',
      bright: '#656567'
    },
    ansiBlue: {
      normal: '#1B6DFE',
      bright: '#91B7F8'
    },
    ansiCyan: {
      normal: '#0081A0',
      bright: '#84DCF0'
    },
    ansiGreen: {
      normal: '#05893F',
      bright: '#A0E4B2'
    },
    ansiMagenta: {
      normal: '#DE00A3',
      bright: '#FACCEE'
    },
    ansiRed: {
      normal: '#E71845',
      bright: '#F59EB1'
    },
    ansiWhite: {
      normal: '#FAFAFA',
      bright: '#FAFAFA'
    },
    ansiYellow: {
      normal: '#9B8711',
      bright: '#F5E8B2'
    },
  },
}

export default colorLight;
