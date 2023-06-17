import React from "react";

class Person {
    // フィールド
    //プロパティ: 型 ( = 初期値 )
    // private pablic をつけることができる
    // フィールドかcoustructorのどちらかでプロパティを定義しないと、
    // classとしてのプロパティとして認識されない
    name: string = 'Mike';
    private age: number = 3;

    // インスタンスを作成する際に実行する関数,初期化
    // フィールドと同じプロパティがconstructorで定義されているときは、
    // constructorでの初期化時の初期値で上書きされる
    constructor(
        initName: string,
        private lastName: string // フィールドの省略記法
    ) {
        this.name = initName;
    }

    // メソッド
    greeting(){
        // this は実行時の値
        console.log('hello world. I am ' + this.name )
    }

    meeting(this: { name: string }) {
        // thisを引数に受け取る、thisは型付き、
        // なので実行時に { name: string} がオブジェクトにないとthis.nmaeがundefinedになる
        console.log(`Nice to meet you, ${this.name}`)
    }

    playing(this: Person) {
        // 実行時のthisがPersonと同じ型（構造）でないとエラー
        console.log(`${this.name}, Lets play basketball`)
    }
}

const quill = new Person('Quill', 'Kii') // Person { name: 'Quill' }

quill.greeting()

const emi = {
    // name: 'emi',
    emiGreeting: quill.greeting
    // this.は定義時ではなく、実行時のthisとして扱われる
}

emi.emiGreeting()

//  -------------------------------------------

abstract class Human {
    constructor(
        public name: string,
        protected age: number
    ){
        this.greeting()
    }

    abstract greeting(): void
}

class Teacher extends Human {

    greeting() {
        console.log('human')
    }

    constructor(name: string, age: number, private _subject: string){
        super(name, age);
        this._subject = _subject;
    }

    get subject(){
        return this._subject
    }

    set subject(value){
        this._subject = value
    }
}

// const hito = new Human()
// abstract classはnewでインスタンスをつくれない

const ken = new Teacher('ken', 25, 'Math')
ken.subject = 'English' // settorの使い方 letの上書きに近い
console.log(ken.subject)

// ----------------------------------------
// シングルトーンパターン
// constructorにprivateをつける
// new によるインスタンス化の禁止
// staticの中でしかインスタンス化ができなくなる, 
// 普通のメソッドはインスタンス化しないと使えないため

class Database {
    public table: any[]
    readonly dbName = 'sampleDB'

    private constructor() {
        this.table = [];
    }

    // private でかつ static のプロパティでインスタンスを保持する
    // 型はクラスと同じにしないとインスタンスにならない
    private static instance: Database

    // インスタンス化はstaticの中で実行
    static createDB () {
        if (Database.instance) return Database.instance
        Database.instance = new Database()
        return Database.instance
    }
}

// const db = new Database('mongo') =>> error

const db = Database.createDB().table

db.push('pppp')

console.log(db)

const db2 = Database.createDB().table

console.log(db2)
 
const Class = () => {
    return (
        <div>
            <h1>Class</h1>
        </div>
    )
}

export default Class
