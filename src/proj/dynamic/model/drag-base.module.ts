import { Component, Type } from "@angular/core";

export abstract class DragBaseModule {
  
  protected abstract dynamicComponents: {[key:string]: any}

  constructor() { }

  public getComponent(selector: string): Type<unknown> {
    return this.dynamicComponents[selector];
  }

}
