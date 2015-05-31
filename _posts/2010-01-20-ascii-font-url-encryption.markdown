---
layout: post
title: ASCII Font URL Encryption
date: '2010-01-20 02:21:00'
---

<p>I was looking at some source code the other day and found some 3D ASCII text. </p>  <p>It brought back memories of using UNIX and PINE for e-mail during my college days.</p>  <p>I decided to go on a hunt for the 3D ASCII font and found this site… <a href="http://patorjk.com/software/taag/">http://patorjk.com/software/taag/</a></p>  <p>Once you find the font that you like…</p>  <p></p>  <p>then you can create a link to share with others, but I noticed something strange in the URL</p>  <blockquote>   <p><a href="http://patorjk.com/textart/msg1.php?font=Larry%203D.flf&hs=true&bg=%23FFFFFF&fc=%23000000&align=left&txt=Ryvwnu">http://patorjk.com/textart/msg1.php?font=Larry%203D.flf&hs=true&bg=%23FFFFFF&fc=%23000000&align=left&txt=Ryvwnu</a></p> </blockquote>  <p>Do you notice anything strange about the txt URL parameter? “Ryvwnu”… what is that? Well, it stands for “Elijah” </p>  <p>I put on my cracker hat and found that it was a simple character substitution algorithm. Take the letter you want “E” and add 13 characters to it “R”. </p>  <p>How is that for some advanced encryption ;)</p>