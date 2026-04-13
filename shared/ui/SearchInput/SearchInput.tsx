import { SearchIcon } from '@/assets/icons';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  type TextInput as TextInputRef,
} from 'react-native';

import type { SearchInputProps } from './SearchInput.types';

const ICON_SIZE = 20;

export const SearchInput = forwardRef<TextInputRef, SearchInputProps>(
  function SearchInput(
    {
      containerStyle,
      inputStyle,
      iconColor,
      placeholderTextColor,
      editable = true,
      ...textInputProps
    },
    ref,
  ) {
    const { theme } = useTheme();

    const resolvedIconColor = iconColor ?? theme.text;
    const resolvedPlaceholderColor = placeholderTextColor ?? theme.placeholder;
    const iconTint = editable ? resolvedIconColor : theme.text;

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: theme.cardBackground },
          containerStyle,
        ]}
      >
        <View style={styles.iconWrap} pointerEvents='none'>
          <SearchIcon color={iconTint} />
        </View>
        <TextInput
          ref={ref}
          editable={editable}
          placeholderTextColor={resolvedPlaceholderColor}
          selectionColor={theme.text}
          style={[styles.input, { color: theme.text }, inputStyle]}
          underlineColorAndroid='transparent'
          {...textInputProps}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 999,
    flexDirection: 'row',
    minHeight: 48,
    paddingHorizontal: 14,
  },
  iconWrap: {
    height: ICON_SIZE,
    justifyContent: 'center',
    marginRight: 10,
    width: ICON_SIZE,
  },
  input: {
    flex: 1,
    fontSize: Fonts.f16,
    paddingVertical: 0,
  },
});
