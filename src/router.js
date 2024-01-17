import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue';
import ProjectShow from './pages/projects/ProjectShow.vue';
import IndexProjects from './pages/projects/Index.vue';
import NotFound from './components/404.vue';

export default {
    components: {
        NotFound,
        ProjectShow,
        HomePage,
        IndexProjects,
    }

};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: IndexProjects,
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            props: true,
            component: ProjectShow,
        },
        {
            path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
        }

    ]
});
export { router };