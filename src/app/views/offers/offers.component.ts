import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {OfferType} from "../../../types/offer.type";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, AfterViewInit {
  offer: OfferType = config.offer;
  offerItems: {
    image: string,
    info: {
      ru: string,
      en: string
    }
  }[] = config.offer.offerItems;

  language: string = 'ru';

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.utilService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  ngAfterViewInit() {
    this.utilService.setIsComponentActive(this.router.url);
  }
}
