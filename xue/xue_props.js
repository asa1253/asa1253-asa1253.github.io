import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': undefined,
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
    'date': "2021-01-08T11:15:10.000Z",
    'updated': null,
    'excerpt': " - 可汗学院 - Codecademy学院 - Linux下清空用户登录记录和命令历史的方法分享_LINUX_操作系统_脚本之家 - 树莓派搭建LNMP环境 | 树莓派实验室 - LNMP一键安装包 - CentOS/RadHat/Debian/Ubuntu下自动编译安装Nginx,PHP,MySQL...",
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
            "text": "游戏",
            "children": [
                {
                    "text": "游戏",
                    "link": "game/index.html",
                    "pagePath": "game/README.md"
                }
            ]
        },
        {
            "text": "网站",
            "children": [
                {
                    "text": "web",
                    "link": "web/index.html",
                    "pagePath": "web/README.md"
                }
            ]
        },
        {
            "text": "学习",
            "children": [
                {
                    "link": "xue/index.html",
                    "pagePath": "xue/README.md"
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
                    "link": "temp/index.html",
                    "pagePath": "temp/README.md"
                }
            ]
        }
    ]
};
