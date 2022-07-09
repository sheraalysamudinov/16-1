// const array = [
//     {
//         username:'Jack',
//         full_name:'Jack Barbara',
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barbara',
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barbara',
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barbara',
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barbara',
//     },
// ]
// console.log(array[0].username, array[0].full_name)
// console.log(array[1].username, array[1].full_name)
// console.log(array[2].username, array[2].full_name)
// console.log(array[3].username, array[3].full_name)
// console.log(array[4].username, array[4].full_name)

// for(let i=0; i < array.length; i++){
//     console.log(array[i])
//     if(i === 2){
//         break
//     }
// }
//
// // for(let user of array){
// //     console.log(user)
// // }



// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
// }
// for(let key in obj){
//     console.log(obj[key])
// }


const users = [
    {
        username: 'Jack',
        salary: '500',
    },
    {
        username: 'John',
        salary: '5000',
    },
    {
        username: 'Baka',
        salary: '10000',
    }
]

const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers)