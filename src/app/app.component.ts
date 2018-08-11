import { Component } from '@angular/core';
import {weatherService} from '../app/service/weather.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of JIRA Issues';
  goodData;
  constructor(private _service :weatherService){}
  
  getService(){
    
            this._service.getService()
                          .subscribe(
                          (response :Response)  =>{ 
                          this.goodData=response;
                            console.log(response), 
                            (error) => console.log(error)}
                          );
  }
  
}
