<?php
include_once('./config.php');
// header('location:../dashboard.php');

    $id = $_POST['reqId'];
    $req_data = $_POST['reqDate'];
    $req_nome = $_POST['clientName'];
    $req_contato = $_POST['clientContact'];
    $req_turno = $_POST['reqTurn'];

    $sqlUpdate = "UPDATE requisições SET 
    req_data = '$req_data', 
    req_nome = '$req_nome', 
    req_contato = '$req_contato',
    req_turno = '$req_turno'
    WHERE id = $id";

$update = $conect->query($sqlUpdate);

if($update) {
    echo "<legend>Aviso!</legend>
    <div class='request--waiting--info'>
    <p>Dados Atualizados!</p>
    <button class='button--download request--waiting--button' onclick='closeSpan()'> OK </button>
    </div>";
}
else {
    echo "<legend>Aviso!</legend>
    <div class='request--waiting--info'>
    <p>Falha ao realizar o update!</p>
    <button class='button--download request--waiting--button'> OK </button>
    </div>";
}
?>
<!-- 
clientName: clientName,
clientContact: clientContact,
reqDate: reqDate,
reqId: reqId,
reqTurn: reqTurn,
-->