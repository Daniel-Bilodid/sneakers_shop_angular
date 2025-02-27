import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ShoesService } from './app/shoes.service';
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ShoesService],
}).catch((err) => console.error(err));
