import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  data: any = [];
  missionFlight: any
  // @Input() missionName: string
  // @Input() missionYear: string
  // @Input() rocketName: string
  // @Input() rocketType: string
  // @Input() launchSite: string // site_name_long
  // @Input() launchDetails: string

  constructor(private http: HttpClient, private router:Router, private _Activatedroute:ActivatedRoute) {
   }

  ngOnInit(): void {
    const url = "https://api.spacexdata.com/v3/launches"
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data);
    })
    this.missionFlight = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.missionFlight)
  }

  back(){
    this.router.navigateByUrl('/list')
  }





  // check():boolean {
  //   if(this.missionFlight == this.data.flight_number){
  //     return true
  //   }
  //   else false
  // }

  // find(): void {
  //   const url = "https://api.spacexdata.com/v3/launches"
  //   this.http.get(url).subscribe((res) => {
  //     this.data = res
  //     console.log(this.data);
  //   })
  // }

}



