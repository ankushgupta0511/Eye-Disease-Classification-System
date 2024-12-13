<!-- 
this page make in E-health reccomendation system and In it have two modul 1st system based find deasease and then disease based show about disease and show diet about disease and workout also and show also medication etc and second modul find ["cataract", "diabetic_retinopathy", "glaucoma", "normal"] this diease related to eyes give me with animation use your images related my health modul

 -->

# Note :- importand command 
```
// this use for delployment
npm run build

// this command fire after firing 'npm run build' command 
npm start 

// fire this command when you have changes in your code or project code
npm run dev
```


# Information related to docker
1)
```
// start react app command
npm start
```
1

2)
// create Docker file in medicinerecommendationsystem folder  and write command in Docker file
```
FROM  node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
```


3)
// run this command in vs code terminal  and create images (healthrecommendation-firstminorproject) in bash terminal
```
docker build -t healthrecommendation-firstminorproject .
```

3)
// check you created images
```
docker images
```


4)
```
// images will be run on port 3000 inside docker  but not run in our system
docker run -it healthrecommendation-firstminorproject
```


5)
// start nextjs app from this command and now also run in our system 
```
docker run -p 3000:3000 healthrecommendation-firstminorproject
```

5)
// you will enter in inside images
```
docker exec -it  < id of container >  bash
ls
```


6)
// install nodmon 



7)
//
```
Docker build .
```





# show error
```
lack of concentration
```


# Tailwind auto build component

```
https://readymadeui.com/tailwind-components/cards
```

## import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";

# install below liberary for above features

```
npm install @emotion/react @emotion/styled
npm install @mui/material@5.x @emotion/react@11.x @emotion/styled@11.x


npm cache clean --force
rm -rf node_modules
npm install

```

# Use Pop pop window template in react

```
npm install reactstrap
npm install bootstrap


// import this in index.js
import 'bootstrap/dist/css/bootstrap.css';


```

# tailwind css apply

```
//  source link :-  https://tailwindcss.com/docs/guides/create-react-app


1)
npm install -D tailwindcss
npx tailwindcss init


2)
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



3)
@tailwind base;
@tailwind components;
@tailwind utilities;


// import this in index.js file
4)
import './index.css'


5)
npm run start

```

# install reac-router dom

```
npm install react-router-dom
```

# install this

```
npm install @mui/material
```


# install this for 3D backround
```
npm install three @react-three/fiber @react-three/drei
```



# install react-icons
```
npm install react-icons

```















