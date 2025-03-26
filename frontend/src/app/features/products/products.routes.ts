import { Routes } from "@angular/router";
import { ProductsLayout } from './products.layout'
import { productsRoutesConfig } from "./config";

export const productsRoutes: Routes = [
    {
        path: productsRoutesConfig.products.path,
        component: ProductsLayout,
        children: []
    }
]