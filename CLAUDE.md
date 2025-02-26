# REAL ESTATE ANALYZER - PROJECT GUIDE

## Project Overview
The Real Estate Flip Analyzer is a comprehensive tool for evaluating residential property flip investments. It provides data-driven investment analysis through web scraping, comparable property assessment, and AI-powered insights to help investors make informed decisions.

## Project Goals
1. Automate real estate flip investment analysis with accurate financial projections
2. Gather market data through web scraping for comparable properties
3. Calculate After Repair Value (ARV) based on comparable property analysis
4. Provide risk assessment and confidence scoring for investment decisions
5. Generate professional reports with AI-powered insights
6. Offer a user-friendly CLI experience for property investors

## Development Commands
- Start application: `npm start`
- Development mode: `npm run dev`
- Run all tests: `npm test`
- Run single test: `npx jest path/to/test.js`
- Test puppeteer: `node test-puppeteer.js`
- Run demo: `node final-demo.js`

## Architecture
- **Models** (`src/models/`): Data structures for properties and analysis results
- **API clients** (`src/api/`): Interface with external APIs (Claude, OpenAI, ATTOM)
- **Web scraping** (`src/web/`): Property data collection from websites
- **Utilities** (`src/utils/`): Analysis algorithms and export functionality
- **Tests** (`tests/`): Unit tests for core components
- **Data storage** (`data/`): Output files for reports and analysis results

## Core Features
1. **Property Data Collection**: Input forms and web scraping for property information
2. **Comparable Property Analysis**: Find and validate similar properties for valuation
3. **Investment Metrics**: Calculate ARV, ROI, profit projections, and equity creation
4. **Risk Assessment**: Evaluate investment risks with confidence scoring
5. **AI Insights**: Generate investment recommendations using Claude/OpenAI
6. **Comprehensive Reporting**: Export analysis in multiple formats (Excel, JSON, HTML, AI-generated)

## Code Style
- **Imports**: Group by type (built-in, external, internal) with blank line separating groups
- **Classes**: Class and filenames use PascalCase (PropertyData, ComparableProperty)
- **Variables/Functions**: Use camelCase, descriptive names (calculateArvFromComps)
- **Error handling**: Use try/catch blocks with specific error messages
- **Async code**: Use async/await pattern, avoid nested callbacks
- **Documentation**: JSDoc style comments for all functions/methods
- **Indentation**: 2 spaces
- **Testing**: Jest for unit testing core functionality

## Development Roadmap
1. **Phase 1** ✅ Core functionality and data models
   - Property data structures and financial calculations
   - Web scraping from Zillow and Redfin
   - Basic investment analysis and ARV calculation
   
2. **Phase 2** ✅ Enhanced analysis and AI integration
   - Comparable property validation and filtering
   - Risk assessment and confidence scoring
   - AI-powered insights with Claude API
   - Multiple export formats (Excel, HTML, JSON)
   
3. **Phase 3** 🔄 Platform expansion and user experience
   - Create web-based UI (React/Next.js)
   - Add user accounts and saved properties
   - Implement property portfolio analysis
   - Add market trend analysis with historical data
   
4. **Phase 4** 📋 Advanced features
   - Machine learning for property valuation
   - Neighborhood and market analysis
   - Investment strategy recommendations
   - Mobile app development

## Improvement Suggestions
1. **Data Sources**: Add more property listing sites (Trulia, Realtor.com)
2. **Machine Learning**: Implement ML model for more accurate ARV predictions
3. **Visualization**: Add charts and graphs for investment metrics
4. **User Interface**: Develop web/mobile interface beyond CLI
5. **Data Storage**: Add database for storing property analyses and user data
6. **Webhooks**: Implement real-time property alerts for good investment opportunities
7. **Geographic Analysis**: Add map visualizations and neighborhood scoring
8. **Mortgage Calculator**: Include financing options and loan analysis
9. **Batch Processing**: Enable analysis of multiple properties simultaneously
10. **Cloud Deployment**: Deploy as a cloud service with API endpoints