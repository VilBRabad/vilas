"use client";

import About from '@/components/about'
import Experience from '@/components/experience'
import Home from '@/components/home'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

function page() {
  return (
    <>
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <About />   
    </>
  )
}

export default page