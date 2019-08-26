# Population Management System

its an application that lists locations and the total number of residents in each location broken down by gender.

The system has API that enables a user:

1. Create a new location containing data on the total number of male and female residents within it.

2. List all available locations and their population summaries (total male residents, total female residents, sum total residents)

3. Update data for a specific locations

4. Delete a specified location

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/docs`.

## Running unit tests

you need to first install `mongodb` and provide the `database uri` to your test database
add the database uri in `app/config/database.config.js` file
an example of the database uri is `mongodb://localhost:27017/population-test`

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/).

| **EndPoint**            | **Functionality**                  |
| ----------------------- | ---------------------------------- |
| GET `/location`         | Fetch all location population data |
| GET `/location/{id}`    | Fetch a single location data       |
| PUT `/location/{id}`    | Update an existing location data   |
| DELETE `/location/{id}` | Delete a single location data      |
| POST `/location`        | Create new location data           |

## Deployment

[Click here to use the app](https://popu-mgt.herokuapp.com/docs/)
