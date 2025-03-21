import { Routes } from "@angular/router";
import path from "path";
import { SiteLayout } from "./site.layout";
import { Component } from "@angular/core";
import { HomePage } from "./pages";

export const siteRoutes: Routes = [
    {
        path : '',
        component : SiteLayout,
        children : [
            {
                path : '',
                component : HomePage
            }
            
        ],
        data : {
            title : 'Home Page'
        }
    }
    
]