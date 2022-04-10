import { RecepiesService } from './../recepies.service';
import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.page.html',
  styleUrls: ['./recepie-details.page.scss'],
})
export class RecepieDetailsPage implements OnInit {
  loadedRecepie: Recepie;
  constructor(
    private route: ActivatedRoute,
    private recepiesService: RecepiesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.loadedRecepie = this.recepiesService.getRecepieById(
        params.recepieId
      );
    });
  }
}
