import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "answer16-p2-m6";
  dataUrls = [];
  vidiosData = [];
  mainSrc: string = "";
  constructor(private san: DomSanitizer) {}
  ngOnInit() {
    this.loadVideo();
  }

  loadVideo() {
    const KEY = "AIzaSyAi2mXT1D2LuYWqaJePJ6ZYROEl4fEqMR8";
    const fetchUrl = "https://www.googleapis.com/youtube/v3/";
    const queryParm = "";
    const yotube = fetch(
      `${fetchUrl}search?part=snippet&maxResults=10&q=angular&key=${KEY}`
    );

    yotube
      .then(res => res.json())
      .then(data => {
        for (let itemData of data["items"]) {
          this.vidiosData.push(itemData);
          this.dataUrls.push(itemData["id"]["videoId"]);
        }
      });
  }
  play(mainSrc) {
    this.mainSrc = `https://www.youtube.com/embed/${mainSrc}`;
  }
  getUrl() {
    return this.san.bypassSecurityTrustResourceUrl(this.mainSrc);
  }
  getSafeImg(img) {
    return this.san.bypassSecurityTrustResourceUrl(img);
  }
  setUrl() {
    this.mainSrc = this.vidiosData[0]["id"]["videoId"];
  }
}
