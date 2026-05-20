'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MINERALS } from '@/app/data/minerals';

const VENEZUELA_CENTER: [number, number] = [-66.5897, 6.4238];

interface MapProps {
  activeFilters: string[];
}

export default function Map({ activeFilters }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: VENEZUELA_CENTER,
      zoom: 6,
      minZoom: 4,
      maxZoom: 14,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new mapboxgl.ScaleControl({ unit: 'metric' }), 'bottom-right');
    mapRef.current = map;

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  useEffect(() => {
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];
    const map = mapRef.current;
    if (!map) return;

    const addMarkers = () => {
      MINERALS.forEach((mineral) => {
        if (!activeFilters.includes(mineral.name)) return;
        mineral.deposits.forEach((deposit) => {
          const el = document.createElement('div');
          el.style.cssText = `
            width:13px;height:13px;border-radius:50%;
            background:${mineral.color};border:2px solid rgba(255,255,255,0.3);
            box-shadow:0 0 10px ${mineral.color}80,0 0 3px ${mineral.color};
            cursor:pointer;transition:transform 0.15s;
          `;
          el.onmouseenter = () => { el.style.transform = 'scale(1.6)'; };
          el.onmouseleave = () => { el.style.transform = 'scale(1)'; };

          const popup = new mapboxgl.Popup({ offset: 14, closeButton: false, className: 'mineral-popup' })
            .setHTML(`
              <div class="popup-inner" style="--accent:${mineral.color}">
                <div class="popup-type">${mineral.name}</div>
                <div class="popup-name">${deposit.name}</div>
                <div class="popup-desc">${deposit.description}</div>
              </div>
            `);

          const marker = new mapboxgl.Marker(el)
            .setLngLat(deposit.coordinates)
            .setPopup(popup)
            .addTo(map);

          markersRef.current.push(marker);
        });
      });
    };

    map.loaded() ? addMarkers() : map.once('load', addMarkers);
  }, [activeFilters]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
