<h1 align="center">💞&nbsp; Welcome to Overrated &nbsp;💞</h1>

<p align="center">Overrated is a dating web application that allows a user to match with their potential soul mate based on gender preference and leave a rating for another user after matching </p>
<hr>

## Table of Contents 
- [Technologies Used](#technologies-used)
- [Intended Market](#intended-market)
- [Design](#design)
    - [Team Structure](#team)
    - [Service Microservice](#service)
    - [Sales Microservice](#sale)
- [Installation/Setup](#installationsetup)
- [Application Overview](#application-overview)
- [Authors](#authors)

<hr>

## Technologies Used 
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<br>
<hr>

## Intended market 
* Adults over the age of 18 residing in the USA
* Adults who want to make new connections
* People who are critical of others
<br>
<hr>

## Functionality 
* Profile creation and updating 
* Viewing potential 
* Viewing a list of profiles that fit user preferences 
* The ability to mark interest in a profile and if both profiles have marked interest then they have made a connection
* A rating and review feature that will be available after a first meeting 
* Ability to upload images and fill out a description of self profile
* Choose from a list of interests and hobbies
* Use websockets to create a live chat feature
* GIPHY and Weather api
* A section where someone can book/reserve a date and have the weather shown for the time and location 
*** possible names: Plan a Date, Meet Up, Experiences, Get to Know Each Other 



possible star ratings (0/5 scale)(5 best - 0 ugh)
    * Creepiness
    * Communcation
    * Catishing? (possibly the most toxic thing on here?)
    * Date Planning Ability 
    *

## Design
#### [API design](docs/apis.md)
#### [Data model](docs/data-model.md)
#### [GHI](docs/ghi.md)
#### [Integrations](docs/integrations.md)
<br>
<hr>

## Installation/Setup
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Git fork and clone this repo and navigate into the ```/overrated``` directory
    ```sh
    cd overrated
    ```
3. Create the docker volumes
    ```sh
    docker volume create overrated
    docker volume create pg-admin
    ```
4. Docker compose build then up
    ```sh
    docker compose build 
    docker compose up
    ```
<br>

Access the application on [http://localhost:3000](http://localhost:3000) <br>
FastAPI Swagger UI access on [http://localhost:8000/docs](http://localhost:8000/docs)
<br>
<hr>

## Authors
👤 [**Yesenia**](https://www.yeseniar.dev) <br>
👤 [**Andrew**](https://github.com/theandrewliu) <br>
👤 [**Corey**](https://gitlab.com/corey.daniel.edwards)<br>
👤 [**Jeremy**](https://gitlab.com/j.max.mao) <br>
