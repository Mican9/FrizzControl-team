import { services, type Service } from "../data/services";
import { staff, getStaffBySlug } from "../data/staff";
import type { ServiceCategorySlug } from "../data/categories";

export function getServicesByStaff(staffSlug: string): Service[] {
  return services.filter((service) => service.staffSlug === staffSlug);
}

export function getServicesByCategory(category: ServiceCategorySlug): Service[] {
  return services.filter((service) => service.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featuredImages && service.featuredImages.length > 0);
}

export { getStaffBySlug, staff };

export function formatPrice(service: Service): string {
  return `${service.price} ${service.currency}`;
}
