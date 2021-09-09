import { NovaTransferenciaComponent } from './new-transferencia/nova-transferencia.componet';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt')

@NgModule({
  //tudo no angular é componente, então aqui ficam as declarações dos componentes
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  //localiza o codigo em pt-br
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
    //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
