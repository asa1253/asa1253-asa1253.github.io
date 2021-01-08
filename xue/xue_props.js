import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "视频",
        "link": "video/video.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "xue/xue.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "xue/xue.html",
    'title': "学习",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>学习</h1>\n<ul>\n<li><a href="https://www.khanacademy.org/">可汗学院</a></li>\n<li><a href="https://www.codecademy.com/">Codecademy学院</a></li>\n<li><a href="http://www.jb51.net/LINUXjishu/39772.html">Linux下清空用户登录记录和命令历史的方法分享_LINUX_操作系统_脚本之家</a></li>\n<li><a href="http://shumeipai.nxez.com/2013/08/25/install-and-config-lnmp.html">树莓派搭建LNMP环境 | 树莓派实验室</a></li>\n<li><a href="https://lnmp.org/">LNMP一键安装包 - CentOS/RadHat/Debian/Ubuntu下自动编译安装Nginx,PHP,MySQL,PHPMyAdmin</a></li>\n<li><a href="http://tieba.baidu.com/p/4366841846?share=9105&amp;fr=share">MyAndroidTools（写轮眼）日常类软件禁用指南_android吧_百度贴吧</a></li>\n<li><a href="https://www.freecodecamp.cn/challenges/learn-what-to-do-if-you-get-stuck">Learn What to Do If You Get Stuck | FreeCodeCamp中文社区</a></li>\n<li><a href="https://www.linuxprobe.com/">《Linux就该这么学》</a></li>\n</ul>\n<h2 id="%E5%85%8D%E8%B4%B9">免费<a class="anchor" href="#%E5%85%8D%E8%B4%B9">§</a></h2>\n<ul>\n<li><a href="https://www.udemy.com/">在线课程asa1253    asa159786</a></li>\n<li><a href="http://www.5ibook.net/">我爱书吧-最新最全免费电子书资源分享下载</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B66\u4E60"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://www.khanacademy.org/">可汗学院</a></li>\n<li><a href="https://www.codecademy.com/">Codecademy学院</a></li>\n<li><a href="http://www.jb51.net/LINUXjishu/39772.html">Linux下清空用户登录记录和命令历史的方法分享_LINUX_操作系统_脚本之家</a></li>\n<li><a href="http://shumeipai.nxez.com/2013/08/25/install-and-config-lnmp.html">树莓派搭建LNMP环境 | 树莓派实验室</a></li>\n<li><a href="https://lnmp.org/">LNMP一键安装包 - CentOS/RadHat/Debian/Ubuntu下自动编译安装Nginx,PHP,MySQL,PHPMyAdmin</a></li>\n<li><a href="http://tieba.baidu.com/p/4366841846?share=9105&amp;fr=share">MyAndroidTools（写轮眼）日常类软件禁用指南_android吧_百度贴吧</a></li>\n<li><a href="https://www.freecodecamp.cn/challenges/learn-what-to-do-if-you-get-stuck">Learn What to Do If You Get Stuck | FreeCodeCamp中文社区</a></li>\n<li><a href="https://www.linuxprobe.com/">《Linux就该这么学》</a></li>\n</ul>\n<h2 id="%E5%85%8D%E8%B4%B9">免费<a class="anchor" href="#%E5%85%8D%E8%B4%B9">§</a></h2>\n<ul>\n<li><a href="https://www.udemy.com/">在线课程asa1253    asa159786</a></li>\n<li><a href="http://www.5ibook.net/">我爱书吧-最新最全免费电子书资源分享下载</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%85%8D%E8%B4%B9">免费</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-01-08T11:53:41.000Z",
    'updated': null,
    'excerpt': " - 可汗学院 - Codecademy学院 - Linux下清空用户登录记录和命令历史的方法分享_LINUX_操作系统_脚本之家 - 树莓派搭建LNMP环境 | 树莓派实验室 - LNMP一键安装包 - CentOS/RadHat/Debian/Ubuntu下自动编译安装Nginx,PHP,MySQL...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "linux",
            "children": [
                {
                    "text": "linux",
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
                    "text": "缺氧",
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
                    "text": "web",
                    "link": "web/web.html",
                    "pagePath": "web/web.md"
                },
                {
                    "text": "blog",
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
                    "text": "SS",
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
