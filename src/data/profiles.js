/**
 * Perfis fictícios do Arquivo 264 — não são categorias oficiais dos livros.
 * Edite aqui os textos do dossiê e da transmissão interceptada.
 */
export const PROFILES = {
  centelha: {
    id: 'centelha',
    name: 'A Centelha',
    fileCode: 'AC-01',
    symbol: '✦',
    keywords: ['Coragem', 'Iniciativa', 'Intensidade'],
    risk: 'ELEVADO',
    alert: 'COMPORTAMENTO IMPREVISÍVEL',
    summary: 'Você não nasceu para assistir às mudanças acontecerem. Quando o medo paralisa os outros, algo dentro de você desperta. Suas decisões são intensas, sua coragem desafia previsões e sua presença pode transformar tudo ao redor.',
    strength: 'Capacidade de iniciar mudanças',
    caution: 'Agir antes de conhecer todos os riscos',
    message: 'Eles acreditam que o medo vai impedir você de agir. Mas toda mudança começa com uma faísca.',
    tagline: 'Toda mudança começa com uma faísca.',
  },
  estrategista: {
    id: 'estrategista',
    name: 'A Estrategista',
    fileCode: 'AE-02',
    symbol: '◇',
    keywords: ['Inteligência', 'Observação', 'Precisão'],
    risk: 'ELEVADO',
    alert: 'PADRÃO DE PENSAMENTO NÃO MAPEADO',
    summary: 'Você não precisa ser a voz mais alta para mudar o curso dos acontecimentos. Percebe detalhes, identifica padrões e encontra possibilidades onde os outros enxergam obstáculos. O sistema pode observar seus movimentos, mas dificilmente prevê seus planos.',
    strength: 'Antecipar possibilidades e planejar',
    caution: 'Pensar demais antes de agir',
    message: 'Você percebeu o que eles tentaram esconder. Continue observando. Nem toda verdade está diante dos seus olhos.',
    tagline: 'Nem toda verdade está diante dos seus olhos.',
  },
  guardia: {
    id: 'guardia',
    name: 'A Guardiã',
    fileCode: 'AG-03',
    symbol: '❖',
    keywords: ['Lealdade', 'Empatia', 'Proteção'],
    risk: 'SOB OBSERVAÇÃO',
    alert: 'VÍNCULOS DE LEALDADE INCONTROLÁVEIS',
    summary: 'Sua força não está apenas no que consegue enfrentar, mas naquilo que se recusa a abandonar. Você enxerga pessoas onde outros veem números. Mesmo em um mundo construído sobre o medo, encontra razões para proteger, confiar e permanecer.',
    strength: 'Criar alianças e proteger pessoas',
    caution: 'Colocar as necessidades dos outros acima das suas',
    message: 'Eles conhecem suas fraquezas. Mas ainda não compreenderam que aquilo que você ama também é sua maior força.',
    tagline: 'O que você ama também é sua maior força.',
  },
  insurgente: {
    id: 'insurgente',
    name: 'A Insurgente',
    fileCode: 'AI-04',
    symbol: '✧',
    keywords: ['Liberdade', 'Autenticidade', 'Resistência'],
    risk: 'CRÍTICO',
    alert: 'AMEAÇA À ORDEM ESTABELECIDA',
    summary: 'Você questiona aquilo que os outros aceitam como inevitável. Não permite que regras determinem seus valores nem que autoridades escolham seu caminho. Quando tentam impor limites à sua identidade, sua resposta é permanecer fiel a si mesma.',
    strength: 'Independência e convicção',
    caution: 'Dificuldade em aceitar limites impostos',
    message: 'Eles podem registrar seu nome, estudar suas escolhas e vigiar seus passos. Mas nunca poderão decidir quem você é.',
    tagline: 'Seu destino não pertence a eles.',
  },
};

export const PROFILE_IDS = Object.keys(PROFILES);
