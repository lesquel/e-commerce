import { Routes } from "@angular/router";
import { ProductsLayout } from './products.layout'
import { productsRoutesConfig } from "./config";
import { ProductListPage } from "./pages/product-list.page";

export const productsRoutes: Routes = [
    {
        path: productsRoutesConfig.base.path,
        component: ProductsLayout,
        children: [
            {
                path: productsRoutesConfig.children.list.path,
                component: ProductListPage
            }
        ]
    }
]