<?php
require_once 'lib/ads/payment.php';

$app->get('/payment/:order', function($order){
  $payment = new Payment;
  $data = $payment->fetch($order);
  formatJson($data);
});

$app->post('/payment', function() use($app) {
  $data = json_decode($app->request()->getBody());
  $payment = new Payment;
  formatJson($payment->insert($data));
});

$app->delete('/payment/:id', function($id) {
  $payment = new Payment;
  formatJson($payment->delete($id));
});

$app->put('/payment/:id', function($id) use($app){
  $data = json_decode($app->request()->getBody());
  $data->idPayment = $id;
  $payment = new Payment;
  formatJson($payment->update($data));
});

?>
