import Vue from 'vue'
import Router from 'vue-router'

const _1c5fac26 = () => import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */).then(m => m.default || m)
const _1bd2b4e1 = () => import('../pages/sitemap.vue' /* webpackChunkName: "pages/sitemap" */).then(m => m.default || m)
const _97d9d366 = () => import('../pages/app.vue' /* webpackChunkName: "pages/app" */).then(m => m.default || m)
const _374dcee1 = () => import('../pages/service.vue' /* webpackChunkName: "pages/service" */).then(m => m.default || m)
const _72398145 = () => import('../pages/project.vue' /* webpackChunkName: "pages/project" */).then(m => m.default || m)
const _dd48168e = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _0f12995e = () => import('../pages/music.vue' /* webpackChunkName: "pages/music" */).then(m => m.default || m)
const _7e51b35d = () => import('../pages/search/_keyword.vue' /* webpackChunkName: "pages/search/_keyword" */).then(m => m.default || m)
const _3548e006 = () => import('../pages/tag/_tag_slug.vue' /* webpackChunkName: "pages/tag/_tag_slug" */).then(m => m.default || m)
const _71ab1ef0 = () => import('../pages/date/_date.vue' /* webpackChunkName: "pages/date/_date" */).then(m => m.default || m)
const _132fe294 = () => import('../pages/article/_article_id.vue' /* webpackChunkName: "pages/article/_article_id" */).then(m => m.default || m)
const _1893e42a = () => import('../pages/category/_category_slug.vue' /* webpackChunkName: "pages/category/_category_slug" */).then(m => m.default || m)
const _9dd86104 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


const scrollBehavior = function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/guestbook",
			component: _1c5fac26,
			name: "guestbook"
		},
		{
			path: "/sitemap",
			component: _1bd2b4e1,
			name: "sitemap"
		},
		{
			path: "/app",
			component: _97d9d366,
			name: "app"
		},
		{
			path: "/service",
			component: _374dcee1,
			name: "service"
		},
		{
			path: "/project",
			component: _72398145,
			name: "project"
		},
		{
			path: "/about",
			component: _dd48168e,
			name: "about"
		},
		{
			path: "/music",
			component: _0f12995e,
			name: "music"
		},
		{
			path: "/search/:keyword?",
			component: _7e51b35d,
			name: "search-keyword"
		},
		{
			path: "/tag/:tag_slug?",
			component: _3548e006,
			name: "tag-tag_slug"
		},
		{
			path: "/date/:date?",
			component: _71ab1ef0,
			name: "date-date"
		},
		{
			path: "/article/:article_id?",
			component: _132fe294,
			name: "article-article_id"
		},
		{
			path: "/category/:category_slug?",
			component: _1893e42a,
			name: "category-category_slug"
		},
		{
			path: "/",
			component: _9dd86104,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
