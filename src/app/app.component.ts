import { style } from '@angular/animations';
import { NgSwitch } from '@angular/common';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, Directive } from '@angular/core';
import { Employer } from './employer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Directives';
  title1 = 'Angular-Structural-Directives'
  public username:string='root';
  public password:string='root';

  public colors=['Cyan','Magenta','Yellow','Black',]

  public employees:Employer[]=[
    {eid:1,ename:"Prudhvi",esalary:50000.05,ecity:"Aurangabad"},
    {eid:2,ename:"Abhishek",esalary:56000.05,ecity:"Nagpur"},
    {eid:3,ename:"Ram",esalary:350000.05,ecity:"Pune"},
    {eid:4,ename:"Ashish",esalary:45000.05,ecity:"Delhi"},
    {eid:5,ename:"Kiran",esalary:55000.05,ecity:"Indore"},
  ]

    // input for NgSwitch

  public name:string='Abhishek';

  public technology:string="javascript";

  //input for ngModel

  public uname:string='Admin'
  public countries:Array<string>=['India','Korea','Dubai','Noman'];
  public country:string='';


  //input for ngClass

  public ngclass:string='Welcome to Konverge'

  public haserror:boolean=true;

  myClass={
    "text-success1":!this.haserror,
    "text-special1":true,
    "text-danger1":true,
  }

  myStyle={
    "color":"grey",
    "font-style":"italic",
  }


  // custom Directive
    public data:string='Hello Team'

}
