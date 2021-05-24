import { Component, Input } from '@angular/core'; // First, import Input
@Component({
    selector:'app-children',
    templateUrl:'./app-children.html'
})
export class AppChildren {
  @Input() item = '我是你爽哥哥'; // decorate the property with @Input()
}