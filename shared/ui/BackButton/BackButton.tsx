import { BackIcon } from '@/assets/icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, type StyleProp, ViewStyle } from 'react-native';

type BackButtonProps = {
  style?: StyleProp<ViewStyle>;
};

export function BackButton({ style }: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityLabel='Назад'
      accessibilityRole='button'
      hitSlop={12}
      onPress={() => router.back()}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    >
      <BackIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  pressed: {
    opacity: 0.7,
  },
});
