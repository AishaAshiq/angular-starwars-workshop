import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWarsApplication';
  // isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  // constructor(private breakpointObserver: BreakpointObserver) {}

}
