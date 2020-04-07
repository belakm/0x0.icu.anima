# why alpine? Alpine Linux is a security-oriented, lightweight 
# Linux distribution. how small? how about 5Mb?
# in comparison ubuntu 18.04 is about 1.8Gb
FROM node:alpine

# set working directory
# this is the working folder in the container 
# from which the app will be running from
WORKDIR /0x0.icu.anima

# copy package.json and yarn.lock
# package.json to install the packages from 
# and yarn.lock for a package called chokidar 
# which is used for hot reloading
COPY . .

# install and cache dependencies
# n/b: these dependencies are installed inside docker
# it runs the command "yarn" which is an equivalent of "yarn add"
RUN yarn

# since we are using local files and not copying them to docker
# add the container's node_modules folder to docker's $PATH
# so that it can find and watch it's dependencies
# ENV PATH /0x0.icu.anima/node_modules/.bin:$PATH

# start the container
CMD ["yarn", "start"]