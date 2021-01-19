# HelpDesk PERN STACK

HelpDesk PERN STACK is a web app for customer service.
The customers can send messages to administrators.

Also, the administrator can view all the customers' messages and respond to them.

This project is supposed to be very simple, minimalistic, and barebone. It has just enough code to show the basics of PostgreSQL, Express, React, and node(PERN Stack).

## Features

1. Admin users can log in.

1. Admin users can view all requests.

1. Admin users can respond to all requests.

1. Admin users can delete a request.

1. A client user is going to be assigned a ticket code when asking for help.

1. A client user can come back with his ticket code.

1. A client user can only view his request.

1. Client users can communicate with admin users.

1. Mobile friendly. The sidebar becomes a burger menu on small screens. A modal will show up once the user clicks the burger menu.

## Installation

1. Make sure your PostgreSQL is open and running.

1. Go into server/.env and update your PostgreSQL username, password, host, and port number.

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
