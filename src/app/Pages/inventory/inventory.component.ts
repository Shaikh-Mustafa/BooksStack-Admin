import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/AdminService';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.GetBooks().subscribe((data:any)=>{
      console.log(data);
    })
  }

}
