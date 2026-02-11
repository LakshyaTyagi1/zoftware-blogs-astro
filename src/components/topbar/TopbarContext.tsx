import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// API base URL
const API_URL = "https://api.zoftwarehub.com/api/v1";

// Types
interface Category {
  _id: string;
  name: string;
  weburl: string;
  Children?: SubCategory[];
  products?: Product[];
}

interface SubCategory {
  _id: string;
  name: string;
  weburl: string;
  parent_industry_code?: string;
}

interface Product {
  _id: string;
  product_name: string;
  weburl: string;
  logo_url?: string;
  ratings?: {
    overall_rating: number;
  };
}

interface TopbarContextType {
  masterCategoryList: Category[];
  isLoading: boolean;
  error: string | null;
}

const TopbarContext = createContext<TopbarContextType | undefined>(undefined);

export function TopbarProvider({ children }: { children: ReactNode }) {
  const [masterCategoryList, setMasterCategoryList] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        // Use 'global' for English locale
        const response = await fetch(`${API_URL}/master/getAllCategoriesbasedSubCategories/global`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMasterCategoryList(data.data || []);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <TopbarContext.Provider value={{ masterCategoryList, isLoading, error }}>
      {children}
    </TopbarContext.Provider>
  );
}

export function useTopbarContext() {
  const context = useContext(TopbarContext);
  if (context === undefined) {
    throw new Error("useTopbarContext must be used within a TopbarProvider");
  }
  return context;
}
