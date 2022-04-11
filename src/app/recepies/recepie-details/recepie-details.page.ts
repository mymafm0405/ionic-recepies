import { RecepiesService } from './../recepies.service';
import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.page.html',
  styleUrls: ['./recepie-details.page.scss'],
})
export class RecepieDetailsPage implements OnInit {
  loadedRecepie: Recepie;
  constructor(
    private route: ActivatedRoute,
    private recepiesService: RecepiesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.loadedRecepie = this.recepiesService.getRecepieById(
        params.recepieId
      );
    });
  }

  onDelete() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you want to delete this recepie?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Yes, sure',
            handler: () => {
              this.recepiesService.deleteRecepie(this.loadedRecepie.id);
              this.router.navigate(['/recepies']);
            },
          },
        ],
      })
      .then((alrt) => alrt.present());
  }
}
