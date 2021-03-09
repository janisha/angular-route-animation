import { routerAnimation } from "./common/animations";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private router: Router) {}

  public getRouteAnimation(outlet: RouterOutlet) {
  
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;
  console.log("outlet data", res);
    return res;
  }
}
