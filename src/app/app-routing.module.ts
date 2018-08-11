import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ 
        path: '', 
        //redirectTo: '/login', 
        component:HomeComponent,
        pathMatch: 'full' ,
        data: { title: 'Home PDFMAKE' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home PDFMAKE' }
    },
    {
        path: '**',
        component: HomeComponent,
        data: { title: 'Home PDFMAKE' }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
