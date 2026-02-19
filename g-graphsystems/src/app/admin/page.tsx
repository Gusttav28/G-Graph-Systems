import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Admin } from "../components/adminInfo"

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Admin />
      <Footer />
    </main>
  )
}
