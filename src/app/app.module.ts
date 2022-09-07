import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CustomersComponent } from './Pages/customers/customers.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Dashboard' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Customers', component: CustomersComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'Inventory', component: InventoryComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CustomersComponent,
    DashboardComponent,
    OrdersComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
