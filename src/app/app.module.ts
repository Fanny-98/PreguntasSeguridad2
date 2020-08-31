import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PreguntasSeguridad2Component } from './preguntas-seguridad2/preguntas-seguridad2.component';

import {DemoNgZorroAntdModule} from './ng-zorro-antd.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

registerLocaleData(es);

const rutas: Routes = [
  {
    path: 'preguntas-seguridad2',
    component: PreguntasSeguridad2Component
    
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PreguntasSeguridad2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }