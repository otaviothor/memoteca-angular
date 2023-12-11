import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    // components, directives, pipes (created by you and for other libs like angular material)
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [], // services (declaring services here, you can use dependency injection in constructor of components)
  exports: [], // all the things you want export to other modules
  bootstrap: [AppComponent], // which component will be rendered in your app
})
export class AppModule {}
