export default {
  fullscreen: {
    Section: {
      width: "960px",
      marginTop: "40px",
      marginLeft: "calc(50% - 480px)",
      marginBottom: "40px",
      position: "relative",
      display: "flex",
    },
    ScrollerContainer: {
      flex: 1,
      paddingLeft: "50px",
      margin: "30vh 0",
      color: "white",
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
