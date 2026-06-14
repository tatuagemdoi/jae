# Jaé — Arquitetura de Informação e Navegação

Como o app Jaé se organiza e como o usuário se move entre as telas. A regra de ouro vem da visão: **embarque acima de tudo** — pagar está sempre a um toque, no centro da navegação.

---

## 1. Princípios de navegação

1. **Pagar é o centro.** A aba **Pagar (QR)** ocupa a posição central e elevada do bottom nav. De qualquer aba, o embarque está a 1 toque (meta: QR pronto < 2s).
2. **Raiz plana, sem labirinto.** Cinco destinos-raiz no bottom nav, sempre acessíveis. Sem menus aninhados profundos — o Roberto não se perde.
3. **Fluxos têm saída fácil.** Toda tela de fluxo (recarregar, confirmar, bloquear) tem voltar/fechar visível. Nada prende o usuário.
4. **Volta previsível.** Concluir uma ação de fluxo retorna ao ponto de origem lógico (recarregar → confirmar → **início**).
5. **Onboarding é porta, não parede.** Entrou uma vez, vai direto para o início nas próximas.

---

## 2. Mapa de telas

```
                      ┌──────────────┐
                      │  ONBOARDING  │  (splash "Vem ser Jaé" + entrar)
                      └──────┬───────┘
                             │ entrar
                             ▼
          ╔══════════════════════════════════════════╗
          ║              APP (bottom nav)             ║
          ╠══════════════════════════════════════════╣
          ║  INÍCIO   EXTRATO   [PAGAR]   CLUBE  PERFIL ║
          ╚════╤════════╤═════════╤════════╤══════╤════╝
               │        │         │        │      │
               ▼        ▼         ▼        ▼      ▼
            início   extrato    pagar    clube  perfil
               │                  │                │
   ┌───────────┼───────────┐      │        ┌───────┴────────┐
   ▼           ▼           ▼      ▼        ▼                ▼
recarregar  pagar      cartoes  (modal   gratuidades     ajuda
   │                            sucesso)  (status/        "Tá precisando
   ▼                                       renovar)        de ajuda?"
confirmar → volta p/ início
```

---

## 3. Bottom Navigation — 5 abas

| Posição | Aba | Rota | Ícone | Papel |
|---|---|---|---|---|
| 1 | Início | `inicio` | casa | Visão geral: saldo, ações rápidas, último uso, Clube. |
| 2 | Extrato | `extrato` | lista | Histórico de transações em tempo real. |
| 3 (centro) | **Pagar** | `pagar` | QR (FAB elevado) | Embarque por QR Code. Destaque azul. |
| 4 | Clube | `clube` | estrela/troféu | Clube Jaé: pontos, missões, recompensas. |
| 5 | Perfil | `perfil` | pessoa | Dados, gratuidades, ajuda, config, sair. |

**Comportamento:** as 5 são telas-raiz (sem botão voltar). A aba Pagar é visualmente dominante (cor `--jae-blue`, FAB) por ser o coração do produto.

---

## 4. Fluxos principais

### 4.1 Entrada (onboarding → app)
`onboarding` (splash "Vem ser Jaé" → entrar/login) → **`inicio`**.
Onboarding **não** faz parte do bottom nav. Sessão válida → abre direto no `inicio`.

### 4.2 Recarregar (a partir do início)
`inicio` → ação rápida **Recarregar** → `recarregar` (escolher valor → método → confirmar) → tela/sheet de **confirmação** → **volta para `inicio`** com saldo atualizado + toast "Recarga feita! Saldo na hora ✓".
Serve a recarga PIX < 10s do Marcos.

### 4.3 Pagar / Embarcar
Dois caminhos para o mesmo destino:
- Aba central **Pagar** (de qualquer tela) → `pagar`.
- `inicio` → ação rápida **Pagar** → `pagar`.
`pagar` mostra QR grande → catraca abre → estado de sucesso (verde + som). Saída por fechar volta à aba anterior.

### 4.4 Cartões
`inicio` → ação rápida **Cartões** → `cartoes`. Ações (bloquear, 2ª via, cancelar, adicionar) abrem modais/sheets; destrutivas pedem confirmação. Versão virtual gerada no fluxo de adicionar.

### 4.5 Extrato
Aba **Extrato** → `extrato`. Filtro abre sheet; tocar item abre detalhe da transação. Gratuidades aparecem destacadas (transparência para a Ana).

### 4.6 Clube
Aba **Clube** → `clube`. Banner do Clube na home também leva a `clube`. Missões e recompensas resgatáveis abrem sheets de detalhe.

### 4.7 Perfil, Gratuidades e Ajuda
Aba **Perfil** → `perfil`. Sub-rotas: **Gratuidades** (status, prazos, renovar — central da Ana e do Roberto), **"Tá precisando de ajuda?"**, **Configurações**, **Sair** (volta ao `onboarding`).

---

## 5. Regras de transição

| Transição | Tipo | Bottom nav |
|---|---|---|
| Entre abas-raiz | Fade/cross-fade rápido | Visível |
| Início → recarregar/pagar/cartoes | Push (slide lateral) | Oculto no fluxo |
| Recarregar → confirmar → início | Push e pop com toast | Reaparece no início |
| Abrir modal/sheet | Slide-up + scrim | Atrás do scrim |
| Sair (perfil) | Reset de pilha → onboarding | Removido |

---

## 6. Estados de navegação por persona

- **Marcos:** abre app → aba Pagar a 1 toque → QR. Caminho mais curto possível, sem telas intermediárias.
- **Ana:** Perfil → Gratuidades para acompanhar status; recebe deep-link de aviso proativo que leva direto à renovação.
- **Roberto:** Início com ação grande "Pagar"; bottom nav com labels sempre visíveis; "Tá precisando de ajuda?" sempre a um toque no Perfil.

---

*A navegação prioriza o embarque e mantém a raiz plana. Toda profundidade extra precisa justificar por que não cabe em 1–2 toques.*
