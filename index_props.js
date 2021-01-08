import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "目录",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>目录</h1>\n<ul>\n<li><a href="linux/index.html">linux</a></li>\n<li><a href="game/index.html">游戏</a></li>\n<li><a href="xue/index.html">学习</a></li>\n<li><a href="web/index.html">网站</a></li>\n<li><a href="video/index.html">视频</a></li>\n<li><a href="temp/index.html">临时</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u76EE\u5F55"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="linux/index.html">linux</a></li>\n<li><a href="game/index.html">游戏</a></li>\n<li><a href="xue/index.html">学习</a></li>\n<li><a href="web/index.html">网站</a></li>\n<li><a href="video/index.html">视频</a></li>\n<li><a href="temp/index.html">临时</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:36:24.000Z",
    'updated': null,
    'excerpt': " - linux - 游戏 - 学习 - 网站 - 视频 - 临时",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "children": [
                {
                    "text": "linux",
                    "link": "linux/index.html",
                    "pagePath": "linux/README.md"
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
        }
    ]
};
