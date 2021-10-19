
<br />
<p align="center">
  <a href="https://star-war-hyf.netlify.app ">
   <img src="https://socialbrothers.nl/wp-content/themes/social_brothers/assets/SBlogo.svg" alt="Logo" width="300" height="100">
<h2 align="center"> Social Brothers 	:bow_and_arrow: ⚔️</h2>
<p align="center"> :pushpin: Please  Cick on image to find the live demo 	:shield: :rocket:	:rocket: </p>
  </a>
   
       
<details open="open">
  <summary><h3>:point_right: Table of Contents</h3></summary>
  <ol>
    <li>
      <a href="#about-the-project"><h4> :wave: About The App</h4></a> 
      <ul>
        <li>   SocialBrothers Project Based on React Redux for Create Home Screen and Blog Screen Using The API
You can find the API on this location: http://178.62.198.162/api/. 
You need to provide a ‘token’-header with the value of "xxx" for authentication. This means this is not a bearer token or anything. The API has the next endpoints

GET /posts?page={pageNr}
GET /categories
POST /posts (title: string, content: string, category_id: number) </li>
      </ul>
      <ul>
        <li> for each film When clicking on the tittle bar the description is expanded and you see the rest of the data.fetching chainable data for each filem • the name of the character,
         <li> the spieces names that he belongs to and</li>
        <li>the planet name he came from</li>
 <li>the vehicle names he used on the film</li>
 <li>the starship names he used on the film </li>
       <li><h4>the searchbar functinality works only in case of the searching words more than three word to fitch the films data for each character and clicking on film   leads to another rout  </h4></li>
       </li>
      </ul>
:key: How I did it </h4>
       <ul>
          <li>In this Application i used React framwork and i used star wars to fetch the data  </li> 
         <li> I usedbootstrab framwork to build the cards and the design   </li>
         <li>Using also React hooks <h4>(Usecontext - useEffct - useState )</h4> and making custom UseFetch hook for fetching Data, and second hook with promissAll to return mulifetching  </li>
      </ul></li>
      <li>
     <h4> :facepunch:
:fist_oncoming:
:punch: what I faced </h4>
       <ul>
        <li>How can i get data from chainable Api at the same time  </li> 
          <li> How can i pass the data throw all routes so this is a small aplication so i used react hook called ( Usecontext )to pass data throw all tree of application  </li> 
         <li>Use effect hook with event to update the data from api  </li>
         <li>Handling the erros for the requests and response for api  </li>
      </ul>
        
        
</li>
    
  </ol>
</details>




<img width="972" alt="Screen Shot 2021-08-27 at 11 11 41 AM" src="https://user-images.githubusercontent.com/72751605/131103849-610099bf-7551-4cd1-805c-6ef2fdff4f2a.png">




 <img width="983" alt="Screen Shot 2021-08-27 at 11 17 22 AM" src="https://user-images.githubusercontent.com/72751605/131104234-587e07ac-9c30-4cb9-bc54-e584786895bc.png">

 .

 <img width="983" alt="Screen Shot 2021-08-27 at 11 12 17 AM" src="https://user-images.githubusercontent.com/72751605/131103886-8ca8ac1a-32ff-42a4-9104-6e8ca6159c76.png">

