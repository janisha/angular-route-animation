import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {
  ActivatedRouteSnapshot,
  RouterOutlet,
  RouterStateSnapshot
} from "@angular/router";

import { tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomResolver implements Resolve<number> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const num = types.indexOf(route.params.id); 
    console.log('num:', num);
    return of(num);
  }
}


const types = ['science', 'technology','business','sports']