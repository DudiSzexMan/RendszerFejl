import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  /*{ path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateBusinessComponent, canActivate: [AuthGuard] },
  { path: ':businessId/inventory/create', component: CreateInventoryComponent, canActivate: [AuthGuard] },
  { path: ':businessId/inventory/:inventoryId', component: ViewInventoryComponent, canActivate: [AuthGuard] },*/
  { path: 'project/:projectId', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: '', component: ProjectsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
