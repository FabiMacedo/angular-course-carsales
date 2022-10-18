import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string): void {
    this.showAlert(message, 'success', title);
  }

  public info(message: string, title?: string): void {
    this.showAlert(message, 'info', title);
  }

  public error(message: string, title?: string): void {
    this.showAlert(message, 'error', title);
  }

  private showAlert(
    message: string,
    icon: SweetAlertIcon,
    title?: string,
  ): void {
    Swal.fire(title, message, icon);
  }
}
