import React from 'react';

type DrinkingPackage = {
  id: number;
  packageName: string;
  price: number;
  includedDrinks: string[];
  notes?: string;
};

const drinkingPackages: DrinkingPackage[] = [
  {
    id: 1,
    packageName: "Premium Beverage Package",
    price: 59.99,
    includedDrinks: ["Cocktails", "Wine", "Beer", "Soda"],
    notes: "Unlimited drinks, excludes top-shelf brands."
  },
  {
    id: 2,
    packageName: "Classic Soda Package",
    price: 9.99,
    includedDrinks: ["Soda", "Juice"],
    notes: "Unlimited non-alcoholic drinks."
  },
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Drinking Package Aid</h1>
      <ul>
        {drinkingPackages.map(pkg => (
          <li key={pkg.id} style={{ marginBottom: 16 }}>
            <strong>{pkg.packageName}</strong> - ${pkg.price.toFixed(2)}
            <br />
            <span>Included Drinks: {pkg.includedDrinks.join(", ")}</span>
            {pkg.notes && <div><em>Notes: {pkg.notes}</em></div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;