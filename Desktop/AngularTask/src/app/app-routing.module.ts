import { LoginComponent } from './Components/login/login.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthgurdGuard } from './Gurds/authgurd.guard';

const routes: Routes = [
{path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Order',component:OrderMasterComponent,canActivate:[AuthgurdGuard]},
  {path:'Order/:id',component:ProductDetailsComponent},
  {path:'product-page/:mode/:id',component:AddEditProductComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
