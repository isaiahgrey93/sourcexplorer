# Github OAuth Server

Uses `micro-github`, a pre-configured OAuth server for Github.

### Running

To run locally run:

```
yarn start
```

To restart on changes to the server run:

```
yarn dev
```

### Deployment

To deploy run:

```
yarn deploy:{env}
```

Possible deployment enviornments:

- `staging`
- `production`

### Enviornment Configuration

Consumes parent directory `env`. Manage in the parent folder `.env`, `.env.staging` and `env.production` files.
