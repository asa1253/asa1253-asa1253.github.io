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
            text: '源码',
            link: 'https://github.com/asa1253/asa1253.github.io',
            target: '_blank',
        },
    ],
    sidebar: {
        '/': [
            '/README.md',
            {
                text: 'linux',
                expanded: false,
                children: [
                    'linux/linux.md',
                    'linux/os.md',
                ],
            },
            {
                text: '游戏',
                expanded: false,
                children: [
                    'game/game.md',
                    'game/3dm.md',
                    'game/steam.md',
                ],
            },
            {
                text: '网站',
                expanded: false,
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
                expanded: false,
                children: [
                    'xue/xue.md',
                ],
            },
            {
                text: '视频',
                expanded: false,
                children: [
                    'video/video.md',
                    'video/pt.md',
                ],
            },
            {
                text: '临时',
                expanded: false,
                children: [
                    'temp/temp.md',
                ],
            },
        ],
    },
};
