<?php
require_once 'lib/ads/supplier.php';
//getAll
$app->get('/supplier', function() {
    $cmrs = new Supplier;
    $data = $cmrs->fetchAll();
    formatJson($data);
});

//New
$app->post('/supplier', function() use($app) {
    $data = $app->request->getBody();
    $data = json_decode($data);
    $cmr = new Supplier;
    $data = $cmr->insert($data);
    return formatJson($data);
});
//update
$app->put('/supplier', function() use($app) {
    $data = $app->request()->getBody();
    $data = json_decode($data);
    $cmr = new Supplier;
    $data = $cmr->update($data);
    return formatJson($data);
});
//delete
$app->delete('/supplier/:id', function($id) {
    $cmr = new Supplier;
    $data = $cmr->delete($id);
    return formatJson($data);
});
