# Back-End
How-To

Documentation:
Base URL for Deployed API


Endpoints

| Request| URL | Description | Requires Token | Requires Regisered as Creator
| ------------- | ------------- | ---------| ---------| ----------|
| POST | /api/auth/register  | register as a new user | - | - |
| POST  | /api/auth/login  | login as existing user | - | - |
| POST  | /api/auth/howto/creator  | adds how-to | X | X |
| GET  | /api/auth/users  | gets all users | X | - |
| GET  | /api/auth/users/:id  | gets a specifc user | X | - |
| GET  | /api/auth/howto  | gets all how-to's | X | - |
| GET  | /api/auth/howto/:id  | gets a specific how-to's | X | - |
| PUT  | /api/auth/users/:id  | edits info for user with given id | X | - |
| PUT  | /api/auth/howto/creator/:id  | edits info for how-to with given id | X | X |
| DELETE  | /api/auth/howto/creator/:id  | deletes how-to with given id | X | X |
| DELETE  | /api/auth/users/:id  | deletes user with given id | X | - |

Table Requirements

Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | User id (auto generated by API) |
| username | string | yes | yes | User's username |
| password | string | yes | no | User's password |
| role | integer | yes | no | User's role (1: user, 2: creator) |

How-To's
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | User id (auto generated by API) |
| name | string | yes | yes | Name of How-to |
| description | string | yes | no | Short description of How-to |
| steps | string | yes | no | The steps to complete the How-to |
| category | string | yes | no | Category of How-to |
| complexity | string | no | no | Estimated time to complete/difficulty to complete |
