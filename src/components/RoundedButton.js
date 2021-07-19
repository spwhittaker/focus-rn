import React from "react";
import {
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import { colors } from "../utils/colors";
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  title = "Press me",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text
        style={[styles(size).text, textStyle]}
        onPress={() => props.onPress()}
      >
        {title}
      </Text>
    </TouchableOpacity>

    /*     <TouchableNativeFeedback style={[styles(size).radius, style]}>
      <Text
        style={[styles(size).text, textStyle]}
        onPress={() => props.onPress()}
      >
        {title}
      </Text>
    </TouchableNativeFeedback> */
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: { color: colors.white, fontSize: size / 3.5 },
  });
