import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './components/backendErrorMessages/backendErrorMessages.component';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
