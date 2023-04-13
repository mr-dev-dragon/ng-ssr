import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from './public/components/layout/layout.component';
import { mainRoutes } from './core/routes/routes';



const routes: Routes = [
  {
    path: 'public',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    // component: LayoutComponent,
    children: mainRoutes,
    data: {
      title: 'main Routes to the main module',
      type: 'content',
    },
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
