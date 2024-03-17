import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {AboutType} from "../../../types/about.type";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  aboutItems: AboutType = config.about;
  language: string = 'ru';
  constructor(private utilService: UtilService, private router: Router) { }

  ngOnInit(): void {
    this.utilService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  ngAfterViewInit() {
    this.utilService.setIsComponentActive(this.router.url);
  }
}
