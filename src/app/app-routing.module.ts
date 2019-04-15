import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";

const routes: Routes = [
  {
    path: "",
    component: AComponent
  },
  {
    path: "a",
    component: AComponent
  },
  {
    path: "b",
    component: BComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
