import React, { useRef } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

export default function App() {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const fall = new Animated.Value(1);

  const snapPoints = ["40%"];

  showHeader = () => (
    <View style={styles.panelHeader}>
      <View style={styles.modalHeader}>
        <View style={styles.panelHandle} />
        <Text style={styles.modalHeaderText}>
          Swipe down to close the modal
        </Text>
      </View>
    </View>
  );
  showContent = () => (
    <>
      <View style={styles.panel}>
        <Text style={{ marginBottom: 10 }}>Hello World!</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <Text>sdfghj</Text>
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>dfgfcdd</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  panelHeader: {
    backgroundColor: "#fa0",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#ffffff",
  },
  panel: {
    padding: 20,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    marginBottom: 0,
  },
  modalHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalHeaderText: {
    fontSize: 15,
    fontFamily: "ubuntu-semibold",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
