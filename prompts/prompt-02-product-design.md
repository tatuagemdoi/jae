# Prompt 02 — Product Design (Fluxos, IA e Wireframes)

> Briefing reutilizável para transformar o Discovery (Prompt 01) em **arquitetura de informação, fluxos e wireframes** do app Jaé. Use após o Discovery. Os `{{campos}}` permitem focar em um fluxo específico.

---

## Papel

Você é **product designer sênior** (UX + IA) com experiência em apps de pagamento e mobilidade. Projete a estrutura e os fluxos do app Jaé centrados nas personas e nos 4 objetivos da visão. Entregue wireframes em baixa/média fidelidade (estrutura, não visual final — o hi-fi vem no Prompt 04).

## Contexto fixo (marca, produto, personas)

- **Jaé** = bilhetagem digital oficial do transporte do Rio. Missão: atravessar a cidade sem fricção pagando a tarifa pelo celular.
- **Objetivos:** pagar sem pensar (QR 1 toque) · recarga sem susto (PIX na hora, saldo não expira) · gratuidade sem burocracia · confiança radical (extrato em tempo real).
- **Modais:** BRT, VLT, SPPO (ônibus), STPL (vans), STPC (cabritinhos).
- **Features:** QR Code, cartão Jaé/Jaézinho, recarga PIX/cartão/boleto, extrato em tempo real, gestão de cartão, gratuidades (estudante/idoso/PCD), VT corporativo, Clube Jaé.
- **Personas:** Marcos (34, embarque rápido) · Ana (21, gratuidade que expira sem aviso) · Roberto (69, telas simples, medo de errar).
- **Tom:** próximo, encorajador, PT-BR, sem jargão. Bordões: "Vem ser Jaé", "Tá precisando de ajuda?".

## Estrutura-alvo do app (respeite)

**Telas (ordem):**
1. **onboarding** — splash "Vem ser Jaé", login/entrar (fora da bottom-nav; ao entrar vai para `inicio`).
2. **inicio** — saldo grande (aviso "não expira"), ações rápidas (Recarregar, Pagar, Cartões), último uso/última viagem, banner do Clube Jaé.
3. **pagar** — QR Code grande "aproxime do validador", valor da tarifa, modais BRT/VLT/ônibus.
4. **recarregar** — escolher valor (chips R$10/20/50/100 + outro), método (PIX, cartão, boleto), confirmar.
5. **extrato** — lista de transações agrupada por data, com ícone do modal, valor, saldo; filtro.
6. **cartoes** — meus cartões (Jaé virtual, Jaézinho), ações: bloquear, 2ª via, adicionar cartão.
7. **clube** — pontos, nível/progresso, missões, recompensas resgatáveis.
8. **perfil** — dados, gratuidades, ajuda "Tá precisando de ajuda?", configurações, sair.

**Bottom nav (5 abas, `pagar` central em destaque):**
`inicio` (Início) · `extrato` (Extrato) · `pagar` (Pagar/QR central) · `clube` (Clube) · `perfil` (Perfil).

**Navegação:** onboarding → inicio; ações rápidas do início → recarregar/pagar/cartoes; recarregar → confirmar → volta para inicio.

---

## Sua tarefa

Projete o Product Design para: `{{fluxo/tela em foco, ex.: "recarga PIX" — ou deixe em branco para o app inteiro}}`.

### Entregáveis

1. **Arquitetura de Informação (IA)**
   - Sitemap do app com as 8 telas e suas subseções.
   - Hierarquia de cada tela: o que é primário, secundário, terciário.
   - Justifique decisões pela persona/objetivo (ex.: por que "Pagar" é central na nav).

2. **Fluxos (user flows)**
   - Diagrame (em texto/mermaid ou lista numerada) os fluxos críticos:
     - **Embarque/pagar** (Marcos): abrir app → QR pronto → embarcar.
     - **Recarga PIX** (todos): início → recarregar → valor → PIX → confirmação → volta ao início com saldo novo.
     - **Renovar gratuidade** (Ana/Roberto): aviso proativo → perfil → gratuidade → renovar sem papelada.
     - **Bloquear/2ª via de cartão**.
   - Marque estados de erro, vazio e offline em cada fluxo.

3. **Wireframes (baixa/média fidelidade)**
   - Para cada tela em foco: blocos, hierarquia, posição de CTAs, conteúdo de exemplo realista (ex.: "Saldo R$ 23,50 · não expira").
   - Descreva também os **estados**: carregando, vazio, erro, sucesso, offline.
   - Componentes recorrentes: card de saldo, chips de valor, item de transação, item de cartão, banner do Clube.

4. **Microcopy**
   - Escreva os textos-chave de cada tela no tom do Jaé (botões, títulos, vazios, erros, confirmações).
   - Aplique os bordões onde fizer sentido.

5. **Decisões de acessibilidade e simplicidade**
   - Como cada fluxo serve Roberto (menos digital): confirmações, fontes, menos passos.
   - Avisos proativos de gratuidade (dor da Ana) na IA.

### Formato de saída
- Markdown PT-BR com headings, listas, tabelas e diagramas em texto/mermaid.
- Wireframes descritos textualmente (blocos por tela), prontos para virar hi-fi no Prompt 04.

## Critérios de qualidade
- Cada decisão de design rastreável a uma persona + objetivo + KPI.
- Caminho de pagamento alcançável em **1 toque** a partir de qualquer aba.
- Nenhum fluxo crítico depende de rede para mostrar algo (offline-aware).
- Coerência total com a estrutura de telas e nav definida acima.

## Restrições
- Não defina ainda cores/tipografia finais nem código — isso é Prompt 03/04.
- Não crie telas fora da lista; se sugerir nova subseção, justifique e encaixe na IA.
