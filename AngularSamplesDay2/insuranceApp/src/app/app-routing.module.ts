import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowLocationComponent } from './show-location/show-location.component';
import { ShowpolicydetailComponent } from './showpolicydetail/showpolicydetail.component';
import { UniversalGuard } from './universal.guard';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login/:msg', component: LoginComponent },
  { path: 'products', component: ContentComponent },
  { path: 'policies', component: DetailsComponent , canActivate:[UniversalGuard],
    children:[
      { path:'health', component:ShowHealthPolicyComponent, outlet:'health'},
      { path:'life', component:ShowpolicydetailComponent, outlet:'life'}] },
  { path: 'advisors', component: ShowAdvisorsComponent },
  { path: 'location', component: ShowLocationComponent },
  { path: 'branches', component: SearchBranchComponent },
  { path: 'logout', component: LogoutComponent, canDeactivate:[UniversalGuard] },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
