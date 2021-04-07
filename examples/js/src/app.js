import { docsearch } from '@docsearch/js';

import '@docsearch/css';

docsearch({
  container: '#docsearch',
  indexName: 'cfaa',
  appId: 'QPBQ67WNIG',
  apiKey: 'b590ae1153bf574215ca1605c19eb1fe',
  searchParameters: {
    hitsPerPage: 100,
  },
});
