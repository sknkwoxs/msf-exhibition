# msf exhibition

```
# .env
PUBLIC_URL="/morethanapicture"
REACT_APP_JS_KEY="..."

# development

$ npm i
$ npm start

# build

$ npm run build
$ scp -r build sknk-prod-msf:~/
$ ssh sknk-prod-msf "rm -rf ~/www/morethanapicture && mv build ./www/morethanapicture"
```