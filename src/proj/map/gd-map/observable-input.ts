import { ObservedValueOf, BehaviorSubject, } from 'rxjs'

const checkDescriptor = <T, K extends keyof T>(target: T, propertyKey: K) => {
  const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey)

  if (descriptor && !descriptor.configurable) {
    throw new TypeError(`property ${propertyKey} is not configurable`)
  }

  return {
    oGetter: descriptor && descriptor.get,
    oSetter: descriptor && descriptor.set,
  }
}


export function ObservableInput<
  T = any,
  OK extends keyof T = keyof T,
  >(initialValue?: ObservedValueOf<T[OK]>) {
  return (target: T, oPropertyKey: OK) => {

    const { oGetter, oSetter } = checkDescriptor(target, oPropertyKey)

    if (oGetter || oSetter) {
      throw new TypeError(
        `property ${oPropertyKey} should not define getter or setter`,
      )
    }

    const symbol = Symbol('private property hook')

    type OT = ObservedValueOf<T[OK]>

    type Mixed = T & {
      [symbol]?: BehaviorSubject<OT | undefined>
    } & Record<OK, BehaviorSubject<OT>>

    Object.defineProperty(target, oPropertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return this[symbol] || (this[symbol] = new BehaviorSubject(initialValue))
      },
      set(this: Mixed, value: OT) {
        this[oPropertyKey].next(value)
      },
    })
  }
}

