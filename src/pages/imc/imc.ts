import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  nome: String
  peso: number
  altura: number
  data_nascimento: String
  sexo: Boolean
  imc: number
  situacao: String


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.data_nascimento = new Date().toISOString();
    this.nome = "Dhemerson"
    this.peso = 78
    this.altura = 1.75
    this.sexo = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

  calcularImc(){
    this.imc = this.peso / (this.altura * this.altura)
    this.imc = parseFloat(this.imc.toFixed(2))
    if(this.imc <= 18.4){
      this.situacao = "Abaixo do peso :("
    }
    else if(this.imc <= 24.9){
      this.situacao = "Peso normal :)"
    }else if(this.imc <= 29.9){
      this.situacao = "Sobrepeso :("
    }else if(this.imc <= 34.9){
      this.situacao = "Obesidade 1 /:"
    }else if(this.imc <= 39.9){
      this.situacao = "Obesidade 2 D:"
    }else{
      this.situacao = "Obesidade :'("
    }
    const alert = this.alertCtrl.create({
      title: this.situacao + '',
      subTitle: `Senhor(a) ${this.nome} seu imc é de ${this.imc} e sua situação é: ${this.situacao}`,
      buttons: [
        {
          text:'OK',
          handler: resposta => this.resetForm()
        }
      ],
    })
    alert.present()
  }

  resetForm(){
    this.nome = null
    this.peso = null
    this.altura = null
    this.data_nascimento = null
    this.sexo = null
  }

}
