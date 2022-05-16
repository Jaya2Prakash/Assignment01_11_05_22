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
  }

  addnew(){
    this.showedit1= true
    this.emptoadd = ""
  }

  update(){
    this.api.updateEmployee(this.emptoadd).subscribe((r:any)=>{
      this.getdata();
      alert("Update Successfully")
      this.showedit= false
    });
  }

  onDelete(e:any){
    this.api.delUser(e).subscribe((r:any)=>{
      this.getdata();
      
    })
  }

  add(){
    this.showedit1= true
    this.api.addnewEmployee(this.emptoadd).subscribe((r:any)=>{
       this.getdata();
       this.showedit1= false
      alert("Added Successfully")
  });
 }

 displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}