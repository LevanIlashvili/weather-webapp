
## Weather WebApp

This frontend application was created to work with [Weather API](https://github.com/LevanIlashvili/weather-api).

### Setup 

#### Installing Dependencies
In the root directory run 
````
yarn install
````

#### Setting up environment
Project depends on only one environment variable - API url where Weather API is running. You can point React application to API by setting following environment variable: `REACT_APP_API_URL` 

Example:
````
REACT_APP_API_URL=https://weather-api-evsqw.ondigitalocean.app
````
will point it to test deployment

### Running

After setting up environment variable and installing dependencies, you can run the project by going to root dir and running 
````
yarn start
````