npx -p @angular/cli ng new angular-workspace --no-create-application
cd angular-workspace

npm i

ng generate library mic-otp


ng build --project mic-otp

cd dist/mic-otp
npm publish


## Troubleshooting

✖ Compiling with Angular sources in Ivy partial compilation mode.
Initiated Worker with invalid NODE_OPTIONS env variable: --openssl-legacy-provider is not allowed in NODE_OPTIONS

# Windows
set NODE_OPTIONS=