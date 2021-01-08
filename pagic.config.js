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
            '/README.md',
            {
                text: 'linux',
                children: ['linux/README.md'],
            },
            {
                text: '游戏',
                children: ['game/README.md'],
            },
            {
                text: '网站',
                children: ['web/README.md'],
            },
            {
                text: '学习',
                children: ['xue/README.md'],
            },
            {
                text: '视频',
                children: [
                    'video/video.md',
                    'video/pt.md',
                ],
            },
            {
                text: '临时',
                children: ['temp/README.md'
                ],
            },
        ],
    },
};
