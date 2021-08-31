import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Error from './components/Error.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/detail/:id(\\d+)',// 숫자만 가능 (정규식이라고 함)
    component: Detail,
    children: [
        {
            path: 'author',
            component: Author,
        },
        {
            path: 'comment',
            component: Comment,
        },
    ],
  },
  {
      path: '/:anything(.*)',
      component: Error
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 