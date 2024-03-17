import {Component, OnInit} from '@angular/core';
import {UtilService} from "./services/util.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  themeDark: boolean = false;

  constructor(private utilService: UtilService) {
  }
  ngOnInit() {
    this.utilService.theme$.subscribe(data => {
      this.themeDark = data;
    });
  }
}
