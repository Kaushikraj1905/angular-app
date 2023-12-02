import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { OtherToolsComponent } from './other-tools/other-tools.component';
import { CaseStatusComponent } from './case-status/case-status.component';
import { RemoteHeaderComponent } from './remote-header/remote-header.component';
import { RemoteShareComponent } from './remote-share/remote-share.component';
import { RemoteConnectComponent } from './remote-connect/remote-connect.component';
import { ExxonHeaderComponent } from './exxon-header/exxon-header.component';
import { ExxonLithiumComponent } from './exxon-lithium/exxon-lithium.component';
import { ExxonEnergyComponent } from './exxon-energy/exxon-energy.component';
import { UspsComponent } from './usps/usps.component';
import { UspsSuppliesComponent } from './usps-supplies/usps-supplies.component';
import { UspsSearchComponent } from './usps-search/usps-search.component';
import { HttpClientModule } from  '@angular/common/http';
import { LuxoftComponent } from './luxoft/luxoft.component';
import { LuxoftBodyComponent } from './luxoft-body/luxoft-body.component';
import { LuxoftServicesComponent } from './luxoft-services/LuxoftServicesComponent';
import { SvOpticalsComponent } from './sv-opticals/sv-opticals.component';
import { SiraIncComponent } from './sira-inc/sira-inc.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    OtherToolsComponent,
    CaseStatusComponent,
    RemoteHeaderComponent,
    RemoteShareComponent,
    RemoteConnectComponent,
    ExxonHeaderComponent,
    ExxonLithiumComponent,
    ExxonEnergyComponent,
    UspsComponent,
    UspsSuppliesComponent,
    UspsSearchComponent,
    LuxoftComponent,
    LuxoftBodyComponent,
    LuxoftServicesComponent,
    SvOpticalsComponent,
    SiraIncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
