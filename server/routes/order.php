<?php
require_once 'lib/ads/order.php';

$app->get('/orders', function() use($app){
    $orders = new Order;
    $data = $orders->fetchAll();
    formatJson($data);
});

$app->get('/orders/customer/:id', function($id){
  $order = new Order;
  $data = $order->fetchByCustomer($id);
  formatJson($data);
});

$app->get('/order/:id', function($id) {
    $order = new Order;
    formatJson($order->fetch($id));
});

$app->post('/order', function() use($app) {
    $data = json_decode($app->request()->getBody());
    $order = new Order;
    formatJson($order->insert($data));
});

$app->delete('/order/:id', function($id) use($app) {
    $order = new Order;
    formatJson($order->delete($id));
});

$app->put('/order/:id', function($id) use($app) {
    $data = json_decode($app->request()->getBody());
    $data->idOrder = $id;
    $order = new Order;
    formatJson($order->update($data));
});
