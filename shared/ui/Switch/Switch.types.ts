import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps {
  value?: boolean;
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  /** Визуальный размер свитча (нативный Switch масштабируется через transform). По умолчанию `medium`. */
  size?: SwitchSize;
  label?: string;
  description?: string;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  thumbColor?: string;
  iosBackgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  switchContainerStyle?: StyleProp<ViewStyle>;
}
