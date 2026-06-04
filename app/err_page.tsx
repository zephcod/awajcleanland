
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/app/components/ui/button';

const AuthErrPage = () => {
  return (
    <div className="max-w-lg relative my-auto mx-auto items-center p-6 pt-20 md:pt-0">
        <h2>Something went wrong!</h2><br/>
        <Link href="/">
            <div
                className={buttonVariants({
                variant:'outline',
                size: "lg",
                })}
            >
                Rety!
                <span className="sr-only">Check Deals</span>
            </div>
        </Link>
    </div>
  )
}

export default AuthErrPage