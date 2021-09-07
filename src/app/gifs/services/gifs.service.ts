import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsReponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apyKey = '4h2SbrcZ78HmEIexlOvlhMFPX91YtU5R';
  private baseUri = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  findGifs(value: string) {
    value = value.trim().toLowerCase();
    if (!this._history.includes(value)) {
      this._history.unshift(value);
      this._history = this._history.splice(0, 9);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apyKey)
      .set('limit', '10')
      .set('q', value);

    this.http
      .get<GifsReponse>(`${this.baseUri}/search`, { params })
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(response.data));
      });
  }
}
