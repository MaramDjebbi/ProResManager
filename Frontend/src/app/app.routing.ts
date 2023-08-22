import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AjouterProjetComponent } from './pages/ajouter-projet/ajouter-projet.component';
import { AjouteRessourceComponent } from './pages/ajouter-ressource/ajouter-ressource.component';
import { EditProjetComponent } from './pages/edit-projet/edit-projet.component';
import { EditRessourceComponent } from './pages/edit-ressource/edit-ressource.component';
import { AjouterAffectationComponent } from './pages/ajouter-affectation/ajouter-affectation.component';
import { EditAffectationComponent } from './pages/edit-affectation/edit-affectation.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },


  {
    path: '',    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },


  {
    path: '', component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  
  { path: 'addproject', component: AjouterProjetComponent },

  { path: 'addresource', component: AjouteRessourceComponent },

  { path: 'addaffectation', component: AjouterAffectationComponent },

  { path: 'editprojet/:idprojet', component: EditProjetComponent },

  { path: 'editressource/:idRessource', component: EditRessourceComponent },

  { path: 'editaffectation/:idAffectation', component: EditAffectationComponent },

];



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
})

export class AppRoutingModule { }
