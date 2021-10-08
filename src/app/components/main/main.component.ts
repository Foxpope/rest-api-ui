import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'A Newer, Better Title'; 
  image = 'https://freesvg.org/img/black_orange_men_cloud.png'

  constructor() { }

  // Angular lifecycle hook
  ngOnInit(): void {

    // we can provide special functionality here that will be called when the compoenent 
  }

}
