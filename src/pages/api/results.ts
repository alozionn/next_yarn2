import type { NextApiRequest, NextApiResponse } from 'next'
import { chromium } from 'playwright'

const element = `[data-component-type=s-result-info-bar]>div>span span`

const AMAZON_LINK =
  'https://www.amazon.co.uk/s?i=computers&bbn=3581866031&rh=n%3A3581866031%2Cn%3A340831031%2Cn%3A428655031%2Cn%3A430500031&s=price-desc-rank&dc&pf_rd_i=3581866031&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_p=33f2af6d-4fab-484e-905c-5d2712eb9352&pf_rd_r=WJTTYAA11VAMT4VHXYFZ&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1634228104&rnid=3581866031&ref=sr_st_price-desc-rank'

const AMAZON_LINK2 =
  'https://www.amazon.co.uk/s?i=videogames&bbn=3581866031&rh=n%3A3581866031%2Cn%3A300703%2Cn%3A13978643031&s=price-asc-rank&dc&fst=as%3Aoff&qid=1636938262&ref=sr_ex_n_1'
async function main() {
  const browser = await chromium.launch({
    headless: true, // setting this to true will not run the UI
  })

  const page = await browser.newPage()
  await page.goto(AMAZON_LINK2)
  const results = await page.$eval(element, (data) => {
    const htmlData = data as HTMLElement
    const resultsNumber = htmlData.innerText.split('of')[1].split('results')[0]
    return resultsNumber
  })
  console.log(results)

  //   await page.waitForTimeout(10000); // wait for 10 seconds
  await browser.close()
}

main()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const browser = await chromium.launch
  res.status(200).json({ name: 'John Doe' })
}
