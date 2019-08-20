import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  textValue:any;
  temp:any;
  recent:any = [];
  modal:any;

  constructor(private ser: ServiceService) { 
        
  }
 
  ngOnInit() {

  }

  search()
  {
    this.ser.searchs(this.textValue.toLowerCase());
  }

  graph(i)
  {
        this.modal = this.ser.currents[i]["name"];
        var ctx = document.getElementById('myChart');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
            datasets: [{
                label: this.ser.currents[i]["name"],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [this.ser.currents[i]["days"]["sun"], this.ser.currents[i]["days"]["mon"], this.ser.currents[i]["days"]["tue"], this.ser.currents[i]["days"]["wed"], this.ser.currents[i]["days"]["thu"], this.ser.currents[i]["days"]["fri"], this.ser.currents[i]["days"]["sat"]]
            }]
        },
    
        // Configuration options go here
        options: {}
    });

  }
}
