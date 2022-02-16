## How to login with Authorization token

The library uses a Authorization token.
This token is subject to expiration, it may not work indefinitely.  
To get this token you need to:

### Method : request header

-   go to the HoneyGain <a href="https://dashboard.honeygain.com/">dashboard</a>
-   open the dev tools by pressing <code>Ctrl + Shift + I</code> or <code>F12</code> and go to the `Network` tab
-   log into your account
-   in any of the requests requests, go to the `Headers` tab, in the `Request Headers` part, look for the `Authorization` header.
-   copy the value of this header. It begins by `Bearer`.
-   example:  
    header: `Authorization: Bearer eyJ0eXAi...xaL5x4`

### Final step

-   write the Authorization token in the client.login function:

```js
client.login("eyJ0eXAi...xaL5x4");
//you can include or not "Bearer "
```
