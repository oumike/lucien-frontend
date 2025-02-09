import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ObservedSubject } from './observed-subject.interface';

@Component({
    selector: 'app-observed-subject',
    imports: [FormsModule, InputTextModule, IftaLabelModule],
    templateUrl: './observed-subject.component.html',
    styleUrl: './observed-subject.component.css'
})
export class ObservedSubjectComponent {
    observedSubject = input<ObservedSubject>({} as ObservedSubject, {alias: 'observedSubject'});


}

