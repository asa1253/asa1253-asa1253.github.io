import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "video/pt.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "video/pt.html",
    'title': "PT",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>PT</h1>\n<!-- ### pt\n\n\n- [Rarbg.com](http://rarbg.com/)\n- [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/)\n- [Pornhub](http://www.pornhub.com/)\n- [Redtube](http://www.redtube.com/)\n- [youporn](http://www.youporn.com/)\n- [Jav asa1253  asa159786](http://www.javlibrary.com/)\n- [BitTorrent](http://rutracker.org/)\n- [XVIDEOS.COM](https://www.xvideos.com/)\n- [ThisAV.com](http://thisav.com/)\n- [BabyTorrent](https://babytorrent.vip/)\n\n -->'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "PT"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!-- ### pt\n\n\n- [Rarbg.com](http://rarbg.com/)\n- [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/)\n- [Pornhub](http://www.pornhub.com/)\n- [Redtube](http://www.redtube.com/)\n- [youporn](http://www.youporn.com/)\n- [Jav asa1253  asa159786](http://www.javlibrary.com/)\n- [BitTorrent](http://rutracker.org/)\n- [XVIDEOS.COM](https://www.xvideos.com/)\n- [ThisAV.com](http://thisav.com/)\n- [BabyTorrent](https://babytorrent.vip/)\n\n -->'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:33:03.000Z",
    'updated': null,
    'excerpt': "",
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
