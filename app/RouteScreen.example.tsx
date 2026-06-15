/** RouteScreen.example — "Como chegar": origem→destino, ETA e rota (transporte).
 *  Paridade com prototype/ (screen-trajeto). O mapa é placeholder — trocar por
 *  react-native-maps e a rota/ETA pela Google Routes API (ver
 *  docs/geolocalizacao-rotas-api.md). */
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize, radius, shadow } from '../design-tokens/theme';
import { Button } from './components/Button';
import { Pill } from './components/Pill';
import { Chip } from './components/Chip';
import { ListItem } from './components/ListItem';

const MODES = ['🚌 Transporte', '🚗 Carro', '🚶 A pé'];
const STEPS = [
  { ico: '🚶', bg: colors.gray[500], t: 'Caminhe até o BRT Jardim Oceânico', s: '450 m', time: '6 min' },
  { ico: '🚌', bg: colors.primary, t: 'BRT Transcarioca · sentido Centro', s: '12 paradas · R$ 4,30', time: '24 min' },
  { ico: '🚶', bg: colors.gray[500], t: 'Caminhe até a Marina da Glória', s: '600 m', time: '8 min' },
];

export default function RouteScreen({ onNavigate }: { onNavigate?: (k: string) => void }) {
  const [mode, setMode] = useState(MODES[0]);
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[typography.h2, { marginBottom: spacing[4] }]}>Como chegar</Text>

        <ListItem label="Sua localização" value="GPS" icon={<Text>📍</Text>} />
        <ListItem label="Marina da Glória" value="evento" icon={<Text>🏁</Text>} />

        {/* mapa placeholder */}
        <View style={styles.map}>
          <Text style={styles.mapHint}>🗺️ mapa (react-native-maps)</Text>
          <Text style={[styles.pin, { left: 30, bottom: 28 }]}>🔵</Text>
          <Text style={[styles.pin, { right: 36, top: 26 }]}>📍</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: spacing[2], paddingVertical: spacing[3] }}>
          {MODES.map((m) => <Chip key={m} label={m} selected={mode === m} onPress={() => setMode(m)} />)}
        </ScrollView>

        {/* ETA */}
        <View style={styles.eta}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.etaLabel}>Tempo estimado</Text>
              <Text style={styles.etaBig}>38 min</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.etaLabel}>Distância</Text>
              <Text style={styles.etaDist}>9,2 km</Text>
            </View>
          </View>
          <Text style={styles.etaTraffic}>🟢 Trânsito tranquilo · chega 18h42</Text>
        </View>

        <Text style={[typography.h3, { marginVertical: spacing[3] }]}>Sua rota</Text>
        <View style={styles.card}>
          {STEPS.map((s, i) => (
            <View key={i} style={[styles.step, i > 0 && styles.stepBorder]}>
              <View style={[styles.leg, { backgroundColor: s.bg }]}><Text>{s.ico}</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stepT}>{s.t}</Text>
                <Text style={styles.stepS}>{s.s}</Text>
              </View>
              <Text style={styles.stepTime}>{s.time}</Text>
            </View>
          ))}
        </View>

        <Button label="Pagar passagem · R$ 4,30" onPress={() => onNavigate?.('pagar')} />
        <View style={[styles.row, { marginTop: spacing[2] }]}>
          <View style={{ flex: 1 }}><Button label="Abrir no Waze" variant="ghost" onPress={() => {}} /></View>
          <View style={{ flex: 1 }}><Button label="Google Maps" variant="ghost" onPress={() => {}} /></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing[6] },
  row: { flexDirection: 'row', gap: spacing[2] },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  map: {
    height: 180, borderRadius: radius.lg, backgroundColor: colors.surfaceMuted,
    marginTop: spacing[3], alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...shadow.sm,
  },
  mapHint: { fontFamily: fontFamily.medium, color: colors.textMuted, fontSize: fontSize.sm },
  pin: { position: 'absolute', fontSize: 22 },
  eta: { backgroundColor: colors.ink[900], borderRadius: radius.lg, padding: spacing[5], ...shadow.md },
  etaLabel: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: '#bdbdbd' },
  etaBig: { fontFamily: fontFamily.displayBold, fontSize: fontSize['2xl'], color: '#fff', lineHeight: 40 },
  etaDist: { fontFamily: fontFamily.bold, fontSize: fontSize.md, color: '#fff' },
  etaTraffic: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: '#9bd4a8', marginTop: spacing[2] },
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.gray[300], borderRadius: radius.lg, padding: spacing[4], marginBottom: spacing[4] },
  step: { flexDirection: 'row', gap: spacing[3], alignItems: 'center', paddingVertical: spacing[3] },
  stepBorder: { borderTopWidth: 1, borderTopColor: colors.gray[300] },
  leg: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  stepT: { fontFamily: fontFamily.medium, fontSize: fontSize.base, color: colors.text },
  stepS: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: colors.textMuted },
  stepTime: { fontFamily: fontFamily.bold, fontSize: fontSize.sm, color: colors.text },
});
