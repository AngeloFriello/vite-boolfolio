import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue';
import ProjectSHow from './pages/projects/ProjectShow.vue';
import IndexProjects from './pages/projects/Index.vue';

export default {
    components: {
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
        }

    ]
});
export { router };