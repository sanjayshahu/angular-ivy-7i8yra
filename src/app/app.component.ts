import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 heroArray=[{'name':"s","fly":true},{'name':"sa","fly":false},{'name':"san",      "fly":true},{'name':"sanj","fly":true},]

 noReference(){
this.heroArray.push({'name':"sanja","fly":true});
console.log(this.heroArray);
 }
 Reference(){
   let newArray=this.heroArray.slice();
   console.log("b",newArray);
   newArray.push({'name':"sanjay","fly":true});
   console.log("a",newArray);
   this.heroArray=newArray;



 }
}
