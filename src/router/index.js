import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from 'components/IndexPage/IndexPage';
import ToplistPage from 'components/ToplistPage/ToplistPage';
import SearchPage from 'components/SearchPage/SearchPage';
import PlaySongPage from 'components/PlaySongPage/PlaySongPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/recom',
      name: 'recom',
      component: IndexPage
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: ToplistPage
    },
    {
      path: '/playsong',
      name: 'playsong',
      component: PlaySongPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '*',
      redirect: '/recom'
    }
  ]
})
