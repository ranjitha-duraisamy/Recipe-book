import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'recipe-book';
  selectedOption: string = 'recipe';

  onSelect(option: string) {
    this.selectedOption = option;
  }
}
