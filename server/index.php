<?php
ini_set('display_errors', 1);
session_start();

header('Content-Type: text/html; charset=utf-8');

require_once 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
//require_once 'config/autoload.php';
require_once 'config/config.php';
require_once 'config/DB.php';


$app = new \Slim\Slim(array(
    'debug' => true
));

$app->contentType( " application/json" );

function formatJson($obj) {
    echo json_encode($obj);
}

require_once 'routes/customer.php';
require_once 'routes/supplier.php';
require_once 'routes/buy.php';

$app->run();
