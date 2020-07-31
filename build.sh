rm -rf ./elephantstock-app/dist
rm -rf ./backend/app

cd elephantstock-app
ng build --prod=true
mv ./dist/* ../backend/
rm -rf ./dist
cd ../backend
git add .
git commit -m "Deploy on evennode"
git push evenode master --force
