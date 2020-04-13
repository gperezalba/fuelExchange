ROPSTEN
RUSDT address: 0x6943e925FD4e9e243230DA2e26056b9C8A9cd8CE (txHash: 0xdd2de27102a1f16304c870e1bc5a0173552ff507ae7123956d6d05288a1911e5)
FuelExchange address: 0xe869aB01EA9F7577B1963e01443Fe5Bb8F7fD351 (txHash: 0x078253afd76d38f7352595895964759615e68ff1e7583fb3a07f6f1ea9c4fa1d) (gasUsed: 1290217)
Activate1: https://ropsten.etherscan.io/tx/0xdcef1f38a3ee9fdcab69c539b4069f8f48c066f6526a14759e0822f87b2ff399
Activate2: 


PASOS:
1. Desplegar Smart Contract (SC)
2. (Opcional, es para asegurar que ambas partes tienen su wallet correctamente) A y B activan SC con una llamada desde el frontEnd (firmando en Metamask)
3. A envía USDT al SC con una llamada desde el frontEnd (firmando en Metamask)
(Se recibe la gasolina)
4. A y B finalizan el trato con una llamada desde el frontEnd (firmando en Metamask). Se envían USDT a B.
(No se recibe la gasolina)
4. A y B rompen el trato con una llamada desde el frontEnd (firmando en Metamask). Se envían USDT a A.
(Alguna de las 2 partes (A o B) pierde su wallet o no se llega a un acuerdo)
4. Los USDT quedan bloqueados para siempre en el SC.