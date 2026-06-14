# Jaé — Especificação de Telas

Especificação tela a tela do protótipo mobile do Jaé. Para cada tela: **objetivo**, **conteúdo e layout**, **ações**, **componentes** (de `components.md`) e **persona em foco**. Ordem segue o protótipo.

---

## 1. Onboarding — `onboarding`

**Objetivo:** receber com a marca e levar para dentro. Não pertence ao bottom nav.

**Conteúdo e layout:**
- Splash com fundo `--jae-blue`, wordmark **"Jaé"** centralizado, bordão **"Vem ser Jaé"** (`--text-h1`, branco).
- Sublinha encorajadora: "O jeito mais simples de pagar o transporte do Rio."
- Bloco inferior: botão primário **"Entrar"** (pill branca/azul) e link "Criar conta".

**Ações:** Entrar → `inicio`. Criar conta → fluxo de cadastro (fora do escopo do protótipo).

**Componentes:** logo, botão pill, link de texto.

**Persona:** todos — primeira impressão da marca.

---

## 2. Início — `inicio`

**Objetivo:** num olhar, mostrar saldo (tranquilidade) e dar 1 toque para as ações essenciais.

**Conteúdo e layout (de cima para baixo):**
1. **App bar de saudação:** "Oi, Marcos 👋" + avatar; ícone de notificações.
2. **Card de Saldo** (componente §3): "R$ 42,50", selo amarelo **"Não expira"**, linha de VT do mês quando houver.
3. **Ações rápidas** (3 botões grandes em linha): **Recarregar · Pagar · Cartões** (ícone + label).
4. **Último uso / última viagem:** card resumo — "BRT — Hoje, 06:12 · - R$ 4,30" com ícone do modal.
5. **Banner do Clube Jaé** (componente §12): pontos + "Ver Clube".

**Ações:** Recarregar → `recarregar`; Pagar → `pagar`; Cartões → `cartoes`; banner → `clube`; "Ver tudo" no último uso → `extrato`.

**Componentes:** app bar, card de saldo, botão pill (ações rápidas), item de transação resumido, banner do Clube, bottom nav.

**Persona:** Marcos (saldo + VT num olhar); Roberto (ação "Pagar" grande e óbvia).

---

## 3. Pagar — `pagar`

**Objetivo:** embarcar. Tela sagrada — rápida, legível ao sol, 1 toque.

**Conteúdo e layout:**
- App bar imersiva (fundo escuro/azul, só botão fechar).
- Instrução grande: **"Aproxime do validador"**.
- **QR Code grande** (≥ 240px), alto contraste, brilho de tela elevado automaticamente.
- **Valor da tarifa:** "Tarifa: R$ 4,30" (ou badge "Gratuidade" se aplicável).
- Chips de modal: **BRT · VLT · Ônibus** (cor + sigla).
- Hint: "Funciona sem internet".

**Estados:** gerando (< 2s) · pronto · sucesso (overlay verde + som "Pode passar!") · erro ("Não rolou. Tenta de novo?") · offline (banner) · gratuidade ativa (badge amarela).

**Ações:** fechar → volta à aba anterior; trocar modal (chips); recarregar QR em erro.

**Componentes:** app bar imersiva, card do QR, chips de modal, badge de gratuidade, toast.

**Persona:** Marcos (velocidade/sol/offline); Roberto (ícones grandes + confirmação som/visual).

---

## 4. Recarregar — `recarregar`

**Objetivo:** colocar saldo na hora, sem susto. PIX é o caminho principal.

**Conteúdo e layout:**
1. App bar "Recarregar" com voltar.
2. Saldo atual no topo ("Você tem R$ 4,30").
3. **Chips de valor:** R$ 10 · R$ 20 · R$ 50 · R$ 100 · **Outro**.
4. **Método de pagamento:** PIX (pré-selecionado, "cai na hora") · Cartão de crédito · Boleto.
5. Resumo: "Vai recarregar R$ 50,00 via PIX".
6. Botão primário **"Recarregar agora"**.

**Ações:** selecionar valor/método → confirmar → sheet/tela de **confirmação** → **volta para `inicio`** com toast "Recarga feita! Saldo na hora ✓".

