import { Routes } from "@angular/router";
import { AuthLayout } from "./auth.layout";
import { EditPage, LoginPage, RegisterPage, MePage } from "./pages";
import {authRoutesConfig} from "./config";



export const authRoutes: Routes = [
    {
        path: authRoutesConfig.base.path,
        component: AuthLayout,
        children: [
            {
                path: authRoutesConfig.children.login.path,
                component: LoginPage
            },
            {
                path: authRoutesConfig.children.register.path,
                component: RegisterPage
            },
            {
                path: authRoutesConfig.children.me.path,
                component: MePage
            },
            {
                path: authRoutesConfig.children.edit.path,
                component: EditPage
            }
        ]
    },
];
