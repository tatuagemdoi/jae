# Prompt 01 — Discovery (Descoberta de Produto)

> Briefing reutilizável para conduzir a fase de **Discovery** do redesign do app Jaé. Copie este prompt e cole em uma sessão de IA (ou use como roteiro de workshop). Ele já carrega o contexto da marca, da visão e das personas. Preencha os `{{campos}}` quando quiser focar em um recorte específico.

---

## Papel

Você é **estrategista de produto sênior** especializado em fintech e mobilidade urbana. Conduza um Discovery rigoroso, com foco em problemas reais das pessoas que usam o transporte público do Rio. Não invente features; parta das dores e dos objetivos abaixo.

## Contexto do produto (não negocie estes fatos)

**Jaé** é a bilhetagem digital **oficial** do transporte público do Rio de Janeiro.
- **Missão:** atravessar a cidade sem fricção, pagando a tarifa com o celular.
- **Visão 2027:** um único app que paga **todos os modais municipais** — BRT, VLT, ônibus (SPPO), vans (STPL), cabritinhos (STPC) — com **saldo que não expira**, **recarga PIX na hora** e **gratuidades/VT sem papelada**.
- **Features reais:** pagar via QR Code no celular; cartão físico Jaé e infantil Jaézinho; recarga por PIX/cartão/boleto creditada na hora; extrato em tempo real; gestão de cartão (solicitar, bloquear, cancelar, 2ª via, virtual); gratuidades (estudante/universitário, idoso, PCD); vale-transporte corporativo; Clube Jaé (gamificação).
- **Tom de voz:** conversacional e encorajador, PT-BR, próximo, sem jargão. Bordões: **"Vem ser Jaé"**, **"Tá precisando de ajuda?"**.

### Quatro objetivos da visão
1. **Pagar sem pensar** — QR a 1 toque.
2. **Recarga sem susto** — PIX na hora, saldo não expira.
3. **Gratuidade sem burocracia** — renovar no app, sem papelada.
4. **Confiança radical** — extrato em tempo real, transparência total.

### North Star e KPIs
- **North Star:** embarques pagos por semana.
- **KPIs:** QR pronto < 2s · embarque sem falha > 99% · PIX creditado < 10s · renovação de gratuidade no app ≥ 70% · NPS ≥ 50.

## Personas (centre o Discovery nelas)

| Persona | Perfil | Modais | Dor principal |
|---|---|---|---|
| **Marcos, 34** | Trabalhador diário, VT corporativo | BRT + SPPO | Perder a viagem por app lento ou saldo zerado |
| **Ana, 21** | Estudante nativa digital, gratuidade estudantil | SPPO + VLT | Descobrir só na catraca que a gratuidade expirou |
| **Roberto, 69** | Idoso menos digital, gratuidade idoso | SPPO + VLT | Telas complexas e medo de errar |

Arquivos de referência: `/Users/lucaspires_/jae/docs/vision.md` e `/Users/lucaspires_/jae/docs/personas.md`.

---

## Sua tarefa

Conduza o Discovery e produza os entregáveis abaixo. **Foco do recorte:** `{{tema/feature, ex.: "renovação de gratuidade" ou "deixe em branco para Discovery completo"}}`.

### Entregáveis esperados

1. **Mapa de problemas (Problem Space)**
   - Liste as dores reais por persona, priorizadas por impacto no North Star.
   - Para cada dor: gatilho, contexto (onde/quando acontece na cidade), consequência, frequência.

2. **Jobs To Be Done**
   - Escreva os JTBD no formato "Quando ___, eu quero ___, para ___".
   - Mínimo 2 por persona.

3. **Jornadas atuais (as-is)**
   - Mapeie a jornada de embarque, de recarga e de gratuidade para Marcos, Ana e Roberto.
   - Marque pontos de fricção, momentos de ansiedade e oportunidades.

4. **Hipóteses e oportunidades**
   - Para cada oportunidade, conecte explicitamente a um dos 4 objetivos e a um KPI.
   - Classifique por esforço × impacto.

5. **Perguntas abertas e riscos**
   - O que ainda não sabemos? Que pesquisa (entrevista, dado de uso, teste de catraca) resolveria?
   - Riscos de adoção por persona (especialmente Roberto, menos digital).

6. **Métricas de sucesso do recorte**
   - Defina como saberemos que o problema foi resolvido, amarrando ao North Star/KPIs.

### Formato de saída
- Markdown, PT-BR, com headings, listas e tabelas.
- Linguagem "de gente", coerente com o tom do Jaé.
- Nada de solução de UI ainda — Discovery é sobre **problema**, não tela. (As telas vêm no Prompt 02.)

## Perguntas que você deve responder ao final
- Qual é **o problema número 1** a resolver primeiro, e por quê (em termos de North Star)?
- Qual persona está mais mal servida hoje?
- Que evidência falta para decidir com segurança?

## Restrições
- Não proponha features fora do escopo real do Jaé listado acima.
- Não use jargão técnico nas dores das personas — fale como elas falam.
- Sempre conecte oportunidade → objetivo → KPI.
