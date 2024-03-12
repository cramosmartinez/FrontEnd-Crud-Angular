import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
    {name : 'Queso', price: 100, description: 'Queso Amarillo', stock: 10},
    {name : 'Leche', price: 50, description: 'Leche Descremada', stock: 20},
  ]
  
  constructor() {}

  ngOnInit(): void {}

}
