

function showCities(){
const xhttp =new XMLHttpRequest()
xhttp.open('get','http://localhost:3500/api/getcustomers')

console.log(xhttp.readyState)
xhttp.addEventListener('readystatechange',()=>{
    console.log(xhttp.readyState,new Date())//מה מצב הבקשה})
   if(xhttp.readyState==4){//  //הכוונה שהכל תקין ובמת התקבל-ה200- תשובה 4-מה מצב הסטטוס,אם זה התקבל בהצלחה אצל הלקוח
       if(xhttp.status==200){
        console.log(xhttp)
        document.querySelector('#cities').innerHTML=' '
        let ans=JSON.parse(xhttp.response)
        for(let customer of ans){
            let op=document.createElement('option')
            op.setAttribute('value',customer.code)
            op.innerHTML = customer.name


            document.querySelector('#cities').appendChild(op)
        }
        
       }
    }
   })
xhttp.send()

console.log('after send',new Date())
}