import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import {MenuComponent} from './menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowAdvisorsComponent, MenuComponent, SearchBranchComponent, ShowBranchComponent, TestimonyComponent, LoginComponent, LogoutComponent, HighLightDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
