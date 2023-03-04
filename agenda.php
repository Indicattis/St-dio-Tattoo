<!-- <?php

if (isset($_POST['submit_1'])) {
    include_once('./data/config.php');

    $data = $_POST['calendar--current--date'];
    $nome = $_POST['calendar--user--name'];
    $contato = $_POST['calendar--user--contact'];
    $local = $_POST['scheduling--select--body'];
    $turno = $_POST['turno'];
    $observacao = $_POST['form--obs--input'];
    $projeto = $_POST['scheduling--project--img'];
    $data_envio = date('Y-m-d');

    $result = mysqli_query($conect, "INSERT INTO requisições(req_data, req_nome, req_contato, req_local, req_turno, req_obs, req_projeto, req_data_sol) 
        VALUES('$data','$nome','$contato', '$local','$turno' ,'$observacao', '$projeto', '$data_envio')");
}
?> -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/a0544da68a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/calendar.css">
    <link rel="stylesheet" href="./css/el.css">
    <title>Agendamento</title>
</head>
<body>
    
    <header id="header--menu">
        <nav class="header--menu--navbar" id="navbar--first">
            <main>
                <div id="header--menu--navbar--title">
                    <h3>William Boeira Tattoo</h3>
                </div>
            <div class="header--menu--navbar--network">
                <ul>
                    <li><i class="	fab fa-facebook-f"></i></li>
                    <a href="https://www.instagram.com/williamboeira_tattoo/"><li class="midiaItem"><i class="	fab fa-instagram"></i></li></a>
                    <li><i class="	fab fa-twitter"></i></li>
                    <li><i class="	fab fa-youtube"></i></li>
                </ul>
            </div>
        </main>
        </nav>
        <nav class="header--menu--navbar" id="navbar--second">
            <main>
                <ul>
                    <li><a href="./index.html"> Início</a></li>
                    <li><a href="./agenda.php"> Agenda</a></li>
                    <li><a href="#"> Artes</a></li>
                    <li><a href="#"> Contato</a></li>
                    <li><a href="./studio.html">Tattoo Studio </a><h4 class="span--gold">EXPERIMENTE!</h4></li>
                </ul>
                <div class="header--menu--navbar--acount toggle--mod--sign">
                    <a class="toggle--mod--sign" href="#">Conta</a>
                    <i class="fa-sharp fa-solid fa-user toggle--mod--sign"></i>
                </div>
            </main>
        </nav>
        <nav class="header--menu--navbar--mobile">
            <div class="menu--mobile">
                <section class="menu--mobile--acount">
                        <div>
                            <a href="">
                            <i class="fa-solid fa-user"></i>
                            </a>
                        </div>
                        <div>
                            <p>João Indicatti</p>
                            <p>joao.staehler@gmail.com</p>
                        </div>
                        <div>
                            <a href="">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            </a>
                        </div>
                </section>
                <section class="menu--mobile--navbar">
                    <div>
                        <a href="./studio.html">
                        <legend>Tattoo Stúdio</legend>
                        </a>
                    </div>
                    <div>
                        <a href="./agenda.php">
                        <legend>Agendamento</legend>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                        <legend>Artes</legend>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                        <legend>Contato</legend>
                        </a>
                    </div>
                </section>
                <section class="menu--mobile--links">
                    <div>
                        <a href="./index.html">
                            <i class="fa-solid fa-house"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i class="fa-regular fa-moon"></i>
                        </a>
                    </div>
                    <div class="menu--mobile--toggle">
                        <a href="#" class="menu--mobile--toggle">
                            <i class="fa-solid fa-bars menu--mobile--toggle"></i>
                        </a>
                    </div>
                </section>
            </div>
        </nav>
    </header>
    <section id="calendar">
        <main>
            <header id="calendar--header">
                <a href="#" id="prevMonth"><i class="fa-regular fa-circle-left"></i></a>
                <h2 id="calendar--current--month">Janeiro</h2>
                <a href="#" id="nextMonth"><i class="fa-regular fa-circle-right"></i></a>
            </header>
            <table id="calendar--days">
                <thead>
                    <tr>
                        <td>Dom</td>
                        <td>Seg</td>
                        <td>Ter</td>
                        <td>Qua</td>
                        <td>Qui</td>
                        <td>Sex</td>
                        <td>Sab</td>
                    </tr>
                </thead>
                <tbody id="calendar--show--days">
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                    <tr>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                        <td class="calendar--day"></td>
                    </tr>
                </tbody>
            </table>
            <div id="calendar--current--year">

            </div>
        </main>
    </section>
    <section id="web--modals">
        <section id="modal--scheduling--bakground">
            <section id="modal--scheduling">
                <legend>Agendamento</legend>
                <i class="fa-solid fa-xmark" id="modal--scheduling--close"></i>
                <form action="" method="POST">
                    <section id="calendar--info--day">
                        <label>Informações de Horário: </label>
                        <input type="date" id="calendar--current--date" name="calendar--current--date">
                        <div>
                            <span>Manhã</span>
                            <span>Tarde</span>
                            <span>Noite</span>
                        </div>
                        <div>
                        <!-- INPUTS PARA SELEÇÃO DE TURNO -->
                            <label for="turn1"><i class="fa-solid fa-mug-saucer radio--ico" id="radio--ico--1"></i></label>
                            <input type="radio" name="turno" value="Manhã" id="turn1">

                            <label for="turn2"><i class="fa-solid fa-sun radio--ico" id="radio--ico--2"></i></label>
                            <input type="radio" name="turno" value="Tarde" id="turn2">

                            <label for="turn3"><i class="fa-solid fa-moon radio--ico" id="radio--ico--3"></i></label>
                            <input type="radio" name="turno" value="Noite" id="turn3">
                        </div>
                    </section>
                    <section id="calendar--info--user">
                        <label for="">Informações de Contato: </label>
                        <input class="input--mirror" type="text" placeholder="Nome" required id="calendar--user--name" name="calendar--user--name">
                        <input class="input--mirror" type="tel" placeholder="Telefone" required id="calendar--user--contact" name="calendar--user--contact">
                    </section>
                    <section id="calendar--info--tattoo">
                        <label>Informações da Tatuagem: </label>
                        <label class="tag--publicity" for="">Anexe sua Arte aqui!<i class="fa-solid fa-arrow-down"></i></label>
                        <div>
                            <select name="scheduling--select--body" class="select--middle" id="scheduling--select--body">
                                <option value="default" selected>Selecione a parte do corpo da Tatuagem</option>
                                <option value="Braço Posterior">Braço Posterior</option>
                                <option value="Braço Inferior">Braço Inferior</option>
                                <option value="Antebraço Posterior">Antebraço Posterior</option>
                                <option value="Antebraço Inferior">Antebraço Inferior</option>
                                <option value="Tronco">Tronco</option>
                                <option value="Costas">Costas</option>
                                <option value="Perna">Perna</option>
                                <option value="Panturrilha">Panturrilha</option>
                                <option value="Coxa Frontal">Coxa Frontal</option>
                                <option value="Coxa Trazeira">Coxa Trazeira</option>
                                <option value="Pé">Pé</option>
                                <option value="Ombro">Ombro</option>
                                <option value="Nuca">Nuca</option>
                                <option value="Rosto">Rosto</option>
                            </select>
                            <i id="import--project" class="fa-solid fa-file-import i--submit"></i>
                        </div>
                        <img class="card-img-top" src="<?=$foto?>" id="fotopreview">
                        <input type="text" placeholder="Observação" class="form--obs--input" name="form--obs--input">
                    
                        
                        <button class="button--download" type="submit" id="submit_1" name="submit_1">Confirmar <i class="fa-solid fa-check"></i></button>
                        
                    </section>
                    <div class="calendar--button" id="calendar--next--button">
                        <p>Next <i class="fa-solid fa-forward"></i></p>
                    </div>
                    <div class="calendar--dots">
                        <i class="fa-solid fa-circle" id="dot--1"></i>
                        <i class="fa-solid fa-circle" id="dot--2"></i>
                        <i class="fa-solid fa-circle" id="dot--3"></i>
                    </div>
                    
                    <!-- INPUT DISPLAY NONE PARA ARMAZENAR IMAGEM -->
                    <input type="file" id="projectSend" name="scheduling--project--img">
                </form>
            </section>
        </section>  
    </section>
    
</body>
<script type="text/javascript" src="./js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="./js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="./js/slick.min.js"></script>
<script src="./js/calendar.js"></script>
</html>