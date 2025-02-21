import * as React from 'react'

import { NotionPage } from '@/components/Notion/components/NotionPage'
import { domain } from '@/components/Notion/lib/config'
import { resolveNotionPage } from '@/components/Notion/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}
