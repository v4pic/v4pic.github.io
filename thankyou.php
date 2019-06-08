<?php
session_start();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <title>My Info</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="basic1.css">
	<link rel="stylesheet" type="text/css" href="projects/projects.css">
    <script src="java.js"></script>
    <script src="thankyou.php"></script>

    <body>
	<header>	
	</header>
    
    <nav>
		<a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="resume.html">Resume</a>
        <a href="projects.html">JavaScript</a>
        <a href="hobbies.html">Hobbies</a>
        <a href="contact.html">Contact</a>
    </nav>

<body>
	<div class="wrapper">
		
		<main role="main">
			<h1>Thank you! <br> Someone from my team will contact you soon.</h1>
			
			<div class="form-data">
				<h2>Here is the contact information you provided:</h2>
				<p>Name: <br><strong><?php echo $_SESSION['nameField']?></strong></p>
				<p>Email: <br><strong><?php echo $_SESSION['emailField']?></strong></p>
                <p>Comments: <br><strong><?php echo $_SESSION['commentsField']?></strong></p>
			</div>
			<h3>Thank you for contacting me for your real estate needs. I am confident I will be able to resolve any issues you may have or answers all your questions. </h3> 
			
			<p>"We base our business on honesty"</p>
		</main>
	</div>
	<footer>
		<div class="contentWrapper">
			<div class="social"><a href="https://www.instagram.com/v4pic/"><img src="images/instagram.png" height="36" width="36" alt="instagram">
                </a>
            </div>
			<p>© MADE WITH LOVE AND LOTS OF HEADACHES BY VICTOR</p>
		</div>
	</footer>
</body>
    </body>
    </head>
</html>