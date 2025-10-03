import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function notifySalesGroup() {
  fetch(
    "https://default423f02dde709477985e371ad2d529c.7a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/caf3cfa4733c4f9aab121950bfeba517/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8iNqNti6u-N2s9seAOwuohc09arQf5982FjNgI55CE8",
    {
      method: "post",
    }
  );
}

export function notifyAdvisoryGroup() {
  fetch(
    "https://default423f02dde709477985e371ad2d529c.7a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/e13026626a534d8d834c957fa66def14/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SpuXcuxuPcx3qrFi1DnKubmmkIFDAbL9l0xAZP1Fj3o",
    {
      method: "post",
    }
  );
}

export function notifyPackageDeliveryGroup() {
  fetch(
    "https://default423f02dde709477985e371ad2d529c.7a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/1fbf96d171814f5d9da834eaa51f0a63/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ejxcfWmS_ZoUtA0KoRwmmiZ7Lb7O2Q7mdBiaMvR6llc",
    {
      method: "post",
    }
  );
}

export function notifyPackagePickUpGroup() {
  fetch(
    "https://default423f02dde709477985e371ad2d529c.7a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/6b19f1c74a394c63ac45d17672422304/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ne5zivxdXdtUNRWVzcljCNhkda9ErQMV6NX5VxVXe4w",
    {
      method: "post",
    }
  );
}

export function notifyEmployee(email: string) {
  fetch(
    "https://default423f02dde709477985e371ad2d529c.7a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/465b11114a21432db90d9a9f9e79c2ba/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cp_MdARlMw-sPEUchtzMGnEJn25GQnZfY_rvntoA-gw",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        to: email,
      }),
    }
  );
}
