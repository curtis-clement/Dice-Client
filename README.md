## Dice - 5000

This dice app was designed for use by my family members and as a fun side project to practice and solidify some concepts of React and Redux. The game in its basic form consists of two components - a Rules Page and a Game Board - with links to one another. A user can use an input to add a player with an initial score of zero. Once a player is added they are also added to the select dropdown from which you can select a player and then update their score. The dice can be clicked to toggle which dice you want to roll and which you do not and thus any number of dice can be rolled at the players discretion.

An automatic scoring component was intentially left out of this game due to the fact that a player may often choose to accept a lower score in order to re-roll more dice but this is up to the players and their own play style.

### `Tech`

This app uses React to display the data, Redux to manage the state and keep track of players and scoring, and CSS to style the app. Redux was implemented as this template app maybe have more games added to it later and Redux therefore is already in place to handle the larger loads of state that would be required for multiple games or a variety of games such as cards in addition to dice.

### `Future`

As stated this app is set up to handle a larger component and state load having used React and Redux. As such it can be significantly expanded which is something that I would like to do down the road. Things I would like to eventually implement are:
  - A database to allow for a login/signup system
  - Track winners and high scores in the database
  - Additional games that my family plays such as other card and dice games
  
