import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "video/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "video/index.html",
    'title': "视频",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>视频</h1>\n<p>[视频]\n[福利]</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u89C6\u9891"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>[视频]\n[福利]</p>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-06T08:02:09.000Z",
    'updated': null,
    'excerpt': "[视频] [福利]",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "children": [
                {
                    "text": "目录",
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
