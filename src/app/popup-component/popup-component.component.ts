import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})

export class PopupComponent implements OnInit {
  
  firstName: string = '';
  lastName: string = '';

  constructor(public dialogRef: MatDialogRef<PopupComponent>) { }

  onSubmit(): void {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
  onSave(data: any): void {
    
    console.log('Saved data:', data);
  }
}
