import { useQuery } from "@tanstack/react-query";
import { CatalogApi, ContentApi } from "@/lib/api";

export const backendKeys = {
  banners: ["backend", "banners"] as const,
  announcements: ["backend", "announcements"] as const,
  categories: ["backend", "categories"] as const,
  featured: ["backend", "featured-products"] as const,
  products: (params: Record<string, unknown>) => ["backend", "products", params] as const,
  product: (slug: string) => ["backend", "product", slug] as const,
  addresses: ["backend", "addresses"] as const,
};

export const useBanners = () =>
  useQuery({
    queryKey: backendKeys.banners,
    queryFn: ContentApi.banners,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

export const useAnnouncements = () =>
  useQuery({
    queryKey: backendKeys.announcements,
    queryFn: ContentApi.announcements,
    staleTime: 2 * 60 * 1000,
    retry: 1,
  });

export const useBackendCategories = () =>
  useQuery({
    queryKey: backendKeys.categories,
    queryFn: CatalogApi.categories,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

export const useFeaturedProducts = () =>
  useQuery({
    queryKey: backendKeys.featured,
    queryFn: CatalogApi.featuredProducts,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
