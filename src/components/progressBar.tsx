import { useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const sharedProgress = useSharedValue(progress);

  const progressStyles = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    };
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress);
  }, [progress]);

  return (
    <View className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <Animated.View
        aria-label="Progresso de hábitos completados nesse dia."
        className='h-3 rounded-xl bg-violet-600'
        style={progressStyles}
      />
    </View>
  );
}