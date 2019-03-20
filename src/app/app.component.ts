import { MyService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'train-game';
  data = null;
  constructor(private myService: MyService) {

  }

  private showData() {
    console.log("Getting data");
    this.myService.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
