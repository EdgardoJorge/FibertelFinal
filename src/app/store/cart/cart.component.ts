import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [StoreComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
