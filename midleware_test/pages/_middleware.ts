import {NextFetchEvent, NextRequest, NextResponse} from 'next/server';

const allowedParams = ['hoge']
export function middleware(req: NextRequest, ev: NextFetchEvent) {

// add header
const headers = new Headers({'x-custom-1': 'value-1'})
headers.set('x-custom-2', 'vakue-2')

const res = new Response(null, {headers})
res.headers.set('x-custom-3', 'value-3')

return new Response(
  'Open the network tab in devtools to see the response headers',
  {
    headers: {
      ...Object.fromEntries(res.headers),
      'x-cunstom-4': 'value-4',
    },
  }
)

//query params filter
  // const url = req.nextUrl
  // let changed = false

  // url.searchParams.forEach((_, key) => {
  //   if (!allowedParams.includes(key)) {
  //     url.searchParams.delete(key)
  //     changed = true
  //   }
  // })

  // if (changed) {
  //   return NextResponse.redirect(url)
  // }
}