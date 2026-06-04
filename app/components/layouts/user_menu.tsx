'use client'
import React, {useEffect, useState} from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar"
import { Button, buttonVariants } from "@/components/UI/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut, 
  DropdownMenuTrigger,
} from "@/components/UI/dropdown_menu"

import { Icons } from "@/components/UI/icons"
import '@/styles/globals.css'
import useAuth from "@/hooks/use_auth"
import { AwajUser } from "@/lib/validations/user"
import appwriteAuthService from "@/db/appwrite_auth"
import { ThemeToggle } from "./theme_toggle"

const UserMenu = () => {
  const {authStatus} = useAuth();
  const [user, setUser] = useState<AwajUser|null>(null)
  
  useEffect(()=>{
    (async () => {
      const iuser = await appwriteAuthService.currentUser()
      setUser(iuser)
    })()
  },[])

if (!authStatus) {
  return null;
}
  return (
    <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      {user?.profilePic?
                      <AvatarImage
                        src={user.profilePic}
                        alt={user.name}
                      />:<></>}
                      <AvatarFallback><Icons.user2/></AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm leading-none text-muted-foreground">
                        {user?.email?<span>{user.email}</span>:<></>}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/main">
                        <Icons.gauge
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Dashboard
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/account">
                        <Icons.user2
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Account
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/billing">
                        <Icons.billing
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Billings
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/support">
                        <Icons.addCircle
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Support
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="https://meda.awajai.com/" target="_blank">
                        <Icons.brain
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        <div className='flex flex-row gap-1 items-center px-2 py-1'>
                          Awaj Meda
                          <Icons.arrowExternalLink className='h-4 w-4'/>
                        </div>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  <DropdownMenuSeparator />
                    <DropdownMenuItem asChild >
                        <div className="flex flex-row w-full justify-between">
                          <Link href="/dashboard/settings" >
                            <div className="flex flex-row">
                              <Icons.settings
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                              />
                              Settings
                            </div>
                            <DropdownMenuShortcut></DropdownMenuShortcut>
                          </Link>
                          <div><ThemeToggle/></div>
                        </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
  )
}

export default UserMenu