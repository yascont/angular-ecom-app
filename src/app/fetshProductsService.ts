import { Injectable, inject } from "@angular/core";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

@Injectable({providedIn: 'root' })
export class fetchProducts {

    constructor(private http: HttpClient) {}

    
    getAllProducts()
    {
        return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
            map((response: Product[]) => {
                return response;
            })
        );
    }

    getALLCategory(category : string)
    {
        return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
            map((response: Product[]) => {
                return response.filter((product: Product) => product.category === category);
            })
        );
    }

    getSomeProducts(number : number)
    {
        return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
            map((response: Product[]) => {
                return response.slice(0, number);
            })
        );
    }

    getSomeProductsCategory(number : number, category : string)
    {
        return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
            map((response: Product[]) => {
                return (response.filter((product: Product) => product.category === category)).slice(0, number);
            })
        );
    }

    getSpeceficProducts(id : number)
    {
        return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).pipe(
            map((response: Product) => {
                return response;
            })
        );
    }
    
}
