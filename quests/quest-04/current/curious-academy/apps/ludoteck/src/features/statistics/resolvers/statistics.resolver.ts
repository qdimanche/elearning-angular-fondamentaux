import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { StatList } from "../models";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StatiticsResolver implements Resolve<StatList> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> {
        const fakeData: StatList = [{
            year: 2020,
            nbSuccess: 10,
            nbFailures: 5
        }, {
            year: 2021,
            nbSuccess: 15,
            nbFailures: 3
        }]

        return of(fakeData);
    }
}