import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "steam",
        "link": "game/steam.html"
    },
    'next': {
        "text": "博客",
        "link": "web/blog.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/web.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/web.html",
    'title': "网络",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>网络</h1>\n<h2 id="dns">DNS<a class="anchor" href="#dns">§</a></h2>\n<ul>\n<li><a href="https://my.freenom.com/">Client Area - Freenom</a></li>\n<li><a href="https://my.noip.com/">My No-IP !!</a><!-- 1005029697@qq.com asa159786 --></li>\n<li><a href="https://www.cloudflare.com/my-websites">CloudFlarey</a></li>\n<li><a href="https://nic.eu.org/">https://nic.eu.org/</a></li>\n<li><a href="https://nextdns.io/">NextDNS</a></li>\n</ul>\n<h2 id="cloud">cloud<a class="anchor" href="#cloud">§</a></h2>\n<ul>\n<li><a href="https://www.dreamspark.com/">Microsoft DreamSpark</a></li>\n<li><a href="https://portal.azure.com/">Microsoft Azure</a></li>\n<li><a href="https://console.bluemix.net/catalog/?taxonomyNavigation=containers&amp;env_id=ibm%3Ayp%3Aus-south">IBM Bluemix</a></li>\n<li><a href="https://passport.yandex.com/">yandex网盘</a></li>\n<li><a href="https://www.freehao123.com/bluemix-kubernetes/">BlueMix免费Kubernetes-原生Docker容器停止供应转而提供Kubernetes服务 | 免费资源部落</a></li>\n<li><a href="https://www.udemy.com/learn-java-ee/?couponCode=FREE3DAYS">Java EE Made Simple: Create An App In 7 Days | Udemy</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F51\u7EDC"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="dns">DNS<a class="anchor" href="#dns">§</a></h2>\n<ul>\n<li><a href="https://my.freenom.com/">Client Area - Freenom</a></li>\n<li><a href="https://my.noip.com/">My No-IP !!</a><!-- 1005029697@qq.com asa159786 --></li>\n<li><a href="https://www.cloudflare.com/my-websites">CloudFlarey</a></li>\n<li><a href="https://nic.eu.org/">https://nic.eu.org/</a></li>\n<li><a href="https://nextdns.io/">NextDNS</a></li>\n</ul>\n<h2 id="cloud">cloud<a class="anchor" href="#cloud">§</a></h2>\n<ul>\n<li><a href="https://www.dreamspark.com/">Microsoft DreamSpark</a></li>\n<li><a href="https://portal.azure.com/">Microsoft Azure</a></li>\n<li><a href="https://console.bluemix.net/catalog/?taxonomyNavigation=containers&amp;env_id=ibm%3Ayp%3Aus-south">IBM Bluemix</a></li>\n<li><a href="https://passport.yandex.com/">yandex网盘</a></li>\n<li><a href="https://www.freehao123.com/bluemix-kubernetes/">BlueMix免费Kubernetes-原生Docker容器停止供应转而提供Kubernetes服务 | 免费资源部落</a></li>\n<li><a href="https://www.udemy.com/learn-java-ee/?couponCode=FREE3DAYS">Java EE Made Simple: Create An App In 7 Days | Udemy</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#dns">DNS</a></li><li><a href="#cloud">cloud</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-03-21T13:04:47.000Z",
    'updated': null,
    'excerpt': "DNS - Client Area - Freenom - My No-IP !! - CloudFlarey - https://nic.eu.org/ - NextDNS cloud - Microsoft DreamSpark - Microsoft Azure - IBM Bluemix - yandex网盘 - BlueMix免费Kubernetes-原生Docker容器停止供应转...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "expanded": false,
            "children": [
                {
                    "text": "linux教程",
                    "link": "linux/linux.html",
                    "pagePath": "linux/linux.md"
                },
                {
                    "text": "系统",
                    "link": "linux/os.html",
                    "pagePath": "linux/os.md"
                }
            ]
        },
        {
            "text": "游戏",
            "expanded": false,
            "children": [
                {
                    "text": "游戏",
                    "link": "game/game.html",
                    "pagePath": "game/game.md"
                },
                {
                    "text": "3dm",
                    "link": "game/3dm.html",
                    "pagePath": "game/3dm.md"
                },
                {
                    "text": "steam",
                    "link": "game/steam.html",
                    "pagePath": "game/steam.md"
                }
            ]
        },
        {
            "text": "网站",
            "expanded": false,
            "children": [
                {
                    "text": "网络",
                    "link": "web/web.html",
                    "pagePath": "web/web.md"
                },
                {
                    "text": "博客",
                    "link": "web/blog.html",
                    "pagePath": "web/blog.md"
                },
                {
                    "text": "python",
                    "link": "web/python.html",
                    "pagePath": "web/python.md"
                },
                {
                    "text": "软件分享",
                    "link": "web/Software.html",
                    "pagePath": "web/Software.md"
                },
                {
                    "text": "飞机",
                    "link": "web/ss.html",
                    "pagePath": "web/ss.md"
                }
            ]
        },
        {
            "text": "学习",
            "expanded": false,
            "children": [
                {
                    "text": "学习",
                    "link": "xue/xue.html",
                    "pagePath": "xue/xue.md"
                }
            ]
        },
        {
            "text": "视频",
            "expanded": false,
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
            "expanded": false,
            "children": [
                {
                    "text": "临时",
                    "link": "temp/temp.html",
                    "pagePath": "temp/temp.md"
                }
            ]
        }
    ]
};
