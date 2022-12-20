import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUserComponent
  },
  {
    path: 'pagina2',
    component: Pagina2Component
  },
  {
    path: 'create',
    component: DetailUserComponent
  },
  {
    path: 'detail/:id/:mode',
    component: DetailUserComponent
  },
  {
    path: 'detail/:id/:mode',
    component: DetailUserComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
