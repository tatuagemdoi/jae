# Jaé — Catálogo de Componentes

Biblioteca de componentes do app Jaé. Cada componente consome os tokens de `design-system.md` — cores, tipografia, raios, sombras e espaçamentos referenciados aqui são sempre os tokens, nunca valores avulsos.

Para cada componente: **anatomia**, **estados** e **diretrizes**. Onde relevante, anotamos a quem o componente serve (Marcos / Ana / Roberto).

---

## 1. App Bar (cabeçalho de tela)

**Anatomia:** altura 56px + safe area; fundo `--jae-surface` ou `--jae-blue` (telas de marca como início); título `--text-h2`; slot esquerdo (voltar / saudação) e slot direito (ícone de ação, ex. notificações).

**Variantes:**
- **Padrão:** fundo branco, título grafite, divisor inferior `--jae-border`.
- **Saudação (início):** sem título-página; mostra "Oi, Marcos 👋" + avatar.
- **Imersiva (pagar):** fundo escuro/azul para contraste do QR; só botão fechar.

**Estados:** repouso · scroll (ganha `--shadow-sm` ao descer) · sem-voltar (telas de aba raiz não têm botão voltar — só bottom nav).

---

## 2. Bottom Navigation (5 abas)

**Anatomia:** barra fixa inferior, `--jae-surface`, `--shadow-nav`, altura 64px + safe area. Cinco itens: **Início · Extrato · Pagar (central) · Clube · Perfil**. Cada item = ícone 28px + label `--text-label`.

**Aba central "Pagar":** botão circular elevado (FAB), `--jae-blue`, ícone QR branco, ~64px, `--shadow-lg`, sobe acima da barra. É a âncora do produto (princípio "embarque acima de tudo") — serve o Marcos na catraca.

**Estados de item:**
- **Inativo:** ícone + label `--jae-gray`.
- **Ativo:** ícone + label `--jae-blue`, ícone preenchido; indicador sutil.
- **Pressionado:** leve scale-down (0.96).

**Diretrizes:** sempre visível nas 5 telas-raiz; oculta em fluxos modais (recarregar/confirmar usam push). Labels nunca somem (acessibilidade — Roberto).

---

## 3. Card de Saldo

O componente mais importante da home. Serve diretamente "saldo é tranquilidade".

**Anatomia:**
- Container `--radius-card` (18px), `--shadow-md`, fundo `--jae-blue` (gradiente sutil) com texto branco.
- Rótulo "Seu saldo" (`--text-label`, branco 80%).
- Valor `--text-display` (40px, 700, tabular-nums): "R$ 42,50".
- **Selo "Não expira"** — pill amarela (`--jae-yellow`, texto `--jae-ink`, `--text-caption`) com ícone de cadeado/infinito.
- Linha de VT (quando aplicável): "Vale-transporte do mês: R$ 88,00 ✓" — para o Marcos.

**Estados:**
- **Normal:** saldo positivo, selo amarelo presente.
- **Baixo (< 1 tarifa):** valor ganha aviso `--jae-error` discreto + CTA "Recarregar" em destaque. Antecipa a dor do Marcos (saldo zerado na catraca).
- **Zerado:** mensagem encorajadora "Bora recarregar pra não perder a viagem" + botão.
- **Carregando:** skeleton shimmer no lugar do valor.
- **Oculto:** opção de esconder saldo (ícone olho), exibe "•• ••".

---

## 4. Botão (pill)

Botão primário de ação. Raio `--radius-pill` (999px), altura mínima 56px (primário) / 48px (secundário).

**Variantes:**
| Variante | Fundo | Texto | Uso |
|---|---|---|---|
| Primário | `--jae-blue` | branco | Ação principal (Confirmar, Pagar). |
| Secundário | `--jae-surface` + borda `--jae-blue` | `--jae-blue` | Ação alternativa. |
| Terciário/texto | transparente | `--jae-blue` | Links de ação, "Ver tudo". |
| Destrutivo | `--jae-surface` + borda `--jae-error` | `--jae-error` | Bloquear, cancelar. |
| Amarelo (Clube) | `--jae-yellow` | `--jae-ink` | CTA de gratuidade/Clube. |

**Estados:** repouso · `:hover` (web) · `:active` (`--jae-blue-700`, scale 0.98) · **desabilitado** (opacidade 40%, sem sombra) · **carregando** (spinner + texto, largura travada) · **sucesso** (vira check verde momentâneo após ação).

**Diretrizes:** texto curto e de gente ("Recarregar agora", não "Submeter"). Largura total em CTAs de fluxo. Alvo ≥ 56px (Roberto).

---

## 5. Chips de Valor (recarga)

Seleção rápida de valor na recarga.

**Anatomia:** chip pill `--radius-chip`, altura 48px, texto `--text-body-strong`. Opções: **R$ 10 · R$ 20 · R$ 50 · R$ 100 · Outro**.

**Estados:**
- **Não selecionado:** fundo `--jae-surface`, borda `--jae-border`, texto `--jae-ink`.
- **Selecionado:** fundo `--jae-blue-50`, borda `--jae-blue`, texto `--jae-blue` (peso 600), check.
- **"Outro" ativo:** abre campo numérico com teclado, máscara R$.

**Diretrizes:** disposição em grade 2–3 por linha; um único selecionado por vez. Visível e tocável (Ana resolve no celular rápido).

---

## 6. Seletor de Método de Pagamento

Lista de opções na recarga: **PIX · Cartão de crédito · Boleto**.

**Anatomia:** cada opção = linha-card com ícone à esquerda, nome + descrição ("PIX — cai na hora"), radio à direita.

**Estados:** selecionado (borda `--jae-blue`, radio cheio) · não selecionado · indisponível (cinza + motivo). PIX vem **pré-selecionado** (caminho principal da visão — creditado < 10s).

---

## 7. Card do QR Code (embarque)

Componente sagrado. Serve Marcos e Roberto na catraca.

**Anatomia:**
- Card `--radius-qr` (24px), `--jae-surface`, centralizado, `--shadow-md`.
- Instrução grande no topo: **"Aproxime do validador"** (`--text-h2`).
- **QR Code grande** (mínimo 240×240px), alto contraste, miolo com mini-logo Jaé.
- Valor da tarifa abaixo: "Tarifa: R$ 4,30" (`--text-h3`).
- Chips de modal: BRT · VLT · Ônibus (cada um com cor + sigla).
- Hint: "Funciona sem internet" (tranquiliza Marcos).

**Estados:**
- **Pronto:** QR nítido, brilho de tela elevado automaticamente.
- **Gerando:** skeleton + "Preparando seu QR…" (meta < 2s).
- **Gratuidade ativa:** badge amarela "Gratuidade estudante" no card; tarifa exibida como "Gratuidade" (Ana/Roberto).
- **Sucesso (catraca abriu):** overlay verde + check + som → "Pode passar!".
- **Erro:** overlay `--jae-error` + "Não rolou. Tenta de novo?" + botão recarregar QR. Nunca mensagem técnica.
- **Offline:** banner discreto "Modo offline — seu QR continua valendo".

---

## 8. Lista de Transação (extrato)

**Anatomia (item):**
- Ícone de modal à esquerda (cor + sigla, ex. BRT azul).
- Título: nome do modal/operação ("BRT — Embarque").
- Subtítulo: horário `--text-caption` ("Hoje, 06:12").
- Valor à direita: débito em `--jae-ink` ("- R$ 4,30"), crédito em `--jae-success` ("+ R$ 50,00").
- Saldo após (opcional, `--text-caption`).

**Agrupamento:** cabeçalho de data fixo (sticky) — "Hoje", "Ontem", "12 jun".

**Variantes de item:** embarque · recarga (crédito, verde) · **gratuidade** (badge amarela "Gratuidade", valor "R$ 0,00" — torna visível o direito da Ana) · estorno.

**Estados:** repouso · pressionado (abre detalhe) · vazio ("Suas viagens aparecem aqui").

---

## 9. Filtro (extrato)

**Anatomia:** linha de chips de filtro acima da lista — Período · Modal · Tipo (recarga/viagem/gratuidade). Chip de filtro ativo em `--jae-blue-50`.

**Estados:** nenhum filtro · um ou mais ativos (mostra contagem + "Limpar") · resultado vazio (mensagem amigável).

---

## 10. Card de Cartão

Representa um cartão na tela Cartões.

**Anatomia:** card `--radius-card` em formato de cartão (proporção ~1.6:1), wordmark "Jaé"/"Jaézinho", apelido, 4 últimos dígitos, status (Ativo/Bloqueado), tipo (Virtual/Físico/Infantil).

**Variantes:** **Jaé virtual** (azul), **Jaézinho** (amarelo, infantil), físico. Cartão bloqueado fica esmaecido com tarja "Bloqueado".

**Ações associadas (botões/sheet):** Bloquear · Desbloquear · 2ª via · Cancelar · Adicionar cartão. Ações destrutivas pedem confirmação em modal.

---

## 11. Badge de Gratuidade / VT

Sinaliza um direito com dignidade — sempre amarelo, nunca cinza de exceção.

**Anatomia:** pill `--jae-yellow-50`, borda/ícone `--jae-yellow`(escurecido para contraste do texto), texto `--jae-ink` `--text-caption`. Ícone por tipo: estudante (livro), idoso (pessoa), PCD (símbolo de acessibilidade), VT (prédio/maleta).

**Estados:**
- **Ativa:** "Gratuidade estudante · ativa" + ícone check.
- **Vence em breve:** fundo `--jae-yellow-50`, ícone alerta, "Renove até 30/06" + CTA (aviso proativo — dor central da Ana).
- **Vencida:** `--jae-error-50`, texto `--jae-error`, "Gratuidade vencida — renovar agora".
- **Em análise:** "Em análise" com spinner sutil (status do recadastro).

---

## 12. Banner do Clube Jaé

**Anatomia:** card largo na home, fundo `--jae-yellow`/gradiente, texto `--jae-ink`, mini-progresso de pontos + CTA "Ver Clube". Ilustração leve à direita.

**Estados:** padrão · com missão ativa ("Falta 1 viagem pra subir de nível!") · resgate disponível (selo "Recompensa pronta").

---

## 13. Modal / Bottom Sheet

**Anatomia:** sheet ancorado ao fundo, `--radius-card` no topo, handle de arraste, scrim `--jae-overlay`, `--shadow-lg`. Título `--text-h3`, conteúdo, ações em pill (full-width).

**Usos:** confirmar recarga, confirmar bloqueio/cancelamento (destrutivo → botão `--jae-error`), detalhe de transação, escolher modal.

**Estados:** entrada (slide-up) · saída · confirmação destrutiva (texto claro do que vai acontecer + "Cancelar" sempre presente — saída fácil para o Roberto).

---

## 14. Campo de Texto / Input

**Anatomia:** `--radius-input`, altura 52px, label flutuante ou superior, hint `--text-caption`, ícone opcional. Usado em valor "Outro", apelido de cartão, busca.

**Estados:** vazio (placeholder `--jae-gray`) · foco (borda `--jae-blue`, anel) · preenchido · erro (borda `--jae-error` + mensagem) · desabilitado.

---

## 15. Card de Missão / Recompensa (Clube)

**Anatomia:** card com ícone, título da missão, barra de progresso, recompensa em pontos. Recompensa resgatável tem botão "Resgatar" (pill amarela).

**Estados:** em progresso (barra parcial) · concluída ("Concluído ✓") · resgatável · resgatada (esmaecida).

---

## 16. Toast / Feedback

**Anatomia:** faixa flutuante curta, ícone + texto, auto-dismiss ~3s.

**Variantes:** sucesso (`--jae-success-50`, ícone verde — "Recarga feita! Saldo na hora ✓") · erro (`--jae-error-50`) · informativo (`--jae-blue-50`). Mensagens de gente, nunca código.

---

## 17. Item de Lista de Ajuda / Configuração (Perfil)

**Anatomia:** linha com ícone, label, chevron. Agrupados em seções (Conta · Gratuidades · Ajuda · Configurações · Sair). "Tá precisando de ajuda?" em destaque (card próprio) — pensado para o Roberto pedir ajuda sem constrangimento.

**Estados:** repouso · pressionado · com badge (ex. gratuidade a renovar mostra ponto amarelo).

---

## 18. Estado Vazio / Erro / Carregando (genéricos)

- **Vazio:** ilustração leve + frase encorajadora + CTA.
- **Carregando:** skeletons com shimmer (saldo, listas).
- **Erro de rede:** "Tá precisando de ajuda?" + "Tentar de novo", nunca stack trace.

---

*Todos os componentes herdam tokens de `design-system.md`. Estados de foco e alvos de toque seguem as regras de acessibilidade do sistema.*
