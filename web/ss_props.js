import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "学习",
        "link": "xue/xue.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/ss.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/ss.html",
    'title': "飞机",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>飞机</h1>\n<h2 id="ss">SS<a class="anchor" href="#ss">§</a></h2>\n<ul>\n<li><a href="https://github.com/zhanzhangdaren/new-project">小飞机地址发布</a></li>\n<li><a href="https://waimaojiayou.com/">游讯游戏加速器</a></li>\n</ul>\n<h2 id="ngrok">ngrok<a class="anchor" href="#ngrok">§</a></h2>\n<ul>\n<li><a href="https://www.ngrok.cc/">Sunny-Ngrok</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u98DE\u673A"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="ss">SS<a class="anchor" href="#ss">§</a></h2>\n<ul>\n<li><a href="https://github.com/zhanzhangdaren/new-project">小飞机地址发布</a></li>\n<li><a href="https://waimaojiayou.com/">游讯游戏加速器</a></li>\n</ul>\n<h2 id="ngrok">ngrok<a class="anchor" href="#ngrok">§</a></h2>\n<ul>\n<li><a href="https://www.ngrok.cc/">Sunny-Ngrok</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#ss">SS</a></li><li><a href="#ngrok">ngrok</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-09T01:05:54.000Z",
    'updated': null,
    'excerpt': "SS - 小飞机地址发布 - 游讯游戏加速器 ngrok - Sunny-Ngrok",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
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
