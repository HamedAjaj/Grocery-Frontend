import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
constructor(private router:Router){}

  data=[
    {name:'Home',router:'',img:'home.svg', width:'col-md-1 ms-3'},
    {name:'Hot deals',router:'#hot',img:'hotdeals.svg', width:'col-md-1'},
    {name:'Promotion',router:'#pro',img:'li_percent.svg', width:'col-md-1 me-2'},
    {name:'New Products Pro',router:'/new-products',img:'newProducts.svg', width:'col-md-2'},
    {name:'1233-7777 24/7    support center',router:'#phone',img:'Call.svg', width:'col-md-3 justify-content-center me-0'},
  
  
  ]
}
