import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "post/list",
    pathMatch:'full'
  },
  {
    path: 'post/create',
    component: CreatePageComponent
  },
  {
    path: 'post/:id/edit',
    component: EditPageComponent
  },
  {
    path: 'post/view',
    component: ViewPageComponent
  },
  {
    path: 'post/list',
    component: ListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
