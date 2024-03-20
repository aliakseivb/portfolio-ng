import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {AboutType} from "../../../types/about.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  aboutItems: AboutType = config.about;
  language: string = 'ru';
  animeTextRed: string[] = this.aboutItems.animeTextRed.ru;
  private subs: Subscription = new Subscription();

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.subs.add(this.utilService.language$.subscribe(lang => {
      this.language = lang;
      this.language === 'ru' ? this.animeTextRed = this.aboutItems.animeTextRed.ru :
        this.animeTextRed = this.aboutItems.animeTextRed.en;
    }));
  }

  ngAfterViewInit() {
    this.utilService.setIsComponentActive(this.router.url);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
