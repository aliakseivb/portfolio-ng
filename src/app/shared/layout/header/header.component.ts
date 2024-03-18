import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../../config/config";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('sun') sun: ElementRef | undefined;
  @ViewChild('moon') moon: ElementRef | undefined;
  @ViewChild('ru') rus!: ElementRef;
  @ViewChild('en') eng!: ElementRef;
  @ViewChild('search') search!: ElementRef;
  @ViewChild('help') help!: ElementRef;
  @ViewChild('searchButton') searchButton!: ElementRef;


  themeDark: boolean = false;
  language: string = '';
  searchValue: string = '';

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.utilService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }

  ngAfterViewInit() {
    this.utilService.language$.subscribe((value: string): void => {
      this.search.nativeElement.placeholder = value === 'ru' ? config.header.search.ru : config.header.search.en;
      this.help.nativeElement.innerHTML = value === 'ru' ? config.header.help.ru : config.header.help.en;
    });
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
      setTimeout(() => {
        this.router.navigate(['projects']);
      }, 500);
      return
    }
    this.utilService.setFindProjectString(event as string);
    setTimeout(() => {
      this.router.navigate(['projects']);
    }, 500);
  }

  searchProjects(newValue: string) {

    this.searchValue = newValue;
    if(this.searchValue.length < 3){
      this.utilService.setFindProjectString('');
    }
    else {
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
}
