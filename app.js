// let add_value = [];
// let calvelue = (val) => {

//     add_value.push(val);

//     document.querySelector('.top_monitor').innerHTML = add_value.join('');
//     document.querySelector('.main_monitor').innerHTML = 0;
// }


// let resvalue = () =>{
//     let calstring = add_value.join('');

//     document.querySelector('.main_monitor').innerHTML = eval(calstring);

// }



// let all_clear = () => {

//     add_value = [];
//     document.querySelector('.top_monitor').innerHTML = 0;
//     document.querySelector('.main_monitor').innerHTML = '';
// }

// let back = () => {
    
//     add_value.pop();
//     document.querySelector('.top_monitor').innerHTML = add_value.join('');
// }


let add_value = [];

let calvelue = (val) => {

    add_value.push(val);

    document.querySelector('.top_monitor').innerHTML = add_value.join('');
    document.querySelector('.main_monitor').innerHTML = 0;
}


let resvalue = () => {
    let string = add_value.join('');

    document.querySelector('.main_monitor').innerHTML = eval(string);

}

let all_clear = () => {

   add_value = [];
    document.querySelector('.top_monitor').innerHTML = 0;
    document.querySelector('.main_monitor').innerHTML = '';
}

let back = () => {

    add_value.pop();
    document.querySelector('.top_monitor').innerHTML = add_value.join('');
}