# Data Tables

## Profiles
| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| email | string | yes | no |
| first_name | string | no | no |
| last_name | string | no | no |
| location | string | no | no |
| date_of_birth | date | no | no |
| photo | string | no | yes |
| about | string | no | yes |
| height | string | no | yes |
| job | string | no | yes |
| education | string | no | yes |
| gender | string | no | yes |
| sexual_orientation | string | no | yes |
| religion | string | no | yes |
| ethnicity | string | no | yes |
| pronouns | string | no | yes |
| interested | string | no | yes |
| average_rating | float | no | yes |

<br>

## Interested
The user's gender preferences
| Name | Type | Unique | Optional |
|-|-|-|-|
| profile_id | int (ref profile) | no | no | 
| interest | string | no | no | 

<br>

## Liked
If a user has liked or disliked another user 
| Name | Type | Unique | Optional |
|-|-|-|-|
| active_user | int | no | no |
| target_user | int | no | no |
| liked | string | bool | no | no |

<br>

## Matches
Two users are matched if they liked each other 
| Name | Type | Unique | Optional |
|-|-|-|-|
| user1 | int | no | no |
| user2 | int | no | no |
| created_on | datetime | no || no |

<br>

## Chats
Messages between all the users
| Name | Type | Unique | Optional |
|-|-|-|-|
| match_id | int (ref matches) | no | no |
| sender | int | no | no |
| recipient | int | no | no |
| sent | datetime | no | no |
| message | string | no | no |

<br>

## Ratings
Ratings between all the users
| Name | Type | Unique | Optional |
|-|-|-|-|
| rating | int | no | no |
| rating_of | int | no | no |
| rating_by | int | no | no |
| review | string | no | yes |
