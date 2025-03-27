import { Routes } from "@angular/router";
import { SiteLayout } from "./site.layout";
import { HomePage } from "./pages";
import { siteRoutesConfig } from "./config";
export const siteRoutes: Routes = [
    {
        path: siteRoutesConfig.base.path,
        component: SiteLayout,
        children: [
            {
                path: siteRoutesConfig.base.path,
                component: HomePage
            }

        ],
        data: {
            title: 'Home Page'
        }
    }

]