# music.tiomadev

Blog sobre música de Thiago Tioma, construído com [Astro](https://astro.build) e o tema [Dante](https://github.com/JustGoodUI/dante-astro-theme).

## Comandos

| Comando        | Ação                                        |
| :------------- | :------------------------------------------ |
| `pnpm install` | Instala as dependências                     |
| `pnpm dev`     | Servidor de desenvolvimento em `:4321`      |
| `pnpm build`   | Roda `astro check` e gera o site em `dist/` |
| `pnpm preview` | Serve o build localmente                    |
| `pnpm lint`    | ESLint                                      |
| `pnpm format`  | Prettier                                    |

Com Docker: `docker compose up` sobe o servidor de desenvolvimento; o `Dockerfile` gera uma imagem nginx com o site estático.

## Escrevendo um post

Crie um arquivo `.md` ou `.mdx` em `src/content/blog/`:

```md
---
title: Título do post
excerpt: Resumo curto exibido na listagem e no RSS.
publishDate: 2026-09-13T12:00:00-03:00
updatedDate: 2026-09-14T12:00:00-03:00 # opcional
isFeatured: false # aparece na home
tags:
  - Álbuns
seo: # opcional
  image:
    src: '../../assets/images/capa.jpg'
    alt: Descrição da imagem
---

Conteúdo em Markdown.
```

Imagens usadas nos posts ficam em `src/assets/images/` e são otimizadas pelo Astro.

## Configuração

Título, descrição, navegação, links sociais e o texto do hero ficam em `src/data/site-config.ts`. As páginas estáticas (Sobre, Contato) ficam em `src/content/pages/`.
