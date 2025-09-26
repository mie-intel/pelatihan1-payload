"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const init = async () => {
      const response = await axios.get("/api/siswa");
      setData(response.data.docs);
    };

    init();
  }, []);
  return (
    <div className="w-full h-screen">
      {data ? (
        <>
          <h1>Ini datanya</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Image
            alt="Ini gambar"
            src={data[0]["foto profil"].url}
            width={500}
            height={500}
            className="w-[60%] h-auto"
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
