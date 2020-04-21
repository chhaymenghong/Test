import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';
import {environment} from '../environments/environment';

const searchClient: any = algoliasearch(
  environment.algolia.appId,
  environment.algolia.apiKey
);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
}
