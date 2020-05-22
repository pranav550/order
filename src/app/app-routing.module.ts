import { AuthGuard } from './Shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'auth', loadChildren: () => import(`./Module/auth/auth.module`).then(m => m.AuthModule) },
  { path: 'customers', canActivate: [AuthGuard], loadChildren: () => import(`./Module/customer/customer.module`).then(m => m.CustomerModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
