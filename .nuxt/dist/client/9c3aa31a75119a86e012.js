(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(t,a,e){"use strict";e.r(a);var r=e(331),s=e(330),i={name:"data-article-list",validate:({params:t})=>!Object.is(new Date(t.date).toString(),"Invalid Date"),fetch:({store:t,params:a})=>t.dispatch("loadArticles",a),head(){return{title:`${this.defaultParams.date} | Date`}},components:{Carrousel:r.a,ArticleList:s.a},computed:{article(){return this.$store.state.article.list},defaultParams(){return{date:this.$route.params.date}},nextPageParams(){return Object.assign({page:this.article.data.pagination.current_page+1},this.defaultParams)}},methods:{loadmoreArticle(){this.$store.dispatch("loadArticles",this.nextPageParams)}}},l=e(0),n=Object(l.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"index"},[a("article-list",{attrs:{article:this.article},on:{loadmore:this.loadmoreArticle}})],1)},[],!1,null,null,null);n.options.__file="_date.vue";a.default=n.exports}}]);