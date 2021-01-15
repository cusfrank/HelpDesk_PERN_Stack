# HelpDesk PERN STACK

HelpDesk PERN STACK is a web app for customers asking for help.
The customers can send requests.
And the agent is able to view all the customers' requests and respond them.

## Features

1. Admin users can login.
1. Admin users can view all requests.
1. Admin users can respond all requests.
1. Admin users can delete a request.
1. A client user is going to be assigned a ticket code when asking for help.
1. A client user can come back with his ticket code.
1. A client user can only view his own request.
1. Client users are able to communicate with the admin users.

## Installation

1. Make sure you postgres database is open and running properly.

1. Go into server/db.js and update your postgres username, password, host, and port number.

1. Run the query inside server/database.sql.

1. Type the following commands inside your terminal.

```bash
cd server
yarn install
nodemon index

cd client
yarn install
yarn start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

UNLICENSED
