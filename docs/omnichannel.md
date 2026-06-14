# Jaé — Estratégia Omnichannel

> "Vem ser Jaé." Um sistema, muitos canais, uma experiência só. O usuário começa onde quiser — app, web, WhatsApp, totem ou ponto físico — e a viagem continua sem recomeçar do zero.

O Jaé serve uma cidade inteira, do nativo digital (Ana) ao idoso assistido (Roberto). Uma estratégia só de app deixaria muita gente para trás. Omnichannel aqui significa: **o app é o coração, mas todo canal precisa resolver, e o estado do usuário (saldo, cartão, gratuidade, extrato) é o mesmo em todos eles.**

---

## 1. Princípios de Omnicanalidade

1. **Embarque acima de tudo, em qualquer canal.** Nada — em nenhum ponto de contato — pode atrasar quem está na catraca. O app é a via principal do embarque; os outros canais dão suporte.
2. **Estado único do usuário.** Saldo, cartões, gratuidade e extrato vivem numa única fonte de verdade. Recarregou no totem? O app já mostra. Bloqueou pela web? O cartão já está bloqueado.
3. **Acessível para o Rio inteiro.** Quem não tem celular bom, dados ou intimidade com app precisa de um caminho digno: ponto físico, totem, WhatsApp ou ajuda assistida.
4. **Continuidade sem recomeço.** Começou a recarga no WhatsApp e terminou no app? Não repete dados. O contexto viaja com a pessoa.
5. **Fala de gente em todo canal.** Mesmo tom conversacional no app, no chat, no totem e no atendimento. "Tá precisando de ajuda?" funciona em qualquer lugar.
6. **Transparência consistente.** O extrato em tempo real é o mesmo, esteja a pessoa no app, na web ou pedindo ao atendente.

---

## 2. Mapa de Canais

| Canal | Papel principal | Quem mais usa | Capacidades-chave |
|-------|------------------|---------------|--------------------|
| **App mobile** | Coração do produto — embarque, saldo, recarga, gratuidade | Todos (principal) | QR Code, recarga PIX, extrato, gestão de cartões, Clube Jaé |
| **Web (portal/conta)** | Autosserviço em tela grande, recarga e gestão | Marcos, RH | Recarga, extrato, 2ª via, gestão de conta, portal VT |
| **WhatsApp** | Suporte, nutrição e ações simples | Roberto, Ana, geral | Dúvidas, status de gratuidade, lembretes, link de recarga, "falar com gente" |
| **Pontos físicos** | Onboarding e recarga assistida; cartão físico/Jaézinho | Roberto, desbancarizados | Cadastro, recarga em dinheiro, retirada/2ª via de cartão, ajuda |
| **Totens / autoatendimento** | Recarga e consulta rápidas em estações | Marcos, fluxo de pico | Recarga, consulta de saldo, emissão de cartão |
| **Central de atendimento** | Casos complexos e acessibilidade | Roberto, exceções | Suporte humano, resolução de disputas, apoio a gratuidade |

---

## 3. Jornadas Omnichannel (exemplos reais)

### 3.1 Marcos — recarga na correria
Marcos vê na **home do app** que o saldo está baixo. No trajeto, **recarrega por PIX no próprio app**; o saldo cai em segundos e ele embarca. Se o celular está sem bateria, ele passa num **totem da estação**, recarrega e o **app reflete o novo saldo** assim que liga o aparelho. *Continuidade: o saldo é o mesmo, não importa por onde entrou o dinheiro.*

### 3.2 Ana — gratuidade entre canais
Ana recebe um **lembrete no WhatsApp**: "Faltam 14 dias pra renovar sua gratuidade." Ela clica e o link **abre direto na tela de gratuidade do app** (deep link), onde fotografa o comprovante. Acompanha o **status da análise** tanto no app quanto por **mensagens no WhatsApp**. *Continuidade: o canal de aviso e o canal de ação conversam.*

### 3.3 Roberto — assistido com dignidade
A **filha de Roberto recarrega por PIX** pela conta dele (ou pela web) e ele recebe uma **confirmação simples** no app. Quando trava, Roberto manda mensagem no **WhatsApp** ("Tá precisando de ajuda?") e recebe um passo a passo curto, com opção de **falar com uma pessoa**. Se preferir, vai a um **ponto físico** e o atendente resolve. *Continuidade: ajuda em qualquer canal, sem constrangimento.*

### 3.4 RH — VT corporativo
O RH gerencia o **vale-transporte por um portal web**, distribui crédito para os colaboradores e baixa relatórios. O colaborador **recebe o VT direto no app** e usa no embarque. Dúvidas administrativas vão para um **canal de suporte B2B dedicado**. *Continuidade: gestão na web, uso no app, dados sincronizados.*

---

## 4. Integração e Sincronização

