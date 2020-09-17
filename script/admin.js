let cc= []
window.addEventListener("load", ()=>{

    fetch('https://api.revvsales.com/api/contacts/all?page_num=1',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjE1MTEwMDRhLTdkYTAtNGMyMy1hNzlhLTE4ZTA4ZjE5Njc2OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzNjIxNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM4NDY3OSwiaWF0IjoxNjAwMzgxMDgwLCJqdGkiOiIzOTQwMDJhNy1mM2RhLTQyNDEtOTBkNy0yNjVkMWE4YmJmMGYiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.VSmEZHm5GSeJQox336pAAs6-cc9TucJAIBuYr9kdVb49jbd_sj-esm1asxvNCK3GLJxTC0vOIo9SYqn3DveNULfSJy21q29Lol60IjJeOEuQGvjlEtI5vmnzrMvfiojo_ujxe7taapiSeaKkSlC2sG6y_xROm8VjXl0mkLO-gLhwCwT_i--HtfJRQcdj4IBmGEEgGC_qBW0z28sYA_LxYgMoODFjXHThyK96cK6yAVy2c-HNLxSYnieCDLeOmJ-kTP9CXZx6zRjDAg7q4jYWsjElY1RVorw8bgbCmG5THpit8av3tD642-phXJRuDpOhWtIDiQH-zExxnnisrhQb7w"
            }
        })
        .then(response => response.json())
        .then(res => show(res.Contacts))
})

function getUnique(array){
    var uniqueArray = [];
    
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
let sendAll= document.getElementById("sendAll")
sendAll.addEventListener("click", ()=>{
    const data= {
        template_id: 30
    }
    const final = {
        "acceptors":	[{
            "user_email": cc[i],
            "first_name": "",
            "last_name": ""
        }],
        "email_message": "Check this sample document"
    }
    fetch('https://api.revvsales.com/api/docs',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjE1MTEwMDRhLTdkYTAtNGMyMy1hNzlhLTE4ZTA4ZjE5Njc2OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzNjIxNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM2NjAxMiwiaWF0IjoxNjAwMzYyNDEyLCJqdGkiOiIzNGRmYTI1Yy04NWQyLTRhNTYtYmEyYi1hMzJhZTU2Mjc4M2EiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.i5YWoyhgzI3HZOw63nDBj1qpX8x9LQcpeqzex7rdgjr3WkVU6Rj-72FaF4edDREyXtZ1drmdf88GFN4C1_CQXOo0RRCZv8SUZscR4JvK1UKjUQ38k67MNbnPiU8ocfhwSXhMPcjENF80fEpY0ewxswjC6VAFlFUbZGuq2p-GZnwpQunwaRV7pTuoKuOpNGCNkoP0MnGZUh6_-m8bJU-qk63KFZf26W-5lrs7SRsWLoRN-y2Nw6jI4mPWTSv5oBS70QIAjbG_X2Br0zEAYsT5qtm2qVpPsxqxYiy-kVS2HELZUjfVs0Q-mkE7f8-_A3GDK_JQINRQeXwIFexzY392cA"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        for(let i=0;i<cc.length;i++){
            fetch('https://api.revvsales.com/api/v2/doc-acceptors/'+ data.Document.id,{
            method: 'POST',
            headers:{
                "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjE1MTEwMDRhLTdkYTAtNGMyMy1hNzlhLTE4ZTA4ZjE5Njc2OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzNjIxNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM2NjAxMiwiaWF0IjoxNjAwMzYyNDEyLCJqdGkiOiIzNGRmYTI1Yy04NWQyLTRhNTYtYmEyYi1hMzJhZTU2Mjc4M2EiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.i5YWoyhgzI3HZOw63nDBj1qpX8x9LQcpeqzex7rdgjr3WkVU6Rj-72FaF4edDREyXtZ1drmdf88GFN4C1_CQXOo0RRCZv8SUZscR4JvK1UKjUQ38k67MNbnPiU8ocfhwSXhMPcjENF80fEpY0ewxswjC6VAFlFUbZGuq2p-GZnwpQunwaRV7pTuoKuOpNGCNkoP0MnGZUh6_-m8bJU-qk63KFZf26W-5lrs7SRsWLoRN-y2Nw6jI4mPWTSv5oBS70QIAjbG_X2Br0zEAYsT5qtm2qVpPsxqxYiy-kVS2HELZUjfVs0Q-mkE7f8-_A3GDK_JQINRQeXwIFexzY392cA"
            },
            body: JSON.stringify(final)
        }).then(res=> res.json())
        .then(data=> console.log(data));
        }
   })
})

function show(res){
    let fill = document.getElementById("fill")
    let x = res.map(item=> item.email)
    cc = getUnique(x)

    for(let i=0;i<cc.length;i++){
        let div = document.createElement("div")
        div.style.border="1px solid gray"
        div.style.borderRadius = "10px"
        div.style.margin = "10px 0px"
        div.style.padding = "10px"
        div.style.fontSize = "20px"
        div.style.textAlign = "center"
        div.textContent = cc[i]
        fill.append(div)

    }
}