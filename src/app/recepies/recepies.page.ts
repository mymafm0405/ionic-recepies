import { RecepiesService } from './recepies.service';
import { Recepie } from './recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  recepies: Recepie[];

  constructor(private recepiesService: RecepiesService) {}

  ngOnInit() {
    this.recepies = this.recepiesService.getAllRecepies();

    this.recepiesService.recepiesChanged.subscribe((status: boolean) => {
      if (status) {
        this.recepies = this.recepiesService.getAllRecepies();
      }
    });
  }
}
