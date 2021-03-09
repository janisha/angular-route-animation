import { ScienceComponent } from "./science/science.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomResolver } from "./custom-resolver";

const routes: Routes = [
  {
    path: "type/:id",
    component: ScienceComponent,
    resolve: {
      num: CustomResolver
    }
    // data: {
    //   shouldReuse: false
    // }
  },
  {
    path: "sports",
    loadChildren: () => import("./modules/sports/sports.module").then(x => x.SportsModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
