import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  constructor(private _router:Router){}
  ngOnInit(): void {
   // this._router.navigate(['/home']);
  }

}
