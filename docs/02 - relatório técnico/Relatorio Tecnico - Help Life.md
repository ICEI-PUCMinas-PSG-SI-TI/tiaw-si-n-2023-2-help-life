<<<<<<< HEAD:docs/02 - relatório técnico/Relatorio Tecnico - TEMPLATE.md
# Informações do Projeto
`TÍTULO DO PROJETO`  

HELP LIFE

`CURSO` 

Sistemas de Informação

## Participantes

> Os membros do grupo são:
<ul>
 <li>Ana Beatriz Costa Viana</li>
 <li>Gustavo de Assis Vilarino</li>
 <li>Mariana Vitória</li>
 <li>Matheus Barros</li>
 <li>Matheus Campos</li>
 <li>Vinicius Xavier</li>
</ul>
 

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

A doação de sangue é um ato que ajuda a salvar vidas todos os anos. Tal ato, representa um grande movimento no âmbito social, pois envolve trocas solidárias. Além disso, a doação de sangue corresponde a uma das estratégias voltadas à equidade da assistência à saúde da população, sendo um componente fundamental dos sistemas de saúde. (BRASIL, 2019)

Infelizmente, o Brasil é um dos países que têm de enfrentar o desafio de conciliar a grande demanda por hemoderivados e a baixa disponibilidade deste, de forma suficiente, além de garantir a sua qualidade e segurança. Segundo dados fornecidos pelo Ministério da Saúde, apenas 1,6% da população brasileira doa sangue regularmente. (ARRUDA et al., 2019; SILVA, et al, 2021)

O surgimento da pandemia do SARSC-COV-2 piorou ainda mais esse cenário, pois a  alta taxa de transmissão do vírus, ocasionou o isolamento social, o que refletiu significativamente nos serviços de doação de sangue, fazendo com que seu estoque chegasse a níveis críticos, o que consequentemente afetou e - ainda afeta - o tratamento de diversos pacientes (MARÇAL et al.,2022).

Para ser considerada adequada a oferta de sangue, deve ser realizado doações de sangue regulares, não remuneradas. Diante disso, nota-se que cada vez mais os serviços de hemoterapia buscam novas estratégias que possibilitem a manutenção do estoque de sangue nos limites aceitáveis, como, por exemplo, a realização de agendamentos de doações online (SILVA et al., 2021). 

Sendo assim, acredita-se que o uso de tecnologias pode favorecer a captação de doadores e a fidelização dos mesmos.

## Problema

Diante do exposto, o problema que se busca resolver é a baixa taxa de doação de sangue através da rápida conexão entre doadores e receptores. 



![Exemplo Matriz CSD](imaages/../images/Matriz_Alinha_HelpLife.jpeg)
![Exemplo Mapa de Influência](imaages/../images/Mapa_Inf_HelpLife.jpeg)
![Exemplo Brainstorm](imaages/../images/Brainstorm_HelpLife.png)
![Exemplo Mural de Possibilidades](imaages/../images/Mural_Possibilidades_HelpLife.png)



## Objetivos

Dentre os objetivos gerais, devemos considerar:

Incentivar a doação de sangue;
Facilitar a divulgação para campanhas de doação pessoais e regionais;
Desmistificar preconceitos e dúvidas acerca da doação de sangue;

Como objetivos específicos, podemos ressaltar:

Possibilitar que doadores de sangue doem para pessoas específicas.
Localizar hemocentros em uma determinada região.
Permitir que pessoas que necessitam de doações publiquem suas campanhas.
Permitir que ambos os usuários recebam notificações periódicas de pessoas da região que precisem do seu tipo sanguíneo.
Ter acesso a todas as campanhas.
Ter acesso às orientações antes e depois de doar sangue.


## Justificativa

Além de ser um ato de amor ao próximo, a doação de sangue tem diversos pontos positivos, entre eles:
Salvamentos de vidas: Ele é essencial para tratar pacientes que enfrentam situações de emergência médica, como cirurgias, acidentes automobilísticos, complicações no parto e tratamento de doenças graves, como câncer e anemia.
Não pode ser sintetizado: O sangue humano não pode ser fabricado artificialmente. Portanto, a única maneira de garantir um suprimento constante e suficiente de sangue para pacientes que precisam é através das doações regulares de voluntários.
Diversidade Genética: O sangue humano é diverso e varia de pessoa para pessoa. Algumas pessoas têm tipos de sangue raros ou específicos que só podem ser encontrados em uma pequena porcentagem da população. Doar sangue ajuda a manter uma variedade de tipos sanguíneos disponíveis para atender a todas as necessidades médicas.
Tendo em vista a importância deste ato de solidariedade, nota-se que, no Brasil, ainda não existem soluções que cumpram especificamente o papel de conectar as pessoas que desejam doar e as pessoas que precisam receber sangue de forma eficiente.

