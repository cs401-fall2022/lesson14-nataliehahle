// QUnit.test('h1 styling', function(assert) {
//   // Expect 1 h1 tag.
//   const h1Tags = document.getElementsByTagName('h1');
//   const expectedStyles = {
//      'font-family': 'Roboto, Helvetica, sans-serif',
//      'font-size': '16px',
//      color: 'rgb(68, 68, 68)',
//   };
//   const h1Styles = window.getComputedStyle(h1Tags[0], null);

//   for (const expectedStyle in expectedStyles) {
//      const value = h1Styles.getPropertyValue(expectedStyle);

//      assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of <h1> tag`);
//   }
// });

// QUnit.test('Background colors', function(assert) {
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offerTitle')[0], null).backgroundColor, 
//                'rgb(0, 179, 179)', 'Offer title background color of rgb(0, 179, 179)');
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offerContents')[0], null).backgroundColor, 
//                'rgb(250, 250, 250)', 'Offer contents background color of rgb(250, 250, 250)');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('table')[0], null).backgroundColor, 
//                'rgb(255, 255, 255)', 'Table background of rgb(255, 255, 255)');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('table')[0], null).backgroundColor, 
//                'rgb(255, 255, 255)', 'Table background of rgb(255, 255, 255)');
// });

// QUnit.test('Display style for offer divs', function(assert) {
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offer')[0], null).display, 
//                'inline-block', 'First offer div style of inline-block');
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offer')[1], null).display, 
//                'inline-block', 'Second offer div style of inline-block');
// });

// QUnit.test('Border radii', function(assert) {
//   const offerClass = document.getElementsByClassName('offer');
//   const offerStyles = window.getComputedStyle(offerClass[0], null);

//   const offerExpectedStyles = {
//      'border-bottom-right-radius': '1px',
//      'border-bottom-left-radius': '1px',
//      'border-top-right-radius': '1px',
//      'border-top-left-radius': '1px',
//   };

//   for (const expectedStyle in offerExpectedStyles) {
//      const value = offerStyles.getPropertyValue(expectedStyle);

//      assert.equal(value, offerExpectedStyles[expectedStyle], `${expectedStyle} of offer class`);
//   }

//   const offerContentsClass = document.getElementsByClassName('offerContents');
//   const offerContentsStyles = window.getComputedStyle(offerContentsClass[0], null);

//   const offerContentsExpectedStyles = {
//      'border-bottom-right-radius': '2px',
//      'border-bottom-left-radius': '2px',
//      'border-top-right-radius': '0px',
//      'border-top-left-radius': '0px',
//   };

//   for (const expectedStyle in offerContentsExpectedStyles) {
//      const value = offerContentsStyles.getPropertyValue(expectedStyle);

//      assert.equal(value, offerContentsExpectedStyles[expectedStyle], `${expectedStyle} of offerContents class`);
//   }
// });

// QUnit.test('Box shadows', function(assert) {
//   const expectedBoxShadowStyle = 'rgb(221, 221, 221) 0px 2px 2px 0px, rgb(221, 221, 221) 0px 0px 5px 0px';

//   // Check for box shadow on desired elements
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offer')[0], null).boxShadow, 
//                expectedBoxShadowStyle, 'offer class box shadow of ' + expectedBoxShadowStyle);
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('table')[0], null).boxShadow, 
//                expectedBoxShadowStyle, 'table  box shadow of ' + expectedBoxShadowStyle);

//   // Check for no box shadow on one other element
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('container')[0], null).boxShadow, 
//                'none', 'No box shadow for container class');
// });

// QUnit.test('Margins and padding', function(assert) {
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('container')[0], null).margin, 
//                '5px', 'Margin for container class');
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offer')[0], null).margin, 
//                '4px', 'Margin for offer class');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('th')[0], null).margin, 
//                '0px', 'Margin for <th>');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('td')[0], null).margin, 
//                '0px', 'Margin for <td>');

//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offerTitle')[0], null).padding, 
//                '15px', 'Padding for offerTitle class');
//   assert.equal(window.getComputedStyle(document.getElementsByClassName('offerContents')[0], null).padding, 
//                '20px', 'Padding for offerContents class');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('th')[0], null).padding, 
//                '10px', 'Padding for <th>');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('td')[0], null).padding, 
//                '20px 10px', 'Padding for <td>');
// });

// QUnit.test('<th> font colors, sizes, and weights', function(assert) {
//   const thTags = document.getElementsByTagName('th');
//   const thStyles = window.getComputedStyle(thTags[0], null);
//   const expectedThStyles = {
//      'font-size': '12px',
//      color: 'rgb(119, 119, 119)',
//   };

//   for (const expectedStyle in expectedThStyles) {
//      const value = thStyles.getPropertyValue(expectedStyle);

//      assert.equal(value, expectedThStyles[expectedStyle], `${expectedStyle} of <th> tag`);
//   }
//   assert.ok(thStyles.fontWeight > 400, 'Bold font weight for <th>.');
// });

// QUnit.test('<td> font colors, sizes, and weights', function(assert) {
//   const tdTags = document.getElementsByTagName('td');
//   const tdStyles = window.getComputedStyle(tdTags[0], null);

//   const expectedTdStyles = {
//      'font-size': '13px', 
//      color: 'rgb(68, 68, 68)',
//   };

//   for (const expectedStyle in expectedTdStyles) {
//      const value = tdStyles.getPropertyValue(expectedStyle);

//      assert.equal(value, expectedTdStyles[expectedStyle], `${expectedStyle} of <td> tag`);
//   }
//   assert.ok(tdStyles.fontWeight < 400, 'Ligher font weight for <td>.');
// });

// QUnit.test('Text alignment', function(assert) {
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('h1')[0], null).textAlign, 
//                'center', '<h1> text align is center');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('table')[0], null).textAlign, 
//                'center', 'Offer <table> text align is center');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('th')[0], null).textAlign, 
//                'left', '<th> text align is left');
//   assert.equal(window.getComputedStyle(document.getElementsByTagName('td')[0], null).textAlign, 
//                'left', '<td> text align is center');
// });

// QUnit.test('finalValue class styling', function(assert) {
//   const finalValueStyles = window.getComputedStyle(document.getElementsByClassName('finalValue')[0], null);

//   assert.ok(finalValueStyles.fontWeight > 400, 'Bold font weight for finalValue class.');
//   assert.equal(finalValueStyles.color, 'rgb(34, 34, 255)', 'Text color of rgb(34, 34, 255) for finalValue class');
// });

