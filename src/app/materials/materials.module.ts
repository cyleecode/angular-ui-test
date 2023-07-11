import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
const material = [CommonModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material],
})
export class MaterialsModule {}