## Público-Alvo

O público alvo desta aplicação são pessoas de 20 a 50 anos que fazem uso de computador e/ou celular e que desejarem doar sangue e/ou receber. Estima-se que os usuários tenham, no mínimo, o ensino médio completo. Apesar da definição do público-alvo, qualquer pessoa entre 16 anos e 69 anos pode utilizar o site.
Nota-se também que os receptores podem não estar nesta faixa etária (como por exemplo, crianças que precisam de doações), neste caso, considera-se que os usuários representantes destes receptores estão dentro da faixa etária proposta.


 
# Especificações do Projeto

Para o sucesso do projeto foram utilizadas metodologias que permitissem que o grupo entendesse sobre o tema, o público alvo e o escopo da aplicação, tais como, tais como pesquisas na literatura atual, entrevistas qualitativas, mapas de empatia e mapas de contextualização. A partir dos dados obtidos foi possível elaborar as personas, histórias de usuário e interfaces.


## Personas e Mapas de Empatia

As personas criadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem. Elas tem como proposta representar que qualquer pessoa adulta e saudável pode ser um possível usuário do sistema Help Life.


> **PERSONA 01 - JOSÉ SILVA** 
> ![Exemplo de Persona](imaages/../images/Persona_1.png)

>  **PERSONA 02 - CARLOS COSTA** 
> ![Exemplo de Persona](imaages/../images/Persona_2.png)

>  **PERSONA 03 - AMANDA** 
> ![Exemplo de Persona](imaages/../images/Persona_3.png)

>  **PERSONA 04 - lIVIA** 
> ![Exemplo de Persona](imaages/../images/Persona_4.png)

