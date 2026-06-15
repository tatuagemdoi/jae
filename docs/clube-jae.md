# Clube Jaé — Programa de Relacionamento e Fidelidade

> "Vem ser Jaé." O Clube é a camada de relacionamento que transforma cada embarque em
> reconhecimento. Ele não é um programa de pontos genérico colado por cima do app — é o
> jeito do Jaé dizer obrigado por quem move a cidade todo dia.

## 1. Conceito

O Clube Jaé recompensa o uso real do transporte público do Rio. Cada vez que o usuário
paga uma tarifa pelo app (QR, cartão virtual ou físico), ele acumula **Pontos Jaé**. Os
pontos sobem de **nível**, destravam **benefícios** e podem ser **resgatados** em
recompensas concretas — créditos de tarifa, descontos e vantagens de parceiros.

Princípios que guiam o Clube (herdados da visão):

- **Embarque acima de tudo.** O Clube nunca atrapalha o embarque. Pontuar é consequência
  automática de viajar, nunca um passo a mais na catraca.
- **Saldo é tranquilidade.** A recompensa mais valiosa é crédito de tarifa que não expira.
- **Justiça é função.** Quem tem gratuidade (estudante, idoso, PCD) também participa e ganha
  — o Clube reconhece presença, não gasto.
- **Fala de gente.** Missões e recompensas são descritas em linguagem próxima, sem jargão de
  "loyalty program".

### O que o Clube NÃO é
- Não é cashback financeiro regulado.
- Não cria saldo que substitui a tarifa social/gratuidade.
- Não exige consumo mínimo nem mensalidade.

## 2. Pontos Jaé — como ganhar

| Ação | Pontos | Observação |
|---|---|---|
| Embarque pago (qualquer modal) | **+10 pts** | Base do programa |
| Embarque com gratuidade validada | **+10 pts** | Ana e Roberto pontuam normalmente; reconhece presença |
| Recarga via PIX | **+5 pts** | Incentiva o método mais barato e instantâneo |
| Primeira viagem do dia | **+5 pts bônus** | Estimula o hábito diário (Marcos) |
| Integração entre modais na mesma jornada (ex: BRT→SPPO) | **+15 pts** | Premia uso da rede integrada |
| Completar uma missão | Variável | Ver `gamification.md` |
| Manter streak semanal (5+ dias) | **+50 pts** | Bônus de constância |
| Renovar gratuidade pelo app antes de expirar | **+100 pts** | Liga ao KPI de renovação ≥70% |
| Indicar amigo que faz 1ª recarga | **+200 pts** | Loop de aquisição |

Regras de integridade:
- Pontos creditados **em tempo real**, junto com a transação no extrato.
- Teto diário anti-fraude: **80 pts/dia** por embarques (8 viagens); missões e bônus à parte.
- Pontos de gratuidade têm o mesmo valor — coerência com "justiça é função".

## 3. Pontos Jaé — como usar

Resgate dentro da aba **Clube → Recompensas**. Catálogo inicial:

| Recompensa | Custo | Categoria |
|---|---|---|
| R$ 2,00 em crédito de tarifa | 400 pts | Crédito (não expira) |
| R$ 5,00 em crédito de tarifa | 900 pts | Crédito |
| R$ 10,00 em crédito de tarifa | 1.700 pts | Crédito |
| Tarifa grátis (1 embarque) | 500 pts | Crédito |
| 2ª via de cartão sem taxa | 600 pts | Serviço |
| Cartão virtual personalizado (skin) | 300 pts | Cosmético |
| Desconto parceiro (livraria, cinema, café) | 800–1.500 pts | Parceiro |
| Doar pontos para tarifa social comunitária | 200 pts | Social |

Regras:
- Crédito resgatado cai no saldo e **não expira** (coerente com o app).
- Resgate confirma com 1 toque + feedback "Recompensa no seu saldo!".
- Recompensa social ("doar pontos") reforça o tom cívico da marca.

## 4. Níveis

Quatro níveis baseados em pontos acumulados nos **últimos 90 dias** (recompensa atividade
recente, não saldo histórico).

| Nível | Faixa (90 dias) | Cor/identidade | Benefícios |
|---|---|---|---|
| **Embarque** | 0–499 pts | Cinza neutro #6B7280 | Acesso ao catálogo base; missões iniciantes |
| **Trajeto** | 500–1.499 pts | Azul Jaé #0B5FFF | +5% pontos por embarque; 1 missão extra/semana |
| **Itinerário** | 1.500–3.999 pts | Amarelo #FFD400 | +10% pontos; suporte prioritário; skins exclusivas |
| **Cidade** | 4.000+ pts | Gradiente azul→amarelo | +15% pontos; recompensas exclusivas; convites a betas |

Mecânica:
- Progresso mostrado como barra na aba Clube ("Faltam 120 pts para Trajeto").
- Subir de nível dispara animação + push opcional ("Você chegou em Trajeto!").
- Sem rebaixamento brusco: queda de nível tem **carência de 30 dias** e aviso amigável.

## 5. Benefícios por persona

- **Marcos (trabalhador diário):** acumula rápido com 2 embarques/dia + streak; usa crédito
  para amortecer dias de aperto. Nível Cidade em ~1 mês de uso constante.
- **Ana (estudante):** pontua mesmo com gratuidade; missão de renovação dá +100 pts e evita
  o susto na catraca; resgata skins e descontos de parceiros culturais.
- **Roberto (idoso):** Clube simples e opcional — a tela mostra só o essencial ("Seus pontos:
  340. Você pode trocar por uma viagem grátis."). Nunca obrigatório, nunca confuso.

## 6. Integração com o transporte

- Pontuação **dispara no momento da validação** — não depende de ação extra.
- Integração multimodal é premiada para incentivar uso da rede inteira (BRT, VLT, SPPO, STPL, STPC).
- Recompensas voltam para o transporte (crédito de tarifa), criando ciclo virtuoso:
  **viajar → pontuar → resgatar tarifa → viajar mais**.
- Dados de uso (sempre anonimizados/agregados) alimentam missões contextuais por modal.

## 7. Métricas do Clube

| Métrica | Meta inicial |
|---|---|
| % de usuários ativos no Clube | ≥ 40% dos MAU |
| Embarques por usuário (membro vs não-membro) | +15% nos membros |
| Taxa de resgate (pontos usados / ganhos) | 30–50% (saudável) |
| Renovação de gratuidade via missão | ≥ 70% |
| Retenção D30 de membros | +10 p.p. vs base |

## 8. Roadmap

1. **MVP:** pontos por embarque/recarga, 4 níveis, catálogo de crédito, missões básicas.
2. **Fase 2:** parceiros locais, doação social, skins.
3. **Fase 3:** Clube corporativo (VT premiado), eventos sazonais (Carnaval, volta às aulas).
