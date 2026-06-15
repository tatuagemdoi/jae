/**
 * TabBar — navegação inferior da Jaé.
 * Recebe os itens com um render de ícone (use sua lib: lucide-react-native,
 * @expo/vector-icons etc.). O ativo fica em verde da marca.
 */
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing, fontFamily, fontSize, shadow } from '../../design-tokens/theme';

export type TabItem = {
  key: string;
  label: string;
  icon: (props: { color: string; size: number }) => React.ReactNode;
};

export function TabBar({
  items,
  active,
  onChange,
}: {
  items: TabItem[];
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <View style={styles.bar}>
      {items.map((it) => {
        const isActive = it.key === active;
        const color = isActive ? colors.primary : colors.gray[500];
        return (
          <Pressable key={it.key} style={styles.tab} onPress={() => onChange(it.key)}>
            {it.icon({ color, size: 24 })}
            <Text style={[styles.label, { color }]}>{it.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border,
    ...shadow.md,
  },
  tab: { flex: 1, alignItems: 'center', gap: 4 },
  label: { fontFamily: fontFamily.medium, fontSize: fontSize.xs },
});

export default TabBar;
