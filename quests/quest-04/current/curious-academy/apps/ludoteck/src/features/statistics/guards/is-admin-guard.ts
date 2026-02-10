import { CanActivateFn } from '@angular/router';
import { of } from 'rxjs';

export const isAdminGuard: CanActivateFn = (route, state) => {
  console.log('isAdminGuard called');
  return of(false);
};
