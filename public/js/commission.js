/* ================================
   AlinGo Dynamic Commission Engine
   ================================ */

/**
 * Calculate final commission percentage
 * @param {Object} data
 */
function calculateCommission(data) {

  const {
    serviceType,        // ride | food | shopping | courier | travel
    baseCommission,     // base %
    performanceScore,   // 0 - 100
    orderValue,         // amount in PKR
    riskLevel           // low | medium | high
  } = data;

  let commission = baseCommission;

  /* ---------- Performance Discount ---------- */
  if (performanceScore >= 85) {
    commission -= 1.5;
  } else if (performanceScore >= 70) {
    commission -= 1.0;
  } else if (performanceScore < 50) {
    commission += 1.0;
  }

  /* ---------- Order Value Discount ---------- */
  if (orderValue >= 20000) {
    commission -= 1.0;
  } else if (orderValue >= 10000) {
    commission -= 0.5;
  }

  /* ---------- Risk Adjustment ---------- */
  if (riskLevel === "high") {
    commission += 1.5;
  } else if (riskLevel === "medium") {
    commission += 0.5;
  }

  /* ---------- Safety Limits ---------- */
  const limits = {
    ride:      { min: 2.5, max: 6 },
    food:      { min: 8,   max: 15 },
    shopping:  { min: 2,   max: 8 },
    courier:   { min: 2.5, max: 7 },
    travel:    { min: 3,   max: 15 }
  };

  const { min, max } = limits[serviceType];

  if (commission < min) commission = min;
  if (commission > max) commission = max;

  return Number(commission.toFixed(2));
}

/* ================================
   Example usage (remove later)
   ================================ */

const example = calculateCommission({
  serviceType: "ride",
  baseCommission: 5,
  performanceScore: 88,
  orderValue: 12000,
  riskLevel: "low"
});

console.log("Final Commission %:", example);
