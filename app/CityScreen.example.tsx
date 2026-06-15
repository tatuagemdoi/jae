/** CityScreen.example — "Acontece no Rio": guia cultural/gastronômico + ingressos.
 *  Paridade com prototype/ (screen-cidade). */
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize, radius, shadow } from '../design-tokens/theme';
import { Button } from './components/Button';
import { Pill } from './components/Pill';
import { Chip } from './components/Chip';
import { TabBar, TabItem } from './components/TabBar';

const dot = ({ color, size }: { color: string; size: number }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }} />
);
const TABS: TabItem[] = [
  { key: 'inicio', label: 'Início', icon: dot },
  { key: 'cartoes', label: 'Cartões', icon: dot },
  { key: 'cidade', label: 'Cidade', icon: dot },
  { key: 'perfil', label: 'Perfil', icon: dot },
];

const FILTERS = ['Tudo', '🎶 Shows', '🍽️ Gastronomia', '🎭 Cultura', '⚽ Esporte'];
const EVENTS = [
  { icon: '🎭', t: 'Mostra de Teatro · Theatro Municipal', s: 'Qui, 19 jun · 20h · Centro', price: 'R$ 40' },
  { icon: '🍽️', t: 'Feira Gastronômica · Jardim Botânico', s: 'Dom, 22 jun · 12h', price: 'Grátis', free: true },
  { icon: '🎶', t: 'Roda de Samba · Pedra do Sal', s: 'Sex, 20 jun · 19h · Saúde', price: 'R$ 25' },
  { icon: '⚽', t: 'Fla x Flu · Maracanã', s: 'Sáb, 28 jun · 16h', price: 'R$ 60' },
];

export default function CityScreen({ onNavigate }: { onNavigate?: (k: string) => void }) {
  const [filter, setFilter] = useState('Tudo');
  const [tab, setTab] = useState('cidade');
  const go = (k: string) => onNavigate?.(k);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[typography.h2, { marginBottom: spacing[4] }]}>Acontece no Rio</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: spacing[2], paddingBottom: spacing[3] }}>
          {FILTERS.map((f) => (
            <Chip key={f} label={f} selected={filter === f} onPress={() => setFilter(f)} />
          ))}
        </ScrollView>

        {/* destaque */}
        <View style={styles.hero}>
          <Pill label="🎶 Show" tone="grat" />
          <Text style={styles.heroTitle}>Festival de Verão · Marina da Glória</Text>
          <Text style={styles.heroMeta}>Sáb, 28 jun · 18h · a partir de R$ 80</Text>
        </View>
        <View style={[styles.row, { marginBottom: spacing[6] }]}>
          <View style={{ flex: 1 }}><Button label="🎟️ Ingresso" onPress={() => go('ingressos')} /></View>
          <View style={{ flex: 1 }}><Button label="🧭 Como chegar" variant="ghost" onPress={() => go('trajeto')} /></View>
        </View>

        <Text style={[typography.h3, { marginBottom: spacing[3] }]}>Em destaque</Text>
        {EVENTS.map((e, i) => (
          <View key={i} style={styles.event}>
            <View style={styles.thumb}><Text style={{ fontSize: 24 }}>{e.icon}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.eventT}>{e.t}</Text>
              <Text style={styles.eventS}>{e.s}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 6 }}>
              <Text style={[styles.price, e.free && { color: colors.success }]}>{e.price}</Text>
              <Text onPress={() => go('trajeto')} style={styles.go}>🧭</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TabBar items={TABS} active={tab} onChange={(k) => { setTab(k); go(k); }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing[6] },
  row: { flexDirection: 'row', gap: spacing[2] },
  hero: {
    borderRadius: radius.lg, padding: spacing[4], minHeight: 150, justifyContent: 'flex-end',
    backgroundColor: colors.primary, marginBottom: spacing[2], ...shadow.md,
  },
  heroTitle: { fontFamily: fontFamily.bold, fontSize: fontSize.md, color: '#fff', marginTop: spacing[2] },
  heroMeta: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: 'rgba(255,255,255,.9)', marginTop: 2 },
  event: {
    flexDirection: 'row', gap: spacing[3], alignItems: 'center', padding: spacing[3],
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.gray[300],
    borderRadius: radius.md, marginBottom: spacing[3], ...shadow.sm,
  },
  thumb: { width: 56, height: 56, borderRadius: radius.sm, backgroundColor: colors.surfaceMuted, alignItems: 'center', justifyContent: 'center' },
  eventT: { fontFamily: fontFamily.medium, fontSize: fontSize.base, color: colors.text },
  eventS: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: colors.textMuted, marginTop: 2 },
  price: { fontFamily: fontFamily.bold, fontSize: fontSize.sm, color: colors.text },
  go: { fontSize: 18 },
});
