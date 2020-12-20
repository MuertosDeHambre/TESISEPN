import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-menu-especial',
  templateUrl: './modal-edit-menu-especial.component.html',
  styleUrls: ['./modal-edit-menu-especial.component.css']
})
export class ModalEditMenuEspecialComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalEditMenuEspecialComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public datos: any) { }

  ngOnInit(): void {
  }

}
