import {Component, OnInit} from '@angular/core';
import * as moment from 'moment/moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'StudySpace';

    ngOnInit() {
        moment.locale('de');
    }
}
