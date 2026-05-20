'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import { ALL_MINERAL_NAMES } from '@/app/data/minerals';

const Map = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="map-loading">
      <div className="spinner" />
      <span>Loading map…</span>
    </div>
  ),
});

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([...ALL_MINERAL_NAMES]);

  const toggleFilter = (name: string) => {
    setActiveFilters((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name],
    );
  };

  const toggleAll = () => {
    setActiveFilters((prev) =>
      prev.length === ALL_MINERAL_NAMES.length ? [] : [...ALL_MINERAL_NAMES],
    );
  };

  return (
    <main className="app-layout">
      <Sidebar
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
        onToggleAll={toggleAll}
      />
      <div className="map-area">
        <Map activeFilters={activeFilters} />
      </div>
    </main>
  );
}
