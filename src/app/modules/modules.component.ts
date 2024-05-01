import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  loading!:boolean;

  constructor(private _router:Router){}
  ngOnInit(): void {
    this.loading = true; 
    
    setTimeout(() => {
      this.loading=false
    }, 2000); 
  }
   
  
  

}
