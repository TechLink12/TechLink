import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parentview: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderColor: "#1e128a",
    borderRadius: 60,
    borderLeftWidth: 0.7,
    borderTopWidth: 0.5,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  FindLoadView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    padding: 20,
  },
  Skipbtn: {
    backgroundColor: "white",
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1e128a",
    borderRadius: 15,

    borderRightWidth: 3,
    borderBottomWidth: 4,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
  },
  Nextbtn: {
    width: "40%",

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e128a",
    borderColor: "#1697f2",
    borderRadius: 15,

    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
  },
  SlideContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  Slide1: {
    backgroundColor: "#db6e3b",
    width: 9,
    height: 9,
    borderRadius: 100,
    marginRight: 5,
  },
  Slide2: {
    backgroundColor: "#adaaa8",
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: 5,
  },
  slide3: {
    backgroundColor: "#adaaa8",
    width: 8,
    height: 8,
    borderRadius: 100,
  },
});

export default styles;
