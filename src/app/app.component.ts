import { Component } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';

  ngOnInit() {
  this.jqueryFunction();
 }
 jqueryFunction():void{
  $(document).ready(function() {
    console.log('I am Called From jQuery');
  });
 }
}
