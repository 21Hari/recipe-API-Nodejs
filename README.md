This Assignment contains a Two collections
1. user
2. recipe
** "user" contains,
   -> signup
   -> login
   -> get all user details
   -> get user based on Id
   -> update user based on Id
   -> delete user based on Id
   "Routes for "user" collection":
       1. API (signup)
         -> path : "/api/user/signup"
         -> method: post
       " This api is used to create a new user"
       2. API (login)
          -> path : "/api/user/login"
          -> method: post
       "This api is used to check whether the user is already existing or not ... if existing generate a JWT token"
       3. API (Get All user)
          -> path : "/api/user/"
          -> method: get
       "This api is used to get all the User in collection with secure manner by help of JWT token"
       4. API (Get user Based Id)
          -> path : "/api/user/:id"
          -> method: get
       "This api is used to get the specific user or personal information about user in collection with secure manner by help of JWT token"
       5. API (update user Based Id)
          -> path : "/api/user/:id"
          -> method: put
       "This api is used to update a specific user based on user email... The email is unique for every user... after jwt verfication this function will happends "
       5. API (Delete user Based Id)
          -> path : "/api/user/:id"
          -> method: delete
       "This api is used to delete the specfic user based on id"
   "Routes for "Recipe" collection":
     
       1. API (Get All Recipe)
          -> path : "/api/Recipe/"
          -> method: get
       "This api is used to get all the Recipe details from collection with secure manner by help of JWT token"
       2. API (Get user Based Id)
          -> path : "/api/Recipe/:id"
          -> method: get
       "This api is used to get the specific Recipe from collection with secure manner by help of JWT token"
       3. API (Create New Recipe)
           -> path : "/api/Recipe/"
           -> method: post
       "This api is used to create or post a new recipe details in collection"
       4. API (update Recipe Based Id)
          -> path : "/api/Recipe/:id"
          -> method: put
       "This api is used to update a specific recipe based on user email... The email is unique for every user... after jwt verfication this function will happends "
       5. API (Delete Recipe Based Id)
          -> path : "/api/Recipe/:id"
          -> method: delete
       "This api is used to delete the specfic Recipe based on id"
   
   
