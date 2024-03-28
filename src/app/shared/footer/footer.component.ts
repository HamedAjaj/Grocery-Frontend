import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  properties = [
    { image:'beatprice.svg',header:'Best Prices & Deals',description:'Don’t miss our daily amazing deals and prices'},
    { image:'refund.svg',header:'Refundable ',description:'If your items have damage we agree to refund it'},
    { image:'delivery.svg',header:'Free delivery',description:'Do purchase over $50 and get free delivery anywhere'},
  ]


  headers=[
    {head:'Account',subhead:['WishList','Cart','Track Order','Shipping Details']},
    {head:'Useful links',subhead:['AboutUs','Contact','Hot deals','Promotions','New products']},
    {head:'Help Center',subhead:['Payments','Refund','Checkout','Shipping','Q&A','Privacy & Policy']}
  ]
}
