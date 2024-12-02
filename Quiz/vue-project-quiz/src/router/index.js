import {
    createRouter,
    createWebHistory
} from "vue-router";

import HomePage from "../views/HomePage.vue";
import TestPage from "../views/TestPage.vue";
import ResultPage from "../views/ResultPage.vue"

const routes = [{
        path: "/",
        component: HomePage,
    },
    {
        path: "/test",
        component: TestPage,
    },
    {
        path: "/result",
        component: ResultPage,
        props: (route) => ({
            correctAnswers: Number(route.query.correctAnswers),
            totalQuestions: Number(route.query.totalQuestions),
        }),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router