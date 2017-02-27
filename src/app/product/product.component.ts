import { Component, OnInit } from '@angular/core';
import {Product} from "./product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .products {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .products li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .products li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .products li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .products .text {
      position: relative;
      top: -3px;
    }
    .products .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})


export class ProductComponent implements OnInit {
products: Product[];
selectedProduct: Product;


  constructor() {



      this.products = [
        {id: 1, name: 'orange', quantity: 5, price: 2},
        {id: 2, name: 'apple', quantity: 10, price: 5},
      {id: 3, name: 'lemon', quantity: 5, price: 2},
      {id: 4, name: 'noodles', quantity: 100, price: 10},
      {id: 5, name: 'chocolate', quantity: 25, price: 1}
    ];

  }

  onSelect(products: Product): void {
    this.selectedProduct = products;

  }




  ngOnInit() {
  }


}
