<?php
require_once 'lib/ads/supplier.php';
$app->get('/suppliers', function() {
  $cmrs = new Supplier;
  $data = $cmrs->fetchAll();
  formatJson($data);
});
$app->post('/supplier', function() use($app) {
  $data = json_decode($app->request->getBody());
  $cmr = new Supplier;
  return formatJson($cmr->insert($data));
});
$app->put('/supplier/:id', function($id) use($app) {
  $data = json_decode($app->request()->getBody());
  $cmr = new Supplier;
  return formatJson($cmr->update($data));
});
$app->delete('/supplier/:id', function($id) {
  $cmr = new Supplier;
  return formatJson($cmr->delete($id));
});
