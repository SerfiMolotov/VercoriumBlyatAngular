import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReleveListeComponent } from './features/releves/components/releve-liste/releve-liste';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReleveListeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('vem-angular');
}
