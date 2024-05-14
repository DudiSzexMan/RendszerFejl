import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { of } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isAuthenticated()){
    return of(true);
  }
    
  router.navigate(['/login']);
  
  return of(false);
};
