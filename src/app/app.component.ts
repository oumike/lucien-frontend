import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ObservedSubjectComponent } from "./observed-subject/observed-subject.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, InputTextModule, ObservedSubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lucien-frontend';
}
