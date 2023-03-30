import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gekko',
  templateUrl: './gekko.page.html',
  styleUrls: ['./gekko.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GekkoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
