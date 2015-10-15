<?php
require_once 'lib/ads/product.php';

$app->get('/products/:order', function($order) {
    $products = new Product;
    formatJson($products->fetchAll($order));
});

$app->get('/product/:id', function($id){
  $product = new Product;
  formatJson($product->fetch($id));
});

$app->post('/product', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $product = new Product;
    formatJson($product->insert($data));
});

$app->delete('/product/:id', function($id) {
    $product = new Product;
    formatJson($product->delete($id));
});

$app->put('/product/:id', function($id) use($app) {
    $data = json_decode($app->request()->getBody());
    $product = new Product;
    formatJson($product->update($data));
});
