import { alert, defaultModules, notice, error, info, success } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});



const input = document.getElementById("input");
const wrapper = document.getElementById("wrapper");





const countryName = document.getElementById('countryName');
const capital = document.getElementById('capital');
const population = document.getElementById('population');
const langList = document.getElementById('langList');
const flag = document.getElementById('flag');


let counter = 0



input.addEventListener("input", () => {
  // wrapper.innerHTML = ''
  const inpValue = input.value || '';

  if (inpValue != '') {
    fetch(`https://restcountries.com/v3.1/name/${inpValue}`)
    .then((res) => res.json())
    .then((post) => {
      if (post.length > 1) {

        for (let item of post) {
            counter++
          
            const childItem = document.createElement("p");
            childItem.textContent = item.name.common;
            wrapper.appendChild(childItem);

            document.addEventListener('keydown', () => {
              counter = 0
              // wrapper.removeChild(childItem)
              wrapper.innerHTML = ''



            })



            if (counter >= 10) {

              
              break
                
            }
        }
      }
      if (post.length === 1) {
        countryName.textContent = post[0].name.common
        capital.textContent = post[0].capital
        population.textContent = post[0].population
        flag.src = post[0].flags.svg

        const keyLanguages = Object.keys(post[0].languages)
        langList.innerHTML = ''
        for (let i = 0; i < keyLanguages.length; i++) {
          const lang = document.createElement('li');
          lang.textContent = keyLanguages[i]
          langList.appendChild(lang)
          
        }

        console.log(post[0].languages);
        console.log(Object.keys(post[0].languages));
        
        

      }
      if (post.length > 10) {
        const myNotice = error({
          text: "too many matches found",
        });
      }
      

      console.log(post);



      

    })
    .catch((error) => {
      const myNotice = error({
        text: "not found",
      });
    })
  }
  // fetch(`https://restcountries.com/v3.1/name/${inpValue}`)
  //   .then((res) => res.json())
  //   .then((post) => {
  //     if (post.length > 1) {

  //       for (let item of post) {
  //           counter++
          
  //           const childItem = document.createElement("p");
  //           childItem.textContent = item.name.common;
  //           wrapper.appendChild(childItem);

  //           document.addEventListener('keydown', () => {
  //             counter = 0
  //             // wrapper.removeChild(childItem)
  //             wrapper.innerHTML = ''



  //           })



  //           if (counter >= 10) {

              
  //             break
                
  //           }
  //       }
  //     }
  //     if (post.length === 1) {
  //       countryName.textContent = post[0].name.common
  //       capital.textContent = post[0].capital
  //       population.textContent = post[0].population
  //       flag.src = post[0].flags.svg

  //       const keyLanguages = Object.keys(post[0].languages)
  //       langList.innerHTML = ''
  //       for (let i = 0; i < keyLanguages.length; i++) {
  //         const lang = document.createElement('li');
  //         lang.textContent = keyLanguages[i]
  //         langList.appendChild(lang)
          
  //       }


  //       // for (let language of post[0].languages) {
  //       //   console.log(language);
          
  //       //   const lang = document.createElement('li');
  //       //   lang.textContent = language
  //       //   langList.appendChild(lang)

  //       // }
  //       console.log(post[0].languages);
  //       console.log(Object.keys(post[0].languages));
        
        
        
  //       // const lang = document.createElement('li');
  //       // lang.textContent = post[0].languages.eng
  //       // langList.appendChild(lang)

  //     }
  //     if (post.length > 10) {
  //       const myNotice = error({
  //         text: "too many matches found",
  //       });
  //     }
      

  //     console.log(post);



      

  //   })
  //   .catch((error) => {
  //     const myNotice = error({
  //       text: "not found",
  //     });
  //   })
});