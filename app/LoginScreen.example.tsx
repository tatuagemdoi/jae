/** LoginScreen.example — entrada do app Jaé, só com o design system. */
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography, fontFamily, fontSize, radius } from '../design-tokens/theme';
import { Input } from './components/Input';
import { Button } from './components/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.logoWrap}>
          <View style={styles.logo}><Text style={styles.logoText}>Jaé</Text></View>
        </View>

        <Text style={[typography.h1, styles.title]}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>Entre para gerenciar suas passagens.</Text>

        <Input label="E-mail" placeholder="voce@email.com" autoCapitalize="none"
          keyboardType="email-address" value={email} onChangeText={setEmail} />
        <Input label="Senha" placeholder="••••••••" secureTextEntry
          value={senha} onChangeText={setSenha} />

        <Text style={styles.forgot}>Esqueci minha senha</Text>

        <Button label="Entrar" onPress={() => {}} />
        <View style={{ height: spacing[3] }} />
        <Button label="Criar conta" variant="ghost" onPress={() => {}} />
      </View>

      <Text style={styles.footer}>Vem ser Jaé</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { flex: 1, justifyContent: 'center', padding: spacing[6] },
  logoWrap: { alignItems: 'center', marginBottom: spacing[8] },
  logo: { width: 88, height: 88, borderRadius: radius.lg, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontFamily: fontFamily.displayBold, fontSize: fontSize.xl, color: '#fff' },
  title: { textAlign: 'center' },
  subtitle: { fontFamily: fontFamily.regular, fontSize: fontSize.base, color: colors.textMuted, textAlign: 'center', marginBottom: spacing[8] },
  forgot: { fontFamily: fontFamily.medium, fontSize: fontSize.sm, color: colors.primaryHover, textAlign: 'right', marginBottom: spacing[6] },
  footer: { fontFamily: fontFamily.displayBold, fontSize: fontSize.base, color: colors.gray[300], textAlign: 'center', paddingBottom: spacing[6] },
});
