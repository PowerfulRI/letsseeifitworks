const { PropertyData } = require('../../src/models');

describe('PropertyData', () => {
  let propertyData;

  beforeEach(() => {
    propertyData = new PropertyData({
      address: "123 Test St",
      city: "Testville",
      state: "TS",
      zipCode: "12345",
      purchasePrice: 200000,
      repairCosts: 50000,
      holdingCosts: 10000,
      closingCosts: 5000,
      sellingCosts: 15000,
      arv: 300000,
      squareFeet: 1500
    });
  });

  test('should calculate total investment correctly', () => {
    expect(propertyData.getTotalInvestment()).toBe(265000);
  });

  test('should calculate profit correctly', () => {
    expect(propertyData.getProfit()).toBe(20000);
  });

  test('should calculate ROI correctly', () => {
    expect(propertyData.getRoi()).toBeCloseTo(7.55, 2);
  });

  test('should calculate price per square foot correctly', () => {
    expect(propertyData.getPricePerSqft()).toBe(133.33);
  });

  test('should convert to JSON with calculated properties', () => {
    const json = propertyData.toJSON();
    expect(json.totalInvestment).toBe(265000);
    expect(json.profit).toBe(20000);
    expect(json.equityCreated).toBe(100000);
  });
});