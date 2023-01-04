// let pro = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error('this is an error please handle with try catch'))
//         },3000)
//     })
// }
// let asy = async ()=>{
//     try {
//         let p= await pro()
//         console.log(p)
        
//     } catch (err) {
//         console.log('this error is handeled')
//     }
// }
// asy()

let btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    Notification.requestPermission().then(e=>{
        if (e==='granted'){
            new Notification('example')
            console.log('hello passss')
        }
    })

})
