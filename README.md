# User Discussion App

This is a user discussion app that allows users to post discussions and interact with each other. It provides APIs to manage users and discussions.

## Project Structure

```
user-discussion-app
├── src
│   ├── models
│   │   ├── user.js
│   │   └── discussion.js
│   ├── controllers
│   │   ├── userController.js
│   │   └── discussionController.js
│   ├── routes
│   │   ├── userRoutes.js
│   │   └── discussionRoutes.js
│   └── index.js
├── package.json
└── README.md
```

## Models

### User

The `User` model represents a user in the app. It has the following properties:

- `name` (string): The name of the user.
- `mobileNo` (string, unique): The mobile number of the user.
- `email` (string, unique): The email address of the user.

### Discussion

The `Discussion` model represents a discussion in the app. It has the following properties:

- `text` (string): The text of the discussion.
- `image` (string): The image associated with the discussion.
- `hashtags` (array): An array of hashtags associated with the discussion.
- `createdOn` (date): The date and time when the discussion was created.

## Controllers

### UserController

The `UserController` handles user-related operations. It provides the following methods:

- `createUser(userData)`: Creates a new user with the provided data.
- `updateUser(userId, userData)`: Updates the user with the specified ID with the provided data.
- `deleteUser(userId)`: Deletes the user with the specified ID.
- `getUser(userId)`: Retrieves the user with the specified ID.
- `searchUsersByName(name)`: Searches for users based on their name.

### DiscussionController

The `DiscussionController` handles discussion-related operations. It provides the following methods:

- `createDiscussion(discussionData)`: Creates a new discussion with the provided data.
- `updateDiscussion(discussionId, discussionData)`: Updates the discussion with the specified ID with the provided data.
- `deleteDiscussion(discussionId)`: Deletes the discussion with the specified ID.
- `getDiscussion(discussionId)`: Retrieves the discussion with the specified ID.
- `getDiscussionsByTags(tags)`: Retrieves a list of discussions based on the provided tags.
- `getDiscussionsByText(text)`: Retrieves a list of discussions based on the provided text.

## Routes

### User Routes

The user routes are defined in the `userRoutes.js` file. It provides the following routes:

- `POST /users`: Creates a new user.
- `PUT /users/:userId`: Updates the user with the specified ID.
- `DELETE /users/:userId`: Deletes the user with the specified ID.
- `GET /users/:userId`: Retrieves the user with the specified ID.
- `GET /users/search?name=:name`: Searches for users based on their name.

### Discussion Routes

The discussion routes are defined in the `discussionRoutes.js` file. It provides the following routes:

- `POST /discussions`: Creates a new discussion.
- `PUT /discussions/:discussionId`: Updates the discussion with the specified ID.
- `DELETE /discussions/:discussionId`: Deletes the discussion with the specified ID.
- `GET /discussions/:discussionId`: Retrieves the discussion with the specified ID.
- `GET /discussions/tags?tags=:tags`: Retrieves a list of discussions based on the provided tags.
- `GET /discussions/search?text=:text`: Retrieves a list of discussions based on the provided text.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the server using `npm start`.
