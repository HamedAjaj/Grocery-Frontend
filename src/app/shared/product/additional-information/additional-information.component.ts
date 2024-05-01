import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss'],
})
export class AdditionalInformationComponent {
  arrays = [
    { name: 'Weight',value:'03' },
    { name: 'Color',value:'Organic' },
    { name: 'Type' ,value:'Organic'},
    { name: 'Category' ,value:'Organic'},
    { name: 'Stock Status' ,value:'Organic'},
    { name: 'Tags' ,value:'Organdddddddddddddddd ddddddd fic'},
  ];
}
