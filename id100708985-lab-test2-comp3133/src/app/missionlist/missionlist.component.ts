import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  // public missionName1: string;
  // public missionFlight: Number
  
  // public launchDetails: string;
  data: any;

  // missionName = 'mission_name';
  // launch_year = "launch_year";
  // details = "details";
  // data: any = [];
  // mission_patch_small = "mission_patch_small"

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = "https://api.spacexdata.com/v3/launches"
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data);
    })

    // this.missionName1 = this.data.mission_name
    // this.missionYear = this.data.launch_year
    // this.rocketName = this.data.rocket.rocket_name
    // this.rocketType = this.data.rocket.rocket_type
   
  }










  // getData() {
  //   const url = "https://api.spacexdata.com/v3/launches"
  //   this.http.get(url).subscribe((res) => {
  //     this.images = res
  //     console.log(this.images);

  //   })
  // }

}
