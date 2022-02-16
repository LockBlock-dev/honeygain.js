# Methods

<dl>
<dt><a href="#balances">balances()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user balances.</p>
</dd>
<dt><a href="#changePassword">changePassword(currentPassword, newPassword)</a> ⇒ <code>Promise</code></dt>
<dd><p>Change user password.</p>
</dd>
<dt><a href="#devices">devices()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user devices.</p>
</dd>
<dt><a href="#jumpTaskEarnings">jumpTaskEarnings()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user Jump Task earnings.</p>
</dd>
<dt><a href="#jumpTaskStats">jumpTaskStats()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user Jump Task stats.</p>
</dd>
<dt><a href="#jumpTaskToday">jumpTaskToday()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user jumpTask earnings for the day.</p>
</dd>
<dt><a href="#login">login(authorization)</a> ⇒ <code>Promise</code></dt>
<dd><p>Log into HoneyGain.</p>
</dd>
<dt><a href="#me">me()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get your user data.</p>
</dd>
<dt><a href="#notifications">notifications()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user notifications.</p>
</dd>
<dt><a href="#payouts">payouts()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user payouts.</p>
</dd>
<dt><a href="#referrals">referrals()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user referrals.</p>
</dd>
<dt><a href="#referralsEarnings">referralsEarnings()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get referrals earnings.</p>
</dd>
<dt><a href="#stats">stats()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user stats.</p>
</dd>
<dt><a href="#today">today()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user earnings for the day.</p>
</dd>
<dt><a href="#tos">tos()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get your tos status.</p>
</dd>
<dt><a href="#transactions">transactions()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user transactions.</p>
</dd>
<dt><a href="#walletStats">walletStats()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user wallet stats.</p>
</dd>
</dl>

# Errors

<dl>
<dt><a href="APIError">APIError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to the API.</p>
</dd>
<dt><a href="FatalError">FatalError</a> ⇒ <code>Error</code></dt>
<dd><p>Fatal error in the program. (you don't want this one)</p>
</dd>
<dt><a href="ParseError">ParseError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to a parsing error in the response from the API.</p>
</dd>
</dl>

---

# Methods

<a name="balances"></a>

## balances() ⇒ <code>Promise</code>

Get user balances.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Object,
}
```

**Example**

```js
client.balances();
```

<a name="changePassword"></a>

## changePassword(currentPassword, newPassword) ⇒ <code>Promise</code>

Change user password.

**Kind**: method  
**Returns**:

| Param           | Type                | Description                     |
| --------------- | ------------------- | ------------------------------- |
| currentPassword | <code>String</code> | your current HoneyGain password |
| newPassword     | <code>String</code> | your new HoneyGain password     |

**Example**

```js
client.changePassword("myOldPass", "myNewPass");
```

<a name="devices"></a>

## devices() ⇒ <code>Promise</code>

Get user devices.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Device[],
}
```

```js
Device {
    id: String,
    manufacturer: String,
    model: String,
    title: String,
    platform: String,
    version: String,
    streaming_enabled: Boolean,
    ip: String,
    status: String,
    last_active_time: String,
}
```

**Example**

```js
client.devices();
```

<a name="jumpTaskEarnings"></a>

## jumpTaskEarnings() ⇒ <code>Promise</code>

Get user Jump Task earnings.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Object,
}
```

**Example**

```js
client.jumpTaskEarnings();
```

<a name="jumpTaskStats"></a>

## jumpTaskStats() ⇒ <code>Promise</code>

Get user Jump Task stats.

**Kind**: method  
**Returns**:

```js
{
    Object,
}
```

**Example**

```js
client.jumpTaskStats();
```

<a name="jumpTaskToday"></a>

## jumpTaskToday() ⇒ <code>Promise</code>

Get user jumpTask earnings for the day.

**Kind**: method  
**Returns**:

```js
{
    "total": Object,
    "winning": Object,
    "referral": Object,
    "other": Object,
    "bonus": Object,
    "cdn": Object,
    "gathering": Object,
}
```

**Example**

```js
client.jumpTaskToday();
```

<a name="login"></a>

## login(authorization) ⇒ <code>Promise</code>

Log into HoneyGain.

**Kind**: method  
**Returns**:

```js
{
    status: String,
}
```

| Param         | Type                | Description         |
| ------------- | ------------------- | ------------------- |
| authorization | <code>String</code> | Authorization token |

**Example**

```js
client.login("eyJ0eXAi...xaL5x4");
```

<a name="me"></a>

## me() ⇒ <code>Promise</code>

Get your user data.

**Kind**: method  
**Returns**:

```js
{
    data: Object,
}
```

**Example**

```js
client.me();
```

<a name="notifications"></a>

## notifications() ⇒ <code>Promise</code>

Get user notifications.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Array,
}
```

