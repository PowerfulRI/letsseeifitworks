# REAL ESTATE ANALYZER - DEVELOPMENT GUIDE

## Commands
- Start application: `npm start`
- Development mode: `npm run dev`
- Run all tests: `npm test`
- Run single test: `npx jest path/to/test.js`
- Test puppeteer: `node test-puppeteer.js`
- Run demo: `node final-demo.js`

## Code Style
- **Imports**: Group by type (built-in, external, internal) with blank line separating groups
- **Classes**: Class and filenames use PascalCase (PropertyData, ComparableProperty)
- **Variables/Functions**: Use camelCase, descriptive names (calculateArvFromComps)
- **Error handling**: Use try/catch blocks with specific error messages
- **Async code**: Use async/await pattern, avoid nested callbacks
- **Documentation**: JSDoc style comments for all functions/methods
- **Indentation**: 2 spaces
- **API calls**: Centralize in api/ directory with error handling

## Architecture
- Models in src/models/
- API interfaces in src/api/
- Web scraping in src/web/
- Utility functions in src/utils/
- Output files go to data/ directory