import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { AlbumsService } from '../albums.service';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Photo} from "../models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})

export class AlbumPhotosComponent implements OnInit {
  photos!: Photo[];
  albumId: number | undefined;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      if(params.get('id')){
        this.albumId = Number(params.get('id'));
        this.loaded = false;
        this.albumsService.getAlbumPhotos(this.albumId).subscribe((album) =>{
          this.photos = album;
          this.loaded = true;
        });
      }
    });

  }

  // goBack() {
  //   this.router.navigate(['/albums/albumId']);
  // }
}

