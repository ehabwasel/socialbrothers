
<br />
<p align="center">
  <a href="https://socialbrothersehabwasel.netlify.app/ ">
   <img src="https://socialbrothers.nl/wp-content/themes/social_brothers/assets/SBlogo.svg" alt="Logo" width="300" height="100">
<h2 align="center"> Social Brothers 	:bow_and_arrow: ⚔️</h2>
<p align="center"> :pushpin: Please  Cick :shield: :rocket:	:rocket: </p>
    <p align="center">  <code><img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"></code>
    <code><img width="15%" src="https://github.com/prplx/svg-logos/blob/master/svg/redux.svg"></code>
  <code><img width="15%" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"></code></p>
  </a>
   
       
<details open="open">
  <summary><h3>:point_right: Table of Contents</h3></summary>
  <ol>
    <li>
      <a href="#about-the-project"><h4> :wave: About The App</h4></a> 
      <ul>
        <li>   SocialBrothers Project Based on React Redux for Create Home Screen and Blog Screen Using The API
You can find the API on this location: http://178.62.198.162/api/. 


<p>GET /posts?page={pageNr}</p>
<p>GET /categories</p>
          <p>POST /posts (title: string, content: string, category_id: number)</p>
           <p>you can get the posts according to the page number  also Create new post by using the form </p>
        </li>
         </ul>
      
 ### Structure 
``` 
├── README.md
├── package-lock.json
├── package.json
├── public                                  =====>       ##static files 
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js                                     
    ├── actions                             =====>      ##REdux Actions
    │   ├── categoryActions.js              =====>       Get categoryActions
    │   └── postActions.js                  =====>       Get/Post postActions
    ├── component
    │   ├── BlogCard.js
    │   ├── Footer.js
    │   ├── Form.js
    │   ├── Header.js                       =====>       ## App components
    │   ├── Loader.js
    │   ├── Message.js
    │   └── Pagination.js
    ├── constants                           =====>       ## All REdux constants                   
    │   └── constants.js                     
    ├── img                                 =====>       ## Header Img
    │   ├── SBlogo.svg
    │   └── background.png
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reducers                             =====>      ##REdux reducers
    │   ├── categoryReducers.js
    │   └── postReducers.js
    ├── reportWebVitals.js
    ├── screens                              =====>     ## Main  screens
    │   ├── BlogScreen.js
    │   └── HomeScreen.js     
    ├── setupTests.js
    └── store.js                             =====>     ##  REdux store
```     
<h2 align="center" >	:warning: 🔐 	🔐 Important :key: Steps to run the App</h2>
      <ul>
                 <h3 style="color: green"> Because of API Security Restrictions we can't run the App on the browser until cancel the browser securty wall </h3>
       <table>
  <tr >
          <td valign="top">    <img width="600" height="200" alt="Screen Shot 2021-10-19 at 11 11 10 PM" src="https://user-images.githubusercontent.com/72751605/137991210-22cdd277-2546-4db4-9f7c-675b03bdf4fa.png" /></td>
<td valign="top"><img width="500" alt="Screen Shot 2021-10-19 at 11 21 59 PM" src="https://user-images.githubusercontent.com/72751605/137992518-86109c6c-6254-4a99-b95b-a06c3170da06.png"></td>

  </tr>
</table>
 <h2> :point_right:	:footprints: To Solve this problem follow the Steps</h2>
        


https://user-images.githubusercontent.com/72751605/138109734-56cc412a-91e4-466f-83b3-67746b4a4f55.mp4


 
        
 <ul>
   <li> First in  the top left of the page click on the lock </li><li>go to the site settings</li><li>scroll down until the Insecure content Change it fron block to Allow them Reload the page</li></ul>
     <table>
  <tr >
          <td valign="top"> <img width="338" alt="Screen Shot 2021-10-19 at 11 33 58 PM" src="https://user-images.githubusercontent.com/72751605/137995164-91ce508d-926a-4766-a446-a49333a391f0.png">

  </td>

<td valign="top"> <img width="334" alt="Screen Shot 2021-10-19 at 11 34 17 PM" src="https://user-images.githubusercontent.com/72751605/137995289-7b9e652c-a405-4b9b-8561-ae53cf43be1e.png"></td>
    <td valign="top"> 
      <img width="625"  height="180" alt="Screen Shot 2021-10-19 at 11 47 42 PM" src="https://user-images.githubusercontent.com/72751605/137995601-d6fdab50-fe85-4460-9dfe-6cc186bdbfdc.png">
    </td>

<td valign="top"> 
     <img width="526"  height="180"  alt="Screen Shot 2021-10-19 at 11 35 10 PM" src="https://user-images.githubusercontent.com/72751605/137996005-f3c0ab1b-ea09-44dd-baa3-2cfbfb481ef8.png"> 
    </td>
  </tr>
</table>
       <h4> :slightly_smiling_face::slightly_smiling_face: Finally you can Run the App Correctly </h4>
       </li>
 

   https://user-images.githubusercontent.com/72751605/138108979-5ba14db5-5f8b-45ca-b610-09f778f1dabe.mp4  

  </ol>
</details>






