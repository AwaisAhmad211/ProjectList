import React from 'react'
import Card from './Card'

function Foreground() {
  let Data = [
    {
        name: "Calculator",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Age Calculator",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Form Validation",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Snack Bar",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Password Show & Hide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Digital Clock",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Coming Soon Page",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Custom",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Drag & Drop",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Image Gallery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Notes App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Pop Up",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
    {
        name: "Password Strength",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?",
        live: "",
        code: "",
    },
]
  return (
      <div className='relative top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5 justify-center'>
       
      {
        Data.map((item, index) => (
          <Card Data={item} key={index} />
        ))
      }
    </div>
  )
} 

export default Foreground