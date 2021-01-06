export default {
    srcDir: 'docs',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next',],
    title: 'Bookmarks',
    description: '个人收藏备份。',
    github: 'https://github.com/asa1253/asa1253.github.io',
    head: React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
    nav: [
        {
            text: '本网站使用 Pagic 构建',
            link: 'https://github.com/xcatliu/pagic',
            target: '_blank',
        },
    ],
    sidebar: {
        '/': [
            {
                link: 'linux/README.md',
                children: ['linux/linux.md'],
            },
            {
                text: 'linux/README.md',
                children: ['linux/linux.md'],
            },
            {
                text: 'video/README.md',
                children: [
                    'video/video.md',
                    'video/pt.md',
                ],
            },
        ],
    },
};