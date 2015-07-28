<?php
require_once 'lib/ads/product_order.php';

$app->get('/products/:environment', function($environment) {
    $products = new ProductOrder;
    formatJson($products->fetchAll($environment));
});

$app->post('/product', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $product = new ProductOrder;
    formatJson($product->insert($data));
});

$app->delete('/product/:id', function($id) {
    $product = new ProductOrder;
    formatJson($product->delete($id));
});

$app->put('/product', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $product = new ProductOrder;
    formatJson($product->update($data));
});
