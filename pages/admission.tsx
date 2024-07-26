import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Admission() {
    return (
      <GetData endpoint={"/api/transfer/admissions"} />
      );
}
