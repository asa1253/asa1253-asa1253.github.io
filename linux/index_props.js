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
    'pagePath': "linux/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linux/index.html",
    'title': "linux",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>linux</h1>\n<p><a href="linux/linux.html">Linux</a></p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "linux"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="linux/linux.html">Linux</a></p>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T11:15:10.000Z",
    'updated': null,
    'excerpt': "Linux",
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
            "text": "游戏",
            "children": [
                {
                    "text": "游戏",
                    "link": "game/index.html",
                    "pagePath": "game/README.md"
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
                }
            ]
        },
        {
            "text": "学习",
            "children": [
                {
                    "link": "xue/index.html",
                    "pagePath": "xue/README.md"
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
                    "link": "temp/index.html",
                    "pagePath": "temp/README.md"
                }
            ]
        }
    ]
};
