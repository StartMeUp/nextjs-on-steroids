import Link from 'next/link'

const notFound = () => (
  <div className="flex h-screen flex-col place-content-center place-items-center">
    <h1>Page not Found</h1>
    <p>
      Go the <Link href="/">Home page</Link>
    </p>
  </div>
)

export default notFound
