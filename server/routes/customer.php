<?php
require_once 'lib/ads/customer.php';
//getAll
$app->get('/customers', function() {
    $cmrs = new Customer;
    $data = $cmrs->fetchAll();
    formatJson($data);
});
//getById
$app->get('/customer/:id', function($id) {
    $cmr = new Customer;
    $data = $cmr->fetch($id);
    return formatJson($data);
});
//New
$app->post('/customer', function() use($app) {
    $data = $app->request()->getBody();
    $data = json_decode($data);
    $cmr = new Customer;
    $data = $cmr->insert($data);
    return formatJson($data);
});
//update
$app->put('/customer/:id', function($id) use($app) {
    $data = json_decode($app->request()->getBody());
    $cmr = new Customer;
    $data = $cmr->update($data);
    return formatJson($data);
});
//delete
$app->delete('/customer/:type/:id', function($type, $id) use($app) {
    $cmr = new Customer;
    $data = $cmr->delete($type, $id);
    return formatJson($data);
});
