import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {OfferType} from "../../../types/offer.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, AfterViewInit, OnDestroy {
  offer: OfferType = config.offer;
  offerItems: {
    image: string,
    info: {
      ru: string,
      en: string
    }
  }[] = config.offer.offerItems;

  language: string = 'ru';
  private subs: Subscription = new Subscription();
  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.subs.add(this.utilService.language$.subscribe(lang => {
      this.language = lang;
    }));
  }

  ngAfterViewInit() {
    this.utilService.setIsComponentActive(this.router.url);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
