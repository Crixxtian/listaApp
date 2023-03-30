import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-neon',
  templateUrl: './neon.page.html',
  styleUrls: ['./neon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NeonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
