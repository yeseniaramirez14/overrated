# APIs

## Table of Contents 
- [Profile/User APIs](#profileuser-apis)
- [Matches APIs](#matches-apis)
- [Messaging APIs](#messaging-apis)
- [Ratings APIs](#ratings-apis)
<br>
<hr>

## <u>Profile/User APIs</u>

### <b>Create a new user/profile</b>
* **Method**: `POST`
* **Path**: /api/profiles/profiles

Input:
```json
{
    "username": string,
    "email": string,
    "password": string,
    "first_name": string,
    "last_name": string,
    "location": string,
    "date_of_birth": date,
    "interested": string,
}
```
Output:
```json
{
    "id": int,
    "username": string,
    "email": string,
    "password": string,
    "first_name": string,
    "last_name": string,
    "location": string,
    "date_of_birth": date,
    "interested": string,
}
```
<br>

### <b>Current user's profile detail view</b>
* **Method**: `GET`
* **Path**: /api/profiles/mine

Output:
```json
{
    "id": serial,
    "username": string,
    "email": string,
    "first_name": string,
    "last_name": string,
    "date_of_birth": date,
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
    "interested": string,
    "average_rating": int
}
```
<br>

### <b>Specific profile's detail view</b>
* **Method**: `GET`
* **Path**: /api/profiles/&lt;int:pk&gt;

Output:
```json
{
    "id": serial,
    "username": string,
    "email": string,
    "first_name": string,
    "last_name": string,
    "date_of_birth": date,
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
    "interested": string,
    "average_rating": int
}
```
<br>

### <b>Update the current user's profile</b>
* **Method**: `PUT`
* **Path**: /api/profile/myself

Input:
```json
{
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
    "interested": string,
}
```
Output:
```json
{
    "id": int,
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
    "interested": string,
}
```
<br>

### <b>Filtered and randomized profile detail view</b>
* **Method**: `GET`
* **Path**: /api/random

Output:
```json
{
    "id": serial,
    "username": string,
    "email": string,
    "first_name": string,
    "last_name": string,
    "date_of_birth": date,
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
    "interested": string,
    "average_rating": int
}
```
<br>


### <b>List of all profiles</b>
* **Method**: `GET`
* **Path**: /api/profiles

Output:
```json
{
    "id": serial,
    "username": string,
    "email": string,
    "first_name": string,
    "last_name": string,
    "date_of_birth": date,
    "location": string,
    "photo": string,
    "about": string,
    "height": int,
    "job": string,
    "education": string,
    "gender": string,
    "sexual_orientation": string,
    "religion": string,
    "ethnicity": string,
    "pronouns": string,
}
```
<br>

### <b>Delete current user's profile</b>
* **Method**: `DELETE`
* **Path**: /api/profiles/myself

Output:
```json
{
    "result": bool
}
```
<br>
<hr>

## <u>Matches APIs</u>

### <b>Like a user's profile</b>
* **Method**: `POST`
* **Path**: /api/profiles/&lt;int:pk&gt;/liked

Input:
```json
{
    "current_user['id']": int,
    "target_user_id": int
}
```
Output:
```json
{
    "id": int,
    "active_user_id": int,
    "target_user_id": int,
    "liked": bool,
}
```
<br>

### <b>Dislike a user's profile</b>
* **Method**: `POST`
* **Path**: /api/profiles/&lt;int:pk&gt;/disliked

Input:
```json
{
    "current_user['id']": int,
    "target_user_id": int
}
```
Output:
```json
{
    "id": int,
    "active_user_id": int,
    "target_user_id": int,
    "liked": bool,
}
```
<br>

### <b>List of matches</b>
* **Method**: `GET`
* **Path**: /api/my-matches

Output:
```json
{
    "id": int,
    "photo": string,
    "first_name": string,
    "last_name": string,
    "location": string,
    "date_of_birth": date,
    "average_rating": float,
    "match_id": int,
}
```
<br>
<hr>

## <u>Messaging APIs</u>
<br>

### <b>List of the 3 most recent conversations of the current user </b>
* **Method**: 'GET' <br>
* **Path**: /api/messages

Output:
```json
{
    "id": int,
    "photo": string,
    "first_name": string,
    "last_name": string,
    "match_id": int,
    "sender": int,
    "recipient": int,
    "sent": datetime,
    "message": string
}
```
<br>

### <b>Send a message to another user </b>
* **Method**: 'POST'
* **Path**: /api/messages

Input:
```json
{
    "recipient": int,
    "sent": datetime,
    "message": string
}
```
Output:
```json
{
    "id": int,
    "match_id": int,
    "sender": int,
    "recipient": int,
    "sent": datetime,
    "message": string
}
```
<br>

### <b>List of all messages between the current user & target user </b>
* **Method**: 'POST'
* **Path**: /api/messages/&lt;int:pk&gt;

Output:
```json
{
    "id": int,
    "sender": int,
    "recipient": int,
    "sent": datetime,
    "message": string
}
```
<br>
<hr>

## <u>Ratings APIs</u>

### <b>Rate a user </b>
* **Method**: 'POST'
* **Path**: /api/profiles/&lt;int:pk&gt;/rating 

Input:
```json
{
    "rating": int,
    "rating_of": int,
}
```
Output:
```json
{
    "id": int,
    "rating": int,
    "rating_of": int,
    "rating_by": int,
}
```
<br>

### <b>Get the rating average of a user</b>
* **Method**: 'POST'
* **Path**: /api/profiles/&lt;int:pk&gt;/average-rating 


Output:
```json
{
    "average_rating": float
}
```
<br>

### <b>List of the current user's ratings </b>
* **Method**: 'GET'
* **Path**: /api/my-ratings

Output:
```json
{
    "id": serial,
    "reviewer_username": int,
    "account_id": int ,
    "review_event": int,
}
```
