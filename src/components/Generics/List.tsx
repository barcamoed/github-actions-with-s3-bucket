type ListProps<T> = {
    items: T[],
    onClick:(value:T)=> void
}

class CollectionGeneric<MyType>{
    items:Array<MyType> = [];

    addItem(item:MyType){
        this.items.push(item);
    }

    get totalItems() {
        return this.items.length;
    }

    removeItem(item:MyType){
        const numberIndex = this.items.findIndex((number)=>item===number)
        if(numberIndex >-1){
            this.items.splice(numberIndex,1);
        }

    }

}

const CGObj = new CollectionGeneric<number>(); // Here We are specifying the instance type that we want this instance to work with i.e <number>
CGObj.addItem(1);
CGObj.addItem(2);
CGObj.addItem(3);
CGObj.addItem(4);
CGObj.addItem(5);
CGObj.removeItem(2);
console.log('Generic Number Items:',CGObj.totalItems)

const CGObj1 = new CollectionGeneric<string>(); // Here We are specifying the instance type that we want this instance to work with i.e <string>
CGObj1.addItem('1');
CGObj1.addItem('2');
CGObj1.addItem('3');
CGObj1.addItem('4');
CGObj1.addItem('5');
CGObj1.addItem('6');
CGObj1.removeItem('2');
console.log('Generic String Items:',CGObj1.totalItems)

// <T extends means constraints (restriction) of data type
// const List=<T extends {}>({items,onClick}:ListProps<T>)=>{
const List=<T extends number|string>({items,onClick}:ListProps<T>)=>{

    function makeArray<X,Y>(x:X,y:Y){
        return [x,y];
    }
    console.log(makeArray('aaaaaaaa','bbbbb'));
    console.log(makeArray(333,123));
    console.log(makeArray('aaa',123));

    function makeFullName<T extends {firstName:string,lastName:string}>(obj:T){
        return {...obj,fullName:obj.firstName+' '+obj.lastName}
    }
    console.log(makeFullName({firstName:'Sarmad',lastName:'Afzal'}));

    return(
        <>
            <h2>List of Items</h2>
            <div>
                {items.map((item,index)=>{
                    return(
                        <div key={item} onClick={()=>onClick(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List;



