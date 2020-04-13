PASOS:
1. Desplegar Smart Contract (SC)
2. (Opcional, es para asegurar que ambas partes tienen su wallet correctamente) A y B activan SC con una llamada desde el frontEnd (firmando en Metamask)
3. A aprueba que el contrato le realice el cobro de la cantidad.  A o B indica al contrato que realice el cobro a A.
4. A y B finalizan el trato con una llamada desde el frontEnd (firmando en Metamask). Se envían USDT a B.
(No se recibe la gasolina)
4. A y B rompen el trato con una llamada desde el frontEnd (firmando en Metamask). Se envían USDT a A.
(Alguna de las 2 partes (A o B) pierde su wallet o no se llega a un acuerdo)
4. Los USDT quedan bloqueados para siempre en el SC.