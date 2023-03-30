import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-killjoy',
  templateUrl: './killjoy.page.html',
  styleUrls: ['./killjoy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KilljoyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
