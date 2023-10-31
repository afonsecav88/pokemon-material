import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export enum PanelClass {
  success = 'success-snackbar',
  error = 'error-snackbar',
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private snackBar = inject(MatSnackBar);

  private snackBarConfig(panelClass: string): MatSnackBarConfig<any> {
    return {
      duration: 4500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: panelClass,
    };
  }

  success(message: string) {
    this.snackBar.open(message, '', this.snackBarConfig('success-snackbar'));
  }

  error(message: string) {
    this.snackBar.open(message, '', this.snackBarConfig('error-snackbar'));
  }
}
