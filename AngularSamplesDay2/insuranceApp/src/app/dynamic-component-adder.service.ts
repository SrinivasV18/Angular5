import { Injectable, ViewContainerRef ,ComponentFactoryResolver} from '@angular/core';
import { ViewContainerData } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentAdderService {
  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  //where to Add
  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }

  //What to Add
  addComponent(compToAdd: any): any {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);
    return compRef;
  }
}
