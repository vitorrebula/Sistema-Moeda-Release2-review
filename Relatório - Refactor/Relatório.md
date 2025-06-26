# Relatório de Análise Crítica e Refatoração do Projeto realizado pelo G4

## 1. Identificação do Grupo Avaliador

**Grupo Avaliador:** G3  
**Integrantes:**

- Lucas Giovine
- Pedro Porto
- Vitor Rebula
- Thiago Cury

## 2. Análise Crítica do Projeto

### 2.1. Arquitetura e Tecnologias Utilizadas

- Descrição da arquitetura:  
  A aplicação segue o padrão de arquitetura MVC (Model–View–Controller), estendido com o uso das camadas Service e Repository(DAO), abordagem comum em projetos desenvolvidos com Spring Boot. Essa estrutura favorece a separação de responsabilidades, tornando o sistema mais modular, testável e de fácil manutenção.

- Tecnologias:
  O backend foi desenvolvido em Java utilizando o framework Spring Boot. O frontend utiliza React com JavaScript. O sistema adota o banco de dados relacional MySQL para persistência das informações.

- Observações:
  A arquitetura adotada é sólida e adequada à proposta da aplicação. Os diretórios estão bem organizados e pertinentes.

### 2.2. Organização do GitHub

O GitHub apresenta todas as informações pertinentes ao trabalho, um único ponto de atenção seria uma descrição de como utilizar o software no README principal, bem como as imagens dos diagramas desenvolvidos.

### 2.3. Dificuldade para Configuração do Ambiente

Como o repositório não apresenta instruções detalhadas sobre como executar o sistema localmente, usuários que não estejam familiarizados com tecnologias como Spring Boot, React ou configurações de banco de dados podem encontrar certa dificuldade para rodar o projeto.

### 2.4. Sugestões de Melhorias

- A inclusão de um guia de instalação no README seria uma ótima melhoria para facilitar o uso e a contribuição de terceiros;
- Em relação ao código, as refatorações são melhorias plausíveis;
- Uma alternativa viável, especialmente em cenários de grande volume de dados — como no caso da estrutura de Transações —, seria considerar o uso de um banco de dados não relacional.

## 3. Refatorações Realizadas

### 3.1. Resumo das Refatorações

As refatorações foram focadas em melhorar a legibilidade do código, a organização de responsabilidades e a padronização de nomenclaturas. Os pontos escolhidos refletem boas práticas que podem facilitar a manutenção futura do sistema.

### 3.2. Refatoração 1: _[Título descritivo]_

Local do código:  
Antes da refatoração:  
Depois da refatoração:
Refatoração aplicada:  
Justificativa da mudança:

## 4. Considerações Finais

A experiência de análise do projeto permitiu visualizar na prática os desafios de uma atividade de refatoração, que é muito mais complicada do que parece. Além disso, proporcionou um olhar mais crítico em relação a isso, uma habilidade muito importante na formação completa de um desenvolvedor. Refatorar não é apenas “mexer no código”, é identificar pontos frágeis ou confusos e aplicar melhorias que aumentem a legibilidade, a manutenibilidade e a qualidade geral do sistema. Essa atividade reforçou a importância de escrever código limpo, modular e bem estruturado.
