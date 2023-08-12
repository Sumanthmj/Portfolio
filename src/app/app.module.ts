import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SplitPipe } from './profile/split.pipe';
import { ContactComponent } from './profile/contact/contact.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { IntroComponent } from './profile/intro/intro.component';
import { HeaderComponent } from './profile/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './profile/education/education.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './profile/about/about.component';
import { ProfileService } from './profile/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { CertificatesComponent } from './profile/certificates/certificates.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    SplitPipe,
    CertificatesComponent
  ],
  imports: [
    RouterModule, 
    CommonModule, 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
