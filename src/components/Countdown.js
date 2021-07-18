import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutestoMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
export function Countdown({ minutes = 20, isPaused }) {
  const interval = useRef(null);
  const countDown = () =>
    setMillis((time) => {
      if (time === 0) {
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);
  const [millis, setMillis] = useState(minutestoMillis(minutes));
  const minute = Math.floor(millis / 60000) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>{`${formatTime(minute)}:${formatTime(
      seconds
    )}`}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94,132,226,0.3)",
  },
});
