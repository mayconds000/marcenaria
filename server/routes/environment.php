<?php
require_once 'lib/ads/environment.php';

$app->get('/environments/:id', function($id) {
    $environments = new Environment;
    formatJson($environments->fetchAll($id));
});

$app->get('/environment/:id', function($id){
    $environments = new Environment;
    formatJson($environments->fetch($id));
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
