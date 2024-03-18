import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import config from "../../../../config/config";
import {Router} from "@angular/router";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('navItems') navItems: ElementRef | undefined;
  @ViewChild('slogan') slogan!: ElementRef;
  @ViewChild('available') available!: ElementRef;
  sidebarItems: { link: string, text: { ru: string, en: string } }[] = [];
  language: string = '';


  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['about']);

    this.utilService.getLanguage().subscribe(data => {
      this.language = data;
    });

    this.sidebarItems = config.sidebar.links;

    this.utilService.isComponentActive$.subscribe((value: string): void => {
      if (this.navItems) {
        Array.from(this.navItems.nativeElement.children).forEach(elem => {
          (elem as HTMLElement).classList.remove('active');
          this.router.url.includes((elem as HTMLElement).children[0].getAttribute('name')!)? (elem as HTMLElement).classList.add('active') : null;
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.utilService.language$.subscribe((value: string): void => {
      this.slogan.nativeElement.innerHTML = value === 'ru'? config.sidebar.slogan.ru : config.sidebar.slogan.en;
      this.available.nativeElement.innerText = value === 'ru'? config.sidebar.available.ru : config.sidebar.available.en;
    });
  }
}
