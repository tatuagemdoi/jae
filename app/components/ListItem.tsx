/** ListItem — linha de lista/menu da Jaé (perfil, configurações). */
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontFamily, fontSize } from '../../design-tokens/theme';

export function ListItem({
  label,
  value,
  icon,
  onPress,
  danger,
}: {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  danger?: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && { backgroundColor: colors.surfaceMuted }]}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text style={[styles.label, danger && { color: '#e5484d' }]}>{label}</Text>
      <View style={styles.right}>
        {value ? <Text style={styles.value}>{value}</Text> : null}
        <Text style={styles.chevron}>›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: spacing[3],
  },
  icon: { width: 28, alignItems: 'center' },
  label: { flex: 1, fontFamily: fontFamily.medium, fontSize: fontSize.base, color: colors.text },
  right: { flexDirection: 'row', alignItems: 'center', gap: spacing[2] },
  value: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: colors.textMuted },
  chevron: { fontFamily: fontFamily.bold, fontSize: 22, color: colors.gray[500], marginTop: -2 },
});

export default ListItem;
