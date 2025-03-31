import { Routes } from "@angular/router";
import { AuthLayout } from "./auth.layout";
import { EditPage, LoginPage, RegisterPage, MePage } from "./pages";
import { authRoutesConfig } from "./config";
import { isLoggedGuard } from "./guards/is-Logged.guard";
import { isNotLoggedGuard } from "./guards/is-not-Logged.guard";



export const authRoutes: Routes = [
    {
        path: authRoutesConfig.base.path,
        component: AuthLayout,
        children: [
            {
                path: authRoutesConfig.children.login.path,
                component: LoginPage, canActivate: [isLoggedGuard]
            },
            {
                path: authRoutesConfig.children.register.path,
                component: RegisterPage, canActivate: [isLoggedGuard]
            },
            {
                path: authRoutesConfig.children.me.path,
                component: MePage, canActivate: [isNotLoggedGuard]
            },
            {
                path: authRoutesConfig.children.edit.path,
                component: EditPage, canActivate: [isNotLoggedGuard]
            }
        ]
    },
];
