export default {
  fullscreen: {
    Wave: {
      width: "100%",
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      position: "static",
      display: "block",
    },
    ScrollerContainer: {
      flex: 1,
      paddingLeft: 0,
      margin: "30vh 0",
    },
    ScrollerStep: {
      position: "relative",
      padding: "0 10px",
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      borderLeft: "3px solid transparent",
    },
    StickerContainer: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(1, 1, 1, 0.6)",
      zIndex: -1,
    },
    Sticker: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -2,
    },
  },
}
