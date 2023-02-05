import {ReactRouter} from '@tanstack/react-router';

import {homeRoute} from '@/features/home/routes';
import {postRoute} from '@/features/posts/views/post';
import {postsRoute} from '@/features/posts/views/posts';
import {indexRoute} from '@/features/posts/views/index';
import {postsIndexRoute} from '@/features/posts/views/postsIndex';
import {orderBookRoute} from '@/features/orderBook/views/orderBook';

const routeConfig = homeRoute.addChildren([indexRoute, orderBookRoute, postsRoute.addChildren([postsIndexRoute, postRoute])]);

const router = new ReactRouter({
    routeConfig,
    defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
    interface RegisterRouter {
        router: typeof router;
    }
}

export {router};
