import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { config } from '../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = config.title;
  iconMenu: IconDefinition = faFileAlt;
  iconHome: IconDefinition = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
