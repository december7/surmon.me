(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(t,e,a){},353:function(t,e,a){"use strict";var i=a(343);a.n(i).a},362:function(t,e,a){"use strict";a.r(e);var i=a(6),s=a(27),n={name:"article-detail",validate:({params:t,store:e})=>t.article_id&&!isNaN(Number(t.article_id)),fetch:({store:t,params:e,error:a})=>t.dispatch("loadArticleDetail",e).catch(t=>{a({statusCode:404,message:"众里寻他 我已不再"})}),head(){const t=this.article;return{title:t.title||"No Result Data.",meta:[{hid:"keywords",name:"keywords",content:(t.keywords?t.keywords.join(","):t.title)||""},{hid:"description",name:"description",content:t.description}]}},data:()=>({swiperOption:{setWrapperSize:!0,mousewheel:!0,autoplay:{delay:3500,disableOnInteraction:!1},observeParents:!0,grabCursor:!0,slidesPerView:"auto",spaceBetween:14},canReadMore:!1,fullContentEd:!1,readMoreLoading:!1}),components:{ShareBox:a(94).a},computed:{...Object(i.b)({language:t=>t.option.language,tags:t=>t.tag.data,imgExt:t=>t.option.imgExt,article:t=>t.article.detail.data,fetching:t=>t.article.detail.fetching,mobileLayout:t=>t.option.mobileLayout}),languageIsEn(){return this.$store.getters["option/langIsEn"]},articleContent(){const t=this.article.content;if(!t)return"";const e=this.tags.data&&this.tags.data.length;if(t.length>13688&&!this.fullContentEd){this.canReadMore=!0;let a=t.substring(0,11688);const i=a.lastIndexOf("\n####"),n=a.lastIndexOf("\n###"),l=a.lastIndexOf("\n\n```"),r=a.lastIndexOf("\n\n**"),c=Math.max(i,n,l,r);return a=a.substring(0,c),Object(s.a)(a,!!e&&this.tags.data,!0)}return this.canReadMore=!1,Object(s.a)(t,!!e&&this.tags.data,!0)}},methods:{readMore(){this.readMoreLoading=!0,this.$nextTick(()=>{setTimeout(()=>{this.fullContentEd=!0},0)})},copyArticleUrl(){this.article.title&&this.$root.$copyToClipboard(`https://surmon.me/article/${this.article.id}`)},buildThumb(t){return t?`${t}?imageView2/1/w/300/h/230/format/${this.imgExt}/interlace/1/q/80|imageslim`:`${this.cdnUrl}/images/thumb-releted.jpg`},buildDateTitle(t){if(!t)return t;t=new Date(t);const e=this.languageIsEn?"AM":"上午",a=this.languageIsEn?"PM":"下午";return`${t.getFullYear()}/${t.getMonth()+1}/${t.getDate()} ${t.getHours()>11?a:e}`},buildDateLink(t){if(!t)return t;const e=(t=new Date(t)).getFullYear();let a=(t.getMonth()+1).toString(),i=t.getDate().toString();return`/date/${e}-${a=Object.is(a.length,1)?`0${a}`:a}-${i=Object.is(i.length,1)?`0${i}`:i}`}}},l=(a(353),a(0)),r=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article",class:{mobile:t.mobileLayout}},[a("div",{staticClass:"detail"},[!t.fetching&&t.article.title?a("div",{staticClass:"oirigin",class:{self:!t.article.origin,other:1===t.article.origin,hybrid:2===t.article.origin}},[t.article.origin?1===t.article.origin?a("span",{domProps:{textContent:t._s(t.$i18n.text.origin.reprint)}},[t._v("转载")]):2===t.article.origin?a("span",{domProps:{textContent:t._s(t.$i18n.text.origin.hybrid)}},[t._v("混撰")]):t._e():a("span",{domProps:{textContent:t._s(t.$i18n.text.origin.original)}},[t._v("原创")])]):t._e(),t._v(" "),a("h2",{staticClass:"title"},[t._v(t._s(t.article.title||"..."))]),t._v(" "),a("transition",{attrs:{name:"module",mode:"out-in"}},[t.fetching||t.article.title?t._e():a("empty-box",{staticClass:"article-empty-box"},[t._t("default",[t._v("No Result Article.")])],2)],1),t._v(" "),a("transition",{attrs:{name:"module",mode:"out-in"}},[!t.fetching&&t.article.content?a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleContent)}}):t._e()]),t._v(" "),a("transition",{attrs:{name:"module",mode:"out-in"}},[t.canReadMore?a("div",{staticClass:"readmore"},[a("button",{staticClass:"readmore-btn",attrs:{disabled:t.readMoreLoading},on:{click:function(e){t.readMore()}}},[a("span",[t._v(t._s(t.readMoreLoading?t.$i18n.text.article.rendering:t.$i18n.text.article.readAll))]),t._v(" "),a("i",{staticClass:"iconfont icon-next-bottom"})])]):t._e()])],1),t._v(" "),!t.fetching&&t.article.content?a("share-box",{staticClass:"article-share"}):t._e(),t._v(" "),a("transition",{attrs:{name:"module",mode:"out-in"}},[!t.fetching&&t.article.title?a("div",{staticClass:"metas"},[t.languageIsEn?a("p",{staticClass:"item"},[a("span",[t._v("Article created at")]),t._v(" "),a("span",[t._v(" ")]),t._v(" "),a("nuxt-link",{attrs:{title:t.buildDateTitle(t.article.create_at),to:t.buildDateLink(t.article.create_at)}},[a("span",[t._v(t._s(t.buildDateTitle(t.article.create_at)))])]),t._v(" "),a("span",[t._v(" in category ")]),t._v(" "),t._l(t.article.category,function(e,i){return a("nuxt-link",{key:i,attrs:{to:"/category/"+e.slug,title:e.description||e.name}},[a("span",[t._v(t._s(e.name))]),t._v(" "),t.article.category.length&&t.article.category[i+1]?a("span",[t._v("、")]):t._e()])}),t._v(" "),t.article.category.length?t._e():a("span",[t._v("no catgory")]),t._v(" "),a("span",[t._v(",  ")]),t._v(" "),a("span",[t._v(t._s(t.article.meta.views||0))]),t._v(" "),a("span",[t._v(" Views")])],2):a("p",{staticClass:"item"},[a("span",[t._v("本文于")]),t._v(" "),a("span",[t._v(" ")]),t._v(" "),a("nuxt-link",{attrs:{title:t.buildDateTitle(t.article.create_at),to:t.buildDateLink(t.article.create_at)}},[a("span",[t._v(t._s(t.buildDateTitle(t.article.create_at)))])]),t._v(" "),a("span",[t._v(" 发布在 ")]),t._v(" "),t._l(t.article.category,function(e,i){return a("span",{key:i},[a("nuxt-link",{attrs:{to:"/category/"+e.slug,title:e.description||e.name}},[a("span",[t._v(t._s(t.$i18n.nav[e.slug]))])]),t._v(" "),t.article.category.length&&t.article.category[i+1]?a("span",[t._v("、")]):t._e()],1)}),t._v(" "),t.article.category.length?t._e():a("span",[t._v("未知")]),t._v(" "),a("span",[t._v(" 分类下，当前已被围观 ")]),t._v(" "),a("span",[t._v(t._s(t.article.meta.views||0))]),t._v(" "),a("span",[t._v(" 次")])],2),t._v(" "),a("p",{staticClass:"item"},[a("span",{staticClass:"title",class:t.language},[t._v(t._s(t.languageIsEn?"Related tags:":"相关标签："))]),t._v(" "),t.article.tag.length?t._e():a("span",{domProps:{textContent:t._s(t.$i18n.text.tag.empty)}},[t._v("无相关标签")]),t._v(" "),t._l(t.article.tag,function(e,i){return a("span",{key:i},[a("nuxt-link",{attrs:{to:"/tag/"+e.slug,title:e.description||e.name}},[a("span",[t._v(t._s(e.name))])]),t._v(" "),t.article.tag.length&&t.article.tag[i+1]?a("span",[t._v("、")]):t._e()],1)})],2),t._v(" "),a("p",{staticClass:"item"},[a("span",{staticClass:"title",class:t.language},[t._v(t._s(t.languageIsEn?"Article Address:":"永久地址："))]),t._v(" "),a("span",{staticClass:"site-url",on:{click:t.copyArticleUrl}},[a("span",[t._v("https://surmon.me/article/"+t._s(t.article.id))])])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"title",class:t.language},[t._v(t._s(t.languageIsEn?"Copyright Clarify:":"版权声明："))]),t._v(" "),t.languageIsEn?t._e():a("span",[a("span",[t._v("自由转载-署名-非商业性使用")]),t._v(" "),a("span",[t._v("  |  ")])]),t._v(" "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh",target:"_blank",rel:"external nofollow noopenter"}},[t._v("Creative Commons BY-NC 3.0 CN")])])]):t._e()]),t._v(" "),t.article.related&&t.article.related.length?[t.mobileLayout?a("div",{staticClass:"related"},[a("ul",{staticClass:"article-list"},t._l(t.article.related.slice(0,8),function(e,i){return a("li",{key:i,staticClass:"item"},[a("nuxt-link",{staticClass:"item-link",attrs:{to:"/article/"+e.id,title:"「 "+e.title+" 」- 继续阅读"}},[a("span",{staticClass:"sign"},[t._v("《")]),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"sign"},[t._v("》")]),t._v(" "),a("small",{staticClass:"tip"},[t._v("- 继续阅读")])])],1)}))]):a("div",{staticClass:"related"},[a("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.swiperOption,expression:"swiperOption",arg:"swiper"}],staticClass:"article-list swiper"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.article.related,function(e,i){return a("div",{key:i,staticClass:"swiper-slide item"},[a("nuxt-link",{staticClass:"item-box",attrs:{to:"/article/"+e.id,title:e.title}},[a("img",{staticClass:"thumb",attrs:{src:t.buildThumb(e.thumb),alt:e.title}}),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(e.title))])])],1)}))])])]:t._e(),t._v(" "),a("div",{staticClass:"comment"},[!t.fetching&&t.article.title?a("comment-box",{attrs:{"post-id":t.article.id,likes:t.article.meta.likes}}):t._e()],1)],2)},[],!1,null,null,null);r.options.__file="_article_id.vue";e.default=r.exports}}]);