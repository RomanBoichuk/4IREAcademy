// - Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. 
//   Первый аргумент - массив, который будет содержать в себе любые данные, второй
//   аргумент - тип данных.
// - Функция должна вернуть новый массив, который будет содержать в себе все данные,
//     которые были переданы в аргумент, за исключением тех, тип которых был передан 
//    вторым аргументом.То есть, если передать массив
//   ['hello', 'world', 23, '23', null],
//   и вторым аргументом передать 'string', то функция вернет массив[23, null].


//ПЕШИЙ ВАРІАНТ ВИРІШЕННЯ
let arr = ['hello', 'world', 23, '23', null]
function filterBy(arr, datatype) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof(arr[i]));
        if (typeof(arr[i])!==datatype) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filterBy(arr, 'string'));

//ДРУГИЙ ВАРІАНТ ВИРІШЕННЯ
let arr = ['hello', 'world', 23, '23', null]
function filterBy(arr, datatype) {

    const newArr = arr.filter(item => typeof(item) == datatype);
    return newArr
}
console.log(filterBy(arr, 'string'));
