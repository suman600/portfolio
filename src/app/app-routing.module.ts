import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'hello',
    loadChildren: () => import('./routes/hello/hello.module').then(m => m.HelloModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./routes/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./routes/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'hello',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
