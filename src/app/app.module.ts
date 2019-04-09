import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'angular-sortablejs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
import { KanbanBoardModule } from './shared/kanban-board/kanban-board.module';



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
