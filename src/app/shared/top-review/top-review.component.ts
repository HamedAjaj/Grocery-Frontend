import { Component } from '@angular/core';

@Component({
  selector: 'app-top-review',
  templateUrl: './top-review.component.html',
  styleUrls: ['./top-review.component.scss']
})
export class TopReviewComponent {

  topRatedData = ['Top Sells','Top Rated','Trending Items','Recently Added']
  images=['veg.svg','ornage.svg','strobary.svg']

}
