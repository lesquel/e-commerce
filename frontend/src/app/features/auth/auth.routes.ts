import { Routes } from "@angular/router";
import { AuthLayout } from "./auth.layout";
import { EditPage, LoginPage, RegisterPage } from "./pages";
import { MePage } from "./pages";
import {authRoutesConfig} from "./config";



export const authRoutes: Routes = [
    {
        path: authRoutesConfig.auth.path,
        component: AuthLayout,
        children: [
            {
                path: authRoutesConfig.login.path,
                component: LoginPage
            },
            {
                path: authRoutesConfig.register.path,
                component: RegisterPage
            },
            {
                path: authRoutesConfig.me.path,
                component: MePage
            },
            {
                path: authRoutesConfig.edit.path,
                component: EditPage
            }
        ]
    },
];