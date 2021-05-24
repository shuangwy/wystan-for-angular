import { Component, Input } from '@angular/core'; // First, import Input

@Component({
    selector:'app-parent',
    templateUrl:'./app-parent-test.html'
})
export class AppParent {
  @Input() item = '我是你爽哥哥的parent组件'; // decorate the property with @Input()
}