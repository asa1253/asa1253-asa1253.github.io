import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "index.html"
    },
    'next': {
        "text": "linux",
        "link": "linux/linux.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "linux/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linux/index.html",
    'title': "简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>简介</h1>\n<p><a href="linux.html">linu</a></p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="linux.html">linu</a></p>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-06T07:49:45.000Z",
    'updated': null,
    'excerpt': "linu",
    'cover': undefined,
    'sidebar': [
        {
            "link": "linux/index.html",
            "children": [
                {
                    "text": "linux",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                }
            ],
            "pagePath": "linux/README.md",
            "text": "简介"
        },
        {
            "text": "linux",
            "children": [
                {
                    "text": "linux",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                }
            ]
        },
        {
            "text": "video",
            "children": [
                {
                    "text": "电影",
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
