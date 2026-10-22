# Direção visual — ARQUIVO 264 · versão cinematográfica

Referência principal: mockup vertical azul aprovado no clube. O foco é criar uma sensação de *capa literária viva*, sem transformar o app inteiro em uma imagem estática. O botão, a marca, os títulos, a leitura de tela e as opções do quiz continuam sendo componentes reais.

## Paleta

| Elemento | Cor |
| --- | --- |
| Azul noturno | `#14243A` |
| Azul tempestade | `#2F4E73` |
| Azul íris | `#6EA8D9` |
| Azul névoa | `#D9ECF7` |
| Cinza gélido | `#92A8BC` |

## Tela por tela

1. **Abertura** (`WelcomeScreen.jsx`, `welcome.css`): fundo vertical com o olho e a cidade, logo central azul, assinatura “apresenta”, título imponente em duas linhas, grande respiro na zona do olho, mensagem de vigilância e botão em vidro fosco. O fundo não contém texto.
2. **Identificação** (`IdentityScreen.jsx`, `quiz.css`): olhar azul como prenúncio, texto serifado, input em painel translúcido, linguagem acolhedora sem pedir cadastro.
3. **Perguntas** (`QuestionScreen.jsx`, `quiz.css`): oito situações aprovadas, sem alterações de conteúdo, uma por tela, progresso discreto, quatro cartões com transparência, realce com borda gélida na resposta selecionada.
4. **Processamento** (`ProcessingScreen.jsx`, `processing.css`): olho central maior, varredura sutil, três etapas de análise e aviso final.
5. **Dossiê** (`DossierScreen.jsx`, `dossier.css`): folha azul-glacial com carimbo “CONFIDENCIAL”, nome, perfil, traços e risco, como documento interceptado. Baixar card em 1080×1920.
6. **Transmissão interceptada** (`TransmissionScreen.jsx`, `transmission.css`): versão mais escura da mesma atmosfera, interferência sutil e mensagem literária individual antes de “Sua história está apenas começando”.

## Decisões de UX

- **Mobile-first**, com folha ocupando a largura disponível no celular e composição de pôster na abertura. Em telas pequenas, a home pode rolar em vez de diminuir fontes excessivamente.
- **Acessibilidade:** textos e botões são HTML, com foco visível, estado selecionado, `fieldset` e `aria-label` no progresso. `prefers-reduced-motion` desativa animações.
- **Desempenho:** os fundos são arquivos WebP comprimidos e locais, sem chamadas de rede para imagens.
- **Privacidade:** não há ranking nem necessidade de conta; nome e respostas ficam no próprio dispositivo.
- **Conteúdo congelado:** oito perguntas, quatro classificações (Centelha, Estrategista, Guardiã, Insurgente) e transmissão misteriosa permanecem inalterados.

## Ajustes futuros opcionais

- Validar o enquadramento em celulares de 320, 390, 430 px, e no desktop após `npm run dev`.
- Ajustar a posição do fundo (`background-position`) apenas se algum tamanho de tela cortar o olho.
- Conferir a exportação de imagem nos navegadores efetivamente usados pelas participantes.

Esta é uma atualização da camada visual — não uma mudança das regras do quiz.
