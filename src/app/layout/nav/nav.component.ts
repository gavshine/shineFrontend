import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  toggle;
  nav;
  toggle_open_text = 'Menu';
  toggle_close_text = 'Close'; 
  active = false;  
    
  constructor(translate: TranslateService) { 
  }

  ngOnInit() {
    this.toggle = document.querySelectorAll(".toggle")[0];
    this.nav = document.querySelectorAll("nav")[0];
    this.toggle.innerHTML = this.toggle_open_text;
  }
    
   openMenu(active){
       //console.log(active);
       //console.log(this.nav);
       //alert(JSON.stringify(event.target.classList));
       this.nav.classList.toggle('open');

      if (active) {
        this.active = false;
        this.toggle.innerHTML = this.toggle_open_text;
      } else {
        this.active = true;
        this.toggle.innerHTML = this.toggle_close_text;
      }
   }
}
