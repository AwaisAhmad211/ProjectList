import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
  const Data = [
    {
        name: "Quiz App",
        desc: "Challenge yourself with our interactive quizzes! Learn, grow, and have fun today",
        live: "https://github.com/AwaisAhmad211/Quiz-App",
        code: "https://awaisahmad211.github.io/Quiz-App/",
      },
      {
          name: "Form Validation",
          desc: "Validate user input with confidence! Robust, customizable, and seamless integration",
          live: "https://awaisahmad211.github.io/formValidation/",
          code: "https://github.com/AwaisAhmad211/formValidation",
        },
        {
            name: "Product Page",
            desc: "Showcase products with style! Engaging, responsive, and conversion-driven designs",
            live: "https://awaisahmad211.github.io/Product-Page/",
            code: "https://github.com/AwaisAhmad211/Product-Page",
        },
        {
            name: "Notes App",
            desc: "Organize your thoughts effortlessly! Secure, synced, and search-enabled notes app",
            live: "https://awaisahmad211.github.io/Notes-App/",
            code: "https://github.com/AwaisAhmad211/Notes-App",
        },
        {
            name: "Calculator",
            desc: "Solve problems with confidence! Reliable, comprehensive, and user-friendly calculator app",
            live: "https://awaisahmad211.github.io/Caluclator/",
            code: "https://github.com/AwaisAhmad211/Caluclator",
        },
        {
            name: "Snack Bar",
        desc: "Track progress with a twist! Animated, customizable, and engaging snake bar",
        live: "https://awaisahmad211.github.io/Snake-Bar/",
        code: "https://github.com/AwaisAhmad211/Snake-Bar",
    },
    {
        name: "Drag & Drop",
        desc: "Move items with a flourish! Advanced, flexible, and visually appealing drag and drop solution",
        live: "https://awaisahmad211.github.io/Drag---Drop/",
        code: "https://github.com/AwaisAhmad211/Drag---Drop",
    },
    {
        name: "Image Gallery",
        desc: "Organize and showcase with precision! Advanced, flexible, and visually stunning image gallery",
        live: "https://awaisahmad211.github.io/Image-Gallery/",
        code: "https://github.com/AwaisAhmad211/Image-Gallery",
    },
    {
        name: "To-Do App",
        desc: "Get things done with ease! Simple, intuitive, and powerful task management",
        live: "https://awaisahmad211.github.io/To-Do-List-App/",
        code: "https://github.com/AwaisAhmad211/To-Do-List-App",
    },
    {
        name: "Digital Clock",
        desc: "Tell time with precision and style! Modern, customizable, and highly visible digital clock",
        live: "https://awaisahmad211.github.io/Digital-Clock/",
        code: "https://github.com/AwaisAhmad211/Digital-Clock",
    },
    {
        name: "Age Calculator",
        desc: "Calculate age with ease and accuracy! Simple, fast, and reliable age calculator.",
        live: "https://awaisahmad211.github.io/ageCalculator/",
        code: "https://github.com/AwaisAhmad211/ageCalculator",
    },
    {
        name: "Password Show & Hide",
        desc: "Reveal or conceal passwords with ease! Secure, intuitive, and user-friendly password toggle",
        live: "https://awaisahmad211.github.io/Password-Toggle/",
        code: "https://github.com/AwaisAhmad211/Password-Toggle",
    },
    {
        name: "Coming Soon Page",
        desc: "Get ready for something big! Simple, intuitive, and highly anticipated coming soon page",
        live: "https://awaisahmad211.github.io/Coming-Soon-Page/",
        code: "https://github.com/AwaisAhmad211/Coming-Soon-Page",
    },
    {
        name: "Menu Selcet ",
        desc: "Choose your option with ease! Intuitive, responsive, and user-friendly menu selection",
        live: "https://awaisahmad211.github.io/Cutom-Menu-select/",
        code: "https://github.com/AwaisAhmad211/Cutom-Menu-select",
    },
    {
        name: "Pop Up",
        desc: "Pop up with a purpose! Informative, interactive, and highly engaging pop-up experience",
        live: "https://awaisahmad211.github.io/PoP-Up/",
        code: "https://github.com/AwaisAhmad211/PoP-Up",
    },
    {
        name: "Password Strength",
        desc: "Gauge password strength in seconds! Fast, intuitive, and user-friendly password evaluator",
        live: "https://awaisahmad211.github.io/Password-Srength/",
        code: "https://github.com/AwaisAhmad211/Password-Srength",
    },
];
  return (
      <div ref={ref} className='relative top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5 justify-center'>
       
      {
        Data.map((item, index) => (
          <Card Data={item} key={index} reference={ref} />
        ))
      }
    </div>
  )
} 

export default Foreground