export class CreateUserDto {}
"user_UUID" VARCHAR(36) NOT NULL,
"user_pseudo" VARCHAR(20) NOT NULL,
"username" VARCHAR(30) NOT NULL,
"user_password" VARCHAR(72) NOT NULL,
"created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

user_pseudo
username
user_password
created_at
