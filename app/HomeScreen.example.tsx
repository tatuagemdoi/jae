/**
 * HomeScreen.example — tela de exemplo da Jaé montada só com o design system.
 * Serve de referência de como compor os componentes-base no redesign.
 *
 * Requer as fontes Comfortaa/Montserrat bundladas (ver design-tokens/theme.ts).
 */
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize } from '../design-tokens/theme';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Pill } from './components/Pill';
import { Input } from './components/Input';
import { TabBar, TabItem } from './components/TabBar';

// ícone placeholder (troque por lucide-react-native / @expo/vector-icons)
const dot = ({ color, size }: { color: string; size: number }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }} />
);

const TABS: TabItem[] = [
  { key: 'home',    label: 'Início',    icon: dot },
  { key: 'card',    label: 'Cartão',    icon: dot },
  { key: 'recarga', label: 'Recarga',   icon: dot },
  { key: 'perfil',  label: 'Perfil',    icon: dot },
];

export default function HomeScreen() {
  const [tab, setTab] = useState('home');
  const [valor, setValor] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>Olá 👋</Text>
        <Text style={[typography.h1, { marginBottom: spacing[6] }]}>Vem ser Jaé</Text>

        {/* saldo */}
        <Card variant="dark" style={{ marginBottom: spacing[4] }}>
          <Text style={styles.saldoLabel}>Saldo do cartão</Text>
          <Text style={styles.saldo}>R$ 24,50</Text>
          <View style={{ flexDirection: 'row', gap: spacing[2], marginTop: spacing[4] }}>
            <Pill label="● Ativo" tone="success" />
            <Pill label="Jaézinho" tone="teal" />
          </View>
        </Card>

        {/* recarga */}
        <Card title="Recarregar" style={{ marginBottom: spacing[4] }}>
          <Input
            label="Valor"
            placeholder="R$ 0,00"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
          <Button label="Recarregar agora" onPress={() => {}} />
        </Card>

        {/* gratuidade */}
        <Card variant="muted" style={{ marginBottom: spacing[4] }}>
          <Pill label="Gratuidade" tone="grat" />
          <Text style={[typography.body, { marginTop: spacing[3], marginBottom: spacing[4] }]}>
            Estudante, idoso ou PCD? Solicite seu benefício pelo app.
          </Text>
          <Button label="Saiba mais" variant="ghost" onPress={() => {}} />
        </Card>
      </ScrollView>

      <TabBar items={TABS} active={tab} onChange={setTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing[6] },
  greeting: { fontFamily: fontFamily.medium, fontSize: fontSize.base, color: colors.textMuted },
  saldoLabel: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: '#bdbdbd' },
  saldo: { fontFamily: fontFamily.displayBold, fontSize: fontSize['2xl'], color: colors.textInverse, marginTop: spacing[1] },
});
