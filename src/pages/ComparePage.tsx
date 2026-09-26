import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Car } from '../types';

export const ComparePage: React.FC = () => {
  const { cars, compareList, removeFromCompare, addToCompare, clearCompare, navigate } = useApp();
  const [highlightDifferences, setHighlightDifferences] = useState<boolean>(true);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const comparedCars: Car[] = cars.filter((c) => compareList.includes(c.id));

  // Available cars to add
  const availableToAdd = cars.filter((c) => !compareList.includes(c.id));

  const rows = [
    { key: 'priceFormatted', label: 'Price' },
    { key: 'year', label: 'Model Year' },
    { key: 'km', label: 'Odometer (KM)', format: (v: number) => `${v.toLocaleString('en-IN')} KM` },
    { key: 'fuel', label: 'Fuel' },
    { key: 'transmission', label: 'Transmission' },
    { key: 'engine', label: 'Engine', extract: (c: Car) => c.specs.engine },
    { key: 'power', label: 'Power', extract: (c: Car) => c.specs.power },
    { key: 'torque', label: 'Peak Torque', extract: (c: Car) => c.specs.torque },
    { key: 'acceleration', label: '0–100 km/h', extract: (c: Car) => c.specs.acceleration },
    { key: 'mileage', label: 'Mileage / Range', extract: (c: Car) => c.specs.mileage },
    { key: 'driveType', label: 'Drivetrain', extract: (c: Car) => c.specs.driveType },
    { key: 'seating', label: 'Seating', extract: (c: Car) => `${c.specs.seating} Seats` },
    { key: 'bootSpace', label: 'Boot Space', extract: (c: Car) => c.specs.bootSpace },
    { key: 'ownership', label: 'Ownership', extract: (c: Car) => c.ownership },
    { key: 'inspectionScore', label: 'Inspection Score', extract: (c: Car) => `${c.history.inspectionScore}/100 Passed` },
    { key: 'city', label: 'Hub Location' }
  ];

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Vehicle Benchmark</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Side-by-Side Car Comparison ({comparedCars.length}/4)
            </h1>
            <p className="text-xs text-[#c6c9ae] mt-1">
              Compare powertrain metrics, equipment lists, and certified inspection telemetry.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Highlight Differences Switch */}
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
              <input
                type="checkbox"
                checked={highlightDifferences}
                onChange={(e) => setHighlightDifferences(e.target.checked)}
                className="w-4 h-4 accent-[#d1f032] cursor-pointer"
              />
              <span>Highlight Differences</span>
            </label>

            {comparedCars.length > 0 && (
              <button
                onClick={clearCompare}
                className="px-4 py-2 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-xs font-bold text-[#c6c9ae] hover:text-white border border-[#282a2e] transition-colors"
              >
                Clear All
              </button>
            )}

            {comparedCars.length < 4 && (
              <button
                onClick={() => setAddModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>Add Another Car</span>
              </button>
            )}
          </div>
        </div>

        {comparedCars.length > 0 ? (
          <div className="overflow-x-auto rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Header Row with Cars */}
              <thead>
                <tr className="border-b border-[#282a2e] bg-[#16181f]">
                  <th className="p-6 text-xs font-bold text-[#c6c9ae] uppercase tracking-wider w-48">
                    Vehicle Metrics
                  </th>
                  {comparedCars.map((car) => (
                    <th key={car.id} className="p-6 align-top">
                      <div className="relative">
                        <button
                          onClick={() => removeFromCompare(car.id)}
                          aria-label="Remove Car"
                          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#282a2e] hover:bg-rose-500/20 text-[#c6c9ae] hover:text-rose-400 flex items-center justify-center transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                        <img
                          src={car.images.hero}
                          alt={car.title}
                          className="w-full h-32 object-contain bg-[#0c0e12] rounded-2xl p-2 mb-3"
                        />
                        <div className="text-[10px] text-[#d1f032] font-bold uppercase">
                          {car.brand}
                        </div>
                        <div className="text-sm font-bold text-white mb-1 truncate">{car.title}</div>
                        <div className="text-base font-black text-white mb-3">
                          {car.priceFormatted}
                        </div>
                        <button
                          onClick={() => navigate(`/car/${car.id}`)}
                          className="w-full py-2 rounded-xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs transition-colors"
                        >
                          View Car
                        </button>
                      </div>
                    </th>
                  ))}

                  {/* Add Slot Placeholder if < 4 cars */}
                  {comparedCars.length < 4 && (
                    <th className="p-6 align-middle text-center border-l border-[#282a2e]/40">
                      <button
                        onClick={() => setAddModalOpen(true)}
                        className="w-full py-16 rounded-2xl border-2 border-dashed border-[#282a2e] hover:border-[#d1f032] flex flex-col items-center justify-center gap-2 group transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#282a2e] text-[#d1f032] group-hover:scale-110 flex items-center justify-center transition-transform">
                          <span className="material-symbols-outlined text-[20px]">add</span>
                        </div>
                        <span className="text-xs font-bold text-[#c6c9ae] group-hover:text-white">
                          Add Machine to Compare
                        </span>
                      </button>
                    </th>
                  )}
                </tr>
              </thead>

              {/* Data Rows */}
              <tbody className="divide-y divide-[#282a2e]/60 text-xs">
                {rows.map((row) => {
                  // Check if row has differences
                  const values = comparedCars.map((car) =>
                    row.extract ? row.extract(car) : (car as any)[row.key]
                  );
                  const isDiff = new Set(values).size > 1;

                  return (
                    <tr
                      key={row.key}
                      className={
                        highlightDifferences && isDiff
                          ? 'bg-[#d1f032]/5'
                          : 'hover:bg-[#1e2024]/50 transition-colors'
                      }
                    >
                      <td className="p-4 font-bold text-[#c6c9ae] bg-[#16181f]/40 whitespace-nowrap">
                        {row.label}
                      </td>
                      {comparedCars.map((car) => {
                        const val = row.extract
                          ? row.extract(car)
                          : row.format
                          ? row.format((car as any)[row.key])
                          : (car as any)[row.key];

                        return (
                          <td
                            key={car.id}
                            className={`p-4 font-semibold ${
                              highlightDifferences && isDiff ? 'text-[#d1f032]' : 'text-white'
                            }`}
                          >
                            {val}
                          </td>
                        );
                      })}
                      {comparedCars.length < 4 && <td className="p-4 border-l border-[#282a2e]/40"></td>}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-24 px-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#282a2e] flex items-center justify-center text-[#d1f032] mb-4">
              <span className="material-symbols-outlined text-[36px]">compare_arrows</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Vehicles Shortlisted for Comparison</h3>
            <p className="text-xs text-[#c6c9ae] max-w-md mb-6">
              Pick up to 4 models from AutoHub's showroom to compare acceleration, engine displacement, dimensions, and certified inspections.
            </p>
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-8 py-3 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs shadow-lg transition-all hover:brightness-110"
            >
              Browse Showroom
            </button>
          </div>
        )}
      </div>

      {/* Add Car Picker Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#1e2024] border border-[#282a2e] p-6 shadow-2xl relative">
            <button
              onClick={() => setAddModalOpen(false)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Select a Car to Compare</h3>
            <p className="text-xs text-[#c6c9ae] mb-6">Choose from available verified allocations.</p>

            <div className="space-y-3">
              {availableToAdd.map((car) => (
                <div
                  key={car.id}
                  onClick={() => {
                    addToCompare(car.id);
                    setAddModalOpen(false);
                  }}
                  className="p-3.5 rounded-2xl bg-[#111317] border border-[#282a2e] hover:border-[#d1f032] cursor-pointer flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={car.images.hero}
                      alt={car.title}
                      className="w-16 h-10 object-contain"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{car.title}</div>
                      <div className="text-[10px] text-[#c6c9ae]">
                        {car.year} • {car.city} • {car.fuel}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#d1f032]">{car.priceFormatted}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-[#282a2e] text-xs font-bold text-white">
                      + Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