### 4.1 Fonte única de verdade
Todos os canais leem e escrevem na mesma base de conta do usuário:

```
                ┌─────────────────────────┐
                │  Núcleo Jaé (conta única)│
                │  saldo · cartões ·        │
                │  gratuidade · extrato     │
                └────────────┬─────────────┘
        ┌──────────┬─────────┼─────────┬──────────┐
        ▼          ▼         ▼         ▼          ▼
      App        Web     WhatsApp    Totem    Ponto físico
```

- **Tempo real:** uma recarga em qualquer canal credita o saldo único; o extrato atualiza para todos.
- **Identidade unificada:** mesma conta/login em app e web; no WhatsApp, vínculo seguro por número verificado.
- **Eventos consistentes:** bloqueio, 2ª via, mudança de gratuidade propagam-se a todos os canais imediatamente.

### 4.2 Handoff entre canais
- **Deep links** do WhatsApp/e-mail/web para a tela exata do app (recarregar, pagar, gratuidade).
- **Continuação de tarefa:** começou na web e abriu o app — retoma no mesmo ponto.
- **Atendimento com contexto:** quando vira humano (central/ponto físico), o atendente vê o histórico — a pessoa não repete tudo.

### 4.3 Modo offline e baixa conectividade
- **QR Code de embarque funciona com conectividade ruim** (dor do Marcos) — o app é resiliente; a sincronização do extrato se completa quando a rede volta.
- **Canais físicos como rede de segurança** quando o digital falha.

---

## 5. Consistência de Experiência

| Dimensão | Regra de consistência |
|----------|------------------------|
| **Visual** | Mesma identidade (azul #0B5FFF, amarelo #FFD400, cantos arredondados, Poppins) em app, web, totem e materiais de ponto físico |
| **Tom de voz** | Conversacional e encorajador em todo canal; "Vem ser Jaé" e "Tá precisando de ajuda?" como assinaturas |
| **Nomenclatura** | Mesmos nomes (Jaé, Jaézinho, Clube Jaé, gratuidade) em todos os pontos de contato |
| **Acessibilidade** | Contraste alto, fonte grande, alvos generosos — no app e nas interfaces físicas/totens |
| **Dados mostrados** | Saldo, extrato e status de gratuidade idênticos onde quer que a pessoa olhe |

---

## 6. Atendimento e Suporte Omnichannel

- **Autosserviço primeiro:** FAQ no app e na web, fluxos guiados — resolve o caso simples sem fila.
- **WhatsApp como hub de relacionamento:** lembretes, status, dúvidas e ponte para humano.
- **Escalonamento claro:** bot/autosserviço → atendimento humano → ponto físico, sempre carregando o contexto.
- **Acessibilidade prioritária:** para Roberto, caminho curto até uma pessoa; sem labirinto de menus.
- **Base de conhecimento única:** o conteúdo da central de ajuda (do inbound) alimenta app, web e WhatsApp — uma resposta só, em todo lugar.

---

## 7. Governança e Métricas

### 7.1 Métricas omnichannel

| Métrica | O que mede | Meta direcional |
|---------|------------|-----------------|
| Sincronização de saldo (latência entre canais) | Estado único funcionando | < 10s (alinhado ao PIX) |
| Taxa de resolução no autosserviço | Eficiência de canais digitais | Crescente |
| Conclusão de tarefa iniciada em outro canal (handoff) | Continuidade | ≥ 90% |
| Esforço do cliente (CES) por canal | Facilidade percebida | Baixo e consistente |
| % de recargas por canal | Distribuição saudável | Monitorar mix |
| NPS por canal | Satisfação consistente | NPS ≥ 50 em todos |
| Sucesso assistido (60+ em ponto físico/WhatsApp) | Inclusão do Roberto | ≥ 90% |

### 7.2 Governança
- **Dono único da experiência omnichannel** para garantir consistência de tom, visual e dados.
- **Catálogo de capacidades por canal** (o que cada canal pode/não pode fazer) revisado a cada ciclo.
- **Eventos instrumentados de ponta a ponta** para enxergar a jornada cruzando canais, não silos.

---

## 8. Roadmap de Maturidade Omnichannel

| Nível | Estado | Marco |
|-------|--------|-------|
| 1 — Multicanal | Canais existem, mas isolados | Saldo e extrato iguais em app e web |
| 2 — Integrado | Estado único + sync em tempo real | Recarga em qualquer canal credita o saldo único |
| 3 — Contínuo | Handoffs e deep links com contexto | WhatsApp → app sem repetir dados; atendimento com histórico |
| 4 — Orquestrado | Jornada proativa cross-canal | Lembrete de gratuidade no canal certo, na hora certa, para a persona certa |

---

*Documento vivo. Coerente com a Visão e as Personas do Jaé. Tom: próximo, encorajador, sem jargão. "Vem ser Jaé."*
