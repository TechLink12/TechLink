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
    // borderRadius:60,
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  parentViewContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  GetStartdBtn: {
    width: "75%",

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
  SliderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  Slider1: {
    backgroundColor: "#db6e3b",
    width: 9,
    height: 9,
    borderRadius: 100,
    marginRight: 5,
  },
  Slider2: {
    backgroundColor: "#adaaa8",
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: 5,
  },
  Slider3: {
    backgroundColor: "#adaaa8",
    width: 8,
    height: 8,
    borderRadius: 100,
  },
});

export default styles;
