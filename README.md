1. Frontend - React app : create a file in src `aws-exports.js` with code:

```

const awsmobile = {
    "aws_project_region": "xxx",
    "aws_cognito_region": "xxx",
    "aws_user_pools_id": "xxx",
    "aws_user_pools_web_client_id": "xxx",
    "oauth": {}
};


export default awsmobile;

```

1. Backend - node app : create a file in root `.env` with env varibales a:

```

ACCESS_KEY_ID = "xxx"
SECRET_KEY = "xxx"
REGION = "xxx"
USER_POOL_ID = "xxx"

```
