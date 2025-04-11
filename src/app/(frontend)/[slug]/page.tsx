import Main from '@/app/(frontend)/main/page'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { draftMode } from 'next/headers'
import React from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import PageClient from './page.client'

type PageProps = {
  params: {
    slug?: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug = 'home' } = params
  const { isEnabled: draft } = await draftMode()
  const url = '/' + slug

  if (slug === 'home') {
    return <Main /> // Render your home component
  }

  const page = homeStatic

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}
