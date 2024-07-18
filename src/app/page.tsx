import { Suspense } from "react"
import ItemOne from "./components/ItemOne"
export default function Home() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <ItemOne />
      </Suspense>
      <div className="bg-white min-h-screen">SSR page</div>
    </>
  )
}
