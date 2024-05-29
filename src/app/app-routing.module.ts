import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesListComponent } from "./cities/components/cities-list/cities-list.component";
import { CitiesGridComponent } from "./cities/components/cities-grid/cities-grid.component";
import { NotFoundComponent } from "./core/pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/cities-list', pathMatch: 'full'},
  {path: 'cities-list', component: CitiesListComponent},
  {path: 'cities-grid', component: CitiesGridComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
