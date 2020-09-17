window.addEventListener("load", ()=>{
    let btn = document.getElementById("getQuote")
    let res=0
    let fashion = document.getElementById("fashion")
    fashion.addEventListener("click", ()=>{
        res= 25
    })
    let wedding = document.getElementById("wedding")
    wedding.addEventListener("click", ()=>{
        res = 21
    })
    let music = document.getElementById("music")
    music.addEventListener("click",()=>{
        res = 24
    })
    btn.addEventListener("click",()=>{
        let emailId = document.getElementById("emailId").value
        let fname = document.getElementById("fname").value
        let lname = document.getElementById("lname").value
        const data= {
            template_id: res
        }
        const final = {
            "acceptors":	[{
                "user_email": emailId,
                "first_name": fname,
                "last_name": lname
            }],
            "email_message": "Check this sample document"
        }
        fetch('https://api.revvsales.com/api/docs',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjE1MTEwMDRhLTdkYTAtNGMyMy1hNzlhLTE4ZTA4ZjE5Njc2OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzNjIxNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM4NDY3OSwiaWF0IjoxNjAwMzgxMDgwLCJqdGkiOiIzOTQwMDJhNy1mM2RhLTQyNDEtOTBkNy0yNjVkMWE4YmJmMGYiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.VSmEZHm5GSeJQox336pAAs6-cc9TucJAIBuYr9kdVb49jbd_sj-esm1asxvNCK3GLJxTC0vOIo9SYqn3DveNULfSJy21q29Lol60IjJeOEuQGvjlEtI5vmnzrMvfiojo_ujxe7taapiSeaKkSlC2sG6y_xROm8VjXl0mkLO-gLhwCwT_i--HtfJRQcdj4IBmGEEgGC_qBW0z28sYA_LxYgMoODFjXHThyK96cK6yAVy2c-HNLxSYnieCDLeOmJ-kTP9CXZx6zRjDAg7q4jYWsjElY1RVorw8bgbCmG5THpit8av3tD642-phXJRuDpOhWtIDiQH-zExxnnisrhQb7w"
                
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => fetch('https://api.revvsales.com/api/v2/doc-acceptors/'+ data.Document.id,{
            method: 'POST',
            headers:{
                "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjE1MTEwMDRhLTdkYTAtNGMyMy1hNzlhLTE4ZTA4ZjE5Njc2OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzNjIxNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM4NDY3OSwiaWF0IjoxNjAwMzgxMDgwLCJqdGkiOiIzOTQwMDJhNy1mM2RhLTQyNDEtOTBkNy0yNjVkMWE4YmJmMGYiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.VSmEZHm5GSeJQox336pAAs6-cc9TucJAIBuYr9kdVb49jbd_sj-esm1asxvNCK3GLJxTC0vOIo9SYqn3DveNULfSJy21q29Lol60IjJeOEuQGvjlEtI5vmnzrMvfiojo_ujxe7taapiSeaKkSlC2sG6y_xROm8VjXl0mkLO-gLhwCwT_i--HtfJRQcdj4IBmGEEgGC_qBW0z28sYA_LxYgMoODFjXHThyK96cK6yAVy2c-HNLxSYnieCDLeOmJ-kTP9CXZx6zRjDAg7q4jYWsjElY1RVorw8bgbCmG5THpit8av3tD642-phXJRuDpOhWtIDiQH-zExxnnisrhQb7w"
            },
            body: JSON.stringify(final)
        })).then(res=> res.json())
        .then(data=> console.log(data));
    })
})
