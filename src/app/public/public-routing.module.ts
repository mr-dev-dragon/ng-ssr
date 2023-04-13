import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',

  //   data: {
  //     title: 'Public',
  //     type: 'module',
  //     menu: true,
  //   },
  // },
  // {
  //   path: '**',
    

  //   data: {
  //     title: 'Public',
  //     type: 'module',
  //     menu: true,
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
