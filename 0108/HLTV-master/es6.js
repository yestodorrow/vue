//var name="liugang"
//while(true){
//    var name="xiaoming";
//    console.log(name);//
//    break
//}
//console.log(name);

//let name="liugang";
//while(true){
//    let name="xiaoming";
//    console.log(name);//
//    break
//}
//console.log(name);


//var a=[];
//for(let i=0;i<10;i++){
//   a[i]=function(){
//       console.log(i);
//   }
//}
//a[6]()

//function iteratorFactory(i){
//    var onclick=function(e){
//        console.log(i);
//    }
//    return onclick
//}
//var clickBoxs=document.querySelectorAll(".clickBox";
//for(i=0;i<clickBox.length;i++){
//    clickBoxs[i].onclick=iteratorFactory(i)
//}

class Animal{
    constructor(){
        this.type="animal"
    }
    says(say){
        console.log(this.type+" says "+ say);
    }
}
let animal=new Animal();
animal.says("hello")

class Cat extends Animal{
    constructor(){
        super();
        this.type="cat"
    }
}
let cat=new Cat();
cat.says("hello");


//上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。

//Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。
//
//super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
//
//ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。


//function (i){
//    return i+1
//}
//(i)=>i+1


//使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
















