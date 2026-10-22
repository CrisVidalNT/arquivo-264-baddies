# ARQUIVO 264 — Clube das Baddies 💙

Um quiz narrativo para a **abertura da leitura coletiva de *Estilhaça-me***, inspirado no clima visual do primeiro livro. Experiência sem spoilers, competitividade ou ranking: cada Baddie responde **8 perguntas**, recebe um dos **4 perfis**, lê seu **dossiê confidencial** e encontra uma **transmissão misteriosa**.

Os perfis são **A Centelha, A Estrategista, A Guardiã e A Insurgente**. São criações da dinâmica, e não categorias oficiais da saga.

## 1. Abrir no VS Code

Você precisará do [Node.js](https://nodejs.org/) **20.9 ou superior**, Git e VS Code.

1. Extraia `arquivo-264-baddies.zip`.
2. No VS Code, escolha **Arquivo → Abrir Pasta** e selecione `arquivo-264-baddies` (a pasta que contém `package.json`).
3. Abra **Terminal → Novo Terminal** e execute:

```powershell
npm install
npm run dev
```

4. Abra **http://localhost:3000** no navegador.
5. Para parar, pressione `Ctrl + C` no terminal.

> Não abra `page.jsx` diretamente no navegador. Este projeto usa Next.js e deve ser iniciado com `npm run dev`.

### Outros comandos

```powershell
npm test        # Valida 8 perguntas, 4 perfis e desempate
npm run lint    # Regras de qualidade do código
npm run build   # Compilação otimizada para produção
npm run start   # Inicia o projeto compilado
```

## 2. Organização dos arquivos

```text
arquivo-264-baddies/
├── public/
│   └── assets/
│       ├── logo-baddies-azul.png      # Logo original recolorida
│       ├── olho-azul-baddies.webp     # Olho do conceito visual aprovado
│       ├── olho-arquivo-264.svg       # Ilustração alternativa preservada
│       └── favicon.svg               # Ícone da aba
├── src/
│   ├── app/
│   │   ├── globals.css               # Entrada do Tailwind CSS
│   │   ├── layout.jsx                # HTML base + título e metadados
│   │   └── page.jsx                  # Página principal
│   ├── components/
│   │   ├── Arquivo264.jsx            # Controla as etapas do quiz
│   │   ├── screens/                  # Uma tela por componente
│   │   │   ├── WelcomeScreen.jsx
│   │   │   ├── IdentityScreen.jsx
│   │   │   ├── QuestionScreen.jsx
│   │   │   ├── ProcessingScreen.jsx
│   │   │   ├── DossierScreen.jsx
│   │   │   └── TransmissionScreen.jsx
│   │   └── ui/                       # Componentes compartilhados
│   │       ├── ActionButton.jsx
│   │       ├── BrandLogo.jsx
│   │       ├── EyeArtwork.jsx
│   │       └── ScreenFrame.jsx
│   ├── styles/                    # CSS separado por área
│   │   ├── base.css               # Variáveis, moldura e layout
│   │   ├── welcome.css            # Tela de abertura
│   │   ├── quiz.css               # Identificação e perguntas
│   │   ├── processing.css         # Processamento do resultado
│   │   ├── dossier.css            # Dossiê confidencial
│   │   ├── transmission.css       # Transmissão misteriosa
│   │   ├── motion.css             # Animações
│   │   └── responsive.css         # Ajustes para celular
│   ├── data/
│   │   ├── questions.js              # 8 perguntas aprovadas e pontuação
│   │   └── profiles.js               # 4 perfis, dossiês e mensagens
│   └── lib/
│       ├── scoring.js                # Soma e desempate
│       ├── identity.js               # Nome e registro aleatório
│       └── storyCanvas.js            # PNG vertical 1080 × 1920
├── tests/
│   └── scoring.test.js               # Testes sem dependências adicionais
├── docs/                          # Moodboard aprovado e logo original
├── .github/workflows/ci.yml      # Testes automáticos no GitHub
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── postcss.config.mjs
```

## 3. Como alterar conteúdo sem bagunçar a interface

- **Perguntas e alternativas:** `src/data/questions.js`.
- **Textos dos perfis e mensagem interceptada:** `src/data/profiles.js`.
- **Cores e estilo:** `src/styles/`. A paleta principal está em `src/styles/base.css` (`:root`). As telas possuem folhas de estilo separadas.
- **Tela inicial:** `src/components/screens/WelcomeScreen.jsx`.
- **Logo das Baddies:** substitua `public/assets/logo-baddies-azul.png`, mantendo o nome.
- **Arte do olho usada no app:** `public/assets/olho-azul-baddies.webp`. O SVG em `olho-arquivo-264.svg` foi guardado como alternativa.
- **Card de stories:** `src/lib/storyCanvas.js`.
- **Referência visual aprovada:** `docs/identidade-visual-aprovada.png`.

**Cuidado:** cada opção em `questions.js` aponta para um `profileId`. Mude o texto livremente, mas não troque o ID sem revisar a pontuação e rodar `npm test`.

## 4. Como o resultado é decidido

Cada alternativa soma **1 ponto** a um dos quatro perfis. Vence o de maior pontuação. Em empate, vence o perfil que apareceu mais recentemente nas respostas da participante. A distribuição das letras é equilibrada (cada perfil ocupa A, B, C e D duas vezes).

O aplicativo não envia as respostas a servidor algum. É um projeto **somente de interface**, sem cadastro, banco de dados, ranking nem contas. Ao recarregar a página, a sessão recomeça. O número do dossiê é fictício, criado aleatoriamente no dispositivo e **não identifica pessoas de maneira exclusiva**.

## 5. Criar repositório no GitHub

1. Crie um repositório **vazio** no GitHub (ex.: `arquivo-264-baddies`), sem selecionar README inicial.
2. No terminal do VS Code, dentro da pasta do projeto, execute:

```powershell
git init -b main
git add .
git commit -m "feat: cria Arquivo 264 das Baddies"
git remote add origin https://github.com/SEU-USUARIO/arquivo-264-baddies.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário e substitua a URL pela do seu repositório. Pode ser necessário autenticar o GitHub pelo VS Code/navegador.

### Alterações futuras

```powershell
git add .
git commit -m "feat: melhora identidade visual do quiz"
git push
```

Não suba `node_modules` nem `.next` ao GitHub. Essas pastas estão no `.gitignore`.

## 6. Publicar gratuitamente ou pelo plano disponível na Vercel

1. Entre em **https://vercel.com/new** e conecte sua conta do GitHub.
2. Selecione o repositório `arquivo-264-baddies`.
3. O framework deve ser detectado como **Next.js**.
4. Mantenha a **Root Directory** na raiz do projeto e clique em **Deploy**.
5. Ao receber uma URL, compartilhe o link no grupo das Baddies ou gere um QR Code.

Por ser um app sem backend, não requer variáveis de ambiente nem serviços externos. A disponibilidade dos planos e limites da hospedagem dependem da Vercel.

## 7. Checklist para validar antes da LC

- [ ] Abrir no celular, no iPhone/Safari e no Android/Chrome.
- [ ] Digitar um apelido com acento e conferir o dossiê.
- [ ] Navegar até a pergunta 8 e voltar sem perder as respostas.
- [ ] Selecionar todas as alternativas A e confirmar **A Estrategista** no desempate.
- [ ] Obter os quatro perfis fazendo todas as escolhas de cada perfil.
- [ ] Verificar a tela de processamento e a transmissão interceptada.
- [ ] Tocar em **Salvar / compartilhar** e conferir o PNG vertical.
- [ ] Abrir o link publicado no grupo em outro celular.

**Observação sobre visual:** a identidade segue a direção aprovada (azul noturno, azul íris, azul névoa, olhar vigilante, estética glacial e logo azul). A arte principal do olho foi extraída da **própria imagem conceitual aprovada** e tratada para funcionar nas telas. O SVG permanece incluído como alternativa, sem copiar a capa do livro.

**Créditos e uso:** experiência de fãs do Clube das Baddies. A logomarca enviada pelo clube foi recolorida para o app. Não é um aplicativo oficial da editora nem da autora.

## 8. Verificação de segurança e dependências

O projeto declara **Next.js 16.4.1 ou posterior dentro da linha 16** e **React 19.2.6 ou posterior dentro da linha 19**, escolhidos para evitar versões afetadas por avisos de segurança de outubro de 2026. Antes de uma publicação futura, mantenha dependências atualizadas e execute `npm audit` após `npm install`.

O código fonte e os testes da pontuação estão preparados. Neste ambiente de geração, **a instalação dos pacotes e o build não puderam ser executados por falha de conectividade com o npm**. Portanto, antes da publicação, rode `npm install`, `npm test`, `npm run lint` e `npm run build` no seu computador ou verifique o resultado da ação automática no GitHub.

## 9. Automatização no GitHub

O arquivo `.github/workflows/ci.yml` executa testes, ESLint e build em todo `push` e `pull request`. Se alguma validação falhar, clique na aba **Actions** do repositório para ler a mensagem antes de publicar.
