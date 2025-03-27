import { Routes } from "@angular/router";
import { ProductsLayout } from './products.layout'
import { productsRoutesConfig } from "./config";
import { ProductDetailPage, ProductListPage } from "./pages";

export const productsRoutes: Routes = [
    {
        path: productsRoutesConfig.base.path,
        component: ProductsLayout,
        children: [
            {
                path: productsRoutesConfig.children.list.path,
                component: ProductListPage
            },
            {
                path:productsRoutesConfig.children.detail.path,
                component:ProductDetailPage
            }
        ]
    }
]