import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Accreditation() {
    return (
      <GetData endpoint={"/api/transfer/accreditation"} />
      );
}
