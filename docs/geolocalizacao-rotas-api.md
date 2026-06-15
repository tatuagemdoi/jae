# Geolocalização & Tempo de Percurso — Recomendação de API

Objetivo: dar no app Jaé o "tempo de percurso igual Waze" — origem→destino,
ETA com trânsito em tempo real e rota por transporte público (BRT, VLT, ônibus,
vans) no Rio.

## TL;DR da decisão

| Necessidade | Solução recomendada |
|---|---|
| Calcular rota + ETA (com trânsito) | **Google Routes API** (`computeRoutes`) |
| Rota por transporte público (GTFS Rio) | **Google Routes/Directions** `travelMode: TRANSIT` |
| Mapa renderizado no app | **react-native-maps** (provider Google) |
| GPS do aparelho | **expo-location** (ou react-native-geolocation) |
| "Abrir navegação turn-by-turn" | **Deep link** pro Waze e/ou Google Maps |

> **Waze não serve como backend.** O Waze **não tem API pública** de roteamento/ETA.
> Existe só o *Waze for Cities* (compartilhamento de dados, mão dupla) e os
> **deep links** que abrem o app do Waze já navegando. Ou seja: dá pra ter um
> botão "Abrir no Waze", mas **não** dá pra calcular o tempo de percurso dentro
> do nosso app usando o Waze. Para isso → Google (ou Mapbox).

## Por que Google (e não Mapbox/HERE) para a Jaé

O diferencial é **transporte público**: a Jaé é multimodal (BRT/VLT/ônibus/vans).
O Google tem os dados GTFS do Rio e calcula rota **TRANSIT** (qual linha pegar,
baldeação, horários) + ETA de carro com **trânsito em tempo real**. Mapbox/HERE
são ótimos para *driving* mas têm cobertura de transporte público fraca no Brasil.

- **Mapbox** = alternativa boa e mais barata **se** o foco for só mapa + rota de
  carro/a pé (Navigation SDK). Para transit no Rio, fica devendo.

## Stack concreta (React Native / Expo)

```
expo-location            # permissão + GPS + reverse geocode básico
react-native-maps        # mapa (provider: google) com a rota desenhada
# chamadas HTTP ao Google Routes API (fetch) — não precisa de SDK extra
```

### 1. Pegar a localização do usuário (LGPD: pedir consentimento!)
```ts
import * as Location from 'expo-location';

async function getPosicao() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') throw new Error('permissão negada');
  const pos = await Location.getCurrentPositionAsync({});
  return { lat: pos.coords.latitude, lng: pos.coords.longitude };
}
```

### 2. Calcular rota + tempo (Google Routes API)
```ts
async function calcularRota(origem, destino, modo = 'TRANSIT') {
  const res = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_API_KEY,
      // só os campos que a UI usa (controla custo):
      'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.legs.steps.transitDetails',
    },
    body: JSON.stringify({
      origin:      { location: { latLng: { latitude: origem.lat,  longitude: origem.lng } } },
      destination: { location: { latLng: { latitude: destino.lat, longitude: destino.lng } } },
      travelMode: modo,                 // 'TRANSIT' | 'DRIVE' | 'WALK'
      // p/ DRIVE com trânsito em tempo real:
      routingPreference: modo === 'DRIVE' ? 'TRAFFIC_AWARE' : undefined,
      languageCode: 'pt-BR',
      units: 'METRIC',
    }),
  });
  const data = await res.json();
  const rota = data.routes?.[0];
  return {
    minutos: Math.round(parseInt(rota.duration) / 60),   // "duration": "1234s"
    km: (rota.distanceMeters / 1000).toFixed(1),
    passos: rota.legs?.[0]?.steps ?? [],
  };
}
```

### 3. Handoff para navegação turn-by-turn (deep links)
```ts
import { Linking } from 'react-native';

// Waze (abre o app do Waze já navegando)
Linking.openURL(`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`);

// Google Maps (transit como exemplo)
Linking.openURL(
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=transit`
);
```

## Custos & operação (Google Maps Platform)

- Modelo **pay-as-you-go** com crédito mensal recorrente de cortesia. Acima
  disso, cobra por requisição (faixa típica: Routes/Directions na casa de
  ~US$5/1.000 chamadas; Maps SDK por carregamento de mapa). **Confirmar os
  valores atuais no console** antes de fechar — variam por SKU/região.
- Exige **conta de faturamento** e **API key restrita** (por app/SHA + por API).
- **Reduza custo**: use `FieldMask` enxuto, faça *cache* de rotas repetidas, e
  evite recalcular a cada keystroke (debounce).

## Privacidade (LGPD)
Geolocalização é dado pessoal. Necessário: **consentimento explícito**, finalidade
clara ("calcular sua rota"), e não rastrear em segundo plano sem base legal.
Pedir a permissão só no momento em que o usuário aciona "Como chegar".

## Recomendação final
1. **Google Routes API + react-native-maps + expo-location** para rota/ETA/mapa
   dentro do app (cobre transporte público do Rio).
2. **Deep link Waze/Google Maps** como botão opcional de "navegar turn-by-turn".
3. Mapbox só se, no futuro, surgir um caso que seja só driving e sensível a custo.
