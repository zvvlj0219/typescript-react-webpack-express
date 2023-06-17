import React from "react"

// function baseEntity(constructor: Function){
//     constructor.prototype.userID = 'secret id'
// }

// クラスデコレーター引数はコンストラクタを引数に取らないといけない

function classDecorator(message: string) {
    return function (constructor: Function) {
        console.log(message)
        console.log(constructor)
    }
}

function methodDecorator_1() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

// @classDecorator('logging...')
class User {


    userID = 'initial id'

    name = 'Quill'


    age = 30


    constructor() {
        console.log('User wsa created')
    }

    static greeting() {
        console.log('called greeting')
    }

    playing(){
        console.log('called playing')
    }

}


// ----offcial document--------------------
// クラスデコレータ
const Logger = (logString: string) => {
    // 匿名関数の中には、このデコレータで実行したい処理を書く
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
};

/**
* デコレータファクトリーではなく、デコレータ関数として定義
* @param {instanceならこのclassのprototype、staticならconstructor} target
* @param {string | Symbol} propertyName
*/
const Log = (target: any, propertyName: string | Symbol) => {
    console.log('target', target);
    console.log('propertyName', propertyName);
};


// 呼び出し時に関数として実行する必要がある
// これは外側のLogger関数を実行している
// Logger関数から返される新しい匿名関数をPersonクラスのデコレータとして適応
@Logger('Loggerの引数: ログ出力中')
class Person {

    @Log
    name = 'Tom';

    @Log
    static id = 'xxxxx'
  
    constructor() {
      console.log('Personオブジェクト作成中');
    }
}

console.log(new Person())

const Decorator = () => {
    return (
        <div>
            <h1>decorate</h1>
        </div>
    )
}

export default Decorator
