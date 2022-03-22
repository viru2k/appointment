import { Component, OnInit } from '@angular/core';
import { BaseSharedFacade } from '@appointment/store';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading = false;

  constructor(
    public loadingController: LoadingController,
    private sharedFacade: BaseSharedFacade
  ) {}

  ngOnInit(): void {
    this.setLoadersubscription();
  }

  private setLoadersubscription(): void {
    this.sharedFacade.loader$.subscribe((loading: boolean) => {
      console.log(loading);
      loading ? this.present() : this.dismiss();
    });
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({}).then((a) => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }
}
