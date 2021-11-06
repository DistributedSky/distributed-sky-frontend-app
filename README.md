# distributed-sky-frontend-app
Frontend for Distributed Sky parachain functions

## Overview
This DApp allows to connect to distributed-sky-subtrate blockchain node, and perform some base functions of Distributed Sky project:

### ADMIN role:

- assign REGISTRAR role to accounts

### REGISTRAR role:

- registration of PILOT role accounts(+ upload PILOT PNG license file into IPFS + save hash of license in DS blockchain)
- setting non-overlapping flight zones in DS blockchain
- setting non-overlapping red areas in DS blockchain

### PILOT role:

- registration of UAVs
- setting flight route (two waypoints, timestamp, ETA with onchain(!) check of route, non-overlapping red areas)

## Installation:

### In order to make nginx work properly:

Place file "dsky" to /etc/nginx/nginx.conf, and set a path to the /dist directory

### To start nginx on 5052 port:

```
yarn install
yarn build 
yarn start
```