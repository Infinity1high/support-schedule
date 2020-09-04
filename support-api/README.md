## Support schedule app


## Testing

`yarn test`

The test command will setup a mongodb test server, connect to it, run your tests and the server will go through a teardown process to clean up all remaining listners.

## Development

`yarn dev`

The run dev command will start the server and listen on the configured port. The port can be configured in ./src/index.ts
