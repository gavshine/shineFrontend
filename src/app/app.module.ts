import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { AlertComponent } from './pages/alert/alert.component';
import { LoggedComponent } from './pages/logged/logged.component';

import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AlertService } from './services/alert/alert.service';
import { UserService } from './services/user/user.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NavComponent,
    ContactUsComponent,
    ServicesComponent,
    LoginComponent,
    AlertComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
