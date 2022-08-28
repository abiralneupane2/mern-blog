# mern-blog

## Requirements
###### Docker engine
###### docker-compose
##
###### Start the app using command.
`docker-compose up`

###### Three containers should be open when you run
`docker ps`
##
###### For production use the file `docker-compose.production.yml`.

###### Set the environment variables found in `backend/.env.development` or `backend/.env.production`.

###### Mongodb runs the script `/mongo/*.js` in first build. Make sure a mongodb user is created and credentials are matched with env file.

###### Backend is hosted in port 5000, and frontend in port 3000.


