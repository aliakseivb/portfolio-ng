import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import config from "../../../../config/config";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('navItems') navItems: ElementRef | undefined;
  @ViewChild('slogan', {static: true}) slogan!: ElementRef;
  @ViewChild('socials') socials!: ElementRef;
  @ViewChild('available') available!: ElementRef;
  sidebarItems: { link: string, text: { ru: string, en: string } }[] = [];
  language: string = '';
  showMenu: boolean = false;
  private subs: Subscription = new Subscription();

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['about']);

    this.subs.add(this.utilService.getLanguage().subscribe(data => {
      this.language = data;
      this.slogan.nativeElement.innerHTML = this.language === 'ru' ? config.sidebar.slogan.ru : config.sidebar.slogan.en;
    }));

    this.sidebarItems = config.sidebar.links;

    this.subs.add(this.utilService.showMenu$.subscribe(data => {
      this.showMenu = data;
    }));
  }

  ngAfterViewInit(): void {
    this.subs.add(this.utilService.language$.subscribe((value: string): void => {
      this.available.nativeElement.innerText = value === 'ru' ? config.sidebar.available.ru : config.sidebar.available.en;
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  isActiveLink(link: string): boolean {
    return link ? this.router.url.includes(link) : false;
  }

  @HostListener('document:click', ['$event'])
  click(event: Event) {
    if (this.showMenu && !(event.target as HTMLElement).classList.contains('nav__item_link')
      && !this.socials.nativeElement.contains(event.target)) {
      return;
    }
    this.utilService.setShowMenu(false);
  }
}
