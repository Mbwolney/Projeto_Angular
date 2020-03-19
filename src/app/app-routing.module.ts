import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'menu',
  loadChildren: 'app/menu/menu.module#MenuModule',
  canActivate: [AuthGuard]
  },
  { path: 'contato',
  loadChildren: 'app/contato/contato.module#ContatoModule',
  canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
