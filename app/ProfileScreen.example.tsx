/** ProfileScreen.example — perfil/conta da Jaé usando ListItem. */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, spacing, fontFamily, fontSize, radius } from '../design-tokens/theme';
import { Card } from './components/Card';
import { ListItem } from './components/ListItem';
import { Pill } from './components/Pill';

const Dot = ({ color = colors.primary }: { color?: string }) => (
  <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: color }} />
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* header do perfil */}
        <View style={styles.header}>
          <View style={styles.avatar}><Text style={styles.avatarText}>LS</Text></View>
          <Text style={styles.name}>Lucas Silva</Text>
          <Text style={styles.email}>lucas@email.com</Text>
          <View style={{ marginTop: spacing[3] }}>
            <Pill label="Estudante · Gratuidade" tone="grat" />
          </View>
        </View>

        <Card style={{ padding: 0, overflow: 'hidden', marginBottom: spacing[4] }}>
          <ListItem label="Dados pessoais" icon={<Dot />} onPress={() => {}} />
          <ListItem label="Meus cartões" value="2" icon={<Dot />} onPress={() => {}} />
          <ListItem label="Histórico de viagens" icon={<Dot />} onPress={() => {}} />
          <ListItem label="Formas de pagamento" icon={<Dot color={colors.accent} />} onPress={() => {}} />
        </Card>

        <Card style={{ padding: 0, overflow: 'hidden' }}>
          <ListItem label="Central de ajuda" icon={<Dot color={colors.gray[500]} />} onPress={() => {}} />
          <ListItem label="Configurações" icon={<Dot color={colors.gray[500]} />} onPress={() => {}} />
          <ListItem label="Sair" danger onPress={() => {}} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing[6] },
  header: { alignItems: 'center', marginBottom: spacing[8] },
  avatar: { width: 80, height: 80, borderRadius: radius.pill, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: spacing[3] },
  avatarText: { fontFamily: fontFamily.displayBold, fontSize: fontSize.xl, color: '#fff' },
  name: { fontFamily: fontFamily.bold, fontSize: fontSize.xl, color: colors.text },
  email: { fontFamily: fontFamily.regular, fontSize: fontSize.sm, color: colors.textMuted, marginTop: 2 },
});
