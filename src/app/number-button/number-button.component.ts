import { Component,Input } from '@angular/core';
import { ButtonComponent}  from '../button/button.component';
@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent extends  ButtonComponent  {

  constructor() {
  super();
  }



}
