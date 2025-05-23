import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

const routes: Routes = [

  { path: 'cursos',
     loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
     canActivate: [AuthGuard],
     canActivateChild: [CursosGuard]
  },
  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard]
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
