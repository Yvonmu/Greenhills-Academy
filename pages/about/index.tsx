import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function About() {
    return (
        <GetData endpoint={"/api/transfer/about"} />
      );
}
