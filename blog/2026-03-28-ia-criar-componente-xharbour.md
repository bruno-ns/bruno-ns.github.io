---
slug: utilizei-ia-para-criar-um-componente-em-uma-linguagem-de-programação-desconhecida
title: Utilizei IA para criar um componente em uma linguagem de programação "desconhecida"
authors: bruno-silva
tags: [ia, harbour]
---

A IA realmente consegue programar de forma autónoma numa linguagem "desconhecida" e com pouca documentação? 🤔

<!-- truncate -->

**Se você quiser pular a história e ir direto para a prática, vá para a seção: [Insights antes de falar com a IA](#insights-antes-de-falar-com-a-ia).**

Apesar da minha base de programação ser Java — tanto no aprendizado da faculdade quanto profissionalmente —, em 2020 recebi o desafio de desenvolver em xHarbour (ou Harbour).

Nunca tinha ouvido falar dessa linguagem até então. Claro que fui pesquisar na internet e percebi que ela não fugia da realidade de uma linguagem de programação padrão. Ela é orientada a objetos e possui uma estrutura e sintaxe comuns, com seus tradicionais "IF e ELSE". Falei com meu contratante, aceitei o compromisso e comecei minha jornada de programação em xHarbour.

## A linguagem desconhecida (xHarbour)

É uma linguagem com pouco conteúdo disponível na internet, mas o que existe é bom e ajuda muito. Fiz o que todo desenvolvedor faz (ou deveria fazer) ao aprender uma linguagem nova: fui ler a documentação oficial. Comecei a ver as funções nativas, sintaxe, como construir uma classe e fui destrinchando tudo. Em paralelo, comecei a programar na empresa, perguntando muito para os colegas de trabalho que já dominavam a tecnologia — e fazia muitas perguntas mesmo!

> *Faço a observação de que a chamei de linguagem "desconhecida" no título porque ela não costuma aparecer nos resultados principais de pesquisas como a [Stack Overflow Developer Survey](https://survey.stackoverflow.co).*

Apesar do pouco conteúdo online, fui aprendendo com facilidade. Confesso que fiquei surpreso com o que a linguagem pode fazer. Ela não fica para trás em comparação com muitas linguagens modernas. Fui analisando o código-fonte nativo e os exemplos em anexo, me aprofundando a cada nova demanda.

Uma das coisas que tínhamos era uma biblioteca gráfica (GUI) com diversos componentes, da qual eu também tinha acesso ao código-fonte. Percebi que dava para criar componentes específicos para o projeto que assumi, visando diminuir a necessidade de codificação repetitiva ou otimizar telas existentes. Acabei não fazendo isso na época devido ao volume de demandas urgentes e falta de tempo hábil.

## A Era da Inteligência Artificial

Atualmente (escrevo isso em 2026), estamos em uma corrida das Inteligências Artificiais. Tudo começou a ganhar força entre 2022 e 2023, com evoluções significativas. Estive testando diversas IAs, modelos e contextos. Percebi que ajudavam bastante, mas quando chegava na hora de **desenvolver projetos reais**, o resultado não era o que eu esperava.

Falo de desenvolver um projeto de médio porte: rotas, regras de negócio complexas, validação de dados, autenticação de dois fatores, arquitetura, testes unitários, CI/CD, etc. Na virada do semestre de 2025, tentei criar um projeto em Java com a ajuda da IA. Fiz um esboço em Markdown sobre o objetivo, arquitetura e camadas. Fui enviando *prompts* e ela gerou uma lista de tarefas ("To-Do"). Refinei essa lista e instruí a IA a fazer parte por parte.

A premissa era: antes de fazer o *commit*, a IA precisava testar fazendo o *build*. Depois, eu mesmo testava manualmente para evitar falsos positivos e lia **cada linha** de código gerada. Nada, absolutamente nada, do que a IA escreveu eu deixei de ler, olhei cada código que ela gerou.

Nas primeiras tarefas, foi tranquilo. Mas chegou um momento em que a IA começou a errar. Teve momentos onde eu desfazia tudo, apontava o erro, dava novas instruções e pedia para refazer. Até que deu ruim: ela entrou em um loop que parecia interminável. Ela errava a codificação, o *build* quebrava, ela mesma lia o erro e tentava corrigir, mas só piorava. Começou a "alucinar" e fugiu completamente do escopo.

### Minha Decepção

Chegou a um ponto em que a IA deletou toda uma regra de negócio apenas para o erro sumir no *build*. Isso, para mim, foi o fim. Já tinha gasto quase o meu fim de semana inteiro, pra não dizer o meu final de semana inteiro, para não ter algo consistente.

> *Devo destacar que o básico de um projeto a IA entregou perfeitamente: login, rotas, repositórios, configurações de Git e bibliotecas. Entre outras coisas que todo inicio de projeto tem.*

Fiquei decepcionado e cansado com o que foi gerado. Ficou a lição: a IA servia para várias coisas, mas não para desenvolver de ponta a ponta um projeto de médio porte. E não era tão complexo o que eu estava querendo fazer.

## Surgimento de uma nova chance

Chegamos a 2026. Muita água passou debaixo da ponte: evoluções de ferramentas, melhorias de contexto, etc. Um dia, lendo o blog de um desenvolvedor e empresário que teve exatamente o mesmo problema que eu, me deparei com o artigo: [Do Zero à Pós-Produção em 1 Semana - Como usar IA em Projetos de Verdade](https://akitaonrails.com/2026/02/20/do-zero-a-pos-producao-em-1-semana-como-usar-ia-em-projetos-de-verdade-bastidores-do-the-m-akita-chronicles/).

Pelos relatos, a IA finalmente havia chegado a um estágio muito superior. Diante dessa nova perspectiva, resolvi colocá-la à prova: vou fazer a IA criar um componente visual complexo em xHarbour, herdando classes GUI de uma biblioteca já existente. Vamos ver se ela vai dar conta.

## Insights antes de falar com a IA

Lendo a publicação citada, identifiquei algo que eu já fazia instintivamente, mas não deixava claro para a IA: o uso da metodologia **Extreme Programming (XP) e Pair Programming**. Como diz o artigo: *"Um gerador de código recebe uma spec e devolve output. Um par de pair programming conversa."*

Deixei claro para a IA que usaríamos XP. Eu seria o **Navegador Sênior** (definindo a direção, questionando decisões, corrigindo a rota) e a IA seria o **Piloto** (escrevendo o código, testando e apresentando soluções).

*(Confissão: não apliquei testes e nem CI abordados no XP neste momento. Fiz isso deliberadamente por um bom motivo, não me julgue!)*

O *insight* de ouro foi esse: usar uma metodologia clara, tratar a IA como uma aprendiz e assumir o controle direcional.

## Fazendo a IA estudar

Iniciei criando um arquivo chamado `IDEA.md`. Lá, escrevi que usaríamos Extreme Programming, nossos papéis, o objetivo do projeto, a linguagem e a estrutura de pastas.

Como o xHarbour tem pouca base de conhecimento pública, fiz a IA "estudar" a linguagem. Direcionei a leitura para uma pasta específica contendo uma biblioteca com código orientado a objetos bem estruturado em xHarbour, além de sua documentação. Pedi no prompt para analisar com profundidade cada arquivo e as heranças de classes.

A IA fez a leitura em um tempo bom, nem rápido demais mas também não demorou uma hora pra fazer toda a leitura das pasta.

Após a leitura, executei um comando próprio da ferramenta de IA (`/init`). Basicamente, isso cria um arquivo chamado `AGENTS.md`, que funciona como um manual de instruções e regras para a IA não se perder durante as sessões. (Muitas IAs utilizam essa mecânica de instrução em nível de projeto, operando diretamente do terminal Linux na pasta raiz).

> Observação: Eu estava utilizando a IA em um terminal linux. Muitas IAs para desenvolvimento estão com esse tipo de interação onde você utiliza o terminal para falar diretamente com a IA e ela tem acesso à pasta ao qual você está no terminal (desde que você autorize a leitura da pasta).

A IA processou a biblioteca e criou diretrizes de codificação, sintaxe, sugestões de melhorias e padrões de comentários. Isso gerou 6 arquivos Markdown de regras, referenciados no `AGENTS.md`.

```text
Estrutura gerada pela IA para entender o contexto do projeto:
.iacode/
├── .gitignore
├── commit-flow.md
├── component-flow.md
├── estudo.md
└── rules/
    ├── comentarios.md
    ├── library.md
    ├── melhorias.md
    └── sintaxe.md
```

| Nota: O nome da pasta `.iacode` é fictício. Resolvi mascarar para você que está lendo este material não ficar preso ou migrar para uma IA específica, mas buscar saber se a sua IA tem os mesmo recursos relatados aqui. O arquivo `.gitignore` foi a própria IA que criou.

## Componente

Finalemnte comecei o desenvolvimento do primeiro componente em xHarbour: um input customizado para entrada de dados, como qualquer `<input>` da vida. Descrevi a classe pai da qual herdar, o nome do arquivo, a necessidade de um arquivo `.ch` para constantes (DEFINE no Harbour) e a criação de pseudofunções. Pedi também uma implementação nativa de validação de CPF/CNPJ (com mensagens e mudança de cor de fundo em caso de erro), validação que considero básica para este tipo de componente.


Claro que aqui eu estou resumindo bastante o prompt enviado para IA, pois se tratava de várias linhas. Gastei bons 30 minutos elaborando esse prompt detalhado — e mais alguns minutos preparando um café.

Enviei as instruções e a "mágica" começou. A IA criou uma lista de to-do no terminal e foi executando. Na primeira revisão do código gerado, percebi a falta de inicialização de algumas variáveis da classe herdada, atributos duplicados e uso de constantes não declaradas no arquivo `.ch`.

Relatei os detalhes para a IA. Instruí que a função de validação de CPF/CNPJ poderia ser simplificada e extraída para um arquivo `.prg` dedicado.

> Peço perdão por não postar aqui os prompts utilizados, pois eu não esperava que a IA iria cumprir tão bem o que eu estava querendo, pois afinal de contas eu já tinha um tralma de ela não fazer corretamente o que pedi, devido a isso não estava com boas expectativas.
> Mas como a IA cumpriu o que eu estava querendo me deixou bem alegra e resolvi escrever relatando um pouco a respeito.

### Testando o componente

Depois de um belo tempo e mais algumas interações com a IA finalmente fui testar o componete instanciando-o por `REDEFINE` em um _Dialog_. E adivinhe só? Não funcionou, gerou um erro, rsrsrsrs. 

Já estava esperando um erro. Mas pra minha alegria era algo muito simples, era a falta de declaração de uma constante que vinha da classe pai. Bastou criar a constante no arquivo `.ch` e pronto, por incrivel que pareça **funcionou perfeitamente**, validou o CPF e CNPJ que digitei, exibiu mensagens e mudou a cor do fundo conforme solicitado. 

Fiquei bem surpreso e alegre ao mesmo tempo por conseguir fazer a IA escrever todo o código enquando eu era o copiloto instruindo ela. **Sim, eu não escrevi nada de código, apenas prompts e revisões.**

> Teve alguns detalhes bem superficiais aos quais não relatei aqui ao quais julguei não ser necessários para tentar ser mais direto no que eu fiz. Mas tentei relatar aqui cada detalhe feito.

## Minha impressão

Tentando analisar de um ângulo fora da caixa posso dizer: se eu não tivesse me aprofundado na linguagem nativamente, não saberia como direcionar a IA. Fazer um componente exige estrutura, comportamento e métodos. Apesar de ser programação um componente não é tão simples assim. Por isso entender a fundo a linguagem continua sendo essencial.

Conhecer a ferramenta da IA e ler sua documentação também é crucial. Sem isso, eu não saberia o caminho, os comandos de terminal disponíveis e o melhor modelo a escolher.

Sigo com o lema de que sou um **eterno aprendiz**: *"Ensine ao justo, e ele aumentará em saber"* (Provérbios 9:9b). Continuarei explorando a IA para que ela gere mais valor com menos atrito.

--- 

## Fluxo para facilitar a vida

A partir de toda a interação, tive a ideia de criar um fluxo para criação de novos componetes para que a IA não cometesse os mesmo erros. Afinal de contas fluxo e comandos é uma das ferramentas embutida na IA ao qual eu estava utlizando. (Resalvo que isso não é exclusivo mas muitas outras IAs para desenvolvedores usam este mesmo recurso) 
E acbou criando um arquivo chamado `.iacode/component-flow.md`

Nesta mesma pegada, criei um fluxo e comando para fazer commit, pra acelerar o meu processo de commit, pricipalemnte a parte de descrever o que foi feito, a parte mais demorada e "chatinha" de fazer. Gerou o arquivo `.iacode/commit-flow.md`

Agora basta eu enviar o comando `/component` ou `/commit` então a IA irá iniciar um fluxo próprio para cada uma dos pedidos.

## Próximos passos

Vou continuar evoluindo este componete adicionando busca e validação de CEP, validação de telefone, disparo de eventos e outras necessidades do dia a dia em xHarbour. O objetivo é facilitar o trabalho não apenas meu, mas de toda a equipe.

## Dados do Projeto

Levei cerca de 11 horas (duas noites de trabalho) para finalizar tudo. O esforço resultou em 7 commits distintos (3 features, 1 chore, 1 fix e 2 docs).

### Componente gerado

| Arquivo                 | Linhas    | Tipo            |
| ----------------------- | --------- | --------------- |
| `componente.prg`        | 595       | xHarbour (.prg) |
| `componente.ch`         | 158       | Include (.ch)   |
| `valida.prg`            | 442       | Funções (.prg)  |
| **Subtotal componente** | **1.195** | **Código**      |

### Arquivos de Contexto da IA
| Arquivo                | Linhas    | Tipo                  |
| ---------------------- | --------- | --------------------- |
| `commit-flow.md`       | 287       | Documentação de fluxo |
| `component-flow.md`    | 221       | Documentação de fluxo |
| `estudo.md`            | 79        | Estudo                |
| `AGENTS.md`            | 601       | Manual do Agente      |
| `rules/*.md`           | 934       | Regras                |
| **Subtotal .aicode** | **2.122** | **Documentação**      |