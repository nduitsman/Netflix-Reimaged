# Project Three - Netflix Reimagined

![Netflix-Reimagined-Demo-Compressed](https://user-images.githubusercontent.com/108159910/191875985-c0817a66-5cce-4df3-aa99-59dc30b49ad9.gif)

Version 0.1  
Prepared by Brendon Van | Nick Duitsman | Sean Buchas

General Assembly SEIR-725ec | Unit 3 Project
September 15 2022

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b33aefe-a449-4fba-9d5d-0b96db0b064c/deploy-status)](https://app.netlify.com/sites/legendary-sunburst-8800a7/deploys)
https://netflix-reimagined.netlify.app/


## Project Description
Netflix Clone but with UI/UX inspired by Jurre Houtkamp & Serge Strokov. 
Utilized a MERN stack to build a full stack application in 1 week with de-coupled React frontend and Express backend.

---
# Wireframes
## User Flow Diagram
![UserFlowDiagram](https://user-images.githubusercontent.com/108159910/190538937-444cd8c5-230b-4445-a748-1921bd77f812.png)

## Home Page
![Wireframe-HomePage](https://user-images.githubusercontent.com/108159910/190538965-3769a3d5-b08b-4c1f-b6db-921688204cae.png)
![Wireframe-HomePage-TitleClicked](https://user-images.githubusercontent.com/108159910/190538977-643fa071-8de3-4816-9dcb-d713fbe57074.png)

## Movie Details
![Wireframe-MovieDetails](https://user-images.githubusercontent.com/108159910/190538997-d5458507-099e-4594-9988-70596c1f727a.png)

# MVP User Stories

***MVP User Stories***

- *As a user, I want to see multiple lists of movies on the home page, that are categorized in different types. *
- *As a user, I want to see the movie background preview the trailer of the movie I am hovering on with either my mouse or keyboard select. *
- *As a user, I want to be able to add and remove movies to my Watch List to watch for later. *
- *As a user, I want to be able to update my display name and profile picture and delete my account. *

***Post MVP Stretch Goals***

- *As a user, I can drag and drop my picture to upload as my profile picture *
- *As a user, when I open up the movie details the screen zooms into the currently played background preview. *
- *As a user, when I open up the website on my phone the design will be responsive and show up properly for my phone size. *

---
# ERDs
![Netflix-Reimagined-ERD](https://user-images.githubusercontent.com/108159910/191883897-e21742db-bfff-4841-8f91-e4ebd173cc42.png)

---
# API

[The Movie DB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)
[Open Movie DB API Documentation](http://www.omdbapi.com/)
[Youtube API Documentation](https://developers.google.com/youtube/v3)

## Now Playing Response

```json
{
  "adult": false,
  "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
  "id": 616037,
  "title": "Thor: Love and Thunder",
  "original_language": "en",
  "original_title": "Thor: Love and Thunder",
  "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
  "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  "media_type": "movie",
  "genre_ids": [
  14,
  28,
  35
  ],
  "popularity": 3643.289,
  "release_date": "2022-07-06",
  "video": false,
  "vote_average": 6.798,
  "vote_count": 3274
}
```

## Videos Response

```json
{
  "id": 431693,
  "results": [
    {
      "id": "5bde0d090e0a26058d016b4c",
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "key": "LSSGHvzMY60",
      "name": "Spies in Disguise | Official Trailer [HD] | Blue Sky Studios",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer"
    }
  ]
}
```

# Component Hierarchy

![Component-Hierarchy](https://user-images.githubusercontent.com/108159910/190547438-98d8cded-8777-42a5-af31-a24c581d5f1a.png)


# Contributors

1. Brendon Van [Github Profile](https://github.com/brendonvan)
2. Nick Duitsman [Github Profile](https://github.com/nduitsman)
3. Sean Buchas [Github Profile](https://github.com/SeanBu)
