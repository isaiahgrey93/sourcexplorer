#!/bin/bash

case "$1" in
 staging) env=.env.staging ;;
 production) env=.env.production ;;
 *) env=false ;;
esac

if [ "$env" = false ] ; then
    echo 'Deploy command must specify a valid deployment enviornment -- ["staging", "production"].'
else
    echo "Deploying to $1..."

    cd github-oauth

    now --public --dotenv=../$env

    deployment=`pbpaste`

    alias=$(grep OAUTH_SERVER_URL ../$env | cut -d '=' -f2)

    now alias $deployment $alias

    cd ..

    rm -rf ./build

    yarn build

    cd build


    client=$(grep CLIENT_URL ../$env | cut -d '=' -f2)

    cp index.html 200.html
    cp index.html 404.html

    echo | surge --domain $client

    open "$alias/login"
fi


