# Atendimento — Jaé

> "Tá precisando de ajuda?" No Jaé, suporte não é um balcão escondido: é um abraço a 1 toque
> de distância em qualquer tela. A meta é resolver na hora, com linguagem de gente, sem deixar
> ninguém na mão na catraca — do estudante nativo digital ao idoso menos digital.

## 1. Princípios

1. **Resolver no app primeiro.** A maioria das dúvidas (saldo, recarga, extrato) se resolve
   sozinha com bom autoatendimento.
2. **Humano quando importa.** Bloqueio de cartão, golpe, cobrança errada e gratuidade têm
   caminho rápido para gente de verdade.
3. **Tom acolhedor.** "Vamos resolver isso juntos" — nunca burocrático ou frio.
4. **Acessível para o Rio inteiro.** Telas simples, fonte legível, leitor de tela, opção de
   voz/telefone para quem precisa (Roberto).

## 2. Canais e SLAs

| Canal | Disponibilidade | Casos | SLA (1ª resposta) | SLA (resolução) |
|---|---|---|---|---|
| **Central de Ajuda (FAQ + busca)** | 24/7 | Dúvidas comuns | Imediato | Imediato |
| **Assistente Jaé (chatbot)** | 24/7 | Saldo, recarga, extrato, status de PIX | Imediato | < 2 min |
| **Chat com atendente** | 7h–22h | Cobrança, gratuidade, bloqueio | < 3 min | < 24h |
| **Telefone (0800)** | 7h–22h | Roberto/baixa familiaridade digital, emergência | < 60s | < 24h |
| **E-mail** | 24/7 (resposta útil) | Casos formais, comprovantes, VT | < 12h | < 48h |
| **Bloqueio de cartão (auto-serviço)** | 24/7 | Perda/roubo | Imediato | Imediato |

Prioridade alta (SLA reduzido): cartão perdido/roubado, suspeita de golpe, cobrança
indevida, gratuidade vencendo no mesmo dia.

## 3. Camada de autoatendimento

Acessível pelo **Perfil → "Tá precisando de ajuda?"** e por links contextuais em cada tela.

### 3.1 Estrutura
1. **Busca no topo** ("O que você precisa resolver?").
2. **Atalhos contextuais** conforme a tela de origem (ex: na aba Recarregar, mostra "Meu PIX
   não caiu").
3. **FAQ por categoria** (abaixo).
4. **Ações diretas** sem falar com ninguém: bloquear cartão, 2ª via, ver extrato, reenviar
   comprovante de PIX.
5. **Escada para humano** sempre visível: "Não resolveu? Fale com a gente."

### 3.2 Ações de autoatendimento (sem humano)
- Consultar saldo e extrato em tempo real.
- Recarregar (PIX/cartão/boleto) e ver status.
- Bloquear, cancelar, pedir 2ª via, gerar versão virtual do cartão.
- Renovar/enviar documentos de gratuidade (estudante, idoso, PCD).
- Baixar comprovante de transação.

## 4. FAQ (perguntas reais)

### Saldo e recarga
- **Meu saldo expira?** Não. Crédito no Jaé não tem validade — fica guardado pra quando você
  precisar.
- **Fiz um PIX e não caiu. E agora?** O PIX costuma cair em segundos. Se passou de 10 min,
  abra o Assistente Jaé → "Meu PIX não caiu" para verificarmos na hora.
- **Posso recarregar de quanto?** Use os valores rápidos (R$ 10, 20, 50, 100) ou digite outro
  em "Outro valor".
- **Quais formas de pagamento?** PIX (cai na hora), cartão de crédito e boleto.

### Pagamento e embarque
- **Como pago a passagem?** Toque em Pagar, mostre o QR Code e aproxime do validador. É 1
  toque.
- **O QR não funcionou na catraca.** Confira o saldo e a conexão. Sem internet? O app guarda
  seu QR pronto; se persistir, fale com a gente.
- **Funciona em qual transporte?** Em todos os modais municipais do Rio: BRT, VLT, ônibus
  (SPPO), vans (STPL) e cabritinhos (STPC).

### Cartões
- **Perdi meu cartão.** Bloqueie agora mesmo em Cartões → Bloquear. Seu saldo fica seguro.
  Depois é só pedir a 2ª via.
- **O que é o Jaézinho?** É o cartão infantil, ligado à sua conta, pra você gerenciar as
  viagens da criança.

### Gratuidades e VT
- **Como renovo minha gratuidade?** Em Perfil → Gratuidades, envie os documentos pelo app.
  Sem fila, sem papelada. Renove antes de vencer pra não ter susto na catraca.
- **Minha gratuidade vai vencer?** A gente te avisa com antecedência (15, 5 e 1 dia antes).
- **Como funciona o vale-transporte da empresa?** O saldo do VT entra na sua conta Jaé e você
  usa normalmente no QR.

### Clube Jaé
- **O que é o Clube?** Você ganha pontos a cada viagem e troca por crédito de tarifa,
  descontos e mais. Quem tem gratuidade também pontua.

## 5. Fluxo do chatbot (Assistente Jaé)

```
Usuário abre "Tá precisando de ajuda?"
        │
        ▼
Assistente: "Oi! Sobre o que é? (Saldo · Recarga · Pagamento · Cartão · Gratuidade · Outro)"
        │
        ├─ Resolve com resposta + ação direta (ex: status do PIX, bloquear cartão)
        │        └─ "Resolveu?" ─ Sim → encerra com "Boa viagem!"
        │                          └─ Não → escalonamento
        ▼
Escalonamento → Chat com atendente (7h–22h) ou 0800 ou abre ticket por e-mail
```
Regras do chatbot:
- Sempre oferece saída para humano em ≤ 2 interações sem solução.
- Reconhece urgência (golpe, cartão roubado, cobrança) e pula direto pra prioridade.
- Linguagem da marca: clara, calorosa, sem jargão.

## 6. Atendimento por persona

- **Marcos:** quer velocidade. Autoatendimento + chatbot resolvem 90%; escalonamento rápido
  quando o embarque está em risco.
- **Ana:** resolve tudo no chat/app, espera resposta ágil e tom leve; gratuidade é o tema
  recorrente.
- **Roberto:** caminho de **telefone (0800)** visível e fácil; tela de ajuda simplificada,
  fonte grande, atendente paciente. Nunca empurrado só para o bot.

## 7. Escalonamento e prioridade

| Caso | Prioridade | Caminho |
|---|---|---|
| Cartão perdido/roubado | Crítica | Auto-bloqueio imediato + alerta |
| Suspeita de golpe/fraude | Crítica | Atendente + bloqueio preventivo |
| Cobrança indevida | Alta | Atendente → estorno em até 48h |
| Gratuidade vencendo hoje | Alta | Fluxo de renovação assistida |
| Dúvida geral | Normal | Autoatendimento/chatbot |

## 8. Métricas de suporte

| Métrica | Meta |
|---|---|
| Taxa de autoatendimento (resolvido sem humano) | ≥ 75% |
| CSAT do atendimento | ≥ 4,5/5 |
| Tempo de 1ª resposta no chat | < 3 min |
| Resolução no 1º contato (FCR) | ≥ 70% |
| Tempo de bloqueio de cartão | Imediato (auto-serviço) |
| Reabertura de ticket | < 10% |
