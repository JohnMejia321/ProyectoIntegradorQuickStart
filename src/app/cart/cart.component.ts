import { CartService } from '../cart.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

constructor(
  private cartService: CartService,
  private formBuilder: FormBuilder,
) {}
}