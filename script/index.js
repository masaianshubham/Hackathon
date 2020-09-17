window.addEventListener("load", ()=>{
    let btn = document.getElementById("getQuote")
    let res=0
    let fashion = document.getElementById("fashion")
    fashion.addEventListener("click", ()=>{
        res= 21
        // return res
    })
    let wedding = document.getElementById("wedding")
    let music = document.getElementById("music")
    btn.addEventListener("click",()=>{
        const data= {
            template_id: res
        }
        fetch('https://api.revvsales.com/api/docs',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                "AccessToken": "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTBjMzgyNi02NmMyLTQ5ZDctYmQyZS05NzBjMDg0YTZlZTIiLCJldmVudF9pZCI6IjdmNzMyNDU1LTVhZTMtNGYxYS1iODA5LWVkZjhmMDhlNmRhNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAyNjg4NjEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDI3MjQ2MSwiaWF0IjoxNjAwMjY4ODYxLCJqdGkiOiI4M2E0ZGFiZC0zZjVkLTQxOGItOTAwOC0zNDIyMGY4OGQ2NjgiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiY2UwYzM4MjYtNjZjMi00OWQ3LWJkMmUtOTcwYzA4NGE2ZWUyIn0.c7KAkkZu7gpMqAkEbSpp_RDehdmDia9WEGv7uVnmpZsxXkipbwpoOvqK6U5ynV_rX_k0G3FtpUsYLcMXrce-1BiUyyihJf5_SVAKUHkTNasZKWLj5V3k52GlwEIPDSCvci53DZr-4LTxY4lfQqYCM19EjPIjBae3d7ZCrMWrnCgVIIyUNsgP1dzYB6t787lArMaTv9YuHTzW-xXR3WpJjq2w4-tksrnkocP7q5CpoTTPcIZufOglP3Nbn0k1_oEGecV3ZP8eJPUz9TUROGZpujA85el4nGAnmaItCU7Enm0090YAtNr7IEyj_-9DrfzH04tjcJ1oxC9T00h4Ms6xPg"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data));
    })
})
