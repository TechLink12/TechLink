import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parentview: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginBottom: "-10%",
  },

  EnterDigitNum: {
    fontSize: 16,
    marginTop: 10,
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  Digitcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10%",
    padding: "-10%",
  },
  PareaID: {
    borderRadius: 11,
    width: "23%",
    height: "120%",
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightColor: "#3480eb",
    borderBottomColor: "#3480eb",
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 8,
  },
  DigitHolder: {
    borderRadius: 11,
    width: "20%",
    height: "130%",
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightColor: "#3480eb",
    borderBottomColor: "#3480eb",
    alignItems: "center",
    paddingLeft: 25,
    paddingBottom: 8,
    fontSize: 20,
  },
  ResendContainer: { paddingTop: "60%", paddingLeft: "20%" },
  ResendTxt: { color: "#db6e3b", paddingLeft: 5, fontSize: 18 },

  ResendContainer2: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingLeft: "5%",
  },
});

export default styles;