**Componentes:** app bar, chips de valor, seletor de método, campo "Outro", botão pill, modal de confirmação, toast.

**Persona:** Marcos (PIX < 10s, sem fila); Ana (resolve no celular).

---

## 5. Extrato — `extrato`

**Objetivo:** confiança radical — cada centavo rastreável em tempo real.

**Conteúdo e layout:**
- App bar "Extrato" + ícone de filtro.
- Linha de **chips de filtro** (Período · Modal · Tipo).
- **Lista agrupada por data** (cabeçalhos "Hoje", "Ontem", "12 jun"). Cada item: ícone+sigla do modal, título, horário, valor (débito grafite / crédito verde), saldo após.
- Gratuidades destacadas com **badge amarela** e valor "R$ 0,00".

**Ações:** abrir filtro (sheet); tocar item → detalhe da transação; rolar carrega mais.

**Componentes:** app bar, filtro, lista de transação, badge de gratuidade, modal de detalhe, estado vazio.

**Persona:** Ana (vê que a viagem entrou como gratuidade); Marcos (confere débito do VT).

---

## 6. Cartões — `cartoes`

**Objetivo:** gerir cartões com autonomia e segurança.

**Conteúdo e layout:**
- App bar "Meus cartões".
- **Carrossel/lista de cards:** **Jaé virtual** (azul) e **Jaézinho** (amarelo, infantil); status Ativo/Bloqueado.
- Ações por cartão: **Bloquear · 2ª via · Cancelar**.
- Botão **"Adicionar cartão"** (gera virtual ou vincula físico).

**Ações:** bloquear/desbloquear (confirmação) · pedir 2ª via · cancelar (modal destrutivo) · adicionar.

**Componentes:** app bar, card de cartão, botões (incl. destrutivo), modal de confirmação, badge de status.

**Persona:** Marcos (Jaé virtual no embarque); famílias (Jaézinho).

---

## 7. Clube — `clube`

**Objetivo:** engajar com gamificação leve, sem atrapalhar o embarque.

**Conteúdo e layout:**
1. App bar "Clube Jaé".
2. **Header de pontos + nível:** total de pontos, nível atual, barra de progresso para o próximo.
3. **Missões:** cards com progresso ("Faça 5 viagens essa semana — 3/5").
4. **Recompensas resgatáveis:** lista com botão "Resgatar" (pill amarela).

**Ações:** tocar missão → detalhe (sheet); resgatar recompensa → confirmação.

**Componentes:** app bar, card de missão/recompensa, barra de progresso, banner amarelo, botão amarelo.

**Persona:** Ana (nativa digital, gosta de gamificação).

---

## 8. Perfil — `perfil`

**Objetivo:** conta, direitos e ajuda — com dignidade e clareza.

**Conteúdo e layout:**
1. App bar "Perfil" + dados do usuário (nome, foto, e-mail).
2. **Gratuidades:** badge de status (estudante/idoso/PCD) — ativa, vence em breve, vencida, em análise — com CTA renovar. VT corporativo quando houver.
3. **"Tá precisando de ajuda?"** — card de destaque com passo a passo e falar com alguém.
4. **Configurações:** notificações, segurança, modo simples/alto contraste, esconder saldo.
5. **Sair** → `onboarding`.

**Ações:** renovar gratuidade (deep-link para fluxo) · abrir ajuda · configurar · sair.

**Componentes:** app bar, badge de gratuidade/VT, item de lista de ajuda/config, card de ajuda em destaque, botão sair.

**Persona:** Ana (central de gratuidade + avisos); Roberto (ajuda sem constrangimento, modo simples); Marcos (VT do RH).

---

## Resumo de cobertura por persona

| Tela | Marcos | Ana | Roberto |
|---|:--:|:--:|:--:|
| Início | ●●● | ●● | ●●● |
| Pagar | ●●● | ●● | ●●● |
| Recarregar | ●●● | ●● | ● |
| Extrato | ●● | ●●● | ● |
| Cartões | ●● | ● | ● |
| Clube | ● | ●●● | ○ |
| Perfil | ●● | ●●● | ●●● |

*Cada tela existe para servir, no mínimo, uma persona sem prejudicar as outras.*
