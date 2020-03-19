import { Routes, RouterModule } from "@angular/router";
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

export const ROUTES: Routes = [
    { path: "Menu", component: MenuComponent },
    { path: "Contato", component: ContatoComponent},
    { path: "", component: LoginComponent }
]

const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);