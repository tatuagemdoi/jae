# Estratégia de CRM — Jaé

> CRM no Jaé é o sistema nervoso que mantém o usuário com saldo, com gratuidade em dia e com
> confiança no app. Cada mensagem precisa ganhar o direito de existir: ou ajuda a pessoa a
> embarcar, ou não é enviada. Foco em retenção e no North Star — **embarques pagos por
> semana**.

## 1. Segmentação

### 1.1 Por persona/comportamento

| Segmento | Sinais | Prioridade de CRM |
|---|---|---|
| **Diário (Marcos)** | 8+ embarques/semana, VT corporativo | Saldo baixo, constância, Clube |
| **Estudante (Ana)** | Gratuidade estudantil, uso SPPO+VLT | Renovação de gratuidade, missões, indicação |
| **Idoso (Roberto)** | Gratuidade idoso, baixa frequência de app | Lembretes simples, reforço de confiança |
| **Esporádico** | <2 embarques/semana | Reativação, valor do app |
| **Novo** | <30 dias de cadastro | Onboarding, 1ª recarga, 1º embarque |
| **Corporativo (VT)** | Recarga via empregador | Comunicação de saldo VT, regras |

### 1.2 Por ciclo de vida (RFM adaptado a embarques)

- **Frequência:** embarques/semana.
- **Recência:** dias desde o último embarque.
- **Saldo:** valor disponível vs custo médio semanal.

## 2. Ciclo de vida

| Estágio | Definição | Meta | Ação principal |
|---|---|---|---|
| **Aquisição** | Baixou, não cadastrou | Cadastro | "Vem ser Jaé" |
| **Ativação** | Cadastrou, sem 1ª recarga/embarque | 1º embarque | Tutorial + incentivo de recarga |
| **Engajamento** | Uso recorrente | Hábito semanal | Clube, missões, dicas PIX |
| **Retenção** | Risco de saldo zerado / gratuidade vencendo | Continuidade | Lembretes proativos |
| **Reativação** | Inativo 14–30 dias | Voltar a embarcar | "Sentimos sua falta no Rio" |
| **Win-back** | Inativo 30+ dias | Resgate | Incentivo de crédito/recompensa |

## 3. Réguas de comunicação (automações)

### 3.1 Régua de boas-vindas (D0–D7)
| Quando | Canal | Mensagem |
|---|---|---|
| D0 (cadastro) | In-app | "Vem ser Jaé! Bora fazer sua 1ª recarga?" |
| D0 (sem recarga em 1h) | Push | "Falta pouco: recarregue no PIX e já viaja hoje." |
| D1 (sem embarque) | Push | "Seu saldo está pronto. Use o QR no validador, é 1 toque." |
| D3 | In-app | Explainer: "Seu saldo não expira nunca." |
| D7 | Push | "Você já é Jaé! Conheça o Clube e ganhe pontos." |

### 3.2 Régua de saldo (transacional crítica)
| Gatilho | Canal | Mensagem |
|---|---|---|
| Saldo < 1 tarifa | Push | "Saldo curto pra próxima viagem. Recarregar agora?" |
| Saldo zerado + histórico de uso amanhã | Push (noite anterior) | "Amanhã tem viagem? Deixe o saldo pronto." |
| Recarga PIX confirmada | Push | "Saldo na conta: R$ X. Boa viagem!" |

### 3.3 Régua de gratuidade (a mais estratégica)
Resolve a dor central de Ana e Roberto e protege o KPI de renovação ≥70%.
| Gatilho | Canal | Mensagem |
|---|---|---|
| Gratuidade vence em 15 dias | In-app | "Sua gratuidade vence em 15 dias. Renove sem fila." |
| Vence em 5 dias | Push | "Faltam 5 dias. Renove agora pra não ter susto na catraca." |
| Vence em 1 dia | Push (alta prioridade) | "Sua gratuidade vence amanhã. Renove em 2 min no app." |
| Renovada | Push | "Tudo certo! Gratuidade renovada. +100 pts no Clube." |

### 3.4 Régua de reativação
| Gatilho | Canal | Mensagem |
|---|---|---|
| 14 dias sem embarque | Push | "O Rio não para. Seu saldo te espera pra próxima viagem." |
| 30 dias | Push + In-app | "Sentimos sua falta! Volte e ganhe pontos no Clube." |
| 60 dias | E-mail | Resumo de novidades + incentivo |

## 4. Régua de pressão (frequency capping)

Para nunca virar spam — respeitando especialmente Roberto:

- **Máximo 1 push promocional/dia** e **3/semana**.
- Pushes **transacionais** (recarga confirmada, gratuidade vencendo, saldo crítico) **não
  contam** no cap e têm prioridade.
- **Quiet hours:** sem push entre 22h e 7h, exceto crítico do dia seguinte.
- **Opt-out granular:** o usuário escolhe receber só transacional, ou tudo.
- **Modo Roberto:** perfis idosos recebem menos mensagens, mais espaçadas, sempre
  acionáveis e claras.

## 5. Canais

| Canal | Uso |
|---|---|
| **Push** | Tempo real: saldo, gratuidade, embarque, missões |
| **In-app (cards/banners)** | Onboarding, Clube, explainers, campanhas |
| **E-mail** | Resumos, win-back, comunicações formais (VT, termos) |
| **SMS** | Fallback crítico (segurança, gratuidade vencendo) para quem não tem push |

## 6. Personalização

- Conteúdo dinâmico por persona (ver coluna "prioridade de CRM").
- Horário inteligente: enviar saldo baixo na véspera do padrão de uso de Marcos.
- Modal preferido: dica de integração baseada nos modais que a pessoa mais usa.
- Sempre com base em dados **agregados/consentidos** — transparência é princípio da marca.

## 7. Métricas de retenção

| Métrica | Meta |
|---|---|
| Retenção D7 / D30 | D7 ≥ 55% · D30 ≥ 40% |
| Renovação de gratuidade via CRM | ≥ 70% |
| CTR de push transacional | ≥ 25% |
| CTR de push promocional | ≥ 8% |
| Opt-out de push | < 5% |
| Reativação 14d (taxa de retorno) | ≥ 20% |
| NPS | ≥ 50 |
