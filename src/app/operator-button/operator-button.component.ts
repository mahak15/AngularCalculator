import { Component, Input } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.css']
})
export class OperatorButtonComponent extends ButtonComponent {

  constructor() {
  super();
  }



}
