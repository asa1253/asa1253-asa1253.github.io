import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "",
        "link": "video/video.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "video/pt.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "video/pt.html",
    'title': "",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1></h1>\n<h3 id="pt">PT<a class="anchor" href="#pt">§</a></h3>\n<!-- ### pt\n\n\n- [Rarbg.com](http://rarbg.com/)\n- [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/)\n- [Pornhub](http://www.pornhub.com/)\n- [Redtube](http://www.redtube.com/)\n- [youporn](http://www.youporn.com/)\n- [Jav asa1253  asa159786](http://www.javlibrary.com/)\n- [BitTorrent](http://rutracker.org/)\n- [XVIDEOS.COM](https://www.xvideos.com/)\n- [ThisAV.com](http://thisav.com/)\n- [BabyTorrent](https://babytorrent.vip/)\n\n -->'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="pt">PT<a class="anchor" href="#pt">§</a></h3>\n<!-- ### pt\n\n\n- [Rarbg.com](http://rarbg.com/)\n- [Download music, movies, games, software! The Pirate Bay - The world&#39;s most resilient BitTorrent site](http://thepiratebay.ee/)\n- [Pornhub](http://www.pornhub.com/)\n- [Redtube](http://www.redtube.com/)\n- [youporn](http://www.youporn.com/)\n- [Jav asa1253  asa159786](http://www.javlibrary.com/)\n- [BitTorrent](http://rutracker.org/)\n- [XVIDEOS.COM](https://www.xvideos.com/)\n- [ThisAV.com](http://thisav.com/)\n- [BabyTorrent](https://babytorrent.vip/)\n\n -->'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#pt">PT</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-06T07:39:46.000Z",
    'updated': null,
    'excerpt': "PT",
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
