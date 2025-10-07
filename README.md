# 📺 Syndata em Vídeo

Este projeto tem como objetivo disponibilizar de forma organizada e
acessível **vídeos tutoriais** para clientes, funcionários e demais
usuários do sistema Syndata.\
A aplicação foi construída com foco em **usabilidade**,
**acessibilidade** e **performance**, garantindo uma experiência fluida
tanto em desktop quanto em dispositivos móveis.

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   **HTML5** → Estrutura semântica das páginas.\
-   **CSS3** → Estilização, responsividade e personalização do tema
    claro/escuro.\
-   **JavaScript (Vanilla)** → Interatividade da página (menu lateral,
    busca, tema, botão "topo").\
-   **Font Awesome** → Ícones modernos e acessíveis.\
-   **Google Fonts (Inter)** → Tipografia limpa e legível.

------------------------------------------------------------------------

## ✨ Funcionalidades

-   **Menu lateral responsivo** com acessibilidade (abrir/fechar via
    teclado, overlay e foco controlado).\
-   **Busca inteligente** por seções e vídeos.\
-   **Alternância de tema (claro/escuro)** com preferência salva no
    `localStorage`.\
-   **Botão "Voltar ao topo"** com rolagem suave.\
-   **Vídeos organizados por seções** em um layout de grid responsivo.\
-   **Links para redes sociais e contato** no rodapé.

------------------------------------------------------------------------

## 🔧 Melhorias aplicadas

Durante a evolução do projeto, foram implementadas diversas melhorias
visando **experiência do usuário (UX/UI)**, **acessibilidade** e
**desempenho**:

### 🔎 Pesquisa

-   **Feedback visual quando não há resultados** → agora o usuário é
    informado com a mensagem *"Nenhum vídeo encontrado"*, evitando
    confusão.\
-   **Botão de busca funcional** → além do input em tempo real, o botão
    🔍 também dispara a pesquisa, respeitando diferentes hábitos de uso.

### 🎨 Tema escuro/claro

-   **Transição suave** no `body`
    (`transition: background-color 0.3s ease, color 0.3s ease;`) →
    melhora a experiência ao alternar entre os modos, evitando o "flash"
    de cores brusco.

### 📱 Acessibilidade no menu lateral

-   **Foco inicial** → ao abrir o menu, o foco vai para o primeiro link
    de navegação.\
-   **Retorno do foco** → ao fechar o menu, o foco volta para o botão ☰
    Menu, evitando perda na navegação via teclado.

### 🎥 Vídeos

-   **Lazy Loading nos iframes (`loading="lazy"`)** → vídeos do YouTube
    só carregam quando estão próximos da área visível, melhorando
    desempenho principalmente em dispositivos móveis.

### 🔝 Botão "Voltar ao topo"

-   **Acessibilidade** → adicionado
    `aria-label="Voltar ao início da página"`.\
-   **Ícone visual moderno** → uso de ícone com Font Awesome para melhor
    estética.

### 🏷️ Estrutura HTML

-   **IDs únicos** → corrigido conflito de duas seções com
    `id="centro"`. Agora a seção "Contas" utiliza `id="contas"`,
    melhorando navegação e pesquisa.

### ⚡ Performance e SEO

-   **Meta description** → otimização para buscadores (SEO).\
-   **Imagens compactadas** → carregamento mais rápido e responsivo.\
-   **Script com `defer`** → evita bloqueio do carregamento da página,
    melhorando tempo de renderização.

------------------------------------------------------------------------

## 🎨 Outras melhorias de design e experiência do usuário

### Estrutura e Navegação

-   **Header fixo com menu de navegação** → mantém os acessos principais
    sempre visíveis.\
-   **Menu lateral moderno e corporativo** → substituição do horizontal,
    melhorando usabilidade em layouts corporativos.\
-   **Footer sticky com gradiente e informações adicionais** → garante
    que informações de contato e links extras estejam sempre
    disponíveis.

### Galerias e Imagens

-   **Layout responsivo (4/2/1 colunas)** → adaptação automática ao
    tamanho da tela.\
-   **Lightbox animado para visualização de imagens** → clicando em uma
    imagem abre-se modal com navegação entre as imagens.

### Tipografia e Estilo

-   **Tipografia moderna via Google Fonts (Inter)** → leitura mais
    confortável.\
-   **Gradientes e cores modernas** → visual mais atrativo e atualizado.

### Interações

-   **Scroll suave para menu e botão topo** → melhora a experiência de
    navegação.\
-   **Botão "Voltar ao topo" moderno** → ícone estilizado e acessível.

------------------------------------------------------------------------

## 🚀 Como executar o projeto

1.  Clone este repositório:

    ``` bash
    git clone https://github.com/seu-usuario/syndata-videos.git
    ```

2.  Acesse a pasta do projeto:

    ``` bash
    cd syndata-videos
    ```

3.  Abra o arquivo **Index.html** no navegador.

------------------------------------------------------------------------

## 📌 Próximos passos (possíveis melhorias futuras)

-   Adicionar filtro por categorias com dropdown.\
-   Implementar versão **PWA** (aplicação instalável).\
-   Cache inteligente para vídeos mais acessados.

------------------------------------------------------------------------

## 👨‍💻 Autor

Projeto desenvolvido por **\[André Narcizo\]** com foco em acessibilidade,
usabilidade e otimização de performance.