>  **PERSONA 05 - CAROLINA** 
> ![Exemplo de Persona](imaages/../images/Persona_5.png)



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`             | QUERO/PRECISO ... `FUNCIONALIDADE`                            |PARA ... `MOTIVO/VALOR`                        |
|---------------------------------|---------------------------------------------------------------|-----------------------------------------------|
|Doador de sangue regular         | Receber notificações de hospitais que precisam de sangue      | Ajudar a salvar vidas                         |
|Receptora de sangue              | Informar amigos e familiares sobre a escassez de sangue       | Manter estoque de sangue em níveis seguros    |
|Doador de sangue                 | Quero saber onde estão os hemocentros disponíveis nas cidades | Ajudar pessoas ao redor do páis               |
|Doador que ja precisou de doação | Poder alternar entre perfil doador e receptor                 |Para poder registrar campanhas caso eu precise |
|Doadora de sangue                | Compartilhar campanhas com meus amigos                        |Para agendar doações juntos no mesmo local     |




## Requisitos

O escopo funcional e não funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.


### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                                        | Prioridade |
|------|-------------------------------------------------------------------------------------------------------------------------------|------------|
|RF-001| O sistema deve manter um usuário (cadastrar, alterar, excluir e consultar o usuário)                                          | ALTA       | 
|RF-002| O sistema deve permitir que o usuário consulte os pré-requisitos para a doação de sangue.                                     | ALTA       |
|RF-004| O sistema deve permitir que o usuário doador encontre pacientes que precisem de seu tipo sanguíneo.                           | ALTA       |
|RF-005| O sistema deve permitir que um usuário tenha dois perfis e que possa alternar entre eles, o perfil doador e o perfil receptor | ALTA       |
|RF-006| O sistema deve permitir que o usuário receptor insira sua própria campanha de doação                                          | ALTA       |
|RF-007| O sistema deve permitir que o usuário doador consulte os dados de sua próxima doação                                          | MÉDIA      |
|RF-008| O sistema deve enviar notificações para o usuário periodicamente para relembrar o usuário de seu compromisso                  | MÉDIA      |
|RF-009| O sistema deve sinalizar caso o usuário não possa doar sangue em determinado período de tempo e quando poderá doar novamente  | MÉDIA      |
|RF-010| O sistema deve permitir que o usuário compartilhe campanhas de doação para uma pessoa específica ou campanhas regionais.      | BAOCA      |
|RF-011| O sistema deve permitir que o usuário doador consulte suas doações passadas                                                   | BAIXA      |
|RF-012| O sistema deve permitir que o usuário consulte dúvidas frequentes e insira suas próprias dúvidas                              | BAIXA      |


### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.


|ID     | Descrição do Requisito                                                                                              |Prioridade |
|-------|---------------------------------------------------------------------------------------------------------------------|-----------|
|RNF-001| O site deve ter interface simples e agradável ao usuário                                                            |  ALTA     | 
|RNF-002| O site deve ter informações coerentes e corretas quanto a doação de sangue                                          |  ALTA     |
|RNF-003| O site deve ser responsivo e funcionar em desktop, celular e tablet                                                 |  MÉDIA    | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Opera) |  ALTA     | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.


|ID| Restrição                                                                                                                |
|--|--------------------------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo de 2023                                                        |
|02|O site deve se restringir às tecnologias básicas da Web no Frontend                                                       |
|03|A equipe não pode subcontratar o desenvolvimento do trabalho                                                              |
|04|A equipe, caso utilize, fará da inteligência artificial uma ferramenta, e não uma plataforma de desenvolvimento de código.|


# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estabeleceu-se como meta enfatizar a agilidade, acessibilidade e usabilidade da aplicação. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.


## User Flow

O fluxograma apresentado na Figura 07 mostra o fluxo de interação do usuário pelas telas do sistema. Tais telas serão abordadas de forma mais específica no Wireframes.


> ![Exemplo de UserFlow](imaages/../images/User_Flow_HelpLife.jpg)


## Wireframes

Conforme o fluxo de telas do projeto, apresentado no item anterior, a seguir estão dispostos os wireframes iniciais e os protótipos de alta fidelidade. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura X. Visando atingir os objetivos anteriormente citados, a estrutura padrão do site se divide em dois componentes principais:

Navbar: uma estrutura que possui os botões para a navegação das telas principais do site.
Main: a estrutura que irá apresentar os principais componentes de cada página.

> **ESTRUTURA PADRÃO DO SITE **:
> 
> ![Estrutura Padrão do Site](imaages/../images/Estrutura_Padrao_Site.png)

Landing Page
A landing page tem como objetivo introduzir as principais funcionalidades da aplicação e incentivar o usuário a se cadastrar no site. Ela reúne, principalmente, componentes visuais e animações, mas também possui os seguintes componentes interativos:
Navbar: possui o botão “Login”, que guia o usuário à página de login
Botões “quero doar” e “quero receber”: que guiam o usuário à uma página mais explicativa quanto às categorias de “Doador” e “Receptor”, para enfim levá-los à página de login
Botão começar agora: que também guiam o usuário à tela de login
Botões de compartilhamento: os botões possuem os logos das principais redes sociais se encontram ao final da tela, que gerarão um link para que o usuário compartilhe sobre a aplicação.

> **Langing Page - Wireframe**:
> 
> ![Langing Page](imaages/../images/Langing_Page.png)

> **Langing Page - Alta Fidelidade**:
> 
> ![Langing Page Alta Fidelidade](imaages/../images/Langing_Page_Alta_Fidelidade.png)

Tela de Cadastro
A página de cadastro permite que o usuário cadastre seus dados no site para, assim, usufruir de todas as funcionalidades do mesmo. Ela possui os campos mais utilizados nas telas de cadastro em geral, possuindo como diferencial o campo que pede ao usuário que selecione seu tipo sanguíneo.

> **Tela de Cadastro - Wireframe**:
> 
> ![Tela de Cadastro](imaages/../images/Tela_Cadastro_Wireframe.png)

> **Tela de Cadastro - Alta Fidelidade**:
> 
> ![Tela de Cadastro](imaages/../images/Tela_Cadastro_AltaFidelidade.png)

Tela de Login
A tela de login cumpre o objetivo de validar os dados do usuário já cadastrado no site. A tela de login possui duas etapas, no primeiro momento, a validação dos dados é realizada, no segundo, o usuário pode escolher se ele quer utilizar o perfil de “Doador” ou de “Receptor”.

>  **Tela de Login - Wireframe**:
> 
> ![Tela de Login](imaages/../images/Tela_Login_Wireframe.png)

 **Tela de Login - Alta Fidelidade**:
> 
> ![Tela de Login](imaages/../images/Tela_Login_AltaFidelidade.png)

**Tela de Login 2 - Alta Fidelidade**:
![Tela de Login 2](imaages/../images/Tela_Escolha_Perfil.png)



Tela Principal do Usuário
A tela principal do usuário “Doador” possui informações sobre as doações do usuário:
Sua próxima doação: mostra o local da doação, horário, receptor e o hospital do receptor. Além disso, pode guiar o usuário ao mapa do local de doação ou às orientações e pré-requisitos para a doação.
Suas últimas doações: reúne os dados básicos sobre as últimas doações realizadas pelos usuários.
A do usuário “Receptor” concentra as informações sobre as suas campanhas ativas.

**Tela Principal do Usuário - Wireframe**:
![Tela de Principal do Usuario ](imaages/../images/Tela_Principal_Usuario_Wireframe.png)

**Tela Principal do Doador - Alta Fidelidade**:
![Tela de Principal do Doador ](imaages/../images/Tela_Doador_AltaFidelidade.png)

**Tela Principal do Receptor - Alta Fidelidade**:
![Tela de Principal do Receptor ](imaages/../images/Tela_Receptor_AltaFidelidade.png)


Tela Encontrar Receptores
A tela principal do usuário “Doador” possui informações sobre as doações do usuário:

**Tela Encontrar Receptor - Wireframe**:
![Tela de Encontrar Receptor](imaages/../images/Tela_Encontrar_Receptores_Wireframe.png)

**Tela Encontrar Receptor - Alta Fidelidade**:
![Tela de Encontrar Receptor- Alta Fidelidade ](imaages/../images/Tela_Encontra_Receptor_AltaFidelidade.png)


Tela Perguntas Frequentes 

A tela de perguntas frequentes tem como proposta solucionar as dúvidas mais comuns que os usuários têm acerca da doação de sangue. Os componentes da interface seguem:
Cartão de dúvida: apresentam-se inicialmente fechados apenas com o nome da pergunta aparecendo, caso o usuário clique em algum deles, o cartão irá se expandir e exibir as informações a respeito do tema.
Link para adicionar uma dívida: ao final da página encontra-se um link para que o usuário possa cadastrar uma dúvida caso ele não encontre sua dúvida ali. Este link deve enviar o usuário para um formulário em que ele cadastrará sua dúvida, que será analisada por um time técnico e será adicionada ao site juntamente com a sua resposta.

**Tela Perguntas Frequentes - Wireframe**:
![Tela de Perguntas Frequentes](imaages/../images/Tela_Perguntas_Frequentes.png)

**Tela Perguntas Frequentes - Alta Fidelidade**:
![Tela de Perguntas Frequentes- Alta Fidelidade](imaages/../images/Tela_Perguntas_Frequentes_AltaFidelidade.png)


Tela Pré-Requisitos
A tela Pré-Requisitos contém, em forma de lista UL, os requisitos, impeditivos e orientações para a doação de sangue. As informações devem ser tiradas de órgãos públicos de saúde. 
Esta tela pode ser acessada pelo botão “Pré-requisitos e informações” na Navbar do site e, antes de finalizar o agendamento de uma doação, o usuário recebe um pop-up que o lembra de verificar os pré-requisitos caso ainda não tenha feito.

**Tela Pré-Requisitos - Wireframe**:
![Tela de Perguntas Frequentes](imaages/../images/Pre_Requisitos_Wireframe.png)

**Tela Pré-Requisitos - Alta Fidelidade**:
![Tela de Perguntas Frequentes- Alta Fidelidade](imaages/../images/Pre_Requisitos_Alta_Fidelidade.png)

**Tela Encontrar Hemocentros**
A tela "Encontrar Hemocentros" também é uma das principais do site, e nela, o usuário pode pesquisar - utilizando seu endereço ou CEP - quais são os Hemocentros na sua região/região pesquisada 

**Tela Encontrar Hemocentros - Wireframe**:
![Tela de Encotrar Hemocentrps](imaages/../images/Tela_Encontra_Hemocentro.png)

**Tela Encontrar Hemocentros - Alta Fidelidade**:
![Tela de Encontrar Hemocentros- Alta Fidelidade](imaages/../images/Tela_Encontra_Hemocentro_AltaFidelidade.png)




**Tela Compartilhe a causa**

Esta tela é destinada ao compartilhamento de campanhas de doações de sangue pessoais ou regionais. Nela, qualquer usuário pode cadastrar e compartilhar uma campanha. Seguem seus principais componentes:
-Barra de pesquisa: permite que o usuário procure o nome de uma campanha ou o nome de um usuário que esteja com uma campanha cadastrada. 
- Botões de filtro: permitem o usuário a realizar uma busca personalizada, tendo as categorias de:
    -> Tipo sanguíneo 
    -> Região
    -> Hospital
- Cartão da campanha: o principal componente da tela com as seguintes características:
   -> Uma imagem ilustrativa da campanha
   -> O nome do usuário que publicou
   -> Um texto opcional, escrito pelo usuário
   -> Um botão para compartilhar a campanha, ele gera um link que pode ser compartilhado em qualquer plataforma

  **Tela Compartilhe a Causa - Alta Fidelidade**:
![Tela Compartilhe a Causa- Alta Fidelidade](imaages/../images/Tela_Compartilhe_Causa_AltaFidelidade.png)



**Tela Agendar Doação**

Esta tela possui um formulário para realizar o agendamento da doação de sangue, inspirado nas perguntas realizadas para o agendamento presencial ou via telefonema e nas plataformas de hemocentros que já possuem um formulário para agendamento online.
O usuário pode acessar esta tela clicando no botão “Agendar doação” na Navbar presente em todas as páginas do site, ou, ao encontrar um receptor e clicar em “Fazer doação” em seu cartão. Neste caso, os dados do receptor são preenchidos automaticamente.

**Tela Agendar Doação - Wireframe**:
![Tela Agendar Doacao](imaages/../images/Tela_Agenda_Doacao.png)

**Tela Agendar Doação - Alta Fidelidade**:
![Tela Agendar Doacao- Alta Fidelidade](imaages/../images/Tela_Agenda_Doacao_AltaFidelidade.png)


##Link com protótipo interativo do Figma
[Fimga - Help Life](https://www.figma.com/file/bjhcX1Hse7eNc4FHsYYSTn/Sangue?type=design&node-id=0-1&mode=design&t=FvGCFw4COHySvljj-0)


# Metodologia

As metodologias de um projeto de software são de suma importância para a organização e integração da equipe. As metodologias adotadas pela equipe foram escolhidas com base nas práticas mais comuns do mercado de trabalho atualmente.

## Divisão de Papéis

Scrum Master:  Vinicius Xavier
Product Owner:  Ana Beatriz
Equipe de Desenvolvimento
Gustavo Vilarino (Desenvolvedor Front-end)
Mariana Vitória (Desenvolvedora Front-end)
Matheus Barros (Desenvolvedor Front-end)
Matheus Campos (Desenvolvedor Front-end)	



## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente                                       | Plataforma              |Link de Acesso                                                               |
|------------------------------------------------|-------------------------|-----------------------------------------------------------------------------|
|Documentos do Projeto                           | Google Drive            |https://drive.google.com/drive/u/7/folders/1KJAQG6YixIqjxkikxgN2Xg1knOEM1zSs | 
|Repositório de código                           | GitHub                  |https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20231-sanguis       | 
|Projeto de Interface                            | Figma                   |https://www.figma.com/file/bjhcX1Hse7eNc4FHsYYSTn/Sangue?type=design&node-id=0-1&mode=desig| 
|Gerenciamento de Projeto                        | Trello                  |https://trello.com/b/6aP5EBjz/tiaw-sanguis                                   |
|Fluxo de Usuário                                | Miro                    |https://https://miro.com/app/board/uXjVMmvwGTg=/?share_link_id=155677593325  |
|Personas, Brainstorm e Mural de Possibilidades  | Canva                   |https://www.canva.com/design/DAFtxQe4h3o/w1mkWdQ3UDnxxHYcL5WQUg/edit         |



## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
=======
# Informações do Projeto
`TÍTULO DO PROJETO`  

......  COLOQUE AQUI O SEU TEXTO ......

`CURSO` 

......  COLOQUE AQUI O SEU TEXTO ......

## Participantes

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua a lista dos membros da equipe com seus nomes completos.
>
> Os membros do grupo são: 
> - Fulano da Silva
> - Ciclano Albuquerque

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

......  COLOQUE AQUI O SEU TEXTO ......

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

......  COLOQUE AQUI O SEU TEXTO ......

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas, Empatia e Proposta de Valor

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/proposta_valor.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
>>>>>>> 576e4073eb686b7caee5801aac8f95491eb4d605:docs/relatorio/Relatorio Tecnico - TEMPLATE.md
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
