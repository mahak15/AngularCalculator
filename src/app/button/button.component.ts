import { Component, OnInit,Input} from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  onClickHandler = function () {
    console.log(this.value + " is pressed")
   }

  @Input () value : string ;

constructor( ) {


  }

 ngOnInit() {
    console.log(this.value);

 }
}
