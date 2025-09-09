import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isSidebarOpen = true;
  BreakepointObserver = inject(BreakpointObserver)

  ngOnInit(){
    this.BreakepointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .subscribe(result =>{
      if(this.BreakepointObserver.isMatched([Breakpoints.XSmall, Breakpoints.Small])){
        this.isSidebarOpen = false;
      }else{
        this.isSidebarOpen = true;
      }
    })
  }
}
