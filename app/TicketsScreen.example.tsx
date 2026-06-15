/** TicketsScreen.example — "Meus ingressos" (pós-compra).
 *  Paridade com prototype/ (screen-ingressos). */
import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize, radius, shadow } from '../design-tokens/theme';
import { Button } from './components/Button';
import { Pill } from './components/Pill';

const TICKETS = [
  { t: 'Festival de Verão', s: 'Marina da Glória · Sáb, 28 jun · 18h', qty: '1 ingresso · Inteira' },
  { t: 'Roda de Samba · Pedra do Sal', s: 'Sex, 20 jun · 19h · Saúde', qty: '2 ingressos' },
];

export default function TicketsScreen({ onNavigate }: { onNavigate?: (k: string) => void }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[typography.h2, { marginBottom: spacing[4] }]}>Meus ingressos</Text>
        <Text style={[typography.h3, { marginBottom: spacing[3] }]}>Próximos</Text>

        {TICKETS.map((tk, i) => (
          <View key={i} style={styles.ticket}>
            <View style={styles.head}>
              <View style={styles.qr}><View style={styles.qrIn} /></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{tk.t}</Text>
                <Text style={styles.meta}>{tk.s}</Text>
                <View style={{ marginTop: spacing[2], alignSelf: 'flex-start' }}>
                  <Pill label={tk.qty} tone="success" />
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <View style={{ flex: 1 }}><Button label="🧭 Como chegar" onPress={() => onNavigate?.('trajeto')} /></View>
              <View style={{ flex: 1 }}><Button label="Ver QR" variant="ghost" onPress={() => {}} /></View>
            </View>
          </View>
        ))}

        <Text style={styles.foot}>Seus ingressos ficam salvos aqui, até offline 🎟️</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing[6] },
  ticket: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.gray[300], borderRadius: radius.lg, overflow: 'hidden', marginBottom: spacing[3], ...shadow.sm },
  head: { backgroundColor: colors.ink[900], padding: spacing[4], flexDirection: 'row', gap: spacing[4], alignItems: 'center' },
  qr: { width: 54, height: 54, backgroundColor: '#fff', borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  qrIn: { width: 40, height: 40, backgroundColor: colors.ink[900], borderRadius: 3 },
  title: { fontFamily: fontFamily.bold, fontSize: fontSize.base, color: '#fff' },
  meta: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: '#bdbdbd', marginTop: 2 },
  body: { flexDirection: 'row', gap: spacing[2], padding: spacing[4] },
  foot: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: colors.textMuted, textAlign: 'center', marginTop: spacing[3] },
});
