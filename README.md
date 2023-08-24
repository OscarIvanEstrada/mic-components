npx -p @angular/cli ng new angular-workspace --no-create-application
cd angular-workspace
npx -p @angular/cli ng generate library component-library

ng generate library mic-otp


ng build --project mic-otp

cd dist/mic-otp
npm publish