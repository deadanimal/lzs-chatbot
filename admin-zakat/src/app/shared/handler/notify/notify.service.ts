import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    public toastr: ToastrService
  ) { }

  openToastrConnection() {
    let title = 'Error'
    let message = 'No connection'
    this.toastr.info(message, title)
  }

  openToastrHttp(title: any, message: string) {
    this.toastr.warning(message, title)
  }

  openToastrError(title: any, message: string) {
    this.toastr.error(message, title)
  }

  openToastr(title: any, message: string) {
    this.toastr.success(message, title)
  }

}
