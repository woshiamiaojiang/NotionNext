// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5', 
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: 2023, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，我是一名程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Saika Tech', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '一名普通的程序员🍚', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.saika.com', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  // START ************网站字体*****************

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif', // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false, // 自定义右键菜单，覆盖系统菜单

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || false, // 是否折叠代码框
  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径，使用场景： 希望文章前缀路径为 /post 的情况 支持多级
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'scroll', // ['page','scroll'] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: 12, // 预览博客行数
  POST_RECOMMEND_COUNT: 8, // 推荐文章数量
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || true, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || true, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || true, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || true, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关

  //   ********挂件组件相关********
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        // 'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
        'https://raw.githubusercontent.com/imuncle/live2d/master/model/chiaki_kitty/chiaki_kitty.model.json',
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '那时候的我',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=255204.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '追憶',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1869161372.mp3',
      cover:
            'http://p2.music.126.net/o-vKXEDYyx_IfqljRvJIpg==/109951166279122045.jpg'
    },
    {
      name: 'Dehors',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1815725297.mp3',
      cover:
            'http://p2.music.126.net/WthcMxdZ8yWxqbT8-8nfKw==/109951168356159879.jpg'
    },
    {
      name: '灰かぶり',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2061225325.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Crack-Crack-Crackle',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2063106876.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Fall in the Dark',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=26107975.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '悬溺',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1397345903.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },    
    {
      name: '月',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=2048604695.mp3',
      cover:
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: 'Samsara',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=737966.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '涙の物語',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=668248.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '夜空ノムコウ',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22691514.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ススキ野の恋',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=756133.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Fake Love',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1988202864.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'あいつら全員同窓会',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1854474192.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'The Blessing',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1994998761.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'My Soul,Your Beats!',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=28699610.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '惊涛落日',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1433075058.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '一直模糊的记忆',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2022140286.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '未来はオンナのためにある',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1451749299.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
     {
      name: '夏夢ノイジー',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1971681189.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
     {
      name: 'U can do it!',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=809582.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '潜熱',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1811126463.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '溺水的鱼',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1811129844.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '拂晓荣光',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1459722969.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '涙目爆発音',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=431855301.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'innocent arrogance',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2033878961.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'slash',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2034807220.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Sanctuary',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=407862754.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'まっしろな雪',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=40729947.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ストリーミングハート',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=29953209.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '虽然歌声无形',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=27548281.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Black Lair',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=715811.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '想要沉溺于恋爱陷阱',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2008521148.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '夏·烟火',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=539428072.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '英雄',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=406347677.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Qliphot',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1336999970.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '戚嘞戚嘞邦邦',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1947940492.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '我们的战场',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=455345165.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '梦中的树',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=33469880.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '杏花',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1836341873.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '眨眼',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1295782825.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'WRLDS',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1415072449.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Catch the Moment',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=459925470.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '月的大小',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=29758230.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '樱花飞雪 最美是你',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=407000284.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ホタルノヒカリ',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=27969772.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '幻想曲',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=31446357.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '春弦',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1436614177.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '又一次',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=30245064.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'My logic',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1501447576.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Just Moving On Now',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=30621780.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'The Asterisk War',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=414670072.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '支离破碎的心',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1316375347.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ルマ',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1408891471.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '第一颗星',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=658318.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Break your fate',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=465673480.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '无题',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=28941713.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '幻想菩薩女孩',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=400689157.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '天空覆层的观测者',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=550128.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Dreaming',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22740548.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '那些年~紧紧抱着你~',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=35090707.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Where Is Armo?',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=5059144.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'God knows...',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22826401.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Gemini',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=465673482.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '九万字',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1351973067.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ReRe Hello~不会结束的夏天~',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=27580227.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Never Ending World',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22814467.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'INFINITY',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=27969248.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'unlasting',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1459929828.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '宵宵古今',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=436016471.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '永无终结的宴会',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=446512251.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Paradisus-Paradoxum',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=474739192.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Im Here',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=566365.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '深海少女',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=857619.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'リバーシブル・キャンペーン',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=444269068.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '只有生命',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1325896800.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '被甩男女',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1351255013.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Lifeless Sign',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=36103330.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'リグレット',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=38689087.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '妄想税',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=454224097.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '拼凑的断音',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=448706078.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '我们的战场',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=482999607.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Merry Christmas Mr Lawrence',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=17787253.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '劣等上等',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1318284251.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '遥远路途的前方',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22753511.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '影炎≒Variation',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=28612339.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Lost One的号哭',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=28870240.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '劣等上等',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1318284251.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Masked Bitch',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=33378324.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'エンド',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=545350492.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '恋爱的才能',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=38689094.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ECHO×ヒビカセ -mushup-',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=31356493.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ミッドナイトストロウラ',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=33516498.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ミッシング',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=545350494.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'ECHO×ヒビカセ -mushup-',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=31356493.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '不行哦♡',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=611653.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'VIORA',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=436016481.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Paradisus-Paradoxum',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=426852028.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '响喜乱舞',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1318962459.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '散落飘零',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=436016476.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '深海より愛を込めて',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=29129705.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'hypnoSpirA',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=427419264.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Odyssey',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=427419258.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Sentinel',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=498549809.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '禁忌的边界线',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=412327036.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '爱哭鬼',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=428387120.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Aspirin',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=427419260.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '旅行序曲',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=428387120.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '絶対零度θノヴァティック',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=424264952.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Hopeful Wings',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=427419262.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '吹雪',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=500665354.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Cynic',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=419596411.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '音乐，音乐',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=38689095.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '拼凑的断音',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=38689090.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '破滅の純情',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=424262992.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Absolute 5',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=431853288.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '声',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=424057340.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '狮子',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22766925.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '每次相见就更加喜欢上你',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=695753.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '蓮',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22753452.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'PLANET',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=812400.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '奏',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=28409128.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '采访者',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=476638467.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '骑在银龙的背上',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=624751.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '隨心所欲Mercy',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=445844962.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '留堂老师',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=29017582.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Refrain',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=22712173.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'departure',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=31587156.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '白雪 ～sirayuki～',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=41629547.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'スターダストクルセイダース',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=30482386.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '冥河螺旋',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=413961906.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '樱花樱花想见你',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=440241194.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '極彩色',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=33516489.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '極彩色',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=33516489.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '花之歌',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=41462778.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '愿往事重来',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=540968.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '好想告诉你',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=528047.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '月与花束',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=541480240.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Naruto Main Theme Remix',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=419594013.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '高潔なる教皇',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=30482372.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Into the Battlefield II',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=815158.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Welcome to Planet Urf',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=31311706.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Reawakening',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=469073233.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '禁忌的边界线',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=41629793.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '夢追人',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=587815.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'えろいむ',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=2074460499.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Amadeus',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=38019596.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Tamesugame',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1385175169.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '为了最重要的你，我所能做的最好的事',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=564989.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '眨眼',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=1295782825.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '橘 Orange',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=30496836.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '那个夏天',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=443794.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '邂逅',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=809588.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '生命之名',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=578090.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: 'Lunatic',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=436016474.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
    {
      name: '永无终结的宴会',
      artist: 'Falcom Sound Team jdk',
      url: 'http://music.163.com/song/media/outer/url?id=446512251.mp3',
      cover:
            'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg'
    },
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'kugou', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION: {
    ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
    AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
    HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
    TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
    TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || ''
  },

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // 缓存在开发调试和打包过程中选择性开启，正式部署开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
