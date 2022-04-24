# Platform Services Registry API
Platform services registry API

## Authentication

## Apollo Studio Explorer

### Authentication
You will need to attain your keyclaok access token and set is as an Authorization bearer token in Apollo studio.

1) Generate your access token:

```bash 
curl --location --request POST 'https://<sso-url>/auth/realms/<realm>/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=<client-id>' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_secret=<your-client-secret>' \
--data-urlencode 'scope=openid' \
--data-urlencode 'username=<your-keyclaok-username>' \
--data-urlencode 'password=<your-keyclaok-password>'
```

_Tip:_ You can paste this into [postman](https://www.postman.com/)

2) Create an **Authorization** header with the value ```Bearer <your-access-token>```

<img width="772" alt="image" src="https://user-images.githubusercontent.com/30703259/164964528-29ec0351-f4d1-4abc-9c18-db39dc40cc0e.png">

_Note_: You will need to repeat this process when the token expires
