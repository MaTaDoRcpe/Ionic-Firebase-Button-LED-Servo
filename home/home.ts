import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { NgModule } from '@angular/core';
import { GaugeSegment, GaugeLabel } from 'ng-gauge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrData = []

  constructor(public navCtrl: NavController, private fbd: AngularFireDatabase) {
    this.fbd.object('Arduino').update({ 'LED1': 'ON' });
  }

  btnLedOn() {
    this.fbd.object('Arduino').update({ 'LED1': 1 });
  }

  btnLedOff() {
    this.fbd.object('Arduino').update({ 'LED1': 0 });
  }

  rangeChange(range: any) {
    this.fbd.object('Arduino').update({ 'Range1': range });
  }

  btnGreen(){
    this.fbd.object('Arduino').update({ 'Range1': 165 });
  }
  btnPink(){
    this.fbd.object('Arduino').update({ 'Range1': 110 });
  }
  btnBlue(){
    this.fbd.object('Arduino').update({ 'Range1': 45 });
  }
  btnYellow(){
    this.fbd.object('Arduino').update({ 'Range1': 0 });
  }
}
