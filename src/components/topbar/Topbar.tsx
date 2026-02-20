import React, { useState, useRef } from "react";
import styles from "./topbar.module.css";
import { TopbarProvider } from "./TopbarContext.tsx";
import CategoriesDropdown from "./categories-dropdown/CategoriesDropdown.tsx";
import IoIosArrowDown from "./IoIosArrowDown.tsx";

const NAV_LINKS = [
  { href: "https://zoftwarehub.com", label: "Home", mobileOnly: true },
  { href: "https://zoftwarehub.com/categories", label: "Software Categories", isDropdownTrigger: true },
  { href: "https://zoftwarehub.com/zoftbot", label: "Chat with Zain" },
  { href: "/", label: "Blogs", active: true },
  { href: "https://zoftwarehub.com/vendors", label: "Vendors" },
  { href: "https://zoftwarehub.com/system-integrators", label: "System Integrators" },
  { href: "https://rfpbuilder.zoftwarehub.com/", label: "RFP Builder" },
];

function TopbarContent() {
  const [catDropdown, setCatDropdown] = useState(false);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const dropdownBtnRef = useRef<HTMLDivElement | null>(null);

  const toggleCatDropdown = () => {
    setCatDropdown((prev) => !prev);
  };

  const hideCatDropdown = () => {
    setCatDropdown(false);
  };

  const openSidenav = () => {
    setIsSidenavOpen(true);
  };

  const closeSidenav = () => {
    setIsSidenavOpen(false);
  };

  // Prevent dropdown button click from immediately closing dropdown
  const handleDropdownBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleCatDropdown();
  };

  return (
    <>
      <header className={styles.header_parent}>
        {/* Desktop Header */}
        <div className={styles.header}>
          {/* Logo */}
          <a
            href="https://zoftwarehub.com"
            style={{ 
              marginLeft: "20px", 
              marginRight: "20px", 
              minWidth: "118px", 
              flexShrink: 0 
            }}
          >
            <img
              height={23}
              width={118}
              alt="zoftware_logo"
              src="/logo.svg"
              style={{ width: "118px", height: "auto", borderRadius: 0 }}
            />
          </a>

          {/* Navigation Items */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flex: 1,
              gap: "12px",
              paddingRight: "16px",
            }}
          >
            {NAV_LINKS.filter(link => !link.mobileOnly).map((link) => {
              if (link.isDropdownTrigger) {
                return (
                  <React.Fragment key={link.label}>
                    {/* Categories Dropdown */}
                    {catDropdown && (
                      <CategoriesDropdown
                        hideCatDropdown={hideCatDropdown}
                        toggleCatDropdown={toggleCatDropdown}
                      />
                    )}

                    {/* Categories Button */}
                    <div
                      ref={dropdownBtnRef}
                      id="cat-dropdown-btn"
                      onClick={handleDropdownBtnClick}
                      className={styles.dropdownParent}
                      style={{ flexShrink: 0, cursor: "pointer" }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                          color: catDropdown ? "#2c4e9b" : "#575757",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                          margin: 0,
                        }}
                      >
                        {link.label}
                        <span
                          style={{
                            transition: "transform 0.3s ease",
                            transform: catDropdown ? "rotate(180deg)" : "rotate(0deg)",
                            display: "inline-block",
                          }}
                        >
                          <IoIosArrowDown />
                        </span>
                      </p>
                    </div>
                  </React.Fragment>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    fontWeight: link.active ? 600 : 500,
                    whiteSpace: "nowrap",
                    color: link.active ? "#2c4e9b" : "#575757",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#2c4e9b";
                  }}
                  onMouseOut={(e) => {
                    if (!link.active) e.currentTarget.style.color = "#575757";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Header */}
        <div className={styles.mini_header} style={{ display: isSidenavOpen ? "none" : "" }}>
          <a href="https://zoftwarehub.com" style={{ marginRight: "auto", flexShrink: 0, display: "flex" }}>
            <img
              src="/logo.svg"
              alt="zoftware_logo"
              height={25}
              width={130}
              style={{ width: "100px", height: "auto", borderRadius: 0 }}
            />
          </a>

          <button
            onClick={openSidenav}
            aria-label="Open menu"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              flexShrink: 0,
              display: "block",
              position: "relative"
            }}
          >
            <img
              src="/hamburger-menu.svg"
              alt="hamburger menu"
              height={16}
              width={24}
              style={{ display: "block", borderRadius: 0 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Sidenav */}
      {isSidenavOpen && (
        <div
          className={styles.sidenav_container}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSidenav();
          }}
          style={{ display: "flex" }}
        >
          <div className={styles.sidenav}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
                gap: "1rem"
              }}
            >
              <img
                src="/logo.svg"
                alt="zoftware_logo"
                height={25}
                width={130}
                style={{ width: "120px", height: "auto", borderRadius: 0 }}
              />
              <button onClick={closeSidenav} className={styles.hide_sidenav_btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2c4e9b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x" style={{ display: "block" }}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeSidenav}
                  className={`${styles.mobNavLink}`}
                  style={{
                    color: link.active ? "#2c4e9b" : "#575757",
                    borderTop: index === 0 ? "none" : "1px solid #e8ebeb",
                    textDecoration: "none"
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default function Topbar() {
  return (
    <TopbarProvider>
      <TopbarContent />
    </TopbarProvider>
  );
}
