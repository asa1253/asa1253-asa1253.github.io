import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "python",
        "link": "web/python.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/blog.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/blog.html",
    'title': "blog",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>blog</h1>\n<ul>\n<li><a href="http://www.inkpaper.io/">纸小墨 | 构建只为纯粹书写的博客</a></li>\n<li><a href="https://www.ctspider.com/">长腿蜘蛛-CTspider|WordPress自动采集发布插件</a></li>\n<li><a href="https://liolok.github.io/">LIOLOG</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n</ul>\n<h1>Maverick/blog</h1>\n<ul>\n<li><a href="https://blog.kaygb.com/194.html#%E4%BA%91%E5%BC%80%E5%8F%91">使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆笙</a></li>\n<li><a href="https://www.zggsong.cn/archives/wiki.html">Maverick搭建wiki站点 - ZGGSONG</a></li>\n<li><a href="https://alandecode.github.io/Maverick/">alandecode.github.io</a></li>\n<li><a href="https://github.com/AlanDecode/Maverick">AlanDecode/Maverick: 🏄‍ A static blog generator built with Python.</a></li>\n<li><a href="https://pagic.cn/">Pagic</a></li>\n<li><a href="https://immmmm.com/">木木木木木</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "blog"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="http://www.inkpaper.io/">纸小墨 | 构建只为纯粹书写的博客</a></li>\n<li><a href="https://www.ctspider.com/">长腿蜘蛛-CTspider|WordPress自动采集发布插件</a></li>\n<li><a href="https://liolok.github.io/">LIOLOG</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n</ul>\n<h1>Maverick/blog</h1>\n<ul>\n<li><a href="https://blog.kaygb.com/194.html#%E4%BA%91%E5%BC%80%E5%8F%91">使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆笙</a></li>\n<li><a href="https://www.zggsong.cn/archives/wiki.html">Maverick搭建wiki站点 - ZGGSONG</a></li>\n<li><a href="https://alandecode.github.io/Maverick/">alandecode.github.io</a></li>\n<li><a href="https://github.com/AlanDecode/Maverick">AlanDecode/Maverick: 🏄‍ A static blog generator built with Python.</a></li>\n<li><a href="https://pagic.cn/">Pagic</a></li>\n<li><a href="https://immmmm.com/">木木木木木</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T11:53:41.000Z",
    'updated': null,
    'excerpt': " - 纸小墨 | 构建只为纯粹书写的博客 - 长腿蜘蛛-CTspider|WordPress自动采集发布插件 - LIOLOG - 尝试使用Arch Linux | 灰灰 の blog Maverick/blog - 使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆...",
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
