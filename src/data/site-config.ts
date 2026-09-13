import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://music.tiomadev.com',
    title: 'Pensando em Clássicos',
    subtitle: 'Um blog sobre música, sob a minha perspectiva',
    description: 'Um lugar para compartilhar o que ando ouvindo, tocando e pensando sobre música.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre',
            href: '/about'
        },
        {
            text: 'Contato',
            href: '/contact'
        },
        {
            text: 'RSS',
            href: '/rss.xml'
        }
    ],
    socialLinks: [
    ],
    hero: {
        title: '',
        text: 'Meu nome é **Thiago Tioma**. Aqui escrevo sobre o que ando ouvindo, tocando e estudando: peças, compositores, teoria, equipamento e o que mais passar pela cabeça.\n\nSe quiser falar sobre código em vez de música, o lugar é o [blog.tiomadev](https://blog.tiomadev.com).',
        actions: [
            {
                text: 'Ler o blog',
                href: '/blog'
            }
        ]
    },
    subscribe: {
        enabled: false
    },
    postsPerPage: 8
};

export default siteConfig;
