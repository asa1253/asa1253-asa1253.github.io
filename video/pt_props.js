import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "临时",
        "link": "temp/temp.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "video/pt.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "video/pt.html",
    'title': "PT",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>PT</h1>\n<!-- - [Rarbg.com](http://rarbg.com/) -->\n<!-- - [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/) -->\n<!-- - [Pornhub](http://www.pornhub.com/) -->\n<!-- - [Redtube](http://www.redtube.com/) -->\n<!-- - [youporn](http://www.youporn.com/) -->\n<!-- - [Jav !!](http://www.javlibrary.com/)asa1253  asa159786 -->\n<!-- - [BitTorrent](http://rutracker.org/) -->\n<!-- - [XVIDEOS.COM](https://www.xvideos.com/) -->\n<!-- - [ThisAV.com](http://thisav.com/) -->\n<!-- - [BabyTorrent](https://babytorrent.vip/) -->'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "PT"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!-- - [Rarbg.com](http://rarbg.com/) -->\n<!-- - [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/) -->\n<!-- - [Pornhub](http://www.pornhub.com/) -->\n<!-- - [Redtube](http://www.redtube.com/) -->\n<!-- - [youporn](http://www.youporn.com/) -->\n<!-- - [Jav !!](http://www.javlibrary.com/)asa1253  asa159786 -->\n<!-- - [BitTorrent](http://rutracker.org/) -->\n<!-- - [XVIDEOS.COM](https://www.xvideos.com/) -->\n<!-- - [ThisAV.com](http://thisav.com/) -->\n<!-- - [BabyTorrent](https://babytorrent.vip/) -->'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T12:15:59.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "children": [
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
                    "text": "网络",
                    "link": "web/web.html",
                    "pagePath": "web/web.md"
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
                    "text": "临时",
                    "link": "temp/temp.html",
                    "pagePath": "temp/temp.md"
                }
            ]
        }
    ]
};
