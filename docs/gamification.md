# Estratégia de Gamificação — Jaé

> A gamificação do Jaé existe para reforçar o hábito de pagar a tarifa pelo app e para
> empurrar os comportamentos certos: usar PIX, renovar gratuidade antes de vencer, manter
> saldo. Tudo a serviço do North Star — **embarques pagos por semana**. Nunca um joguinho
> descolado do transporte.

## 1. Objetivos

| Objetivo de produto | Mecânica de gamificação | KPI ligado |
|---|---|---|
| Criar hábito de pagar pelo app | Streaks de embarque diário | Embarques pagos/semana |
| Migrar recargas para PIX | Missão "Recarregou no PIX" | PIX creditado <10s; custo |
| Evitar gratuidade vencida na catraca | Missão de renovação + lembrete | Renovação no app ≥70% |
| Reduzir saldo zerado | Conquista "Saldo sempre pronto" | Embarque sem falha >99% |
| Aumentar uso multimodal | Conquista "Conhecendo o Rio" | Diversidade de modais |

## 2. Pilares de mecânica

### 2.1 Missões
Desafios de curto prazo, renovados por ciclo (diário/semanal), exibidos na aba **Clube**.
Cada missão tem: título conversacional, progresso visível, recompensa em Pontos Jaé.

| Missão | Tipo | Meta | Recompensa | Persona-alvo |
|---|---|---|---|---|
| "Bom dia, Rio" | Diária | 1ª viagem antes das 9h | +15 pts | Marcos |
| "Ida e volta" | Diária | 2 embarques no dia | +20 pts | Marcos |
| "Pé no PIX" | Semanal | Recarregar via PIX 1x | +30 pts | Todos |
| "Sem susto na catraca" | Pontual | Renovar gratuidade no app | +100 pts | Ana, Roberto |
| "Explorador de modais" | Semanal | Usar 2 modais diferentes | +40 pts | Ana |
| "Semana cheia" | Semanal | Viajar 5 dias | +50 pts | Marcos |
| "Convida a galera" | Contínua | Indicar 1 amigo ativo | +200 pts | Ana |

Regras:
- Máximo de **3 missões ativas** por vez para não sobrecarregar (especialmente Roberto).
- Missões adaptam-se ao perfil: gratuidade vê missões de renovação; VT corporativo vê
  missões de constância.
- Linguagem sempre encorajadora: "Quase lá! Falta 1 viagem para fechar a semana."

### 2.2 Streaks (constância)
- **Streak de embarque:** dias consecutivos com ao menos 1 viagem paga.
- Marcos de recompensa: 3 dias (+15), 5 dias (+50), 7 dias (+80), 30 dias (badge "Mês Cheio").
- **Proteção de streak:** 1 "folga" por semana sem quebrar (fim de semana, feriado) — evita
  punir quem não trabalha todo dia.
- Visual: chama amigável na home ("3 dias seguidos! 🔥") — discreto, nunca ansioso.

### 2.3 Conquistas (badges permanentes)
Reconhecimento de longo prazo, colecionáveis no perfil do Clube.

| Conquista | Critério |
|---|---|
| Primeira Viagem | 1º embarque pelo app |
| Vem ser Jaé | Cadastro + 1ª recarga |
| Conhecendo o Rio | Usou os 5 modais (BRT, VLT, SPPO, STPL, STPC) |
| Saldo Sempre Pronto | 30 dias sem saldo zerar |
| Time do PIX | 10 recargas via PIX |
| Em Dia | Renovou gratuidade 2x sem deixar vencer |
| Embaixador | 3 amigos indicados ativos |

### 2.4 Recompensas
Toda mecânica desemboca em **Pontos Jaé**, resgatáveis no catálogo do Clube
(ver `clube-jae.md`). Recompensa mais valiosa = crédito de tarifa que não expira.

## 3. Loops de engajamento

### Loop principal (diário)
```
Embarcar e pagar → ganhar pontos + manter streak → ver progresso na home →
sentir reconhecimento → embarcar de novo amanhã
```

### Loop de hábito saudável (semanal)
```
Missão semanal aparece → usuário planeja (PIX, 2 modais, 5 dias) →
completa → recompensa → nova missão renova
```

### Loop de retenção crítica (gratuidade)
```
Sistema detecta gratuidade perto de vencer → missão "Sem susto na catraca" +
lembrete → renova no app → +100 pts + badge → evita falha na catraca
```
Este loop é o mais estratégico: resolve a dor central de Ana e Roberto e protege o KPI de
renovação ≥70%.

## 4. Design e acessibilidade

- **Opt-in suave:** o usuário vê o Clube na home, mas nunca é obrigado a "jogar".
- **Modo simples (Roberto):** missões reduzidas a 1 por vez, texto grande, sem streak
  ansioso. Foco em "viagem grátis por pontos".
- **Tom:** encorajador, nunca culpabilizador. Errou o streak? "Tudo bem, recomeçamos
  amanhã."
- **Sem pay-to-win:** nada de comprar pontos com dinheiro. Pontos vêm de uso real.
- Cores e feedback seguem a marca: verde #16A34A para conquista, amarelo #FFD400 para
  destaque de recompensa.

## 5. Anti-padrões (o que evitar)

- Ranking público competitivo entre usuários (gera ansiedade, irrelevante para transporte).
- Streaks que punem ausência legítima (férias, doença).
- Notificações excessivas — respeitar régua de CRM (ver `crm-strategy.md`).
- Missões que incentivem viagens desnecessárias (anti-ético e anti-sustentável).

## 6. Métricas

| Métrica | Meta |
|---|---|
| Missões completadas / usuário-mês | ≥ 4 |
| % de membros com streak ativo | ≥ 35% |
| Conversão missão de renovação → renovou | ≥ 70% |
| Lift em embarques/semana (membros vs controle) | +15% |
| Opt-out do Clube | < 10% |
