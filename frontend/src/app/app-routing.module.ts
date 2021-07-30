import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UpdateComponent } from "./components/update/update.component";


const routes: Routes=[
    {path: 'update/:Id', component :UpdateComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}