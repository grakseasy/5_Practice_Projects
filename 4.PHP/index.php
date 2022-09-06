<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

</head>
<body style="margin: auto;" class="bg-dark ">

<div class="container" style="width: 550px;">
    <table class="table table-striped border border-white">
      <thead style="width: 100%;">
        <?php 
       
         ?>
        <tr>
          <th scope="col" class=" text-white">Directory Name</th>
         
        </tr>
      </thead>
      <tbody class="table-dark">
      <?php
      function openDirs() {
    
     
            // simple security - do not allow the file browser to get out of this root directory
            $rootDirectory = 'C:\xampp\htdocs\4.PHP';
    
            // $dir = __DIR__ ;
    
            if ($_GET && $_GET['dir']) $dir = $rootDirectory . $_GET['dir'];
            else $dir = $rootDirectory;
            $dir = realpath($dir) ; // this takes out the ../ and the ./ and the .. that makes upward traversal possible despite our checks
           
            // if our root directory isn't present in the $dir
            if (strpos($dir, $rootDirectory) === false ) $dir = $rootDirectory ;
            // if our root directory isn't the very first part of the $dir
            if (strpos($dir, $rootDirectory) !== 0 ) $dir = $rootDirectory ;
            $folders= new DirectoryIterator($dir);
            while($folders->valid()){
                // set up the path here to be the direct path to the folder, minus our root directory
                $myPath = str_replace($rootDirectory, '', $folders->getPath()) . "/" . $folders->current();
                $myItem = "<a href='".$_SERVER['PHP_SELF']."?dir={$myPath}'>{$folders->current()}</a>" ;
                // if it's a file, do this
                if ($folders->isFile() && $folders == 'file.txt') 
                    $myItem = "<a href='/4.php/file.txt';>file.txt</a>";
        ?>
        <tr>
    
          <td><?php echo $myItem ?></td>
          <td></td>
        </tr>
    
        <?php
    
            $folders->next();
        }  
    }
        openDirs();
        ?>
      </tbody>
    </table>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

</body>
</html>
