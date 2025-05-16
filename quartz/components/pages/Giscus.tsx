import { QuartzComponentConstructor } from "../types"

function Content() {
    return <script src="https://giscus.app/client.js"
                   data-repo="NoZTurn/quartz"
                   data-repo-id="R_kgDOOrGv3A"
                   data-category="General"
                   data-category-id="DIC_kwDOOrGv3M4CqOMW"
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