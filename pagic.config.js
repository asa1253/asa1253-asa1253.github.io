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
                children: [
                    'linux/linux.md',
                    'linux/os.md',
                ],
                expanded: false
            },
            {
                text: '游戏',
                children: [
                    'game/game.md',
                    'game/3dm.md',
                    'game/steam.md',
                ],
            },
            {
                text: '网站',
                children: [
                    'web/web.md',
                    'web/blog.md',
                    'web/python.md',
                    'web/Software.md',
                    'web/ss.md',
                ],
            },
            {
                text: '学习',
                children: [
                    'xue/xue.md',
                ],
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
                children: [
                    'temp/temp.md',
                ],
            },
        ],
    },
};
