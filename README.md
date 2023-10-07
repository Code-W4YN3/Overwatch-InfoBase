# Overwatch-InfoBase
#### This is an Overwatch 2 data site created using ReactJS, Python-Flask and Render
#### By Wayne Otido

## Description
This is a web application that gives users access to information about the hit game Overwatch2 by Blizzard Entertainment

![Overwatch-InfoBase](/images/display.png)

### View live site
Click the link provided below to access the site in your browser

https://overwatch-infobase.onrender.com

# How to Run Locally
### Setup/Installation Requirements
To run this app locally, you need a PC with:
* Access to the internet

### Installation Process
  1. Clone this repository using
    ```bash
      git clone git@github.com:Code-W4YN3/Overwatch-InfoBase.git
    ```
  2. Navigate into the project folder.
    ```bash
      cd Overwatch-InfoBase
    ```
  3. Run this command to install project dependencies:
    ```
      pipenv install
    ```
  4. Navigate into the client folder using:
    ```
      cd client
    ```
  5. Create a build using:
    ```
      npm run build
    ```
  6. Run the app on the browser using:
    ```
      gunicorn --chdir server app:app
    ```

## Database Domain Model:

![Database domain image](/images/domain.png)

## User Story

As a user, I should be able to:
1. Sign in/ Sign out of my account
1. View heroes and their respective abilities
2. View abilities, their descriptions and their icons in hero pages
3. View roles, their description and their respective heroes
4. View game modes with their respective maps
6. Gain access to game guide links upon login
7. Save a game guide to my saves

## Technologies Used

* ReactJS
* Python-Flask
* Postgresql



