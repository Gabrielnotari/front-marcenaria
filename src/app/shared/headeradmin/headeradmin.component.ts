import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.scss']
})
export class HeaderadminComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  sideBarButtonClick(){
    this.sidebarToggle.emit();
  }
}
