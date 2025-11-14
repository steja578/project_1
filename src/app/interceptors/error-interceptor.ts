import { HttpInterceptorFn } from '@angular/common/http';
import Snackbar from 'awesome-snackbar';
import { catchError, EMPTY } from 'rxjs';
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error) => {
    new Snackbar(`${error.message}`, {position: 'top-center', theme: 'danger', timeout: 3000, actionText: 'X'});
    return EMPTY;
  }));
};
