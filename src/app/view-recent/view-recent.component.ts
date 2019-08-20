import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-recent',
  templateUrl: './view-recent.component.html',
  styleUrls: ['./view-recent.component.css']
})
export class ViewRecentComponent implements OnInit {

  id: any;

  constructor( private ser: ServiceService, private route: ActivatedRoute, private location: Location
    ) {}

  ngOnInit(){

    var id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(id);
    var ctx = document.getElementById('myChart');

    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
        datasets: [{
            label: this.ser.recents[this.id]["name"],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [this.ser.recents[this.id]["days"]["sun"], this.ser.recents[this.id]["days"]["mon"], this.ser.recents[this.id]["days"]["tue"], this.ser.recents[this.id]["days"]["wed"], this.ser.recents[this.id]["days"]["thu"], this.ser.recents[this.id]["days"]["fri"], this.ser.recents[this.id]["days"]["sat"]]
        }]
    },
    // Configuration options go here
    options: {}
  });

  }

  goBack(): void {
    this.location.back();
  }

}
