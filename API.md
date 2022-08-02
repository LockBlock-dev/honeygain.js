## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
<dt><a href="#FatalError">FatalError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
<dt><a href="#APIError">APIError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
<dt><a href="#ParseError">ParseError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
</dl>

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client()](#new_Client_new)
    * [.API_URL](#Client+API_URL) : <code>string</code>
    * [.login(authorization)](#Client+login) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.me()](#Client+me) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.tos()](#Client+tos) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devices()](#Client+devices) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.payouts()](#Client+payouts) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.transactions()](#Client+transactions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.stats()](#Client+stats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.referrals()](#Client+referrals) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.balances()](#Client+balances) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.notifications()](#Client+notifications) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.referralsEarnings()](#Client+referralsEarnings) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.jumpTaskEarnings()](#Client+jumpTaskEarnings) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.jumpTaskStats()](#Client+jumpTaskStats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.jumpTaskToday()](#Client+jumpTaskToday) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.walletStats()](#Client+walletStats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.today()](#Client+today) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devicesActivity([params])](#Client+devicesActivity) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.changePassword(currentPassword, newPassword)](#Client+changePassword) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_Client_new"></a>

### new Client()
The HoneyGain client

**Example**  
```js
const client = new Client();
```
<a name="Client+API_URL"></a>

### client.API\_URL : <code>string</code>
The base API URL

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+login"></a>

### client.login(authorization) ⇒ <code>Promise.&lt;Object&gt;</code>
Log into HoneyGain.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| authorization | <code>string</code> | Authorization token |

**Example**  
```js
client.login("eyJ0eXAi...xaL5x4");
```
<a name="Client+me"></a>

### client.me() ⇒ <code>Promise.&lt;Object&gt;</code>
Get your user data.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.me();
```
<a name="Client+tos"></a>

### client.tos() ⇒ <code>Promise.&lt;Object&gt;</code>
Get your tos status.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.tos();
```
<a name="Client+devices"></a>

### client.devices() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.devices();
```
<a name="Client+payouts"></a>

### client.payouts() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user payouts.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.payouts();
```
<a name="Client+transactions"></a>

### client.transactions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user transactions.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.transactions();
```
<a name="Client+stats"></a>

### client.stats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user stats.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.stats();
```
<a name="Client+referrals"></a>

### client.referrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user referrals.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.referrals();
```
<a name="Client+balances"></a>

### client.balances() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user balances.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.balances();
```
<a name="Client+notifications"></a>

### client.notifications() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user notifications.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.notifications();
```
<a name="Client+referralsEarnings"></a>

### client.referralsEarnings() ⇒ <code>Promise.&lt;Object&gt;</code>
Get referrals earnings.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.referralsEarnings();
```
<a name="Client+jumpTaskEarnings"></a>

### client.jumpTaskEarnings() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user Jump Task earnings.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.jumpTaskEarnings();
```
<a name="Client+jumpTaskStats"></a>

### client.jumpTaskStats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user Jump Task stats.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.jumpTaskStats();
```
<a name="Client+jumpTaskToday"></a>

### client.jumpTaskToday() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user jumpTask earnings for the day.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.today();
```
<a name="Client+walletStats"></a>

### client.walletStats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user wallet stats.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.walletStats();
```
<a name="Client+today"></a>

### client.today() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user earnings for the day.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.today();
```
<a name="Client+devicesActivity"></a>

### client.devicesActivity([params]) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices activity.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>Object</code> | <code>{}</code> | maximum time window of 30 days |
| params.date_from | <code>string</code> |  | start date |
| params.date_to | <code>string</code> |  | end date (maximum tomorrow) |

**Example**  
```js
client.devicesActivity({ date_from: "2022-08-01", date_to: "2022-08-05" });
```
<a name="Client+changePassword"></a>

### client.changePassword(currentPassword, newPassword) ⇒ <code>Promise.&lt;Object&gt;</code>
Change user password.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| currentPassword | <code>string</code> | your current HoneyGain password |
| newPassword | <code>string</code> | your new HoneyGain password |

**Example**  
```js
client.changePassword("myOldPass", "myNewPass");
```
<a name="FatalError"></a>

## FatalError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [FatalError](#FatalError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new FatalError(error)](#new_FatalError_new)
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_FatalError_new"></a>

### new FatalError(error)
Represents a fatal error from the Client.


| Param | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>error</code> | error object or message |

<a name="BaseError+type"></a>

### fatalError.type : <code>string</code>
error type

**Kind**: instance property of [<code>FatalError</code>](#FatalError)  
<a name="APIError"></a>

## APIError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [APIError](#APIError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new APIError(error, response, status, method, url)](#new_APIError_new)
    * [.status](#APIError+status) : <code>string</code>
    * [.method](#APIError+method) : <code>string</code>
    * [.url](#APIError+url) : <code>string</code>
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_APIError_new"></a>

### new APIError(error, response, status, method, url)
Represents an error from the API.


| Param | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>error</code> | error message |
| response | <code>object</code> | error response |
| status | <code>string</code> | status type of the request |
| method | <code>string</code> | method used for the request |
| url | <code>string</code> | url of the request to the endpoint |

<a name="APIError+status"></a>

### apiError.status : <code>string</code>
status type of the request

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="APIError+method"></a>

### apiError.method : <code>string</code>
method used for the request

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="APIError+url"></a>

### apiError.url : <code>string</code>
url of the request to the endpoint

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="BaseError+type"></a>

### apiError.type : <code>string</code>
error type

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="ParseError"></a>

## ParseError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [ParseError](#ParseError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new ParseError(message, status, method, url)](#new_ParseError_new)
    * [.status](#ParseError+status) : <code>string</code>
    * [.method](#ParseError+method) : <code>string</code>
    * [.url](#ParseError+url) : <code>string</code>
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_ParseError_new"></a>

### new ParseError(message, status, method, url)
Represents a parsing error.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | error message |
| status | <code>String</code> | status type of the request |
| method | <code>String</code> | method used for the request |
| url | <code>String</code> | url of the request to the endpoint |

<a name="ParseError+status"></a>

### parseError.status : <code>string</code>
status type of the request

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="ParseError+method"></a>

### parseError.method : <code>string</code>
method used for the request

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="ParseError+url"></a>

### parseError.url : <code>string</code>
url of the request to the endpoint

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="BaseError+type"></a>

### parseError.type : <code>string</code>
error type

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
