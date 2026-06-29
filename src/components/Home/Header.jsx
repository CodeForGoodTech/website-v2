import * as React from "react"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logoImage from "@/assets/logo.png"

const initiatives = [
  {
    label: "Dedicated Mentoring Program",
    href: "/dedicated-mentoring-program",
    children: [
       { label: "DMP 2026 ", href: "/dmp-2026" },
      { label: "DMP 2025 – Impact Report", href: "/dmp-2025" },
      { label: "DMP 2024 – Impact Report", href: "/dmp-2024" },
    ],
  },
  { label: "C4GT Hub", href: "/hub" },
  {
    label: "Open Community",
    href: "/open-community",
    children: [{ label: "Workshops", href: "/workshops" }],
  },
  { label: "Campus Leaders Program", href: "/campus-leaders" },
]

const communityMenu = [
  {
    label: "Organisations",
    href: "/organisations",
    children: [{ label: "How to Join", href: "/how-to-join" }],
  },
  { label: "Contributors", href: "/contributors" },
  { label: "Angel Mentors", href: "/angel_mentors" },
]

const knowledgeMenu = [
  { label: "Product Directory", href: "/product-directory" },
  { label: "DPG SCoRe 2025", href: "/dpg-score" },
]

const connectMenu = [
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
]

export function SiteHeader() {
  const [openMenu, setOpenMenu] = React.useState(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const closeTimeoutRef = React.useRef(null)

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  const openDropdown = (menu) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setOpenMenu(menu)
  }

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null)
    }, 150)
  }

  const navButtonBase =
    "inline-flex items-center gap-1 px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-[#1B2336] transition-colors duration-150 hover:text-[#880163]"

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-[#EEF1F6] shadow-sm">
        <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between px-8 lg:px-10">
          
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Code for Good Tech" className="h-22 w-auto object-contain" />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-2">
            <Link to="/" className={navButtonBase}>
              Home
            </Link>

            {/* Standardized Dropdowns with Right-Flyouts */}
            <SimpleDropdown
              label="Initiatives"
              items={initiatives}
              openMenu={openMenu}
              openDropdown={openDropdown}
              closeDropdown={closeDropdown}
              menuKey="initiatives"
              navButtonBase={navButtonBase}
              width="w-[300px]"
            />

            <SimpleDropdown
              label="Community"
              items={communityMenu}
              openMenu={openMenu}
              openDropdown={openDropdown}
              closeDropdown={closeDropdown}
              menuKey="community"
              navButtonBase={navButtonBase}
              width="w-[260px]"
            />

            <SimpleDropdown
              label="Knowledge Assets"
              items={knowledgeMenu}
              openMenu={openMenu}
              openDropdown={openDropdown}
              closeDropdown={closeDropdown}
              menuKey="knowledge"
              navButtonBase={navButtonBase}
              width="w-[240px]"
            />

            <SimpleDropdown
              label="Connect"
              items={connectMenu}
              openMenu={openMenu}
              openDropdown={openDropdown}
              closeDropdown={closeDropdown}
              menuKey="connect"
              navButtonBase={navButtonBase}
              width="w-[200px]"
            />
          </nav>

          {/* Right: CTA */}
          <div className="hidden lg:flex shrink-0 items-center justify-end">
            <a
              href="https://pl-app.iiit.ac.in/c4gt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#8A0E67] px-7 text-[13px] font-bold tracking-wide uppercase text-white shadow-sm transition-colors duration-150 hover:bg-[#741057]"
            >
              Join The Community
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#1B2336]"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#EEF1F6] bg-white shadow-md max-h-[calc(100vh-88px)] overflow-y-auto">
            <div className="mx-auto max-w-[1320px] px-6 py-4">
              <div className="space-y-3">
                <Link to="/" className="block py-2 text-[15px] font-medium text-[#1B2336]">Home</Link>
                <MobileSection title="Initiatives" items={initiatives} />
                <MobileSection title="Community" items={communityMenu} />
                <MobileSection title="Knowledge Assets" items={knowledgeMenu} />
                <MobileSection title="Connect" items={connectMenu} />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* spacer for fixed header */}
      <div className="h-[88px]" />
    </>
  )
}

// Unified Dropdown Component - Handles both the main list and the right-side flyouts
function SimpleDropdown({ label, items, openMenu, openDropdown, closeDropdown, menuKey, navButtonBase, width }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => openDropdown(menuKey)}
      onMouseLeave={closeDropdown}
    >
      <button className={navButtonBase}>
        {label}
        <ChevronDown className="h-4 w-4 ml-0.5" />
      </button>

      {openMenu === menuKey && (
        <div className={`absolute left-0 top-full mt-1 ${width} rounded-xl border border-[#EEF1F6] bg-white p-2 shadow-lg`}>
          <div className="space-y-1">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0

              return (
                <div key={item.label} className="group relative">
                  <Link
                    to={item.href}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium text-[#1B2336] transition-colors duration-150 hover:bg-[#F7F8FC] hover:text-[#8A0E67]"
                  >
                    <span>{item.label}</span>
                    {hasChildren ? <ChevronRight className="h-4 w-4 opacity-50" /> : null}
                  </Link>

                  {/* FLYOUT MENU: This pops out to the right exactly like your screenshot */}
                  {hasChildren && (
                    <div className="absolute left-[calc(100%+8px)] top-0 hidden min-w-[240px] rounded-xl border border-[#EEF1F6] bg-white p-2 shadow-lg group-hover:block">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-lg px-4 py-3 text-[14px] font-medium text-[#1B2336] transition-colors duration-150 hover:bg-[#F7F8FC] hover:text-[#8A0E67]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileSection({ title, items }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="rounded-xl border border-[#EEF1F6] bg-[#F7F8FC]/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-semibold text-[#1B2336]"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="border-t border-[#EEF1F6] px-4 py-2 bg-white rounded-b-xl">
          {items.map((item) => (
            <div key={item.label} className="py-2">
              <Link to={item.href} className="block text-[14px] font-medium text-[#1B2336]">
                {item.label}
              </Link>

              {item.children && item.children.length > 0 && (
                <div className="mt-2 space-y-2 border-l-2 border-[#EEF1F6] pl-4 ml-1">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.href} className="block text-[13px] font-medium text-[#6B7280]">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}