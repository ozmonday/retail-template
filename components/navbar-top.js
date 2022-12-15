import Link from "next/link"

export default function NavbarTop({props}) {
  return (
    <div className="hidden md:flex flex-row justify-center p-1.5" >
      <div className="px-1.5">
          { false ? <Link href="/dashboard/profile" >PROFILE</Link> : <Link href="/auth/signin" >LOGIN/REGISTER</Link>}
      </div>
      <div className="px-1.5">
        <Link href="/dashboard/wishlist">WISHLIST</Link>
      </div>
      <div className="px-1.5">
          <Link href="/contacts">CUSTOMER CARE</Link>
      </div>
    </div>
  )
}