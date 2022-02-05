import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isAuthenticated = false;
  constructor(
    private dataService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSaveData() {
    this.dataService.storeRecipes();
  }
  onFetchData() {
    this.dataService.fetchRecipes().subscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
