import { Component } from '@angular/core'; import { environment } from "../../environments/environment"; import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carouel-daily-image',
  templateUrl: './carouel-daily-image.component.html',
  styleUrls: ['./carouel-daily-image.component.scss']
})

export class CarouelDailyImageComponent {

  title!: string[];
  explanation!: string[];
  date!: Date;
  imageUrls!: string[];
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.imageUrls = [];
    this.explanation = [];
    this.title = [];

    this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=" + this.apiKey + "&count=" + 10).subscribe(data => {
      for (let i in data) {
        let image = data[i].url;
        let title = data[i].title;
        let explanation = data[i].explanation;

        this.imageUrls.push(image);
        this.title.push(title);
        this.explanation.push(explanation);

      }
    });

  }
}
