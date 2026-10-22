/**
 * As oito perguntas APROVADAS para a LC, sem spoilers.
 * Cada resposta dá um ponto ao profileId indicado. Mantenha os IDs estáveis.
 */
export const QUESTIONS = [
  {
    id: 1,
    tag: 'OBEDIÊNCIA',
    text: 'Uma autoridade anuncia uma ordem que você considera injusta. Qual é sua primeira reação?',
    options: [
      { text: 'Tomo a iniciativa para impedir que a ordem seja executada.', profileId: 'centelha' },
      { text: 'Observo a situação e procuro uma falha no plano.', profileId: 'estrategista' },
      { text: 'Verifico quem será afetado e tento reunir apoio.', profileId: 'guardia' },
      { text: 'Recuso cumprir, mesmo que ninguém me acompanhe.', profileId: 'insurgente' },
    ],
  },
  {
    id: 2,
    tag: 'INFORMAÇÃO CONFIDENCIAL',
    text: 'Você encontra uma informação secreta capaz de mudar tudo. O que faz?',
    options: [
      { text: 'Investigo sua origem antes de tomar qualquer decisão.', profileId: 'estrategista' },
      { text: 'Compartilho com quem pode estar em perigo.', profileId: 'guardia' },
      { text: 'Não permito que decidam por mim o que devo esconder.', profileId: 'insurgente' },
      { text: 'Uso a descoberta para provocar uma mudança imediata.', profileId: 'centelha' },
    ],
  },
  {
    id: 3,
    tag: 'SITUAÇÃO DE RISCO',
    text: 'Os corredores estão sendo bloqueados. Você precisa encontrar uma saída, mas alguém do grupo ficou para trás.',
    options: [
      { text: 'Volto para ajudar, mesmo que isso atrase minha fuga.', profileId: 'guardia' },
      { text: 'Rejeito a rota imposta e procuro meu próprio caminho.', profileId: 'insurgente' },
      { text: 'Corro para impedir que a última saída seja fechada.', profileId: 'centelha' },
      { text: 'Avalio as rotas e descubro uma passagem alternativa.', profileId: 'estrategista' },
    ],
  },
  {
    id: 4,
    tag: 'QUESTIONAMENTO',
    text: 'Diante de uma autoridade, você tem direito a fazer apenas uma pergunta. Qual seria?',
    options: [
      { text: 'Por que vocês acreditam ter o direito de controlar nossas escolhas?', profileId: 'insurgente' },
      { text: 'Quem vai impedir que isso continue?', profileId: 'centelha' },
      { text: 'Que informação vocês estão escondendo?', profileId: 'estrategista' },
      { text: 'O que acontecerá com quem não conseguir obedecer?', profileId: 'guardia' },
    ],
  },
  {
    id: 5,
    tag: 'O QUE IMPORTA',
    text: 'Você precisa abandonar seu quarto e pode levar somente um objeto. Qual escolhe?',
    options: [
      { text: 'Uma fotografia de alguém que amo.', profileId: 'guardia' },
      { text: 'Algo que represente minha identidade e minhas escolhas.', profileId: 'insurgente' },
      { text: 'Algo que possa ser útil numa situação de emergência.', profileId: 'centelha' },
      { text: 'Um mapa com possíveis rotas de saída.', profileId: 'estrategista' },
    ],
  },
  {
    id: 6,
    tag: 'TOMADA DE DECISÃO',
    text: 'Seu grupo está dividido diante de uma decisão arriscada. Como você reage?',
    options: [
      { text: 'Defendo que cada pessoa tenha o direito de escolher.', profileId: 'insurgente' },
      { text: 'Tomo a iniciativa para romper a indecisão.', profileId: 'centelha' },
      { text: 'Comparo os riscos e proponho um plano.', profileId: 'estrategista' },
      { text: 'Escuto todas as pessoas e tento manter o grupo unido.', profileId: 'guardia' },
    ],
  },
  {
    id: 7,
    tag: 'VIGILÂNCIA',
    text: 'Uma mensagem aparece inesperadamente na tela: “VOCÊ ESTÁ SENDO OBSERVADA.” Qual é seu primeiro pensamento?',
    options: [
      { text: 'Então vão descobrir do que sou capaz.', profileId: 'centelha' },
      { text: 'Desde quando? E como estão fazendo isso?', profileId: 'estrategista' },
      { text: 'Será que outras pessoas também estão em perigo?', profileId: 'guardia' },
      { text: 'Podem me observar, mas não podem me controlar.', profileId: 'insurgente' },
    ],
  },
  {
    id: 8,
    tag: 'IDENTIDADE',
    text: 'O sistema encerra sua avaliação com a mensagem: “SEU DESTINO JÁ FOI DEFINIDO.” Você...',
    options: [
      { text: 'Exige entender como chegaram àquela conclusão.', profileId: 'estrategista' },
      { text: 'Pergunta o que acontecerá com as outras pessoas.', profileId: 'guardia' },
      { text: 'Responde que seu destino não pertence a eles.', profileId: 'insurgente' },
      { text: 'Faz algo que ninguém ali poderia prever.', profileId: 'centelha' },
    ],
  },
];
