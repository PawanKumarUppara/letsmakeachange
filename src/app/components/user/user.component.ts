import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent {
   
   //properties
    firstName:string;
    lastName:string;
    age:number;
    address;
    nuberArray:number[];
    mixedArray:any[];
    myTuple:[string,number,boolean];
   //methods whn object initited
   constructor(){
    
    this.firstName='pawan';
    this.lastName='Uppara';
    this.age=26;
    this.address={
            street:'20th main street',
            city:'Boston',
            state:'MA'
    };
    this.nuberArray=[1,2,3];
    this.mixedArray=[1,'appl'];
    this.myTuple=['app',23,true];
    console.log(this.addNumbers(2,3));
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

   addNumbers(num1:number,num2:number):number{
       return num1+num2;
   }
}
