import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { GroceryListCrudService } from "src/app/services/grocery-list-crud.service";

import { Grocery } from "src/app/models/Grocery";
import { tap } from "rxjs/operators";
import { FormControl, FormGroup,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  groceries$: Observable<Grocery[]>;
  productForm: FormGroup;

  constructor(private groceryListCrudService: GroceryListCrudService) {}

  ngOnInit(): void {
    this.groceries$ = this.fetchAll();
    this.productForm = new FormGroup({
      Id: new FormControl(''),
      Item: new FormControl(''),
      Price: new FormControl(''),
      Quantity: new FormControl('')
    });

  }

  fetchAll(): Observable<Grocery[]> {
    return this.groceryListCrudService.fetchAll();
  }

  post(groceryItem: Grocery): void {
    console.log(1);
    this.groceries$ = this.groceryListCrudService
      .post(this.productForm.value)
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
    console.log(this.groceries$);
  }

  update(item:Grocery): void {

    this.groceries$ = this.groceryListCrudService
      .update(item)
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
  }

  delete(id: number): void {
    this.groceries$ = this.groceryListCrudService
      .delete(id)
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
  }
}