/** Card — superfície base da Jaé. Opções: variante de cor e título. */
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius, spacing, shadow, typography } from '../../design-tokens/theme';

type Variant = 'surface' | 'muted' | 'dark';

export function Card({
  title,
  children,
  variant = 'surface',
  style,
}: {
  title?: string;
  children?: React.ReactNode;
  variant?: Variant;
  style?: ViewStyle;
}) {
  const dark = variant === 'dark';
  return (
    <View style={[styles.base, styles[variant], style]}>
      {title ? (
        <Text style={[styles.title, dark && { color: colors.textInverse }]}>{title}</Text>
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: radius.lg, padding: spacing[6], ...shadow.sm },
  surface: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  muted:   { backgroundColor: colors.surfaceMuted },
  dark:    { backgroundColor: colors.bgInverse },
  title:   { ...typography.h3, marginBottom: spacing[3], color: colors.text },
});

export default Card;
