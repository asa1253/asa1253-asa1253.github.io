import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "收藏",
        "link": "index.html"
    },
    'next': {
        "text": "3dm",
        "link": "game/3dm.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "game/game.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "game/game.html",
    'title': "游戏",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>游戏</h1>\n<h2 id="%E7%BC%BA%E6%B0%A7">缺氧<a class="anchor" href="#%E7%BC%BA%E6%B0%A7">§</a></h2>\n<ul>\n<li><a href="http://www.ahgame.com/qy/89282/">缺氧高压制氧方法</a></li>\n<li><a href="http://www.ahgame.com/qy/89365_2/">缺氧攻略</a></li>\n<li><a href="http://igg-games.com/">免费下载</a></li>\n</ul>\n<h2 id="factorio">Factorio<a class="anchor" href="#factorio">§</a></h2>\n<ul>\n<li><a href="https://tieba.baidu.com/p/6393048244">【模块千瓶】全套蓝图分享异星工厂吧</a></li>\n<li><a href="https://mods.factorio.com/mod/IndustrialRevolution">Industrial Revolution - Factorio Mods</a></li>\n<li><a href="https://tieba.baidu.com/p/5135342041">【设计规划】发几种不同的火车站系统。【异星工厂吧】</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6E38\u620F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%BC%BA%E6%B0%A7">缺氧<a class="anchor" href="#%E7%BC%BA%E6%B0%A7">§</a></h2>\n<ul>\n<li><a href="http://www.ahgame.com/qy/89282/">缺氧高压制氧方法</a></li>\n<li><a href="http://www.ahgame.com/qy/89365_2/">缺氧攻略</a></li>\n<li><a href="http://igg-games.com/">免费下载</a></li>\n</ul>\n<h2 id="factorio">Factorio<a class="anchor" href="#factorio">§</a></h2>\n<ul>\n<li><a href="https://tieba.baidu.com/p/6393048244">【模块千瓶】全套蓝图分享异星工厂吧</a></li>\n<li><a href="https://mods.factorio.com/mod/IndustrialRevolution">Industrial Revolution - Factorio Mods</a></li>\n<li><a href="https://tieba.baidu.com/p/5135342041">【设计规划】发几种不同的火车站系统。【异星工厂吧】</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BC%BA%E6%B0%A7">缺氧</a></li><li><a href="#factorio">Factorio</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-03-21T13:04:47.000Z",
    'updated': null,
    'excerpt': "缺氧 - 缺氧高压制氧方法 - 缺氧攻略 - 免费下载 Factorio - 【模块千瓶】全套蓝图分享异星工厂吧 - Industrial Revolution - Factorio Mods - 【设计规划】发几种不同的火车站系统。【异星工厂吧】",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "expanded": false,
            "children": [
                {
                    "text": "linux教程",
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
            "expanded": false,
            "children": [
                {
                    "text": "游戏",
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
            "expanded": false,
            "children": [
                {
                    "text": "网络",
                    "link": "web/web.html",
                    "pagePath": "web/web.md"
                },
                {
                    "text": "博客",
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
                    "text": "飞机",
                    "link": "web/ss.html",
                    "pagePath": "web/ss.md"
                }
            ]
        },
        {
            "text": "学习",
            "expanded": false,
            "children": [
                {
                    "text": "学习",
                    "link": "xue/xue.html",
                    "pagePath": "xue/xue.md"
                }
            ]
        },
        {
            "text": "视频",
            "expanded": false,
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
            "expanded": false,
            "children": [
                {
                    "text": "临时",
                    "link": "temp/temp.html",
                    "pagePath": "temp/temp.md"
                }
            ]
        }
    ]
};
