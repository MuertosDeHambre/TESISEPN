import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-menu-almuerzo',
  templateUrl: './modal-edit-menu-almuerzo.component.html',
  styleUrls: ['./modal-edit-menu-almuerzo.component.css']
})
export class ModalEditMenuAlmuerzoComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalEditMenuAlmuerzoComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public datos: any) { }

  ngOnInit(): void {
  }

}
