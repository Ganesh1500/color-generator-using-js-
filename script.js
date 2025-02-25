//first method

// setInterval(function(){
//     console.log('chai and code')
//     // console.log(Date.now())
// },2000)


// //second method
// const date =function(){
//     console.log( 'chai price :-',Date.now());
// }
// setInterval(date,2000)


// it will take a paramete also 

//now to stop setinterval
// const saydate =function(str){
//     console.log(str, Date.now())
// }

// const set =setInterval(saydate,2000,'parameter' )
// clearInterval(set)


// sir task i have to complete

// const b =function(){
//     const h =function(){
//         console.log('start :-' ,Date.now())
//     }
//    setInterval(h,2000)
  


// document.querySelector('#start').addEventListener('click',b)

// document.querySelector("#stop").addEventListener('click' ,function (){
//     clearInterval(hf)
// })
// }
//again do it same task 

const b =function(){
    const h=function(){
    console.log("set:-", Date.now())
    }
  let  h2 = setInterval(h,2000)
    document.querySelector("#stop").addEventListener('click',function(){
        clearInterval(h2);
        console.log('stop')
    })
}
document.querySelector('#start').addEventListener('click',b)
