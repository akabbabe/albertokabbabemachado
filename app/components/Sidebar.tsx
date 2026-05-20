'use client';

import { MINERALS, ALL_MINERAL_NAMES } from '@/app/data/minerals';

interface SidebarProps {
  activeFilters: string[];
  onToggleFilter: (name: string) => void;
  onToggleAll: () => void;
}

export default function Sidebar({ activeFilters, onToggleFilter, onToggleAll }: SidebarProps) {
  const allActive = activeFilters.length === ALL_MINERAL_NAMES.length;

  const totalDeposits = MINERALS.filter((m) => activeFilters.includes(m.name)).reduce(
    (sum, m) => sum + m.deposits.length,
    0,
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="flag-stripe" />
        <div className="header-body">
          <p className="header-eyebrow">Resource Atlas</p>
          <h1 className="header-title">Venezuela</h1>
          <p className="header-subtitle">Mineral Deposits Explorer</p>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value">{activeFilters.length}</span>
          <span className="stat-label">Types</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value">{totalDeposits}</span>
          <span className="stat-label">Deposits</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value">6</span>
          <span className="stat-label">Regions</span>
        </div>
      </div>

      <div className="filter-body">
        <div className="filter-header">
          <span className="filter-label">Mineral Types</span>
          <button className="toggle-all-btn" onClick={onToggleAll}>
            {allActive ? 'Clear all' : 'Select all'}
          </button>
        </div>

        <div className="mineral-list">
          {MINERALS.map((mineral) => {
            const active = activeFilters.includes(mineral.name);
            return (
              <button
                key={mineral.name}
                onClick={() => onToggleFilter(mineral.name)}
                className={`mineral-btn${active ? ' active' : ''}`}
                style={{ '--c': mineral.color } as React.CSSProperties}
              >
                <span className="mineral-indicator">
                  <span
                    className="mineral-dot"
                    style={{
                      background: active ? mineral.color : 'transparent',
                      borderColor: mineral.color,
                    }}
                  />
                </span>
                <span className="mineral-text">
                  <span className="mineral-name">{mineral.name}</span>
                  <span className="mineral-region">{mineral.regionLabel}</span>
                </span>
                <span
                  className="deposit-badge"
                  style={
                    active
                      ? {
                          background: `${mineral.color}22`,
                          color: mineral.color,
                          borderColor: `${mineral.color}44`,
                        }
                      : undefined
                  }
                >
                  {mineral.deposits.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="sidebar-footer">
        <p>Deposit locations are approximate.<br />Data for visualization purposes only.</p>
      </div>
    </aside>
  );
}
