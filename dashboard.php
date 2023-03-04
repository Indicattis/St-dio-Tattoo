<?php
    include_once('./data/config.php');
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./docs/flickity.css" media="screen">
        <link rel="stylesheet" href="./css/el.css">
        <link rel="stylesheet" href="./css/admin.css">
        <link rel="stylesheet" href="./css/calendar.css">
        <script src="https://kit.fontawesome.com/a0544da68a.js" crossorigin="anonymous"></script>
        <title>Dashboard</title>
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
    <section class="dashboard--content">
        
                <span id="request--waiting">
                    <div id="request--waiting--gif">
                        
                    </div>
                </span>
            <main>
                <div class="dashboard--change">
                    <div class="dashboard--change--toggle">
                    </div>
                    <i class="fa-solid fa-list option" id="change--list"></i>
                    <i class="fa-solid fa-calendar-days option" id="change--calendar"></i>
                </div>
                <section class="dashboard--request--panel">
                    
                <table class="request--list">
                        <thead>
                            <tr class="request--item--header">
                                <td>ID</td>
                                <td>NOME</td>
                                <td>DATA</td>
                                <td>TURNO</td>
                                <td>LOCAL</td>
                                <td>
                                    <button class=""><i class="fa-solid fa-arrow-up-wide-short"></i></button>
                                </td>
                            </tr>
                        </thead>
                        <tbody class="request--list">
                    <?php
                    $consult = "SELECT * FROM requisições";
                    if ($result = mysqli_query($conect, $consult)) {
                        $id = array();
                        $req_data = array();
                        $req_nome = array();
                        $req_contato = array();
                        $req_turno = array();
                        $req_local = array();
                        $req_projeto = array(); 
                        $req_obs = array();
                        $req_data_sol = array();
                        $i = 0;

                        while ($reg = mysqli_fetch_assoc($result)) {
                            $id[$i] = $reg['id'];
                            $req_data[$i] = $reg['req_data'];
                            $req_nome[$i] = $reg['req_nome'];
                            $req_contato[$i] = $reg['req_contato'];
                            $req_turno[$i] = $reg['req_turno'];
                            $req_local[$i] = $reg['req_local'];
                            $req_projeto[$i] = $reg['req_projeto'];
                            $req_obs[$i] = $reg['req_obs'];
                            $req_data_sol[$i] = $reg['req_data_sol'];
                    ?>
                            <tr class="request--item--list" id="">
                                <td><?php echo $id[$i]; ?></td>
                                <td><?php echo $req_nome[$i]; ?></td>
                                <td><?php echo Date("d/m/Y",strtotime($req_data[$i])); ?></td>
                                <td><?php echo $req_turno[$i]; ?></td>
                                <td><?php echo $req_local[$i]; ?></td>
                                <td>
                                    <button class="button request--item--show--info">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    
                                </td>
                            </tr>
                            <tr class="request--item--edit <?php echo $i;?>">
                                <form action="">
                                    
                                    <td>
                                        <ul>
                                            <li>
                                                <label for="">Código da Requicição: </label>
                                                <input type="text" id="req--id <?php echo $i;?>" disabled value="<?php echo $id[$i]; ?>">
                                            </li>
                                            <li>
                                                <label for="">Data de Criação</label>
                                                <input class="input--date" type="date" name="" id="" disabled value="<?php echo $req_data_sol[$i]; ?>">
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <label>Nome do Cliente: </label>
                                                <input class="input--text" type="text" id="client--name <?php echo $i;?>" value="<?php echo $req_nome[$i]; ?>">
                                            </li>
                                            <li>
                                                <label>Contato do Cliente: </label>
                                                <input class="input--text"  type="text" id="client--contact <?php echo $i;?>" value="<?php echo $req_contato[$i]; ?>">
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <label>Data agendada: </label><br>
                                                <input class="input--date" type="date" id="req--date <?php echo $i;?>" value="<?php echo $req_data[$i]; ?>">
                                            </li>
                                            <li>
                                                <label>Turno Preferente: </label>
                                                <select name="" id="req--turn <?php echo $i;?>" class="select--small">
                                                    <option value="<?php echo $req_turno[$i]; ?>" selected><?php echo $req_turno[$i]; ?></option>
                                                    <option value="Manhã">Manhã</option>
                                                    <option value="Tarde">Tarde</option>
                                                    <option value="Noite">Noite</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <label for="">Observações: </label>
                                                <br>
                                                <input type="text" disabled value="<?php echo $req_obs[$i]; ?>">
                                            </li>
                                            <li>
                                                <label for="">Preço proposto: <span id="request--value--show"></span></label>
                                                <input class="request--item--price" id="req--price" type="text" value="R$,00">
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <label for="">Imagem do Projeto: </label>
                                                <br>
                                                <button class="button"><i class="fa-solid fa-file"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <button class="button--download"><i class="fa-solid fa-check"></i></button>
                                            </li>
                                            <li>
                                                <button type="button" class="button--submit request--item--edit--submit"><i class="fa-regular fa-pen-to-square"></i></button>
                                            </li>
                                            <li>
                                                <button class="button--download checked"><i class="fa-solid fa-xmark"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </form>
                            </tr>
                            <?php
                        $i++;
                        }
                    }
                    ?>
                    </tbody>
                </table>
                    <div id="request--calendar">
                        <header id="calendar--header">
                            <a href="#" id="dashboard--prevMonth"><i class="fa-regular fa-circle-left"></i></a>
                            <h2 id="dashboard--calendar--current--month">Janeiro</h2>
                            <a href="#" id="dashboard--nextMonth"><i class="fa-regular fa-circle-right"></i></a>
                        </header>
                        <table id="dashboard--calendar--days">
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
                            <tbody id="dashboard--calendar--show--days">
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
                        
                        <div id="dashboard--calendar--current--year">
    
                        </div>
                    </div>
                </section>
            </main>
    </section>
    <section class="dashboard--item--edit--form">
        <main>
        <!-- <section class="request--item--edit">
            <form method="POST" action="./data/updateRequest.php">
                <?php
                        
                // if(!empty($_GET['id'])){
                //     $id = $_GET['id'];

                //     $sqlSelect = "SELECT * FROM agendamentos WHERE id = $id";
                //     $result = $conect->query($sqlSelect);

                //     if($result->num_rows > 0){

                //         while($user_data = mysqli_fetch_assoc($result)){

                //             $id = $user_data['id'];
                //             $req_data = $user_data['req_data'];
                //             $req_nome = $user_data['req_nome'];
                //             $req_contato = $user_data['req_contato'];
                //             $req_turno = $user_data['req_turno'];
                //             $req_local = $user_data['req_local'];
                //             $req_projeto = $user_data['req_projeto'];
                //             $req_obs = $user_data['req_obs'];

                //         }
                //     }
                //     else {
                //         header('location:dashboard.php');
                //     }
                // }
                ?>
                <input type="hidden" name="id" id="" value="<?php echo $id?>">
                <input type="date" name="req_data" id="" placeholder="" value="<?php echo $req_data ?>">

                <input type="text" name="req_nome" id="" placeholder="" value="<?php echo $req_nome ?>">

                <input type="text" name="req_contato" id="" placeholder="" value="<?php echo $req_contato ?>">

                <input type="text" name="req_turno" id="" placeholder="" value="<?php echo $req_turno ?>">

                <select name="req_local" id="scheduling--select--body">
                    <option value="<?php echo $req_local ?>" selected><?php echo $req_local ?></option>
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

                <input type="text" name="req_projeto" id="" placeholder="" value="<?php echo $req_projeto ?>">

                <input type="text" name="req_obs" id="" placeholder="" value="<?php echo $req_obs ?>">

                <button type="submit" name="update" id="update">Update</button>
            </form>
        </section> -->
        </main>
    </section>
</body>
<script type="text/javascript" src="./js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="./js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="./js/dashboard.js"></script>
</html>