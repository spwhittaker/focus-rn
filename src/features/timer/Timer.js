import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../../utils/colors";
import { fontSizes } from "../../utils/sizes";
import { spacing } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => setProgress(progress);

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate([1000, 1000, 1000, 1000]);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color="#5e84e2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: { color: colors.white, textAlign: "center" },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  countdown: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
});
