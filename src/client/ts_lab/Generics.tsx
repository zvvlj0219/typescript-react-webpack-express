import React from 'react'

interface Yasai {
    tomato: 'tomato'
    pumpkin: 'pumpkin'
    price: 200
    season: 'summer'
}

type K = keyof Yasai

type ConditionalTypes = { tomato : string } extends { tomato: infer R } ? R : boolean
type Super = Yasai extends { tomato: infer R } ? R : boolean

type DistributiveTypes1 = 'tomato' extends string ? number : string
type DistributiveTypes2 =  Yasai extends { tomato: 'tomato' } ? number : string
type DistributiveTypes3<T> =  T extends 'tomato' ? number : boolean

let aaaa: DistributiveTypes3<'tomato'>
let bbbb: DistributiveTypes3<'tomato'>

interface Drink<S> {
    maker: 'kirin'
    cola: 'cola'
    price: 130
    size: S
}

type DistributiveInterMappedTypes<T, P> = Drink<T> extends { [P in keyof Drink<T>]: infer R } ? R : unknown

function copy<P extends keyof Drink<'samll'>>(value: P): P {
    return value
}

// --------------------------------
// overload

interface FuncA {
    (a: string): string
}

interface FuncB {
    (b: number): string
}

type Mix = FuncA & FuncB

const MixFunc: Mix = (
    a: string | number,
) => {
    return 's'
}

const Generics = () => {
    return (
        <div>
            <h3>Generics</h3>
        </div>
    )
}

export default Generics
