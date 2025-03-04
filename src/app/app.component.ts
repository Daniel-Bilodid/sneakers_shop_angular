import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent, HttpClientModule, RouterModule],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
