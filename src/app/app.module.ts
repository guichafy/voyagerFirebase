import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { KanbanBoardModule } from './shared/kanban-board/kanban-board.module';
import { SortablejsModule } from 'angular-sortablejs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { AuthService } from './core/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    SortablejsModule,
    KanbanBoardModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    DashboardModule,
    ReactiveFormsModule, // Validação Form
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
