import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  random :string = faker.random.word();
  dateRandom =faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z') // '2026-05-16T02:22:53.002Z'
  randomImage = faker.image.abstract(); 
  randomAvatar = faker.image.avatar();
  fake = faker.fake('{{name.lastName}}');


  constructor() { }

  ngOnInit(): void {
  }

}
