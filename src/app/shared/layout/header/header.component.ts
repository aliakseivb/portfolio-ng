import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../../config/config";
import {Subscription} from "rxjs";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sun') sun: ElementRef | undefined;
  @ViewChild('moon') moon: ElementRef | undefined;
  @ViewChild('ru') rus!: ElementRef;
  @ViewChild('en') eng!: ElementRef;
  @ViewChild('search') search!: ElementRef;
  @ViewChild('help') help!: ElementRef;
  @ViewChild('searchButton') searchButton!: ElementRef;
  @ViewChild('burger') burger!: ElementRef;

  themeDark: boolean = false;
  language: string = '';
  searchValue: string = '';
  doShowMenu: boolean = false;
  private subs: Subscription = new Subscription();

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.subs.add(this.utilService.getLanguage().subscribe(data => {
      this.language = data;
    }));

    this.subs.add(this.utilService.showMenu$.subscribe(data => {
      this.doShowMenu = data;
    }));
  }

  ngAfterViewInit() {
    this.subs.add(this.utilService.language$.subscribe((value: string): void => {
      this.search.nativeElement.placeholder = value === 'ru' ? config.header.search.ru : config.header.search.en;
      this.help.nativeElement.innerHTML = value === 'ru' ? config.header.help.ru : config.header.help.en;
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  switchTheme(event: Event) {
    if (this.sun && this.moon) {
      if (event.currentTarget === this.sun.nativeElement) {
        this.themeDark = false;
        this.sun.nativeElement.setAttribute('fill', 'black');
      }
      if (event.currentTarget === this.moon.nativeElement) {
        this.themeDark = true;
        this.sun.nativeElement.setAttribute('fill', 'white');
      }
      this.utilService.setTheme(this.themeDark);
    }
  }

  findProjects(event: Event | string) {
    if ((event as Event).currentTarget === this.searchButton.nativeElement) {
      this.utilService.setFindProjectString((((event as Event).currentTarget as HTMLElement).nextSibling as HTMLInputElement).value);
      this.router.navigate(['projects']);
      return
    }
    this.utilService.setFindProjectString(event as string);
    this.router.navigate(['projects']);
  }

  searchProjects(newValue: string) {
    this.searchValue = newValue;
    if (this.searchValue.length < 3) {
      this.utilService.setFindProjectString('');
    } else {
      this.findProjects(this.searchValue);
    }
  }

  changeLanguage(event: Event) {
    if (event.target === this.rus.nativeElement) {
      this.utilService.language$.next('ru');
    }
    if (event.target === this.eng.nativeElement) {
      this.utilService.language$.next('en');
    }
  }

  showMenu() {
    this.doShowMenu = !this.doShowMenu;
    this.utilService.setShowMenu(this.doShowMenu);
  }
}
