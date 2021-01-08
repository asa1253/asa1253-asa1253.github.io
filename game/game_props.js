import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "game/game.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "game/game.html",
    'title': "缺氧",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>缺氧</h1>\n<ul>\n<li><a href="http://www.ahgame.com/qy/89282/">缺氧高压制氧方法</a></li>\n<li><a href="http://www.ahgame.com/qy/89365_2/">缺氧攻略</a></li>\n<li><a href="http://igg-games.com/">免费下载</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F3A\u6C27"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="http://www.ahgame.com/qy/89282/">缺氧高压制氧方法</a></li>\n<li><a href="http://www.ahgame.com/qy/89365_2/">缺氧攻略</a></li>\n<li><a href="http://igg-games.com/">免费下载</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:36:24.000Z",
    'updated': null,
    'excerpt': " - 缺氧高压制氧方法 - 缺氧攻略 - 免费下载",
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
