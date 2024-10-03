---
title: Rome Wasn't Built in a Day, here is a timeline of the garden grouth/花园不是一天长成的，以此页面记录花园的建设历程
date: 2024-01-22 11:31:07
tags:
- 记录
- 成长
---
### 2024-01-09 21:39:24

安装了Quartz，测试基本可用[the first garden message](the%20first%20garden%20message.md)，借助Obsidian手机客户端可以实现发布[发布a garden message from iphone](a%20garden%20message%20from%20iphone.md)、[编辑the first garden message](the%20first%20garden%20message.md)消息了。
This is a blank Quartz installation.
See the [documentation](https://quartz.jzhao.xyz) for how to get started.
### 2024-01-10 00:00:00

[值得收藏的个人网站](值得收藏的个人网站.md)，在2024年的今天，还在坚持做个人网站的都是有情怀的人，值得被记录，本页面不定期更新。
[Person blogs that worth for collection](值得收藏的个人网站.md), the internet is running fast to 2024, a persion blog that is still sticked and renewed by one and one persion, I think it is worth for remember and respect, this page will be renewed continually.

### 2024-01-16 12:27:00
感谢 [11ze's Garden-添加评论区](https://wangze.tech/添加评论区) 的教程，折腾把Quartz的giscus评论加上了，唯一美中不足的是quartz设置成Graph view/Backlinks/giscus都只能放在layout的right区中，挤在一起不太美观，看看后续官方更新中是否有改进空间（官方已经将giscus插件放入upcoming feature了，见 [https://github.com/jackyzha0/quartz/blob/v4/docs/features/upcoming features.md](https://github.com/jackyzha0/quartz/blob/v4/docs/features/upcoming%20features.md) ）。
#### 2024-10-03 23:22:17
今天发现 [11ze's Garden-添加评论区](https://wangze.tech/添加评论区) 的教程无法访问了，好在官方出了一个教程：[Comments (jzhao.xyz)](https://quartz.jzhao.xyz/features/comments)。不过官方的写法略复杂，结合wangze.tech的教程，记录在这儿，避免失效，如下：<br>
需要改三个文件：<br>
1.quartz\quartz\components\pages 文件夹下添加文件，文件名：Giscus.tsx ，内容如下：<br>
```
import { QuartzComponentConstructor } from "../types"  
  
function Content() {  
  return <script src="https://giscus.app/client.js"  
                 data-repo="NoZTurn/quartz"  
                 data-repo-id="R_kgDOLCpiKg"  
                 data-category="General"  
                 data-category-id="DIC_kwDOLCpiKs4CccEP"  
                 data-mapping="title"  
                 data-strict="0"  
                 data-reactions-enabled="1"  
                 data-emit-metadata="0"  
                 data-input-position="bottom"  
                 data-theme="preferred_color_scheme"  
                 data-lang="zh-CN"  
                 crossorigin="anonymous"  
                 async>  
  </script>  
}  
  
export default (() => Content) satisfies QuartzComponentConstructor
```
注：以上有关data的内容，请相应修改成自己的。<br>
2.quartz\quartz\components\index.ts 文件，import最后一行，添加import Giscus from "./pages/Giscus"，export最后一行（<font color="#ff0000">前面}</font>）添加 <font color="#ff0000">Giscus,</font> <br>
3.quartz\quartz.layout.ts文件，Component.Backlinks(),后面，增加 <font color="#ff0000">Component.Giscus(),</font>。<br>，也可以像官方一样，加在quartz.layout.ts文件中的sharedPageComponents中的afterBody里面（区别仅仅是显示位置的不同，官方这个显示位置更适合页面布局，使页面看起来更协调），即：

```
afterBody: [],
```
改为
```
afterBody: [  
  Component.Giscus(),  
],
```

```
right: [  
  Component.Graph(),  
  Component.DesktopOnly(Component.TableOfContents()),  
  Component.Backlinks(),  
  Component.Giscus(),  
],
```


### 2024-01-22 10:56:06
建立了[关于](about.md)页面。

### 2024-01-26 16:16:18
目前主要是基于[Obsidian-Memos: A quick capture plugin for Obsidian, all data from your notes.](https://github.com/Quorafind/Obsidian-Memos)插件践行[卢曼](/tags/卢曼)的卡片式记录法在记录，主要内容更新见[DailyNotes](DailyNotes)。