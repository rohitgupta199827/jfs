import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
	Stocks:any= [];
	temp:any = "NOT FOUND";
	currents:any = [];
	recents:any = [];
	flag:any;

	constructor() { 
		this.Stocks = [{name: "Apple", days: {"sun": 200, "mon": 100, "tue": 50, "wed": 40, "thu": 100, "fri": 90, "sat": 80}},
		 {name: "Google", days: {"sun": 150, "mon": 100, "tue": 100, "wed": 40, "thu": 80, "fri": 90, "sat": 180}},
		 {name: "Microsoft", days: {"sun": 100, "mon": 10, "tue": 70, "wed": 90, "thu": 80, "fri": 130, "sat": 160}},
		 {name: "One Plus", days: {"sun": 160, "mon": 180, "tue": 100, "wed": 90, "thu": 80, "fri": 90, "sat": 130}}];
	}

	searchs(p)
	{
		var flag = 0;
		this.recents = this.currents;
		this.currents = [];

		for(let i=0;i<this.Stocks.length;i++)
		{
			if(this.Stocks[i]["name"].toLowerCase().search(p) >= 0)
			{
				this.currents.push({name: this.Stocks[i]["name"], days: this.Stocks[i]["days"]});			
				flag = 1;
				this.flag = flag;
			}
		} 

		if(flag == 0)
		{
			flag = 0;
			this.flag = flag;
		}

	}
}
