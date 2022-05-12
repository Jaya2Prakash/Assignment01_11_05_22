import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  f1: number = -1;
  f2:number = 1;
  f3:number = 0;
  temp:number = 0;
  temp1:number = 0
  str:string=""

  val:any 
  val1:any
  val2:any
  val3:any
  arr : any =[]
  arr1 : any =[]
  arr2 : any =[]
  arr3 : any =[]
  arr4 : any =[]
  arr5 : any =[]
  constructor() { }

  ngOnInit(): void {
  }

  fib(){
    this.arr=[]
      for(let i=0;i<this.val;i++){
        this.f3=this.f1+this.f2
        this.arr.push(this.f3)
        this.f1=this.f2
        this.f2=this.f3
      }
      console.log(this.arr)        
    }

    num(){
      this.arr1=[]
      for(let i=0;i<=this.val1;i++){
        this.arr1.push(i)
      }
      this.str=this.arr1.toString()
      console.log(this.str)
    }

    root(){
      for(let i=1;i<=this.val2;i++){
        this.temp=Math.sqrt(i)
        this.arr2.push(this.temp)
        this.temp1=Math.cbrt(i)
        this.arr3.push(this.temp)
      }     
    }

    Sort(){
        for(let i=1;i<=this.val3;i++){
        if(i%2==0)
        {
          this.arr4.push(i)
          
        }
        else{
          this.arr5.push(i)
        }
        
      }
      this.arr4.join()
      this.arr5.join()
      console.log(this.arr4)
      console.log(this.arr5)
      
  }
}