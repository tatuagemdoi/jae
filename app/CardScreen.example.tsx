/** CardScreen.example — cartão de transporte digital da Jaé (QR + saldo). */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize, radius, shadow } from '../design-tokens/theme';
import { Button } from './components/Button';
import { Pill } from './components/Pill';

export default function CardScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={[typography.h2, { marginBottom: spacing[6] }]}>Meu cartão</Text>

        {/* cartão digital */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.brand}>Jaé</Text>
            <Pill label="Ativo" tone="success" />
          </View>

          {/* QR placeholder */}
          <View style={styles.qr}>
            <View style={styles.qrInner} />
          </View>

          <Text style={styles.saldoLabel}>Saldo disponível</Text>
          <Text style={styles.saldo}>R$ 24,50</Text>
          <Text style={styles.cardNumber}>•••• •••• •••• 4821</Text>
        </View>

        <View style={{ height: spacing[6] }} />
        <Button label="Recarregar cartão" onPress={() => {}} />
        <View style={{ height: spacing[3] }} />
        <Button label="Bloquear cartão" variant="ghost" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { flex: 1, padding: spacing[6] },
  card: { backgroundColor: colors.bgInverse, borderRadius: radius.lg, padding: spacing[8], alignItems: 'center', ...shadow.lg },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: spacing[6] },
  brand: { fontFamily: fontFamily.displayBold, fontSize: fontSize.lg, color: colors.primary },
  qr: { width: 160, height: 160, backgroundColor: '#fff', borderRadius: radius.md, alignItems: 'center', justifyContent: 'center', marginBottom: spacing[6] },
  qrInner: { width: 120, height: 120, backgroundColor: colors.ink[900], borderRadius: 4 },
  saldoLabel: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: '#bdbdbd' },
  saldo: { fontFamily: fontFamily.displayBold, fontSize: fontSize['2xl'], color: '#fff', marginTop: 2 },
  cardNumber: { fontFamily: fontFamily.regular, fontSize: fontSize.base, color: '#9a9a9a', letterSpacing: 2, marginTop: spacing[4] },
});
