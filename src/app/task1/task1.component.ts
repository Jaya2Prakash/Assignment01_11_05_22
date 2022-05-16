import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  users : any

  emptoadd:any = {id:"",firstname:"",lastname:""} // empty object

  showedit : boolean = false
  showedit1 : boolean = false

  constructor(private api:WebService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.api.getUser().subscribe((r:any)=>{
      this.users = r
    })
  }

  edit(e:any){
    this.showedit= true
    this.emptoadd = e
    this.showedit1= false
  }

  update(){
    this.api.update(this.emptoadd).subscribe((r:any)=>{
      this.getdata();
      alert("Update Successfully")
      this.showedit= false
    });
  }

  addnew(){
    this.showedit1= true
    this.emptoadd = ""
    this.showedit= false
  }

  add(){
    this.showedit1= true
    this.api.addnew(this.emptoadd).subscribe((r:any)=>{
       this.getdata();
       this.showedit1= false
      alert("Added Successfully")
  });
 }

 onDelete(e:any){
  this.api.delUser(e).subscribe((r:any)=>{
    this.getdata();
    
  })
}

}