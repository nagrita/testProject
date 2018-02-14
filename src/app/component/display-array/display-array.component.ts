import { Component } from '@angular/core';

@Component({
  selector: 'app-display-array',
  templateUrl: './display-array.component.html',
  styleUrls: ['./display-array.component.css']
})
export class DisplayArrayComponent  {
  users: string[] = ['Mimu', 'Ahlem', 'Hamid'];
  ifDisplayed: boolean = true;
  
  showHide(): void {
    this.ifDisplayed = !this.ifDisplayed;
  }
}
