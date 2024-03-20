import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../../config/config";
import {Subscription} from "rxjs";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  text: string = '';
  year: number = new Date().getFullYear();
  private subs!: Subscription;
  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
   this.subs = this.utilService.language$.subscribe(lang => {
      this.text = lang === 'ru' ? config.footer.ru : config.footer.en;
    });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
