/** Input — campo de texto da Jaé, com label e foco em verde da marca. */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, radius, spacing, fontFamily, fontSize } from '../../design-tokens/theme';

export function Input({
  label,
  error,
  style,
  ...props
}: TextInputProps & { label?: string; error?: string }) {
  const [focused, setFocused] = useState(false);
  const borderColor = error ? '#e5484d' : focused ? colors.primary : colors.border;
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.gray[500]}
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        style={[styles.input, { borderColor }, style]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing[4] },
  label: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: colors.text, marginBottom: spacing[2] },
  input: {
    borderWidth: 2,
    borderRadius: radius.md,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    color: colors.text,
    backgroundColor: colors.surface,
  },
  error: { fontFamily: fontFamily.medium, fontSize: fontSize.xs, color: '#e5484d', marginTop: spacing[1] },
});

export default Input;
