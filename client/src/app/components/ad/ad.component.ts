import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-ad",
  templateUrl: "./ad.component.html",
  styleUrls: ["./ad.component.css"],
})
export class AdComponent implements OnInit {
  isFavorite: boolean = false;
  demoImage = "../../../assets/ibiza-demo.png";
  constructor() {}

  ngOnInit() {}

  adIsFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
