rm -rf ./dist
ng build --prod=true
mv ./dist/* ../backend/
rm -rf ./dist
