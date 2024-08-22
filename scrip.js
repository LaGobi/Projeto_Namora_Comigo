        function sim(){
            
            alert("Você aceitou namorar comigo! :)")
        }

        function desvia(t){
            var btn = t;
            btn.style.position = 'absolute';
            btn.style.bottom = geraPosicao(10, 70);
            btn.style.left = geraPosicao(10, 70)
            console.log("opa, desviei...");
        }

        function geraPosicao(min, max) {
            return (Math.random() * (max - min) + min) + "%";
        }

