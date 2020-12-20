import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-menu',
  templateUrl: './modal-edit-menu.component.html',
  styleUrls: ['./modal-edit-menu.component.css']
})
export class ModalEditMenuComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalEditMenuComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public datos: any) { }

  ngOnInit(): void {
  }

}
