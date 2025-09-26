import type { CollectionConfig } from "payload";

export const GambarSiswa: CollectionConfig = {
  slug: "gambar-siswa",
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  fields: [],
};
