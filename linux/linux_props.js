import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "目录",
        "link": "index.html"
    },
    'next': {
        "text": "系统",
        "link": "linux/os.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "linux/linux.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linux/linux.html",
    'title': "linux教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>linux教程</h1>\n<h2 id="linux">linux<a class="anchor" href="#linux">§</a></h2>\n<ul>\n<li><a href="http://wenku.baidu.com/link?url=kWo9pW1LOJXJFuudCt0YQrx-ssp36tGdMpaYc1mIwHwQtiiDEWovG6qQaNzCe-RkNkpvoAqjwGcVG1Ov_ZetdR-QUkhxXQ27V0yG903ZzCy">Shell脚本编程详解-吐血共享_百度文库</a></li>\n<li><a href="https://www.jianshu.com/p/e2ba870c889a">Arch Linux办公环境安装配置纯小白包通过教程 - 简书</a></li>\n<li><a href="https://averagelinuxuser.com/">Page 6 of 9 for Average Linux User | How to install, configure and use Linux.</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n<li><a href="https://blog.yoitsu.moe/">约伊兹的萌狼乡手札</a></li>\n<li><a href="https://xzos.net/archlinux-desktop-environment-survival-guide/">ArchLinux 桌面环境生存指南 - xzOS</a></li>\n<li><a href="https://travis-ci.com/dashboard">Travis CI自动化构建</a></li>\n<li><a href="https://www.zhyong.cn/posts/604/">Linux 常用软件和命令行推荐 | YouForever</a></li>\n<li><a href="https://farseerfc.me/">Farseerfc的小窩</a></li>\n<li><a href="https://blog.yoitsu.moe/arch-linux/installing_arch_linux_for_complete_newbies.html">给 GNU/Linux 萌新的 Arch Linux 安装指南 - 约伊兹的萌狼乡手札</a></li>\n<li><a href="https://www.bookstackapp.com/">书库</a></li>\n<li><a href="https://blog.megumifox.com/public/2018/11/26/archlinux-%E4%B8%8B-intel-%E5%92%8C-nvidia-%E5%8F%8C%E6%98%BE%E5%8D%A1-de-%E6%8A%98%E8%85%BE%E7%AC%94%E8%AE%B0/">Archlinux 下 Intel 和 NVIDIA 双显卡 de 折腾笔记 · 惠狐之书</a></li>\n<li><a href="https://blog.phoenixlzx.com/">Phoenix\'s island</a></li>\n</ul>\n<h2 id="git%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F">Git下载加速<a class="anchor" href="#git%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F">§</a></h2>\n<ul>\n<li><a href="https://cdn.pcdn.workers.dev/">GitHub 文件加速</a></li>\n<li><a href="https://hao.su/3415/">GitHub下载加速 - 不死鸟 - 分享为王</a></li>\n</ul>\n<h2 id="archlinux">Archlinux<a class="anchor" href="#archlinux">§</a></h2>\n<ul>\n<li><a href="https://viflythink.com/Use_GitHubActions_to_build_AUR/">GitHub Actions 打造 AUR 打包下载一条龙服务 | Vifly 的博客</a></li>\n<li><a href="https://ohmyarch.github.io/2017/01/15/Linux%E4%B8%8B%E7%BB%88%E6%9E%81%E5%AD%97%E4%BD%93%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88/">Linux下终极字体配置方案 | Micheal\'s Blog</a></li>\n<li><a href="https://luotianyi.vc/">Luminous\' Home – 记录生活中的点滴</a></li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "linux\u6559\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="linux">linux<a class="anchor" href="#linux">§</a></h2>\n<ul>\n<li><a href="http://wenku.baidu.com/link?url=kWo9pW1LOJXJFuudCt0YQrx-ssp36tGdMpaYc1mIwHwQtiiDEWovG6qQaNzCe-RkNkpvoAqjwGcVG1Ov_ZetdR-QUkhxXQ27V0yG903ZzCy">Shell脚本编程详解-吐血共享_百度文库</a></li>\n<li><a href="https://www.jianshu.com/p/e2ba870c889a">Arch Linux办公环境安装配置纯小白包通过教程 - 简书</a></li>\n<li><a href="https://averagelinuxuser.com/">Page 6 of 9 for Average Linux User | How to install, configure and use Linux.</a></li>\n<li><a href="https://huihui.moe/355.html">尝试使用Arch Linux | 灰灰 の blog</a></li>\n<li><a href="https://blog.yoitsu.moe/">约伊兹的萌狼乡手札</a></li>\n<li><a href="https://xzos.net/archlinux-desktop-environment-survival-guide/">ArchLinux 桌面环境生存指南 - xzOS</a></li>\n<li><a href="https://travis-ci.com/dashboard">Travis CI自动化构建</a></li>\n<li><a href="https://www.zhyong.cn/posts/604/">Linux 常用软件和命令行推荐 | YouForever</a></li>\n<li><a href="https://farseerfc.me/">Farseerfc的小窩</a></li>\n<li><a href="https://blog.yoitsu.moe/arch-linux/installing_arch_linux_for_complete_newbies.html">给 GNU/Linux 萌新的 Arch Linux 安装指南 - 约伊兹的萌狼乡手札</a></li>\n<li><a href="https://www.bookstackapp.com/">书库</a></li>\n<li><a href="https://blog.megumifox.com/public/2018/11/26/archlinux-%E4%B8%8B-intel-%E5%92%8C-nvidia-%E5%8F%8C%E6%98%BE%E5%8D%A1-de-%E6%8A%98%E8%85%BE%E7%AC%94%E8%AE%B0/">Archlinux 下 Intel 和 NVIDIA 双显卡 de 折腾笔记 · 惠狐之书</a></li>\n<li><a href="https://blog.phoenixlzx.com/">Phoenix\'s island</a></li>\n</ul>\n<h2 id="git%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F">Git下载加速<a class="anchor" href="#git%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F">§</a></h2>\n<ul>\n<li><a href="https://cdn.pcdn.workers.dev/">GitHub 文件加速</a></li>\n<li><a href="https://hao.su/3415/">GitHub下载加速 - 不死鸟 - 分享为王</a></li>\n</ul>\n<h2 id="archlinux">Archlinux<a class="anchor" href="#archlinux">§</a></h2>\n<ul>\n<li><a href="https://viflythink.com/Use_GitHubActions_to_build_AUR/">GitHub Actions 打造 AUR 打包下载一条龙服务 | Vifly 的博客</a></li>\n<li><a href="https://ohmyarch.github.io/2017/01/15/Linux%E4%B8%8B%E7%BB%88%E6%9E%81%E5%AD%97%E4%BD%93%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88/">Linux下终极字体配置方案 | Micheal\'s Blog</a></li>\n<li><a href="https://luotianyi.vc/">Luminous\' Home – 记录生活中的点滴</a></li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#linux">linux</a></li><li><a href="#git%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F">Git下载加速</a></li><li><a href="#archlinux">Archlinux</a></li></ol></nav>'
        } }),
    'author': "asa1253",
    'contributors': [
        "asa1253"
    ],
    'date': "2021-03-07T10:18:22.000Z",
    'updated': null,
    'excerpt': "linux - Shell脚本编程详解-吐血共享_百度文库 - Arch Linux办公环境安装配置纯小白包通过教程 - 简书 - Page 6 of 9 for Average Linux User | How to install, configure and use Linux. - 尝试使用Arch Linux | 灰灰 の blo...",
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
            ],
            "expanded": false
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
