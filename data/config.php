<?php
$dbHost = 'LocalHost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'william--boeira--tattoo';

$conect = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conect->connect_errno) {
    echo "Erro";
}
