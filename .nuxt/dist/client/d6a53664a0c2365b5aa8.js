(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{364:function(t,a,e){"use strict";e.r(a);var s=e(331),r=e(330),i={name:"tag-article-list",validate:({params:t,store:a})=>t.tag_slug&&a.state.tag.data.data.find((a,e,s)=>Object.is(a.slug,t.tag_slug)),fetch:({store:t,params:a})=>t.dispatch("loadArticles",a),head(){return{title:`${(this.defaultParams.tag_slug||"").toLowerCase().replace(/( |^)[a-z]/g,t=>t.toUpperCase())} | Tag`}},created(){this.currentTag||this.$router.back()},components:{Carrousel:s.a,ArticleList:r.a},computed:{article(){return this.$store.state.article.list},currentTag(){return this.$store.state.tag.data.data.find((t,a,e)=>Object.is(t.slug,this.$route.params.tag_slug))},defaultParams(){return{tag_slug:this.$route.params.tag_slug}},nextPageParams(){return Object.assign({page:this.article.data.pagination.current_page+1},this.defaultParams)}},methods:{loadmoreArticle(){this.$store.dispatch("loadArticles",this.nextPageParams)}}},l=e(0),c=Object(l.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"index"},[a("article-list",{attrs:{article:this.article},on:{loadmore:this.loadmoreArticle}})],1)},[],!1,null,null,null);c.options.__file="_tag_slug.vue";a.default=c.exports}}]);