import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "飞机",
        "link": "web/ss.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web/Software.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web/Software.html",
    'title': "软件分享",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>软件分享</h1>\n<ul>\n<li><a href="https://getitfree.cn/">正版中国</a></li>\n<li><a href="http://www.cmsky.com/">厘米天空 | 绿色软件与IT资源分享</a></li>\n<li><a href="http://www.iplaysoft.com/">异次元软件世界 - 软件改变生活！</a></li>\n<li><a href="http://51.ruyo.net/">如有乐享</a></li>\n<li><a href="https://www.landiannews.com/">蓝点网</a></li>\n<li><a href="https://liyuans.com/">Leonn 的博客</a></li>\n<li><a href="http://blog.jialezi.net/"> Jialezi `s blog</a></li>\n<li><a href="https://www.heji.ltd/">合集网 | 信息资源大全</a></li>\n<li><a href="https://www.shadow-forum.com/">影子论坛-自由-简约-平等|办公软件|资源共享|创意交流-by shadow-forum</a></li>\n<li><a href="https://iao.su/">不死鸟 - 分享为王官网</a></li>\n<li><a href="http://www.mackxin.com/">馨客栈情报局</a></li>\n<li><a href="https://www.bookmarkearth.com/">首页-书签地球-中国首家浏览器书签共享平台</a></li>\n<li><a href="https://fuun.fun/">FUUN.FUN | 奇趣网站收藏家</a></li>\n<li><a href="https://www.rdonly.com/">只读</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8F6F\u4EF6\u5206\u4EAB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://getitfree.cn/">正版中国</a></li>\n<li><a href="http://www.cmsky.com/">厘米天空 | 绿色软件与IT资源分享</a></li>\n<li><a href="http://www.iplaysoft.com/">异次元软件世界 - 软件改变生活！</a></li>\n<li><a href="http://51.ruyo.net/">如有乐享</a></li>\n<li><a href="https://www.landiannews.com/">蓝点网</a></li>\n<li><a href="https://liyuans.com/">Leonn 的博客</a></li>\n<li><a href="http://blog.jialezi.net/"> Jialezi `s blog</a></li>\n<li><a href="https://www.heji.ltd/">合集网 | 信息资源大全</a></li>\n<li><a href="https://www.shadow-forum.com/">影子论坛-自由-简约-平等|办公软件|资源共享|创意交流-by shadow-forum</a></li>\n<li><a href="https://iao.su/">不死鸟 - 分享为王官网</a></li>\n<li><a href="http://www.mackxin.com/">馨客栈情报局</a></li>\n<li><a href="https://www.bookmarkearth.com/">首页-书签地球-中国首家浏览器书签共享平台</a></li>\n<li><a href="https://fuun.fun/">FUUN.FUN | 奇趣网站收藏家</a></li>\n<li><a href="https://www.rdonly.com/">只读</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-03-07T10:11:18.000Z",
    'updated': null,
    'excerpt': " - 正版中国 - 厘米天空 | 绿色软件与IT资源分享 - 异次元软件世界 - 软件改变生活！ - 如有乐享 - 蓝点网 - Leonn 的博客 - Jialezi `s blog - 合集网 | 信息资源大全 - 影子论坛-自由-简约-平等|办公软件|资源共享|创意交流-...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
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
                    "text": "临时",
                    "link": "temp/temp.html",
                    "pagePath": "temp/temp.md"
                }
            ]
        }
    ]
};
