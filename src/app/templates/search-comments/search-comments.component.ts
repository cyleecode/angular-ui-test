import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MaterialsModule } from 'src/app/materials/materials.module';
@Component({
  selector: 'app-search-comments',
  templateUrl: './search-comments.component.html',
  styleUrls: ['./search-comments.component.scss'],
})
export class SearchCommentsComponent {
  constructor(
    private dialog: MatDialogRef<SearchCommentsComponent>,
    @Inject(DIALOG_DATA) public data: {}
  ) {}
  formName: FormControl = new FormControl('');
  formEmail: FormControl = new FormControl('');
  formBody: FormControl = new FormControl('');
  form: FormGroup = new FormGroup({
    name: this.formName,
    email: this.formEmail,
    body: this.formBody,
  });

  close() {
    this.dialog.close(this.form.value);
  }
}
