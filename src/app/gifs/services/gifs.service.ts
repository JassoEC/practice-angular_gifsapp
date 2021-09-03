import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsReponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apyKey = '4h2SbrcZ78HmEIexlOvlhMFPX91YtU5R';
  private _history: string[] = [];
  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  findGifs(value: string) {
    value = value.trim().toLowerCase();
    if (!this._history.includes(value)) {
      this._history.unshift(value);
      this._history = this._history.splice(0, 9);
      this.http
        .get<GifsReponse>(
          `https://api.giphy.com/v1/gifs/search?api_key=${this.apyKey}&q=${value}&limit=10`
        )
        .subscribe((response) =>{
          this.results = response.data;
          console.log(response);
        });
    }
  }
}
