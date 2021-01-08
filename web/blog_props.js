import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/blog.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/blog.html",
    'title': "blog",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>blog</h1>\n<ul>\n<li><a href="http://www.inkpaper.io/">纸小墨 | 构建只为纯粹书写的博客</a></li>\n<li><a href="https://www.ctspider.com/">长腿蜘蛛-CTspider|WordPress自动采集发布插件</a></li>\n<li><a href="https://liolok.github.io/">LIOLOG</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n</ul>\n<h1>Maverick/blog</h1>\n<ul>\n<li><a href="https://blog.kaygb.com/194.html#%E4%BA%91%E5%BC%80%E5%8F%91">使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆笙</a></li>\n<li><a href="https://www.zggsong.cn/archives/wiki.html">Maverick搭建wiki站点 - ZGGSONG</a></li>\n<li><a href="https://alandecode.github.io/Maverick/">alandecode.github.io</a></li>\n<li><a href="https://github.com/AlanDecode/Maverick">AlanDecode/Maverick: 🏄‍ A static blog generator built with Python.</a></li>\n<li><a href="https://pagic.cn/">Pagic</a></li>\n<li><a href="https://immmmm.com/">木木木木木</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "blog"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="http://www.inkpaper.io/">纸小墨 | 构建只为纯粹书写的博客</a></li>\n<li><a href="https://www.ctspider.com/">长腿蜘蛛-CTspider|WordPress自动采集发布插件</a></li>\n<li><a href="https://liolok.github.io/">LIOLOG</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n</ul>\n<h1>Maverick/blog</h1>\n<ul>\n<li><a href="https://blog.kaygb.com/194.html#%E4%BA%91%E5%BC%80%E5%8F%91">使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆笙</a></li>\n<li><a href="https://www.zggsong.cn/archives/wiki.html">Maverick搭建wiki站点 - ZGGSONG</a></li>\n<li><a href="https://alandecode.github.io/Maverick/">alandecode.github.io</a></li>\n<li><a href="https://github.com/AlanDecode/Maverick">AlanDecode/Maverick: 🏄‍ A static blog generator built with Python.</a></li>\n<li><a href="https://pagic.cn/">Pagic</a></li>\n<li><a href="https://immmmm.com/">木木木木木</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T10:36:24.000Z",
    'updated': null,
    'excerpt': " - 纸小墨 | 构建只为纯粹书写的博客 - 长腿蜘蛛-CTspider|WordPress自动采集发布插件 - LIOLOG - 尝试使用Arch Linux | 灰灰 の blog Maverick/blog - 使用GitHub Action自动部署WIKI站点（Maverick）至腾讯云开发 - 风也雨忆...",
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
