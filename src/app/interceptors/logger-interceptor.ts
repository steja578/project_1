import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('logger interceptor ::',req.url, req.method, new Date().toLocaleTimeString());
  return next(req);
};
