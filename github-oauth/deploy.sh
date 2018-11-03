#!/bin/bash

case "$1" in
 staging) env=../.env.staging ;;
 production) env=../.env.production ;;
 *) env=false ;;
esac

if [ "$env" = false ] ; then
    echo 'Deploy command must specify a valid deployment enviornment -- ["staging", "production"].'
else
    echo "Deploying to $1..."

    now --dotenv=$env

    deployment=`pbpaste`

    alias=$(grep OAUTH_SERVER_URL $env | cut -d '=' -f2)

    now alias $deployment $alias

    open "$alias/login"
fi


