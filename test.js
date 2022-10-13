import {describe, expect, test} from '@jest/globals';
import {helloWorld} from '../main';

describe('sum module', () => {
  test('returns the string hello world welcome to typescript', () => {
    expect(hello()).toBe('Hello World! Welcome to TypeScript');
  });
});

// QUnit.test('whole <html>', function(assert) {
//    // Whole html tags
//    const htmlTags = document.getElementsByTagName('html');
//    const expectedStyles = {
//       'font-family': 'Arial',
//    };
//    const htmlStyles = window.getComputedStyle(htmlTags[0], null);
 
//    for (const expectedStyle in expectedStyles) {
//       const value = htmlStyles.getPropertyValue(expectedStyle);
 
//       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of <figcaption> tag`);
//    }
//  });

// QUnit.test('h1 styling', function(assert) {
//   // Expect 1 h1 tag.
//   const h1Tags = document.getElementsByTagName('h1');
//   const expectedStyles = {
//      'font-family': 'Arial',
//   };
//   const h1Styles = window.getComputedStyle(h1Tags[0], null);

//   for (const expectedStyle in expectedStyles) {
//      const value = h1Styles.getPropertyValue(expectedStyle);

//      assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of <h1> tag`);
//   }
// });

// QUnit.test('figcaption styling', function(assert) {
//      // Expect figcaption tag.
//      const figTags = document.getElementsByTagName('figcaption');
//      const expectedStyles = {
//         'font-style' : 'italic',
//      };
//      const figStyles = window.getComputedStyle(figTags[0], null);
   
//      for (const expectedStyle in expectedStyles) {
//         const value = figStyles.getPropertyValue(expectedStyle);
   
//         assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of <figcaption> tag`);
//      }
//    });
