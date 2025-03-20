import { Routes } from "@angular/router";
import { AuthLayout } from "./auth.layout";
import { EditPage, LoginPage, RegisterPage } from "./pages";
import { MePage } from "./pages";

export const authRoutes: Routes = [
    {
        path: 'auth',
         component: AuthLayout,
        children: [
            {
                path: 'login',
                component: LoginPage
            },
            {
                path: 'register',
                component: RegisterPage
            },
            {
                path: 'me',
                component: MePage
            },
            {
                path: 'me/edit',
                component: EditPage
            }
        ]
    },
];