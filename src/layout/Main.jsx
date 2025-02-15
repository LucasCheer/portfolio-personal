import React from 'react'
import SectionABout from '../sections/SectionABout'
import SectionContact from '../sections/SectionContac'
import SectionProjects from '../sections/SectionProjects'

export default function Main() {
  return (
    <main>
      <SectionABout />
      <SectionProjects />
      <SectionContact />
    </main>
  )
}
