import React, { useEffect, useRef, useState } from "react";
import styles from "./categories-dropdown.module.css";
import IoIosArrowDown from "../IoIosArrowDown.tsx";
import { useTopbarContext } from "../TopbarContext.tsx";

interface CategoriesDropdownProps {
  hideCatDropdown: () => void;
  toggleCatDropdown: () => void;
}

export default function CategoriesDropdown({
  hideCatDropdown,
  toggleCatDropdown,
}: CategoriesDropdownProps) {
  const { masterCategoryList, isLoading } = useTopbarContext();
  const [isOpen, setIsOpen] = useState(false);
  const [currParentCat, setCurrParentCat] = useState<any>(null);
  const catDropdownRef = useRef<HTMLDivElement | null>(null);

  // Set first category as current when data loads
  useEffect(() => {
    if (masterCategoryList.length > 0 && !currParentCat) {
      setCurrParentCat(masterCategoryList[0]);
    }
  }, [masterCategoryList, currParentCat]);

  // Animate open after mount
  useEffect(() => {
    // Small delay to trigger CSS transition
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        catDropdownRef.current &&
        !catDropdownRef.current.contains(event.target as Node)
      ) {
        toggleCatDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleCatDropdown]);

  const handleMouseEnter = (category: any) => {
    setCurrParentCat(category);
  };

  const handleLinkClick = () => {
    hideCatDropdown();
  };

  // Loading skeleton
  const renderLoadingSkeleton = () => (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <li key={index} className={styles.skeletonItem}>
            <span className={styles.skeleton} style={{ width: "80%", height: "20px" }}></span>
          </li>
        ))}
    </>
  );

  return (
    <div
      ref={catDropdownRef}
      id="cat-dropdown"
      className={`${styles.cat_dropdown} ${isOpen ? styles.cat_open : styles.cat_close}`}
    >
      {/* Left Column - Parent Categories */}
      <div className={`${styles.mainDropdownContainer} flex flex-col justify-between gap-2`}>
        <ul className={styles.mainDropdown}>
          {isLoading ? (
            renderLoadingSkeleton()
          ) : (
            masterCategoryList.map((prodCat: any) => (
              <li
                key={prodCat._id}
                className={currParentCat?._id === prodCat._id ? styles.activeCat : ""}
                onMouseEnter={() => handleMouseEnter(prodCat)}
              >
                <a
                  href={`https://zoftwarehub.com/category/p/${prodCat.weburl}`}
                  onClick={handleLinkClick}
                >
                  {prodCat.name}
                </a>
                {currParentCat?._id === prodCat._id && (
                  <span style={{ transform: "rotate(-90deg)", display: "inline-block" }}>
                    <IoIosArrowDown />
                  </span>
                )}
              </li>
            ))
          )}
        </ul>
        <a
          href="https://zoftwarehub.com/categories"
          className={styles.main_all_cat}
          onClick={handleLinkClick}
        >
          View All Categories
        </a>
      </div>

      {/* Middle Column - Subcategories */}
      <div className={styles.sideDropdownContainer}>
        <div className="mb-6 flex items-baseline justify-between">
          <a
            href={`https://zoftwarehub.com/category/p/${currParentCat?.weburl}`}
            className="text-lg font-semibold"
            style={{ color: "#051d53" }}
            onClick={handleLinkClick}
          >
            <p>{currParentCat?.name || "Select a category"}</p>
          </a>
        </div>
        <div className={styles.sideDropdown}>
          <ul>
            {isLoading ? (
              renderLoadingSkeleton()
            ) : (
              currParentCat?.Children?.slice(0, 10).map((subCat: any) => (
                <li key={subCat._id}>
                  <a
                    href={`https://zoftwarehub.com/category/${subCat.weburl}`}
                    onClick={handleLinkClick}
                  >
                    {subCat.name}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
        {currParentCat?.Children?.length > 10 && (
          <a
            href={`https://zoftwarehub.com/category/p/${currParentCat?.weburl}`}
            className={styles.sub_all_cat}
            onClick={handleLinkClick}
          >
            View All Categories
          </a>
        )}
      </div>

      {/* Right Column - Featured Products */}
      <div className={styles.bannerContainer}>
        <img
          src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/logo.svg"
          alt="zoftware_logo"
          height={20}
          width={100}
          className="mx-auto mb-6"
        />

        <div className={styles.banner}>
          {isLoading ? (
            Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={styles.product_card}>
                  <div className={styles.skeleton} style={{ width: "50px", height: "50px", borderRadius: "8px" }}></div>
                  <p><span className={styles.skeleton} style={{ width: "80px", height: "16px" }}></span></p>
                </div>
              ))
          ) : (
            currParentCat?.products?.slice(0, 3).map((product: any) => (
              <a
                key={product._id}
                href={`https://zoftwarehub.com/products/${product.weburl}/overview`}
                className={styles.product_card}
                onClick={handleLinkClick}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={product.logo_url || "https://via.placeholder.com/30"}
                    alt={`${product.product_name} logo`}
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{product.product_name}</p>
                {product.ratings?.overall_rating > 0 && (
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                    <img
                      src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/star-yellow-product.svg"
                      alt="star"
                      width={24}
                      height={24}
                    />
                    <div>
                      <span style={{ color: "#051d53", fontWeight: 500 }}>
                        {product.ratings.overall_rating.toFixed(1)}
                      </span>{" "}
                      <span style={{ fontSize: "12px" }}>out of 5</span>
                    </div>
                  </div>
                )}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
