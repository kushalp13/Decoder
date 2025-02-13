// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UpcomingContestComponent } from './components/upcoming-contest/upcoming-contest.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { BlogViewComponent } from './components/blog/blog-view/blog-view.component';
import { BlogCreateComponent } from './components/blog/blog-create/blog-create.component';
import { BlogEditComponent } from './components/blog/blog-edit/blog-edit.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { CodeIdeComponent } from './components/code/code-ide/code-ide.component';
import { CodeViewComponent } from './components/code/code-view/code-view.component';
import { CodeRecentComponent } from './components/code/code-recent/code-recent.component';

// Service
import { UserService } from "./service/user.service";
import { AdminService } from "./service/admin.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    UpcomingContestComponent,
    ContactComponent,
    LoginComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogListComponent,
    RegisterComponent,
    ProfileComponent,
    AboutComponent,
    CodeViewComponent,
    CodeRecentComponent,
    CodeIdeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AdminService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
