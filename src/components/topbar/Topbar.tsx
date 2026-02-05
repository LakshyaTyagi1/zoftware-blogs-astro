import React, { useState, useRef } from "react";
import styles from "./topbar.module.css";
import { TopbarProvider } from "./TopbarContext.tsx";
import CategoriesDropdown from "./categories-dropdown/CategoriesDropdown.tsx";
import IoIosArrowDown from "./IoIosArrowDown.tsx";

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
            href="/"
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
              src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/logo.svg"
              style={{ width: "118px", height: "auto" }}
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
                Software Categories
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

            {/* Chat with Zain */}
            <a
              href="https://zoftwarehub.com/zoftbot"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: "#575757",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#2c4e9b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#575757")}
            >
              Chat with Zain
            </a>

            {/* Blogs */}
            <a
              href="/blog"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: "#575757",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#2c4e9b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#575757")}
            >
              Blogs
            </a>

            {/* For Vendors */}
            <a
              href="https://zoftwarehub.com/vendors"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: "#575757",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#2c4e9b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#575757")}
            >
              For Vendors
            </a>

            {/* For Partners */}
            <a
              href="#"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: "#575757",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#2c4e9b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#575757")}
            >
              For Partners
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className={styles.mini_header}>
          <a href="/" style={{ marginRight: "auto", flexShrink: 0 }}>
            <img
              src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/logo.svg"
              alt="zoftware_logo"
              height={25}
              width={130}
              style={{ width: "100px", height: "auto" }}
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
            }}
          >
            <img
              src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/hamburger-menu.svg"
              alt="hamburger menu"
              height={16}
              width={24}
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
          <div
            style={{
              width: "320px",
              maxWidth: "85vw",
              background: "white",
              height: "100vh",
              padding: "24px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
                paddingBottom: "16px",
                borderBottom: "1px solid #e6e6e6",
              }}
            >
              <img
                src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/logo.svg"
                alt="zoftware_logo"
                height={25}
                width={130}
                style={{ width: "120px", height: "auto" }}
              />
              <button
                onClick={closeSidenav}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#101828",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blogs" },
                { href: "https://zoftwarehub.com/zoftbot", label: "Chat with Zain" },
                { href: "https://zoftwarehub.com/vendors", label: "For Vendors" },
                { href: "#", label: "For Partners" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeSidenav}
                  style={{
                    padding: "16px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#575757",
                    textDecoration: "none",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(44, 78, 155, 0.05)";
                    e.currentTarget.style.color = "#2c4e9b";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#575757";
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
