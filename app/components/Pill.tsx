/** Pill — tag/badge da Jaé (status, categorias como Gratuidade / Jaézinho). */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing, fontFamily, fontSize } from '../../design-tokens/theme';

type Tone = 'success' | 'grat' | 'teal' | 'neutral';

const TONES: Record<Tone, { bg: string; fg: string }> = {
  success: { bg: colors.surfaceMuted, fg: colors.primaryHover },
  grat:    { bg: colors.secondary,    fg: '#5a4400' },
  teal:    { bg: colors.accent,       fg: '#003d37' },
  neutral: { bg: colors.gray[300],    fg: colors.ink[900] },
};

export function Pill({ label, tone = 'neutral' }: { label: string; tone?: Tone }) {
  const t = TONES[tone];
  return (
    <View style={[styles.base, { backgroundColor: t.bg }]}>
      <Text style={[styles.label, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: { alignSelf: 'flex-start', borderRadius: radius.pill, paddingVertical: 4, paddingHorizontal: spacing[3] },
  label: { fontFamily: fontFamily.bold, fontSize: fontSize.xs },
});

export default Pill;
