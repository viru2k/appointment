// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CurrentAppointment } from '@appointment/models';
import { ActionSheetController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';

// Store

// Api

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.html',
})
export class AppointmentItemComponent implements OnInit, OnDestroy {
  @Input() item: any;
  @Output() editedAppointment = new EventEmitter<CurrentAppointment>();
  @Output() deletedAppointment = new EventEmitter<CurrentAppointment>();
  constructor(
    public actionSheetController: ActionSheetController,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editElement(selectedIitem: CurrentAppointment): void {
    this.editedAppointment.emit(selectedIitem);
  }

  deleteElement(selectedIitem: CurrentAppointment): void {
    this.deletedAppointment.emit(selectedIitem);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: this.translocoService.translate(
        'scopeTranslation.common.label.actions'
      ),
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.translocoService.translate(
            'scopeTranslation.appointment.call.button'
          ),
          icon: 'volume-high',

          handler: () => {
            console.log('Llamar clicked');
          },
        },
        {
          text: this.translocoService.translate(
            'scopeTranslation.appointment.call-again.button'
          ),
          icon: 'refresh',

          handler: () => {
            console.log('refresh clicked');
          },
        },
        {
          text: this.translocoService.translate(
            'scopeTranslation.common.label.cancel'
          ),
          icon: 'close-circle-outline',
          handler: () => {
            console.log('Cancelar clicked');
          },
        },
        {
          text: this.translocoService.translate(
            'scopeTranslation.common.label.close'
          ),
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
