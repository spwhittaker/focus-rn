import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton.js";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent: { text } }) => setTmpItem(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(tmpItem)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    padding: 1,
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    fontFamily: "monospace",
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
