import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const material = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material],
})
export class MaterialsModule {}
