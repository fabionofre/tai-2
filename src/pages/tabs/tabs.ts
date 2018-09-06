import { Component } from '@angular/core';

import { ImcPage } from '../imc/imc';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  imc = ImcPage;
  sobre = SobrePage;

  constructor() {

  }
}
