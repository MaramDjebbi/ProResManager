import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AjouterProjetComponent } from './pages/ajouter-projet/ajouter-projet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteRessourceComponent } from './pages/ajouter-ressource/ajouter-ressource.component';
import { EditProjetComponent } from './pages/edit-projet/edit-projet.component';
import { EditRessourceComponent } from './pages/edit-ressource/edit-ressource.component';
import { TablesComponent } from './pages/tables/tables.component';
import { AjouterAffectationComponent } from './pages/ajouter-affectation/ajouter-affectation.component';
import { MessageComponent } from './pages/message/message.component';
import { EditAffectationComponent } from './pages/edit-affectation/edit-affectation.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AjouterProjetComponent,
    AjouteRessourceComponent,
    EditProjetComponent,
    EditRessourceComponent,
    TablesComponent,
    AjouterAffectationComponent,
    MessageComponent,
    EditAffectationComponent,
    FilterPipe,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})



export class AppModule { }
