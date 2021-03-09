import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-science",
  templateUrl: "./science.component.html",
  styleUrls: ["./science.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScienceComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  industry$: Observable<any>;

  ngOnInit() {
    this.industry$ = this.route.params.pipe(map(x => x.id));
  }
}
