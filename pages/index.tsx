import type { NextPage } from 'next'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import React from 'react'

const Index: NextPage = () => {
  // const router = useRouter()

  return (
    <>
      <Link href='/plfilwiki/notion'>
        <button>플필 위키</button>
      </Link>
    </>
  )
}

export default Index
