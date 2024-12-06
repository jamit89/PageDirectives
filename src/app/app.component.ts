import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;
  checkWindowIndex(index:number)
  {
    return Math.abs(this.currentPage-index)<5;
  }
  images = [
  {
    title: "At the Beach",
    url: 'https://media.istockphoto.com/id/157579910/photo/the-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=knG0gBV2spG4MOW0I6IY-gRV0aBKKeyyOmVSSeZixGo='
  },
  {
    title: "At the Forest",
    url: 'https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxLa3uS5cqsKXCGRZsBJ5FrioEz-8GLIygKELOi2Dk0='
  },
  {
    title: "At the City",
    url: 'https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.webp?a=1&b=1&s=612x612&w=0&k=20&c=YGjmE6DoiytqYUk9CcWXl8bDA3VWGXzxyDT1IB1NUqY='
  },
  {
    title: "At the Snow",
    url: 'https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=qRNUM9m4We5lJfOsU9l4Equ5Hf2kccC3y24i_NPvtLk='
  },
  {
    title: "At the Rain",
    url: 'https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: "At the House",
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww'
  },
  {
    title: "At the Hospital",
    url: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: "At the Garden",
    url: 'https://images.unsplash.com/photo-1527863280617-15596f92e5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: "At the Beach",
    url: 'https://media.istockphoto.com/id/157579910/photo/the-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=knG0gBV2spG4MOW0I6IY-gRV0aBKKeyyOmVSSeZixGo='
  },
  {
    title: "At the Forest",
    url: 'https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxLa3uS5cqsKXCGRZsBJ5FrioEz-8GLIygKELOi2Dk0='
  },
  {
    title: "At the City",
    url: 'https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.webp?a=1&b=1&s=612x612&w=0&k=20&c=YGjmE6DoiytqYUk9CcWXl8bDA3VWGXzxyDT1IB1NUqY='
  },
  {
    title: "At the Snow",
    url: 'https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=qRNUM9m4We5lJfOsU9l4Equ5Hf2kccC3y24i_NPvtLk='
  }
  ];
}
