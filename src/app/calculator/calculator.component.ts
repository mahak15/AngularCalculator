import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DisplayComponent } from '../display/display.component';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

   numbers = ['7','8','9','4','5','6','1','2','3','.','0','+/-'];
   Operators = ["+","-","*","/","="];
   general = ["%","CE","C"];
   displayPrint : any ;
     keyButtonPress($event){

        if($event.keyCode==61)
        {
         this.displayPrint.expression=eval(this.displayPrint.expression);
        }
        if($event.keyCode==67 || $event.keyCode==99)
        {
        this.displayPrint.expression="";
        }
        if($event.keyCode==8)
        {
       this.displayPrint.expression=this.displayPrint.expression.substr(0,(this.displayPrint.expression.length)-1);
        }
       if($event.keyCode >= 48 && $event.keyCode <=57 || $event.keyCode==42 || $event.keyCode==43 || $event.keyCode==45 || $event.keyCode==47) {
       if(this.displayPrint.expression=='0'){
       this.displayPrint.expression="";
       }
         this.displayPrint.expression += $event.key;
       }
     }


   onClickHandler (value) {
     if(value >= '0' && value <= '9'){
      if( this.displayPrint.expression=="0"){
        this.displayPrint.expression="";
      }
      this.displayPrint.expression+=value;
      }
      else  if( (value == "+") ||(value == "*")||(value == "-")||(value == "/")||(value == "+/-")||(value == ".")){
        this.displayPrint.expression+=value;
       }
      else if(value == "="){
        this.displayPrint.expression=eval(this.displayPrint.expression);
       }
      else {
        switch(value){
           case "C":this.displayPrint.expression="0";
           break;
           case "CE":this.displayPrint.expression="0";
           break;
           case "%":this.displayPrint.expression+=value;
           break;
           default:
        }

      }
   }

  constructor() {
  }


   ngOnInit() {

      this.displayPrint = new DisplayComponent();
      this.displayPrint.expression = "0";
     for (var i = 0; i < this.general.length; i++) {
         let btn = new ButtonComponent ();

         btn.value = this.general[i];

         }

    }
}
