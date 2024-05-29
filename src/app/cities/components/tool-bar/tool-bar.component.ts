import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  constructor(private router: Router) {}

  navigateTo(view: string) {
    this.router.navigate([view]);
  }
}
