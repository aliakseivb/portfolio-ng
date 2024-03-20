import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {SkillType} from "../../../types/skill.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('title') title: ElementRef | undefined;

  skillsItems: SkillType[] = config.skills.skillsItems;
  pageTitle: string = '';
  readMore: string = '';
  language: string = '';
  themeDark: boolean = false;
  private subs: Subscription = new Subscription();
  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.subs.add(this.utilService.language$.subscribe(lang => {
      this.language = lang;
      this.pageTitle = lang === 'ru' ? config.skills.pageTitle.ru : config.skills.pageTitle.en;
      this.readMore = lang === 'ru' ? config.skills.more.ru : config.skills.more.en;
    }));

    this.subs.add(this.utilService.theme$.subscribe(data => {
      this.themeDark = data;
    }));
  }

  ngAfterViewInit() {
    this.utilService.setIsComponentActive(this.router.url);
    this.glare();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  glare() {
    const that = this;
    function puls() {
      that.title!.nativeElement.classList.add('hover');
      setTimeout(function () {
        that.title!.nativeElement.classList.remove('hover');
      }, 1000);
    }
    setInterval(puls, 2000);
  };
}
