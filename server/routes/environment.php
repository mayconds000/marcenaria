<?php
require_once 'lib/ads/environment.php';

$app->get('/environments/:order', function($order) {
    $environments = new Environment;
    formatJson($environments->fetchAll($order));
});

$app->post('/environment', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $environment = new Environment;
    formatJson($environment->insert($data));
});

$app->delete('/environment/:id', function($id) {
    $environment = new Environment;
    formatJson($environment->delete($id));
});

$app->put('/environment', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $environment = new Environment;
    formatJson($environment->update($data));
});
