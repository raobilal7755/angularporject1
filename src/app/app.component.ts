import { Component } from '@angular/core';
import * as $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Router } from '@angular/router';

AOS.init();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project8';
  constructor(public router:Router){}
 
 
}
