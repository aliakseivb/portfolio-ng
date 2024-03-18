import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UtilService} from "./services/util.service";
import config from "../config/config";
import {TimeInterval} from "rxjs/internal/operators/timeInterval";


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  themeDark: boolean = false;
  image: string = 'back_1.jpg';
count: number = 1;

  constructor(private utilService: UtilService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.utilService.theme$.subscribe(data => {
      this.themeDark = data;
    });
  }

  ngAfterViewInit() {
    this.utilService.isComponentActive$.subscribe((data: string) => {
      console.log(data)
      if(data === '/about'){
        this.image = config.layout.about;
      }
      if(data === '/skills'){
        this.image = config.layout.skills;
      }
      if(data === '/projects'){
        this.image = config.layout.projects;
      }
      if(data === '/offers'){
        this.image = config.layout.offers;
      }
    });
  }
}
