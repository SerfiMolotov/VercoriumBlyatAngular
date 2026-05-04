import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = null;

  if (typeof window !== 'undefined' && window.localStorage) {
    token = localStorage.getItem('token');
  }

  if (token) {
    const requeteModifiee = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(requeteModifiee);
  }

  return next(req);
};
