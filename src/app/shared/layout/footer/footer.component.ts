import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../../config/config";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  text: string = '';

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.utilService.language$.subscribe(lang => {
      this.text = lang === 'ru' ? config.footer.ru : config.footer.en;
    });
  }

}
