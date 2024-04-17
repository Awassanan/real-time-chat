# Real-Time Web Chat with Socket.io and Node.js
This project is part of the "Dev init#2 project by borntoDev", demonstrating how to use socket.io with Node.js and Express to create a simple real-time web chat application.

## Features
- **User Authentication:** Users are required to log in with a username (no password required) to participate in the chat. They can either click the login button or press Enter after entering their username.
- **Default Username:** If no username is provided, the user will be assigned the name "Anonymous".
- **Real-Time Chat:** The chat messages are broadcast in real-time to all connected users within the same socket, enabling instant communication.
- **No Chat History:** Newcomers joining the chat will not be able to see previous messages. Additionally, chat history is not stored, ensuring that messages are only available during the current session.

## Installation
To run this project locally, follow these steps:

1. Clone this repository to your local machine:

``` 
git clone https://github.com/Awassanan/real-time-chat.git
```

2. Navigate into the project directory:

``` 
cd real-time-chat
```

3. Install the project dependencies using npm (make sure you have Node.js and npm installed on your computer):

``` 
npm install
```

4. Run the application on localhost, using Node.js:

``` 
node index.js
```

5. Open a web browser and go to http://localhost:3000 to access the chat application.

## Dependencies
This project uses Bootstrap to enhance the user interface. Make sure the required dependencies are installed by running:
npm install bootstrap@5.3.3

## Usage
1. Launch the application by running node index.js.
2. Open your web browser and navigate to http://localhost:3000.
3. Enter a username and either click the "Login" button or press Enter to start chatting in real-time.
