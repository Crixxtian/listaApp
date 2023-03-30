import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reyna',
  templateUrl: './reyna.page.html',
  styleUrls: ['./reyna.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReynaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
