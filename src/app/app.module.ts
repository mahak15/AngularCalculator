import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { OperatorButtonComponent } from './operator-button/operator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonComponent,
    DisplayComponent,
    NumberButtonComponent,
    OperatorButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
