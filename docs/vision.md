# Jaé — Visão de Produto (Redesign)

> "Vem ser Jaé." O jeito mais simples de pagar e viver o transporte público do Rio.

O Jaé é o sistema oficial de bilhetagem digital do transporte público do Rio de Janeiro. Este documento define a estratégia do redesign: por que ele existe, onde queremos chegar e como mediremos sucesso.

---

## 1. Missão

**Fazer com que qualquer pessoa atravesse o Rio sem fricção — pagando a passagem com o que já tem no bolso: o celular.**

Eliminar a barreira do dinheiro físico, da fila de recarga e da catraca que não abre. Transformar o ato de pagar a tarifa em algo invisível, justo e confiável para os milhões de deslocamentos diários da cidade.

---

## 2. Visão

**Até 2027, o Jaé é o cartão da cidade: um único app que paga BRT, VLT, ônibus, vans e cabritinhos, integra gratuidades e vale-transporte sem papelada, e é tão natural quanto abrir o WhatsApp.**

Um carioca chega ao ponto, abre o QR Code, embarca. A criança usa o Jaézinho. O estudante não perde a gratuidade por causa de um recadastramento esquecido. O idoso não depende de ninguém para recarregar. Ninguém mais perde a viagem porque "o saldo venceu" — porque saldo Jaé **não expira**.

---

## 3. Objetivos do Redesign

O app atual cumpre a função, mas a experiência ainda assusta o usuário menos digital, esconde features importantes e gera dúvida na hora do embarque. O redesign ataca quatro frentes:

| # | Objetivo | Resultado esperado |
|---|----------|--------------------|
| O1 | **Pagar sem pensar** | QR Code de embarque a no máximo 1 toque da abertura do app; funciona com baixa conectividade. |
| O2 | **Recarga na hora, sem susto** | PIX como caminho principal, saldo creditado em segundos, com confirmação clara. |
| O3 | **Gratuidade sem burocracia** | Estudante, idoso e PCD acompanham status, prazos e renovação dentro do app, sem ir ao guichê. |
| O4 | **Confiança radical** | Extrato em tempo real, cada centavo rastreável; bloqueio/2ª via de cartão resolvidos em segundos. |

---

## 4. Princípios de Produto

Decisões de design e priorização passam por estes seis princípios.

1. **Embarque acima de tudo.** A tela do QR Code é sagrada. Nada — banner, promoção, modal — pode atrasar quem está na catraca. Velocidade e legibilidade sob sol forte vêm primeiro.
2. **Saldo é tranquilidade.** O saldo não expira e isso deve ser sentido, não só lido. Sempre deixamos claro quanto a pessoa tem e que aquilo é dela, para sempre.
3. **Fala de gente, não de sistema.** Tom conversacional e encorajador. "Tá precisando de ajuda?" em vez de "Erro 0x04". Sem jargão de TI ou de transporte.
4. **Justiça é função, não favor.** Gratuidade e vale-transporte são direitos. O fluxo é digno, simples e nunca faz a pessoa se sentir um caso de exceção.
5. **Acessível para o Rio inteiro.** Do nativo digital ao idoso de primeira viagem. Alvos de toque generosos, contraste alto, textos curtos, fluxos com saída fácil.
6. **Transparência gera confiança.** Mexeu no dinheiro do usuário? Mostramos quando, quanto e onde — em tempo real. Nada de saldo que "some".

---

## 5. Posicionamento

**Para** quem usa o transporte público do Rio — do trabalhador diário ao estudante e ao idoso —
**que** precisa pagar a tarifa de forma rápida, justa e sem depender de dinheiro ou cartão físico,
**o Jaé é** o sistema oficial de bilhetagem digital da cidade
**que** paga todos os modais municipais (BRT, VLT, SPPO, STPL, STPC) com um QR Code no celular, saldo que não expira e gratuidades integradas.
**Diferente de** cartões pré-pagos avulsos, apps de uma única empresa de ônibus ou dinheiro em espécie,
**o Jaé** unifica a cidade num só app, com recarga na hora por PIX e transparência total.

### Pilares de diferenciação
- **Universalidade municipal:** um app, todos os modais do Rio.
- **Saldo perpétuo:** nunca expira, nunca é perdido.
- **Recarga instantânea via PIX:** disponível na hora, sem ir a ponto de venda.
- **Ecossistema de cartões:** virtual, físico (Jaé) e infantil (Jaézinho).
- **Gratuidade e VT nativos:** direitos sociais tratados como cidadania, não como exceção.

---

## 6. Métricas de Sucesso

### North Star Metric
**Embarques pagos pelo Jaé por semana** (QR Code + cartões físicos/virtuais vinculados).

Por que esta: captura simultaneamente adoção (mais gente), engajamento (mais viagens) e valor real entregue (a pessoa atravessou a cidade). Cresce só quando o produto funciona de ponta a ponta — descoberta, recarga, saldo e embarque.

### KPIs de apoio

| Categoria | KPI | Meta direcional |
|-----------|-----|-----------------|
| **Embarque** | Tempo da abertura do app até QR Code pronto | < 2s no P90 |
| **Embarque** | Taxa de embarques sem falha (catraca abriu) | > 99% |
| **Recarga** | Tempo do PIX confirmado até saldo creditado | < 10s no P90 |
| **Recarga** | % de recargas concluídas (sem abandono no fluxo) | ≥ 85% |
| **Confiança** | Disputas/contestações de transação | < 0,1% das viagens |
| **Gratuidade** | Renovações de gratuidade feitas no app (sem guichê) | ≥ 70% |
| **Ativação** | Novo usuário do 1º cadastro ao 1º embarque | < 24h (mediana) |
| **Retenção** | Usuários ativos recorrentes (4+ semanas no trimestre) | crescente |
| **Acessibilidade** | Sucesso em tarefas-chave com usuários 60+ em teste | ≥ 90% |
| **Satisfação** | CSAT pós-embarque e NPS do app | NPS ≥ 50 |

### Sinais de contra-equilíbrio (não sacrificar)
- Latência e estabilidade do QR Code offline.
- Tickets de suporte por 1.000 viagens (não pode subir com novas features).
- Taxa de erro em recargas por PIX.

---

## 7. Escopo do Redesign — em foco

**Dentro:** tela de embarque (QR Code), recarga por PIX/cartão/boleto, extrato em tempo real, gestão de cartões (solicitar, bloquear, cancelar, 2ª via, virtual), fluxos de gratuidade (estudante, idoso, PCD), vale-transporte corporativo, onboarding e ajuda.

**Fora (por ora):** integração com modais intermunicipais/estaduais, programa de fidelidade, marketplace de parceiros.

---

*Documento vivo — revisado a cada ciclo de descoberta. Tom da marca: próximo, encorajador, sem jargão. "Vem ser Jaé."*
