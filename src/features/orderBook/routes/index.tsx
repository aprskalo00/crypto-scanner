import {Route} from '@tanstack/react-router';
import {homeRoute} from '@/features/home/routes';
import OrderBook from '../views/orderBook';

export const orderBookRoute = new Route({
    getParentRoute: () => homeRoute,
    path: 'order-book',
    onLoad: async () => {
        return {};
    },
    component: () => <OrderBook />,
});
