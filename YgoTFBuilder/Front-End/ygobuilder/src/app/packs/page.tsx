"use client";

import { PackList } from "@/components/templates/PackList";

import { PageHeader } from "@/components/atoms/PageHeader";

const PacksPage = () => {
  return (
    <div>
      <PageHeader title="Packs List" />
      <PackList />
    </div>
  );
};

export default PacksPage;
