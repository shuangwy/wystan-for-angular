import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  @Input() hero='i am a Hero';
  @Input('master' ) masterName='masterName i am wystan'
}
