import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import config from "../../../../config/config";

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


  constructor(private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.utilService.getLanguage().subscribe(data => {
      this.language = data;
    });

    this.sidebarItems = config.sidebar.links;

    this.utilService.isComponentActive$.subscribe((value: string): void => {
      if (this.navItems) {
        Array.from(this.navItems.nativeElement.children).forEach(elem => {
          (elem as HTMLElement).classList.remove('active');
          (elem as HTMLElement).children[0].getAttribute('href') === value ? (elem as HTMLElement).classList.add('active') : null;
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

  // changeActiveComponent(event: Event) {
  //   console.log(event)
  //   if (this.navItems) {
  //     Array.from(this.navItems.nativeElement.children).forEach(elem => {
  //       (elem as HTMLElement).children[0].classList.remove('active');
  //       console.log((elem as HTMLElement))
  //     });
  //
  //     this.router.navigate([''])
  //   }
  // }
}
