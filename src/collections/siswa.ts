import type { CollectionConfig } from "payload";

export const Siswa: CollectionConfig = {
  slug: "siswa",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "nama",
      type: "text",
      required: true,
    },
    {
      name: "IPK",
      type: "text",
    },
    {
      name: "foto profil",
      type: "upload",
      relationTo: "gambar-siswa",
    },
  ],
};
