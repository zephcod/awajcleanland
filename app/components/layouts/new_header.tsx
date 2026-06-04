'use client'
import Link from "next/link"
import { dashboardConfig } from "../../../config/dashboard"
import { siteConfig } from "../../../config/site"
import { buttonVariants } from "../../components/ui/button"
import { Icons } from '../../components/ui/icons'
import { MainNav } from "../../components/layouts/main_nav"
import { MobileNav } from "../../components/layouts/mobile_nav"
import { ThemeToggle } from "./theme_toggle"

const NewHeader = () => {
  
    return (
    <header className="sticky clearNav top-0 z-30 w-full">
      <div className="flex flex-row h-14 justify-between items-center flex-wrap px-4 py-1"> 
        <MainNav items={siteConfig.mainNav} />
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
              <div className="flex flex-row gap-2 items-center">
              <ThemeToggle/>
              <Link 
              href="https://wa.me/251903569999?text=Hello%20Awaj%20ET%2C%20I%20would%20like%20to%20book%20a%20consultation." 
              rel="noopener noreferrer"
              target='_blank'
              >
                <div
                  className={buttonVariants({
                    variant:'outline',
                    size: "sm",
                  })}
                >
                  <Icons.phone className='h-4 w-4 mr-2'/>
                   WhatsApp
                  <span className="sr-only">WhatsApp</span>
                </div>
              </Link>
              </div>
          </nav>
        </div>
      </div>
    </header>
    );
}

export default NewHeader
