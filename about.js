<script>
        var i = 0;
        var txt = 'Hi my name is Erwin and i was the one that programmed the app and the website for my Team.';
        var speed = 10;

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
</script>
