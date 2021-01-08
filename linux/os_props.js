import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "游戏",
        "link": "game/index.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "linux/os.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linux/os.html",
    'title': "系统",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>系统</h1>\n<ul>\n<li><a href="http://www.wepe.com.cn/">微PE工具箱 - 最好用的WinPE装机维护工具</a></li>\n<li><a href="https://github.com/huginn/huginn">huginn / huginn：创建代理人来监控和行事。 你的代理人站在！</a></li>\n<li><a href="https://github.com/MoeNetwork/Tieba-Cloud-Sign">GitHub - MoeNetwork/Tieba-Cloud-Sign: 百度贴吧云签到，在服务器上配置好就无需进行任何操作便可以实现贴吧的全自动签到。配合插件使用还可实现云灌水、点赞、封禁、删帖、审查等功能 http://zhizhe8.</a></li>\n<li><a href="http://koolshare.cn/thread-104733-1-1.html">K3 Lede</a></li>\n<li><a href="https://hikaripe-sc.hikaricalyx.com/">Edgeless 插件的兼容支持 - Hikari PE 使用手册 SC</a></li>\n</ul>\n<h1>路由器论坛</h1>\n<ul>\n<li><a href="https://koolshare.cn/portal.php">首页 - KoolShare -</a> <!--  asa1253      Asa159786* -->\n<a href="https://toutyrater.github.io/">前言 · V2Ray 配置指南|V2Ray 白话文教程</a>\n<a href="https://www.v2ray.com/awesome/tools.html">神一样的工具们 · Project V 官方网站</a>\n<a href="http://www.ngrok.cc/user.html">Sunny-Ngrok内网穿透服务</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7CFB\u7EDF"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="http://www.wepe.com.cn/">微PE工具箱 - 最好用的WinPE装机维护工具</a></li>\n<li><a href="https://github.com/huginn/huginn">huginn / huginn：创建代理人来监控和行事。 你的代理人站在！</a></li>\n<li><a href="https://github.com/MoeNetwork/Tieba-Cloud-Sign">GitHub - MoeNetwork/Tieba-Cloud-Sign: 百度贴吧云签到，在服务器上配置好就无需进行任何操作便可以实现贴吧的全自动签到。配合插件使用还可实现云灌水、点赞、封禁、删帖、审查等功能 http://zhizhe8.</a></li>\n<li><a href="http://koolshare.cn/thread-104733-1-1.html">K3 Lede</a></li>\n<li><a href="https://hikaripe-sc.hikaricalyx.com/">Edgeless 插件的兼容支持 - Hikari PE 使用手册 SC</a></li>\n</ul>\n<h1>路由器论坛</h1>\n<ul>\n<li><a href="https://koolshare.cn/portal.php">首页 - KoolShare -</a> <!--  asa1253      Asa159786* -->\n<a href="https://toutyrater.github.io/">前言 · V2Ray 配置指南|V2Ray 白话文教程</a>\n<a href="https://www.v2ray.com/awesome/tools.html">神一样的工具们 · Project V 官方网站</a>\n<a href="http://www.ngrok.cc/user.html">Sunny-Ngrok内网穿透服务</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T11:30:26.000Z",
    'updated': null,
    'excerpt': " - 微PE工具箱 - 最好用的WinPE装机维护工具 - huginn / huginn：创建代理人来监控和行事。 你的代理人站在！ - GitHub - MoeNetwork/Tieba-Cloud-Sign: 百度贴吧云签到，在服务器上配置好就无需进行任何操作便可以实现贴吧的全...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "children": [
                {
                    "text": "linux",
                    "link": "linux/index.html",
                    "pagePath": "linux/README.md"
                },
                {
                    "text": "linux",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                },
                {
                    "text": "系统",
                    "link": "linux/os.html",
                    "pagePath": "linux/os.md"
                }
            ]
        },
        {
            "text": "游戏",
            "children": [
                {
                    "text": "游戏",
                    "link": "game/index.html",
                    "pagePath": "game/README.md"
                },
                {
                    "text": "缺氧",
                    "link": "game/game.html",
                    "pagePath": "game/game.md"
                },
                {
                    "text": "3dm",
                    "link": "game/3dm.html",
                    "pagePath": "game/3dm.md"
                },
                {
                    "text": "steam",
                    "link": "game/steam.html",
                    "pagePath": "game/steam.md"
                }
            ]
        },
        {
            "text": "网站",
            "children": [
                {
                    "text": "web",
                    "link": "web/index.html",
                    "pagePath": "web/README.md"
                },
                {
                    "text": "blog",
                    "link": "web/blog.html",
                    "pagePath": "web/blog.md"
                },
                {
                    "text": "python",
                    "link": "web/python.html",
                    "pagePath": "web/python.md"
                },
                {
                    "text": "软件分享",
                    "link": "web/Software.html",
                    "pagePath": "web/Software.md"
                },
                {
                    "text": "SS",
                    "link": "web/ss.html",
                    "pagePath": "web/ss.md"
                }
            ]
        },
        {
            "text": "学习",
            "children": [
                {
                    "text": "学习",
                    "link": "xue/index.html",
                    "pagePath": "xue/README.md"
                },
                {
                    "text": "学习",
                    "link": "xue/xue.html",
                    "pagePath": "xue/xue.md"
                }
            ]
        },
        {
            "text": "视频",
            "children": [
                {
                    "text": "视频",
                    "link": "video/video.html",
                    "pagePath": "video/video.md"
                },
                {
                    "text": "PT",
                    "link": "video/pt.html",
                    "pagePath": "video/pt.md"
                }
            ]
        },
        {
            "text": "临时",
            "children": [
                {
                    "text": "杂项",
                    "link": "temp/index.html",
                    "pagePath": "temp/README.md"
                },
                {
                    "text": "临时",
                    "link": "temp/temp.html",
                    "pagePath": "temp/temp.md"
                }
            ]
        }
    ]
};
