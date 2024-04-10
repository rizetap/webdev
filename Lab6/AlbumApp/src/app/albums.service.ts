import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com'
  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  createAlbum(newAlbum: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums/`, newAlbum);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/`+album.id, album);
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(albumId: number){
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }

}
