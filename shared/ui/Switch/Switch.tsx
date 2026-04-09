import { useCallback, useMemo, useState } from 'react';
import { Switch as RNSwitch, StyleSheet, Text, View } from 'react-native';

import type { SwitchProps, SwitchSize } from './Switch.types';

const SWITCH_BASE_WIDTH = 72;
const SWITCH_BASE_HEIGHT = 42;

const SIZE_SCALE: Record<SwitchSize, number> = {
  small: 1,
  medium: 1.25,
  large: 1.5,
};

const TEXT_BY_SIZE: Record<
  SwitchSize,
  { label: number; description: number }
> = {
  small: { label: 14, description: 12 },
  medium: { label: 16, description: 14 },
  large: { label: 18, description: 16 },
};

export const Switch = ({
  value,
  defaultValue = false,
  onValueChange,
  disabled = false,
  size = 'medium',
  label,
  description,
  activeTrackColor = '#3B82F6',
  inactiveTrackColor = '#9CA3AF',
  thumbColor = '#FFFFFF',
  iosBackgroundColor,
  containerStyle,
  labelStyle,
  descriptionStyle,
  switchContainerStyle,
}: SwitchProps) => {
  const isControlled = typeof value === 'boolean';
  const [innerValue, setInnerValue] = useState(defaultValue);

  const currentValue = isControlled ? (value as boolean) : innerValue;

  const handleChange = useCallback(
    (nextValue: boolean) => {
      if (!isControlled) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange]
  );

  const trackColor = useMemo(
    () => ({
      false: inactiveTrackColor,
      true: activeTrackColor,
    }),
    [activeTrackColor, inactiveTrackColor]
  );

  const scale = SIZE_SCALE[size];
  const typography = TEXT_BY_SIZE[size];

  const switchOuterStyle = useMemo(
    () => ({
      width: SWITCH_BASE_WIDTH * scale,
      height: SWITCH_BASE_HEIGHT * scale,
    }),
    [scale]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {(label || description) && (
        <View style={styles.textContainer}>
          {label ? (
            <Text style={[styles.label, { fontSize: typography.label }, labelStyle]}>{label}</Text>
          ) : null}
          {description ? (
            <Text
              style={[styles.description, { fontSize: typography.description }, descriptionStyle]}
            >
              {description}
            </Text>
          ) : null}
        </View>
      )}

      <View style={[styles.switchContainer, switchOuterStyle, switchContainerStyle]}>
        <View style={{ transform: [{ scale }] }}>
          <RNSwitch
            disabled={disabled}
            value={currentValue}
            onValueChange={handleChange}
            trackColor={trackColor}
            thumbColor={thumbColor}
            ios_backgroundColor={iosBackgroundColor ?? inactiveTrackColor}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontWeight: '600',
    color: '#FFFFFF',
  },
  description: {
    color: '#9CA3AF',
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
