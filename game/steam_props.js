import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "game/steam.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "game/steam.html",
    'title': "steam",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>steam</h1>\n<ul>\n<li><a href="https://mogeko.me/2018/036/">如何使用 ASF 挂卡 | Mogeko`s Blog</a></li>\n<li><a href="https://www.linuxsecrets.com/archlinux-wiki/wiki.archlinux.org/index.php/Steam/Game-specific_troubleshooting.html#Civilization_VI">Steam/Game-specific troubleshooting - ArchWiki</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "steam"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://mogeko.me/2018/036/">如何使用 ASF 挂卡 | Mogeko`s Blog</a></li>\n<li><a href="https://www.linuxsecrets.com/archlinux-wiki/wiki.archlinux.org/index.php/Steam/Game-specific_troubleshooting.html#Civilization_VI">Steam/Game-specific troubleshooting - ArchWiki</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:36:24.000Z",
    'updated': null,
    'excerpt': " - 如何使用 ASF 挂卡 | Mogeko`s Blog - Steam/Game-specific troubleshooting - ArchWiki",
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
