import React, { useState } from "react";

import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  useWindowDimensions,
  Platform,
} from "react-native";
import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
export default function App() {
  const [focusSubject, setFocusSubject] = useState("chillin");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
  tempText: { color: colors.white },
});
