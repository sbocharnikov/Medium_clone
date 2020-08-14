import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UtilsService } from '../../services/utils.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
