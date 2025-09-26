import type { CollectionConfig } from "payload";

export const GambarSiswa: CollectionConfig = {
  slug: "gambar-siswa",
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: "tes1",
        width: 100,
        height: 100,
        position: "center",
      },
      {
        name: "tes2",
        width: 200,
        height: 200,
        position: "center",
      },
    ],
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  fields: [],
};
