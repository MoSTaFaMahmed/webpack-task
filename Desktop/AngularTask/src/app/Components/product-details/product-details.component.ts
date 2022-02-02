import { IProduct } from './../../ViewModel/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prodId: number = 0;
  prod: IProduct | null = null;
  productsId: number[] = [];
  constructor(
    private activateRouteServicse: ActivatedRoute,
    private productServ: ProductsService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.productsId = this.productServ.getProductsId();
  //   this.prodId = Number(
  //     this.activateRouteServicse.snapshot.paramMap.get('id')
  //   );
  //  this.prod = this.productServ.findProductById(this.prodId);
    this.activateRouteServicse.paramMap.subscribe((paramMap)=>{
      this.prodId=Number(paramMap.get('id'));
      this.prod = this.productServ.findProductById(this.prodId);
    })
  }
  backToProd() {
   // this.location.back();
    this.router.navigate(['/Order'])
  }
  prevProd() {
    let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
    let prevId;
    if (crntIndex > 0) {
      prevId = this.productsId[crntIndex - 1];
     this.router.navigate(['/Order',prevId])
    }
  }
  nextProd() {
    let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
    let nextId;
    if (crntIndex<this.productsId.length) {
      nextId = this.productsId[crntIndex + 1];
     this.router.navigate(['/Order',nextId])
    }
  }
}
