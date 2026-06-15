/** Button — botão da Jaé (cápsula). Variantes: primary | secondary | ghost | dark. */
import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { colors, radius, spacing, fontFamily, fontSize, shadow } from '../../design-tokens/theme';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';

export function Button({
  label,
  variant = 'primary',
  onPress,
  disabled,
}: {
  label: string;
  variant?: Variant;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, variant === 'secondary' && styles.labelDark, variant === 'ghost' && styles.labelGhost]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.pill,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow.sm,
  },
  primary:   { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  dark:      { backgroundColor: colors.bgInverse },
  ghost:     { backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.primary, shadowOpacity: 0, elevation: 0 },
  pressed:   { opacity: 0.85 },
  disabled:  { opacity: 0.4 },
  label:      { fontFamily: fontFamily.bold, fontSize: fontSize.base, color: colors.textInverse },
  labelDark:  { color: colors.ink[900] },
  labelGhost: { color: colors.primaryHover },
});

export default Button;
