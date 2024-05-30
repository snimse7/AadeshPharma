import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

    private readonly CART_KEY = 'cart';

  constructor() {
    // Initialize the cart if it doesn't exist in local storage
    if (!localStorage.getItem(this.CART_KEY)) {
      this.saveCart([]);
    }
  }

  private getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
  }

  private saveCart(cart: any[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  getItems(): any[] {
    return this.getCart();
  }

  addItem(item: any): void {
    const cart = this.getCart();
    let existingItem ;
    cart.forEach(element => {
      if(element.medicineId==item.medicineId){
        existingItem=element;
      }
    });
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    this.saveCart(cart);
  }

  removeItem(itemId: string): void {
    const cart = this.getCart().filter(item => item.medicineId !== itemId);
    this.saveCart(cart);
  }

  clearCart(): void {
    this.saveCart([]);
  }
    
}
