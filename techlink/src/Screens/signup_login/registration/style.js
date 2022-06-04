import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parentview: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginBottom: "-10%",
  },
  parentViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },

  EnterPNum: {
    fontSize: 15,
    marginTop: 10,
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  InputTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "15%",
    padding: 20,
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
  PNum: {
    borderRadius: 10,
    width: "70%",
    height: "120%",
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightColor: "#3480eb",
    borderBottomColor: "#3480eb",
    alignItems: "center",
    paddingTop: -15,
    paddingLeft: 10,
    paddingBottom: 8,
  },

  PolicyContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingLeft: "5%",
  },
  PolicyContainer2: { justifyContent: "space-evenly", paddingTop: "25%" },

  continuebtn: {
    backgroundColor: "#101b91",
    width: "75%",
    height: "35%",
    borderRadius: 15,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderBottomColor: "#db711a",
    borderRightColor: "#db711a",
  },
  ContinueTxt: {
    fontWeight: "bold",
    color: "white",
    paddingLeft: "30%",
    fontSize: 20,
    paddingTop: 5,
  },
});

export default styles;
