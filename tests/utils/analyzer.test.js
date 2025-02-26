const { FlipInvestmentAnalyzer } = require('../../src/utils');
const { PropertyData, ComparableProperty } = require('../../src/models');

describe('FlipInvestmentAnalyzer', () => {
  let analyzer;
  let propertyData;
  let comps;

  beforeEach(() => {
    analyzer = new FlipInvestmentAnalyzer();
    
    propertyData = new PropertyData({
      address: "123 Test St",
      city: "Testville",
      state: "TS",
      zipCode: "12345",
      propertyType: "Single Family",
      yearBuilt: 1990,
      beds: 3,
      baths: 2,
      squareFeet: 1500,
      purchasePrice: 200000,
      repairCosts: 50000,
      holdingCosts: 10000,
      closingCosts: 5000,
      sellingCosts: 15000
    });
    
    // Create some test comparable properties
    comps = [
      new ComparableProperty({
        address: "456 Comp St A",
        propertyType: "Single Family",
        beds: 3,
        baths: 2,
        squareFeet: 1600,
        salePrice: 320000,
        pricePerSqft: 200,
        distanceMiles: 0.8
      }),
      new ComparableProperty({
        address: "456 Comp St B",
        propertyType: "Single Family",
        beds: 4,
        baths: 2.5,
        squareFeet: 1800,
        salePrice: 340000,
        pricePerSqft: 188.89,
        distanceMiles: 1.2
      }),
      new ComparableProperty({
        address: "456 Comp St C",
        propertyType: "Single Family",
        beds: 3,
        baths: 2,
        squareFeet: 1400,
        salePrice: 280000,
        pricePerSqft: 200,
        distanceMiles: 0.5
      })
    ];
  });

  test('should calculate ARV from comps correctly', () => {
    const [arv, details] = analyzer.calculateArvFromComps(propertyData, comps);
    
    // ARV should be square footage × average price per square foot
    const avgPricePerSqft = (200 + 188.89 + 200) / 3;
    const expectedArv = propertyData.squareFeet * avgPricePerSqft;
    
    expect(arv).toBeCloseTo(expectedArv, 0);
    expect(details.avgPricePerSqft).toBeCloseTo(avgPricePerSqft, 2);
    expect(details.compsCount).toBe(3);
  });

  test('should analyze flip investment correctly', () => {
    // Set ARV manually
    propertyData.arv = 300000;
    
    const analysis = analyzer.analyzeFlipInvestment(propertyData, comps);
    
    expect(analysis.totalInvestment).toBe(265000);
    expect(analysis.expectedProfit).toBe(20000);
    expect(analysis.expectedRoi).toBeCloseTo(7.55, 2);
    
    // Should include confidence score and risk factors
    expect(analysis.confidenceScore).toBeDefined();
    expect(analysis.riskFactors).toBeDefined();
  });

  test('should handle empty comps array when calculating ARV', () => {
    const [arv, details] = analyzer.calculateArvFromComps(propertyData, []);
    
    expect(arv).toBe(0);
    expect(details.error).toBeDefined();
  });
});