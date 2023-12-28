import ProfileNavLinks from '@/app/(Components)/ProfileNavLinks'



export default function RootLayout({ children }) {
  return (
      <>
        <div className="grid sm:grid-rows-2 md:grid-cols-7 m-2 h-screen">
          <ProfileNavLinks className="col-span-1 "/>
          <div className="col-span-6 md:border-l-2 border-l-slate-800 p-2">
            {children}
          </div>
        </div>
      </>
  )
}
