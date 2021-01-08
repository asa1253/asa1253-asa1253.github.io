import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/ss.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/ss.html",
    'title': "SS",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>SS</h1>\n<ul>\n<li><a href="https://github.com/zhanzhangdaren/new-project">小飞机地址发布</a></li>\n<li><a href="https://waimaojiayou.com/">游讯游戏加速器</a></li>\n</ul>\n<h2 id="ngrok">ngrok<a class="anchor" href="#ngrok">§</a></h2>\n<ul>\n<li><a href="https://www.ngrok.cc/">Sunny-Ngrok</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "SS"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://github.com/zhanzhangdaren/new-project">小飞机地址发布</a></li>\n<li><a href="https://waimaojiayou.com/">游讯游戏加速器</a></li>\n</ul>\n<h2 id="ngrok">ngrok<a class="anchor" href="#ngrok">§</a></h2>\n<ul>\n<li><a href="https://www.ngrok.cc/">Sunny-Ngrok</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#ngrok">ngrok</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:33:03.000Z",
    'updated': null,
    'excerpt': " - 小飞机地址发布 - 游讯游戏加速器 ngrok - Sunny-Ngrok",
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
