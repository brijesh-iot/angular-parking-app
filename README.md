# Smart Parking Frontend Application

Smart Parking frontend application for the end users and admin.
- Admin can register and view Parking sites.
- End users can view available parkings based on the current location

### APIs ( src -> environments -> environments.ts )

- alertsApiServer: https://oxtjw6u0ke.execute-api.us-east-1.amazonaws.com/prod
- parkingMasterApiServer: https://vos7443u2h.execute-api.us-east-1.amazonaws.com/prod/parkingmaster/
- parkingApiServer: https://07wv41pzb4.execute-api.us-east-1.amazonaws.com/prod

## Setup Authentication with existing setup

- Terraform/CloudFormation template will build & deploy the application on S3/CloudFront
- But we still need to setup Congnito using Amplify ( In future it will be automated )
  - amplify init -y
  - amplify push -y

## New Amplify Auth Configuration
### Build Authentication 

```
amplify init
amplify add auth
amplify add storage
amplify push
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


### Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
- https://medium.com/@michaellabieniec/part-1-building-a-progressive-web-application-pwa-with-angular-material-and-aws-amplify-5c741c957259
