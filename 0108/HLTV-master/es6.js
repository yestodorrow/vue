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


//�������������class������һ�����ࡱ�����Կ���������һ��constructor����������ǹ��췽������this�ؼ��������ʵ�����󡣼򵥵�˵��constructor�ڶ���ķ�����������ʵ�������Լ��ģ���constructor�ⶨ��ķ�����������������ʵ��������Թ���ġ�

//Class֮�����ͨ��extends�ؼ���ʵ�ּ̳У����ES5��ͨ���޸�ԭ����ʵ�ּ̳У�Ҫ�����ͷ���ܶࡣ���涨����һ��Cat�࣬����ͨ��extends�ؼ��֣��̳���Animal����������Ժͷ�����
//
//super�ؼ��֣���ָ�������ʵ�����������this���󣩡����������constructor�����е���super�����������½�ʵ��ʱ�ᱨ��������Ϊ����û���Լ���this���󣬶��Ǽ̳и����this����Ȼ�������мӹ������������super����������͵ò���this����
//
//ES6�ļ̳л��ƣ�ʵ�����ȴ��츸���ʵ������this�����Ա����ȵ���super��������Ȼ����������Ĺ��캯���޸�this��


//function (i){
//    return i+1
//}
//(i)=>i+1


//ʹ�ü�ͷ����ʱ���������ڵ�this���󣬾��Ƕ���ʱ���ڵĶ��󣬶�����ʹ��ʱ���ڵĶ���
//��������Ϊ��ͷ�����ڲ��а�this�Ļ��ƣ�ʵ��ԭ���Ǽ�ͷ��������û���Լ���this������this�Ǽ̳�����ģ�����ڲ���this������������this��
















