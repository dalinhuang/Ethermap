var couchdb = require('../lib/couchdb.js');
var nano = require('nano')('http://localhost:5984')
var alice = nano.use('alice');


// var obj = {hello: 'nihao'};
// couchdb.insert('alice', obj, 'ttta', (err, res)=>{
//   // couchdb.delete('alice', obj, 'ttta', (err, res)=>{
//   //   console.log(err)
//   //   console.log(res)
//   // })
//   console.log(err)
//   console.log(res)
// })
// alice.get('myid', { revs_info: true }, function(err, body) {
//   console.log(body);
// });
//
// alice.list({keys:['rabbit']}, (err, res)=>{
//   console.log(res.rows[0].value.rev)
// })

// alice.get('rabbit', '6-51556fd096b6dd8ca32d3882ab6e8efe', (err, res)=>{
//   console.log(err)
// })
// alice.list({include_docs: true}, function(err, body) {
//   if (!err) {
//     body.rows.forEach(function(doc) {
//       // output eacj document's body
//       console.log(doc.doc);
//     });
//   }
// });

// alice.list({include_docs: true}, function(err, body) {
//   if (!err) {
//     body.rows.forEach(function(doc) {
//       // output eacj document's body
//       console.log(doc.doc);
//     });
//   }
// });
//
// alice.list(function(err, body) {
//   if (!err) {
//     body.rows.forEach(function(doc) {
//       console.log(doc);
//     });
//   }
// });
alice.get('ttta', {
  revs_info: true
}, function(err, res) {
  console.log(err)
  console.log(res)
});
