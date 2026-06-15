/** Chip — filtro/seleção (categorias da Cidade, modos de rota). */
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing, fontFamily, fontSize } from '../../design-tokens/theme';

export function Chip({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, selected && styles.selected]}>
      <Text style={[styles.label, selected && styles.labelSel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.gray[300],
    backgroundColor: colors.surface,
  },
  selected: { backgroundColor: colors.surfaceMuted, borderColor: colors.primary },
  label: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: colors.textMuted },
  labelSel: { color: colors.primaryHover, fontFamily: fontFamily.bold },
});

export default Chip;
