import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import config from "../../../config/config";
import {ProjectType} from "../../../types/project.type";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: ProjectType[] = [];
  pageTitle: string = '';

  constructor(private utilService: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.utilService.language$.subscribe(lang => {
      this.pageTitle = lang === 'ru' ? config.projects.pageTitle.ru : config.projects.pageTitle.en;
    });

    this.utilService.setIsComponentActive(this.router.url);

    this.utilService.findProject$.subscribe((data: string): void => {
      if (data && data.length > 2) {
        this.projects = config.projects.projectsItems.filter((item: ProjectType) => item.keyWords.some(key =>
          key.toLowerCase().includes(data.length === 3 ? data.toLowerCase() : data.slice(0, -1).toLowerCase())))
      } else {
        this.projects = config.projects.projectsItems;
      }
    });
  }

  ngOnDestroy() {
    this.utilService.setFindProjectString('');
  }
}
