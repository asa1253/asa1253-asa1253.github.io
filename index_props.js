import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-06T07:39:46.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "link": "linux/index.html",
            "children": [
                {
                    "text": "",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                }
            ],
            "pagePath": "linux/README.md",
            "text": "简介"
        },
        {
            "text": "linux/README.md",
            "children": [
                {
                    "text": "",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                }
            ]
        },
        {
            "text": "video/README.md",
            "children": [
                {
                    "text": "",
                    "link": "video/video.html",
                    "pagePath": "video/video.md"
                },
                {
                    "text": "",
                    "link": "video/pt.html",
                    "pagePath": "video/pt.md"
                }
            ]
        }
    ]
};
