import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
  //caso seja uma rota vazia
  { path: '', pathMatch: 'full', redirectTo: '/home'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
