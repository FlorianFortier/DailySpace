import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-image-of-the-day',
  templateUrl: './image-of-the-day.component.html',
  styleUrls: ['./image-of-the-day.component.scss']
})
export class ImageOfTheDayComponent implements OnInit {

  constructor(private http: HttpClient) { }

  imageUrl!: string;
  apiKey = environment.apiKey;

  ngOnInit(): void {
    this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=" + this.apiKey).subscribe(data => {
      this.imageUrl = data.url;
    });
  }
}