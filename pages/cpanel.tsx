import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Cpanel() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/cpanel") {
      window.location.href = "https://greenhillsacademy.rw:2083/";
    }
  }, [router.pathname]);

  return null;
}