**Example**

```js
client.notifications();
```

<a name="payouts"></a>

## payouts() ⇒ <code>Promise</code>

Get user payouts.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Array,
}
```

**Example**

```js
client.payouts();
```

<a name="referrals"></a>

## referrals() ⇒ <code>Promise</code>

Get user referrals.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Array,
}
```

**Example**

```js
client.referrals();
```

<a name="referralsEarnings"></a>

## referralsEarnings() ⇒ <code>Promise</code>

Get referrals earnings.

**Kind**: method  
**Returns**:

```js
{
    "count": Number,
    "total_earnings": Number,
    "average_earnings": Number,
    "first_referrals": Array,
}
```

**Example**

```js
client.referralsEarnings();
```

<a name="stats"></a>

## stats() ⇒ <code>Promise</code>

Get user stats.

**Kind**: method  
**Returns**:

```js
{
    Object,
}
```

**Example**

```js
client.stats();
```

<a name="today"></a>

## today() ⇒ <code>Promise</code>

Get user earnings for the day.

**Kind**: method  
**Returns**:

```js
{
    "total": Object,
    "winning": Object,
    "referral": Object,
    "other": Object,
    "bonus": Object,
    "cdn": Object,
    "gathering": Object,
    "total_credits": Number,
    "gathering_bytes": Number,
    "streaming_seconds": Number,
    "winning_credits": Number,
    "referral_credits": Number,
    "other_credits": Number,
}
```

**Example**

```js
client.today();
```

<a name="tos"></a>

## tos() ⇒ <code>Promise</code>

Get your tos status.

**Kind**: method  
**Returns**:

```js
{
    "meta": null,
    "data": Object,
}
```

**Example**

```js
client.tos();
```

<a name="transactions"></a>

## transactions() ⇒ <code>Promise</code>

Get user transactions.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Array,
}
```

**Example**

```js
client.transactions();
```

<a name="walletStats"></a>

## walletStats() ⇒ <code>Promise</code>

Get user wallet stats.

**Kind**: method  
**Returns**:

```js
{
    "meta": Object | null,
    "data": Object,
}
```

**Example**

```js
client.walletStats();
```

# Errors

<a name="APIError"></a>

## APIError ⇒ <code>Error</code>

Error related to the API

**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,
    title: String,
    details: String,
    code: Number,
}
```

**Example**

```js
{
    message: "Request failed with status code 403",
    type: 'APIError',
    status: 403,
    method: 'GET',
    url: 'https://dashboard.honeygain.com/api/v1/users/me',
    title: "access_token_expired",
    details: ""
}
```

```js
{
    message: "Invalid JWT Token",
    type: 'APIError',
    status: 401,
    method: 'GET',
    url: 'https://dashboard.honeygain.com/api/v1/users/me',
    code: 401
```

<a name="FatalError"></a>

## FatalError ⇒ <code>Error</code>

Fatal error in the program. (you don't want this one)

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    stack: String
}
```

<a name="ParseError"></a>

## ParseError ⇒ <code>Error</code>

Error related to a parsing error in the response from the API.

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,
    response: String|Object
}
```

**Example**

```js
{
    message: "Error parsing response",
    type: 'ParseError',
    status: 200,
    method: 'GET',
    url: 'https://dashboard.honeygain.com/api/v2/devices',
    response: ""
}
```
