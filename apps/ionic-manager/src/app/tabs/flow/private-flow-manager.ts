import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class PrivateFlowManager {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTo(path: string): void {
    console.log('navigation a no se');
    this.router.navigate(['private/settings']);
  }
}
