<?php
require_once 'lib/ads/buy.php';

$app->get("/buy", function() {
    $buy = new Buy;
    $data = $buy->fetchAll();
    return formatJson($data);

});

$app->post("/buy", function() use($app) {
    $data = $app->request()->getBody();
    $data = json_decode($data);
    $buy = new Buy;
    $data = $buy->insert($data);
    return formatJson($data);
});

$app->delete("/buy/:id", function($id) {
    $buy = new Buy;
    $data = $buy->delete($id);
    return formatJson($data);
});

$app->put("/buy", function() use($app) {
    $data = $app->request()->getBody();
    $data = json_decode($data);
    $buy = new Buy;
    $data = $buy->update($data);
    return formatJson($data);
});
