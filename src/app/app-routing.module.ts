    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
     
    import { HomeComponent } from './pages/home/home.component';
    import { AboutComponent } from './pages/about/about.component';
    import { ContactUsComponent } from './pages/contact-us/contact-us.component';
    import { ServicesComponent } from './pages/services/services.component';
    import { LoginComponent } from './pages/login/login.component';
    import { LoggedComponent } from './pages/logged/logged.component';

    import { AuthGuard } from './guards/auth.guard';
     
    const appRoutes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactUsComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'login', component: LoginComponent },
        { path: 'logged', component: LoggedComponent},
    ];
     
    @NgModule({
      imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
      ],
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule {}