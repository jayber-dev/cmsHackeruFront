
import { Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './components/loginComponents/login.component'
import { SignupComponent } from './components/signupComponents/signup.component'
import { AboutCardComponent } from './components/about-card/about-card.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { DashboardComponent } from './components/dashboardView/dashboard.component'
import { ContactViewComponent } from './components/dashboardView/contact-view/contact-view.component'
import { CostumersViewComponent } from './components/dashboardView/costumers-view/costumers-view.component'
import { UsersTableComponent } from './components/dashboardView/costumers-view/users-table/users-table.component'
import { UsersFoldersComponent } from './components/dashboardView/costumers-view/users-folders/users-folders.component'

export const routes:Routes =  [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component:AboutCardComponent},
    {path: 'dashboard', component:DashboardComponent,
        children:[
            {path: 'costumers', component:CostumersViewComponent,
                children:[
                    {path:'table', component:UsersTableComponent},
                    {path:'folders', component:UsersFoldersComponent}
                ]},
            {path: 'contacts', component:ContactViewComponent}
        ]},
    {path: '**', component:NotFoundComponent},
]