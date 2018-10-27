import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent {
   
   //properties
    firstName='John';
   lastName='Doe';
   age=30;
address={
    street:'50 Main Street',
    city:'Boston',
    state:'MA'
}
   //methods whn object initited
   constructor(){
    
   }

   sayHello(){
       console.log('hey'+this.firstName);
   }


   hasBirthday(){
       this.age +=1;
   }

   showAge(){
       return this.age;
   }
}
